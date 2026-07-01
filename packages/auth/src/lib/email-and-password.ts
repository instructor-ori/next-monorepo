import { sendMail } from "@workspace/email";
import type { BetterAuthOptions } from "better-auth";

export const emailAndPassword: BetterAuthOptions["emailAndPassword"] = {
  enabled: true,
  minPasswordLength: 8,
  maxPasswordLength: 128,
  requireEmailVerification: true,
  resetPasswordTokenExpiresIn: 60 * 15,
  sendResetPassword: async ({ user, url }) => {
    sendMail({
      templateKey: "PasswordResetEmail",
      props: { companyName: "Acme Inc.", url },
      options: { to: user.email, subject: "Reset your password" },
    });
  },
  customSyntheticUser: ({ coreFields, additionalFields, id }) => ({
    ...coreFields,
    role: "user",
    banned: false,
    banReason: null,
    banExpires: null,
    ...additionalFields,
    id,
  }),
};
