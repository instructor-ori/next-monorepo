import { parseEnv } from "@workspace/env/parse";
import * as z from "zod";

const ServerEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  WEB_URL: z.url().default("http://localhost:3000"),

  DATABASE_NAME: z.string().default("local"),
  DATABASE_HOST: z.string().default("localhost"),
  DATABASE_PASSWORD: z.string().default("postgres"),
  DATABASE_USER: z.string().default("postgres"),
  DATABASE_PORT: z.coerce.number().default(5432),

  MAILPIT_HOST: z.string().default("localhost"),
  MAILPIT_PORT: z.coerce.number().default(1025),

  BETTER_AUTH_URL: z.url().default("http://localhost:3000"),
  BETTER_AUTH_SECRET: z.string(),
});

export type ServerEnv = z.infer<typeof ServerEnvSchema>;

export const env = parseEnv(ServerEnvSchema, process.env, "server");
