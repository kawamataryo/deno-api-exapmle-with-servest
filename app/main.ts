import { createApp } from "https://servestjs.org/@v1.0.0/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import { routes } from "./router.ts";

const DEFAULT_PORT = 8080;
const envPort = Deno.env.get("PORT");
const port = envPort ? Number(envPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

const app = createApp();

app.route("/", routes());
app.listen({ port });
