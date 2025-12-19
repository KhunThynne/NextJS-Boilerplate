import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().min(1),
    AUTH_USER: z.string().min(1),
    AUTH_PASSWORD: z.string().min(1),
  },
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
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_USER: process.env.AUTH_USER,
    AUTH_PASSWORD: process.env.AUTH_PASSWORD,
    // Client
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
});
