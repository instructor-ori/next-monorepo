import type { BetterAuthOptions } from "better-auth";

const SEND_WINDOW = 60;
const SEND_MAX = 1;
const sendRule = { window: SEND_WINDOW, max: SEND_MAX };

export const rateLimit: BetterAuthOptions["rateLimit"] = {
  enabled: true,
  window: 60,
  max: 30,
  customRules: {
    "/send-verification-email": sendRule,
    "/request-password-reset": sendRule,
    "/forgot-password": sendRule,
    "/two-factor/send-otp": sendRule,
    "/phone-number/send-otp": sendRule,
  },
};
