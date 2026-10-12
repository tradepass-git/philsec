import { WPTestimonials } from "@/types/wordpress";
import { wpFetch } from "./client";

export async function getTestimonials(perPage = 100) {
    return wpFetch<WPTestimonials[]>(
        `malaysia_testimonial?per_page=${Math.min(Math.max(perPage, 1), 100)}&_embed&acf_format=standard`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: ["wordpress-testimonials"],
        }
    );
}

export async function getTestimonialBySlug(slug: string) {
    const testimonials = await wpFetch<WPTestimonials[]>(
        `malaysia_testimonial?slug=${encodeURIComponent(slug)}&_embed&acf_format=standard`,
        {
            //revalidate: 300,
            cache: "no-store",
            tags: [`wordpress-testimonials-${slug}`],
        }
    );

    return testimonials[0] ?? null;
}
