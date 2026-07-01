import { phoneNumber as phoneNumberPlugin } from "better-auth/plugins";

export const phoneNumber = phoneNumberPlugin({
  requireVerification: true,
  expiresIn: 60 * 15,
  otpLength: 6,
  sendOTP: async ({ phoneNumber, code }) => {
    console.log("SMS:", phoneNumber, code);
  },
});
