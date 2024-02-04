import {text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const urls = sqliteTable('urls', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	previousURL: text('previousURL').notNull(),
	shortenedURL: text('shortenedURL').notNull().unique(),
    createdAt: integer('createdAt', { mode: 'timestamp' })
});
