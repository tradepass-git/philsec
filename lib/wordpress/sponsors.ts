import { WPSponsor } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getSponsors(
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

    const limit = Math.min(Math.max(perPage, 1), 100);

    return wpFetch<WPSponsor[]>(
        `philsec_sponsor?per_page=${limit}&conference_year=${termId}&orderby=menu_order&order=asc&_embed`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: [`wordpress-sponsors-${conferenceYear}`],
        }
    );
}