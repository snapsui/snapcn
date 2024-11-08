import * as z from "zod";

export const registrySchema = z.record(
  z.string(),
  z.object({
    name: z.string(),
    dependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    files: z.array(z.string()),
    type: z.enum([
      "components:ui",
      "components:snapui",
      "components:component",
      "components:example",
      "components:hooks",
      "components:widgets",
      "components:blocks",
    ]),
    component: z.function().args(z.any()).returns(z.any()).optional(),
  }),
);

export type Registry = z.infer<typeof registrySchema>;
