import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import * as userService from "../../services/userService.js";

const showRegistrationForm = ({ render }) => {
  render("register.eta");
};

const postRegistrationForm = async ({ request, response }) => {
  const body = request.body();
  const params = await body.value;

  const email = params.get("email");
  const password = params.get("password");
  const verification = params.get("verification");

  if (password !== verification) {
    response.body = "The entered passwords did not match";
    return;
  }

  const existingUsers = await userService.findUsersWithEmail(email);
  if (existingUsers.rows.length > 0) {
    response.body = "The email is already reserved.";
    return;
  }

  const hash = await bcrypt.hash(password);
  await userService.addUser(email, hash);
  response.redirect("/auth/login");
}; 

const postLoginForm = async ({ request, response, state }) => {
  const body = request.body();
  const params = await body.value;

  const email = params.get("email");
  const password = params.get("password");

  const existingUsers = await userService.findUsersWithEmail(email);
  if (existingUsers.rows.length === 0) {
    response.status = 401;
    return;
  }

  // take the first row from the results
  const userObj = existingUsers.rows[0];

  const hash = userObj.password;

  const passwordCorrect = await bcrypt.compare(password, hash);
  if (!passwordCorrect) {
    response.status = 401;
    return;
  }

  await state.session.set("authenticated", true);
  await state.session.set("user", {
    id: userObj.id,
    email: userObj.email,
  });
  response.redirect("/accounts");
};

const showLoginForm = ({ render }) => {
  render("login.eta");
};

const showAccounts = async ({render, response, state}) => {

  const authenticated = await state.session.get("authenticated")

  if (!authenticated){
    response.status = 401
    return
  }

  const user = await state.session.get("user")

  const userId = user.id

  const accounts = await userService.findAccounts(userId)

  render("accounts.eta", {accounts: accounts.rows})
}

const showSingleAccount = async ({render, response, state, params}) => {

  const userId  = (await state.session.get("user")).id
  const accountId = params.id

  const account = await userService.findSingleAccount(accountId, userId)

  console.log(account.rows)

  if (account.rows.length > 0) {

    const obj = account.rows[0]
    render("account.eta", obj)
 
  }

  else {
    response.status = 401
  }

}

const postNewAccount = async ({request, response, state}) =>  {

  if (!await state.session.get("authenticated")) {
    response.status = 401
    return
  }

  const body = request.body()
  const params = await body.value

  const name = params.get("name")
  const userId = (await state.session.get("user")).id

  console.log(name)
  console.log(userId)

  await userService.addAccount(name, userId)

  response.redirect("/accounts")
} 

const withdrawFromAccount = async ({request, response, state, params}) => {


  if (!await state.session.get("authenticated")) {
    response.status = 401
    return
  }

  console.log(await state.session.get("authenticated"))

  const userId = (await state.session.get("user")).id
  const accountId = params.id

  const body = request.body()
  const submitValue = await body.value

  const amount = submitValue.get("amount")

  await userService.withdrawFromAccount(amount, accountId, userId)

  response.redirect("/accounts")

}

const depositToAccount = async ({request, response, state, params}) => {


  if(!await state.session.get("authenticated")) {
    response.status = 401
    return
  }

  console.log(await state.session.get("authenticated"))

  const userId = (await state.session.get("user")).id 
  const accountId = params.id

  const body = request.body()
  const submitValue = await body.value
 
  const amount = submitValue.get("amount")  

  await userService.depositToAccount(amount, accountId, userId)
  response.redirect("/accounts")

}

export {
  postLoginForm,
  postRegistrationForm,
  showLoginForm,
  showRegistrationForm,
  showAccounts,
  postNewAccount,
  showSingleAccount,
  withdrawFromAccount,
  depositToAccount
};
