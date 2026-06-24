import * as schema from "@workspace/database/core.schema";
import { env } from "@workspace/env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  database: env.DATABASE_NAME,
  host: env.DATABASE_HOST,
  password: env.DATABASE_PASSWORD,
  user: env.DATABASE_USER,
  port: env.DATABASE_PORT,
});

export const db = drizzle({ client: pool, schema });
