// client/src/configs/env.config.js

import { EnvSchema } from '@/schemas/env.schema';
import z from 'zod';

const { success, data, error } = EnvSchema.safeParse(import.meta.env);

if (!success) {
  console.error('Invalid environment variables:', z.prettifyError(error));
  throw new Error('Invalid environment variables');
}

export const env = data;
