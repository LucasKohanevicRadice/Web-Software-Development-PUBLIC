import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

const server = serve({ port: port });

const requestParams = (url) => {
  let queryParams = "";
  if (url.includes("?")) {
    queryParams = url.slice(url.indexOf("?"));
  }

  return new URLSearchParams(queryParams);
};

for await (const request of server) {
  const params = requestParams(request.url);
  const one = Number(params.get("one"));
  const two = Number(params.get("two"));

  request.respond({ body: `Sum: ${one + two}` });
}