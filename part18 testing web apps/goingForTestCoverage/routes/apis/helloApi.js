import * as helloService from "../../services/helloService.js";

const getHello = ({ response }) => {
  console.log({message: helloService.getHello()})
  response.body = { message: helloService.getHello() };
};

const setHello = async ({ request, response }) => {
  const body = request.body({ type: "json" });
  const document = await body.value;

  console.log(document.message)
  helloService.setHello(document.message);
  response.status = 200;
  console.log(response.status)
};

export { getHello, setHello };
 