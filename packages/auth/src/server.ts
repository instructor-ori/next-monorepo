import { advanced } from "@workspace/auth/lib/advanced";
import { database } from "@workspace/auth/lib/database";
import { emailAndPassword } from "@workspace/auth/lib/email-and-password";
import { emailVerification } from "@workspace/auth/lib/email-verification";
import { session } from "@workspace/auth/lib/session";
import { user } from "@workspace/auth/lib/user";
import { admin } from "@workspace/auth/plugins/admin";
import { openAPI } from "@workspace/auth/plugins/open-api";
import { organization } from "@workspace/auth/plugins/organization";
import { passkey } from "@workspace/auth/plugins/passkey";
import { phoneNumber } from "@workspace/auth/plugins/phone-number";
import { twoFactor } from "@workspace/auth/plugins/two-factor";
import { env } from "@workspace/env/server";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  appName: "Acme Inc.",
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: [env.WEB_URL],
  database,
  emailAndPassword,
  emailVerification,
  advanced,
  user,
  session,
  plugins: [admin, openAPI, phoneNumber, passkey, organization, twoFactor],
});
