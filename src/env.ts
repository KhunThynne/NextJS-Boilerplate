import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: { PAYLOAD_SECRET: z.string(), POSTGRES_URL: z.string() },
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum([
      "development",
      "production",
      "test",
      "vercel",
    ]),
  },
  runtimeEnv: {
    // Server ,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    POSTGRES_URL: process.env.POSTGRES_URL,
    // Client
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
});
