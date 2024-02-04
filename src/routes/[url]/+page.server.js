import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import db from "$lib/server/db";
import { urls } from "$lib/server/schema";

export async function load({ params }) {

	const result = await db.query.urls.findMany({
    where: eq(urls.shortenedURL, params.url) 
  })

	if (!result) {
    throw error(404);
  } else {
    // console.log(result[0].previousURL)
    throw redirect(307, result[0].previousURL)
  }
}