import type { BetterAuthOptions } from "better-auth";

export const advanced: BetterAuthOptions["advanced"] = {
  cookiePrefix: "acme",
  database: {
    generateId: "uuid",
  },
};
