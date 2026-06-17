import type z from "zod";

export function parseEnv<T extends z.ZodType>(
  schema: T,
  source: Record<string, unknown>,
  label: string,
) {
  const result = schema.safeParse(source);
  if (!result.success) {
    console.error(`Invalid ${label} environment variables:`);
    for (const issue of result.error.issues) {
      const path = issue.path.join(".") || "(root)";
      console.error(` ${path}: ${issue.message}`);
    }
    throw new Error(`Invalid ${label} environment variables`);
  }

  return result.data;
}
