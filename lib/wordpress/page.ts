import { WPPage } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getPageBySlug(slug: string) {
    const pages = await wpFetch<WPPage[]>(
        `pages?slug=${encodeURIComponent(slug)}&_embed`,
        {
            cache: "no-store",
            tags: [`wordpress-page-${slug}`],
        }
    );

    return pages[0] ?? null;
}
