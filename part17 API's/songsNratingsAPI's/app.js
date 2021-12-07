import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";
import { router } from "./routes/routes.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"

const app = new Application();
app.use(errorMiddleware)

app.use(router.routes());

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app;
