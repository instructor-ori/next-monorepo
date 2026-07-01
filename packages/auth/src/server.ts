import { passkey } from "@better-auth/passkey";
import { database } from "@workspace/auth/lib/database";
import { emailAndPassword } from "@workspace/auth/lib/email-and-password";
import { adminPlugin } from "@workspace/auth/plugins/admin";
import { openAPIPlugin } from "@workspace/auth/plugins/open-api";
import { env } from "@workspace/env/server";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  appName: "Acme Inc.",
  baseURL: env.BETTER_AUTH_SECRET,
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: [env.WEB_URL],
  database,
  emailAndPassword,
  plugins: [adminPlugin, openAPIPlugin],
});
