import type { BetterAuthOptions } from "better-auth";

export const user: BetterAuthOptions["user"] = {
  deleteUser: {
    enabled: true,
  },
};
