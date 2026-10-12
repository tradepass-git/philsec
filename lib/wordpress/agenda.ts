import { WPPost } from "@/types/wordpress";
import { wpFetch } from "./client";

export interface WPPage extends WPPost {
    acf?: Record<string, unknown>;
}

export async function getAgendaBySlug(slug: string) {
    const pages = await wpFetch<WPPage[]>(
        `pages?slug=${encodeURIComponent(slug)}&_embed`,
        {
            cache: "no-store",
            tags: [`wordpress-page-${slug}`],
        }
    );

    return pages[0] ?? null;
}

export async function getAgendaByID(id: number) {
    const page = await wpFetch<WPPage>(
        `pages/${encodeURIComponent(id)}?_embed`,
        {
            cache: "no-store",
            tags: [`wordpress-page-${id}`],
        }
    );

    return page ?? null;
}

export interface SpeakerACF {
    [key: string]: unknown;
}

export interface WPSpeaker extends WPPost {
    acf?: SpeakerACF;
}

export async function getSpeakerById(
    id: number | string
) {
    return wpFetch<WPSpeaker>(
        `malaysia_speaker/${encodeURIComponent(id)}?_embed`,
        {
            cache: "no-store",
            tags: [`wordpress-speaker-${id}`],
        }
    );
}