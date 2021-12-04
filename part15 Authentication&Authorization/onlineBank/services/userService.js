import { executeQuery } from "../database/database.js";

const findUsersWithEmail = async (email) => {
  return await executeQuery(
    "SELECT * FROM users WHERE email = $1",
    email,
  );
};

const addUser = async (email, passwordHash) => {
  await executeQuery(
    "INSERT INTO users (email, password) VALUES ($1, $2);",
    email,
    passwordHash,
  );
};

const findAccounts = async (user_id) => {

  return await executeQuery("SELECT * FROM accounts WHERE user_id = $1 ",
  user_id)

}

const addAccount = async (accountName, userId) => {

  await executeQuery("INSERT INTO accounts (name, user_id) VALUES($1, $2)",
  accountName,
  userId )
}

const findSingleAccount = async (accountId, userId) => {

  return await executeQuery("SELECT * FROM accounts WHERE id = $1 AND user_id = $2",
  accountId,
  userId)

}

const depositToAccount = async (sum, accountId, userId) => {

  return await executeQuery("UPDATE accounts SET balance = balance + $1 WHERE id = $2 AND user_id = $3 ",
  sum,
  accountId,
  userId)
}

const withdrawFromAccount = async (sum, accountId, userId) => {

  return await executeQuery("UPDATE accounts SET balance = balance - $1 WHERE id = $2 AND user_id = $3",
  sum,
  accountId,
  userId)
}

export { addUser, findUsersWithEmail, findAccounts, addAccount, findSingleAccount, depositToAccount, withdrawFromAccount }; 
