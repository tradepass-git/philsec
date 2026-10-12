import { WPSpeaker } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getSpeakers(
    conferenceYear: number | string,
    perPage = 100
) {
    // Get taxonomy term ID from the year slug
    const terms = await wpFetch<{ id: number }[]>(
        `conference_year?slug=${encodeURIComponent(String(conferenceYear))}`,
        {
            //revalidate: 86400,
            cache: "no-store",
            tags: [`wordpress-conference-year-${conferenceYear}`],
        }
    );

    const termId = terms[0]?.id;

    if (!termId) {
        console.warn(
            `Conference year "${conferenceYear}" was not found.`
        );

        return [];
    }

    return wpFetch<WPSpeaker[]>(
        `malaysia_speaker?per_page=${Math.min(
            Math.max(perPage, 1),
            100
        )}&conference_year=${termId}&orderby=menu_order&order=asc&_embed`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: [`wordpress-speakers-${conferenceYear}`],
        }
    );
}