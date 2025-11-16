// client/src/schemas/env.schema.js

import z from 'zod';

export const EnvSchema = z.object({
  // Node environment
  VITE_NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  // backend URL
  VITE_API_URL: z.url().default('http://localhost:8899'),
});
