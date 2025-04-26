import dotenv from 'dotenv';
import { EnvVarSchema } from './types';

dotenv.config();

export function defineEnvSchema<T extends Record<string, EnvVarSchema>>(schema: T): {
  [K in keyof T]: any
} {
  const env: Record<string, any> = {};

  for (const key in schema) {
    const value = process.env[key];
    const config = schema[key];

    if (!value) {
      if (config.required && config.default === undefined) {
        throw new Error(`Environment variable "${key}" is required but not defined`);
      }
      env[key] = config.default;
      continue;
    }

    switch (config.type) {
      case 'string':
        env[key] = value;
        break;

      case 'number':
        const num = Number(value);
        if (isNaN(num)) {
          throw new Error(`Environment variable "${key}" must be a number`);
        }
        env[key] = num;
        break;

      case 'enum':
        if (!config.values.includes(value)) {
          throw new Error(`Environment variable "${key}" must be one of: ${config.values.join(', ')}`);
        }
        env[key] = value;
        break;

      default:
        throw new Error(`Unknown type for environment variable "${key}"`);
    }
  }

  return env as { [K in keyof T]: any };
}
