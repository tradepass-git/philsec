import { WPInterviews } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getInterviews(perPage = 100) {
    return wpFetch<WPInterviews[]>(
        `malaysia_interviews?per_page=${Math.min(Math.max(perPage, 1), 100)}&_embed&acf_format=standard`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: ["wordpress-interviews"],
        }
    );
}

export async function getInterviewsById(id: number) {
    const interview = await wpFetch<WPInterviews>(
        `malaysia_interviews/${encodeURIComponent(id)}`,
        {
            cache: "no-store",
            tags: [`wordpress-interviews-${id}`],
        }
    );

    return interview ?? null;
}


export async function getInterviewsByCategoryId(id: number) {
    const interview = await wpFetch<WPInterviews>(
        `malaysia_interviews?interview_category=${encodeURIComponent(id)}`,
        {
            cache: "no-store",
            tags: [`wordpress-interviews-${id}`],
        }
    );

    return interview ?? null;
}