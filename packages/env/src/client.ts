import { parseEnv } from "@workspace/env/parse";
import * as z from "zod";

const ClientEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().nonempty(),
  NEXT_PUBLIC_WEB_URL: z.string().default("http://localhost:3000"),
});

export type ClientEnv = z.infer<typeof ClientEnvSchema>;

export const env = parseEnv(ClientEnvSchema, process.env, "client");
