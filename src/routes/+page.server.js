import db from "$lib/server/db";
import { urls } from "$lib/server/schema";
import { fail } from "@sveltejs/kit";

export const actions = {
    add: async ({ request }) => {
        /**
         * Get the form data from the request
         */
        const formData = await request.formData();

        /**
         * Get the title from the form data
         */
        const previousURL = formData.get("previousURL");
        const shortenedURL = formData.get("shortenedURL");

        if (!previousURL || !shortenedURL) {
            return fail(400, { message: "Title is required" });
        }

        /**
         * Finally, add the page to the database
         */
        try {

            await db.insert(urls).values({
                previousURL: previousURL,
                shortenedURL: shortenedURL,
                createdAt: new Date(Date.now())
            });
        } catch (err) {
            return { message: "This shortened URL is already taken!"}
        }
        
        return { message: "Todo added successfully" };
            
    },
};

export const load = async () => {
    return {
        urls: await db.select().from(urls),
    };
};