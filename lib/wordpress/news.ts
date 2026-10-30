import { WPNews } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getNews(perPage = 100) {
    return wpFetch<WPNews[]>(
        `philsec_news?per_page=${Math.min(Math.max(perPage, 1), 100)}&_embed&acf_format=standard`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: ["wordpress-news"],
        }
    );
}

export async function getNewsBySlug(slug: string) {
    const news = await wpFetch<WPNews[]>(
        `philsec_news?slug=${encodeURIComponent(slug)}&_embed&acf_format=standard`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: [`wordpress-news-${slug}`],
        }
    );

    return news[0] ?? null;
}
