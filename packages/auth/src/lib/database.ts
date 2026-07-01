import { db } from "@workspace/database/client";
import type { BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const database: BetterAuthOptions["database"] = drizzleAdapter(db, {
  provider: "pg",
  schema: {},
});
