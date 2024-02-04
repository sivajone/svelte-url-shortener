import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/server/schema.js',
  out: './drizzle',
  driver: 'better-sqlite', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: './local.db',
  }
  
} satisfies Config;