import type { BetterAuthOptions } from "better-auth";

export const session: BetterAuthOptions["session"] = {
  cookieCache: {
    enabled: true,
    maxAge: 60 * 3,
  },
};
