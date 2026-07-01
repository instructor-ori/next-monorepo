import { env } from "@workspace/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/core.schema.ts", "./src/auth.schema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    database: env.DATABASE_NAME,
    host: env.DATABASE_HOST,
    password: env.DATABASE_PASSWORD,
    user: env.DATABASE_USER,
    port: env.DATABASE_PORT,
    ssl: false,
  },
});
