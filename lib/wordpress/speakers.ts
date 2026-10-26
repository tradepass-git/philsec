import { WPSpeaker } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getSpeakers(
    conferenceYear: number | string,
    perPage = 100,
    category?: string
) {
    const terms = await wpFetch<{ id: number }[]>(
        `conference_year?slug=${encodeURIComponent(String(conferenceYear))}`,
        {
            cache: "no-store",
            tags: [`wordpress-conference-year-${conferenceYear}`],
        }
    );

    const termId = terms[0]?.id;

    if (!termId) {
        console.warn(`Conference year "${conferenceYear}" was not found.`);
        return [];
    }

    const params = new URLSearchParams({
        per_page: String(Math.min(Math.max(perPage, 1), 100)),
        conference_year: String(termId),
        orderby: "menu_order",
        order: "asc",
        _embed: "true",
    });

    if (category) {
        const categories = await wpFetch<{ id: number }[]>(
            `categories?slug=${encodeURIComponent(category)}`,
            {
                cache: "no-store",
                tags: [`wordpress-category-${category}`],
            }
        );

        const categoryId = categories[0]?.id;

        if (!categoryId) {
            console.warn(`Category "${category}" was not found.`);
            return [];
        }

        params.set("categories", String(categoryId));
    }

    return wpFetch<WPSpeaker[]>(
        `philsec_speaker?${params.toString()}`,
        {
            cache: "no-store",
            tags: [`wordpress-speakers-${conferenceYear}`],
        }
    );
}