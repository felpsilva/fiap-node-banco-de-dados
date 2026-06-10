// src/env/index.ts
import "dotenv/config";
import { z } from "zod";
var envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3e3),
  DATABASE_USER: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_PORT: z.coerce.number()
});
var _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error("Vari\xE1veis de ambiente inv\xE1lidas", _env.error.format());
  throw new Error("Vari\xE1veis de ambiente inv\xE1lidas");
}
var env = _env.data;

export {
  env
};
