import { twoFactor as twoFactorPlugin } from "better-auth/plugins";

export const twoFactor = twoFactorPlugin({
  issuer: "Acme Inc.",
  skipVerificationOnEnable: true,
  otpOptions: {
    async sendOTP({ user, otp }) {
      console.log(user, otp);
    },
  },
});
