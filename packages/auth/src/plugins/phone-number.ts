import { phoneNumber } from "better-auth/plugins";

export const phoneNumberPlugin = phoneNumber({
  requireVerification: true,
  expiresIn: 60 * 15,
  otpLength: 6,
  sendOTP: async ({ phoneNumber, code }) => {
    console.log("SMS:", phoneNumber, code);
  },
});
