import { sendMail } from "@workspace/email";
import type { BetterAuthOptions } from "better-auth";

export const emailVerification: BetterAuthOptions["emailVerification"] = {
  sendOnSignUp: true,
  sendOnSignIn: true,
  autoSignInAfterVerification: true,
  expiresIn: 60 * 15,
  sendVerificationEmail: async ({ user, url }) => {
    sendMail({
      templateKey: "VerifyEmail",
      props: { companyName: "Acme Inc.", url },
      options: { to: user.email, subject: "Verify your email" },
    });
  },
};
