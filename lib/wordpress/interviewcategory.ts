import { WPInterviewCategoryDetails } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getInterviewCategory() {
    return wpFetch<WPInterviewCategoryDetails[]>(
        `interview_category?_embed&acf_format=standard`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: ["wordpress-interviews-category"],
        }
    );
}

export async function getInterviewCategoryById(id: number) {
    const interview = await wpFetch<WPInterviewCategoryDetails>(
        `interview_category/${encodeURIComponent(id)}`,
        {
            cache: "no-store",
            tags: [`wordpress-interviews-category-${id}`],
        }
    );

    return interview ?? null;
}


export async function getInterviewCategoryBySlug(slug: string) {
    const interview = await wpFetch<WPInterviewCategoryDetails[]>(
        `interview_category/?slug=${encodeURIComponent(slug)}`,
        {
            cache: "no-store",
            tags: [`wordpress-interviews-category-${slug}`],
        }
    );

    return interview ?? null;
}
