import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
  },
  runtimeEnv: {
    // Server ,

    // Client
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
});
