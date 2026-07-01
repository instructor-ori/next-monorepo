import {
  AccountTable,
  InvitationTable,
  MemberTable,
  OrganizationTable,
  PasskeyTable,
  SessionTable,
  TwoFactorTable,
  UserTable,
  VerificationTable,
} from "@workspace/database/auth.schema";
import { db } from "@workspace/database/client";
import type { BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const database: BetterAuthOptions["database"] = drizzleAdapter(db, {
  provider: "pg",
  schema: {
    user: UserTable,
    session: SessionTable,
    account: AccountTable,
    verification: VerificationTable,
    passkey: PasskeyTable,
    organization: OrganizationTable,
    member: MemberTable,
    invitation: InvitationTable,
    twoFactor: TwoFactorTable,
  },
});
