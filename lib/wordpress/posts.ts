import { WPPost } from "@/types/wordpress";
import {
    wpFetch,
    wpFetchWithPagination,
} from "./client";

export async function getPosts(
    perPage = 10,
    page = 1
) {
    const safePerPage = Math.min(
        Math.max(perPage, 1),
        100
    );

    const safePage = Math.max(page, 1);

    return wpFetchWithPagination<WPPost[]>(
        `posts?conference_event=39&per_page=${safePerPage}&page=${safePage}&_embed`,
        {
            cache: "no-store",
        }
    );
}


export async function getPostBySlug(
    slug: string
) {
    const posts = await wpFetch<WPPost[]>(
        `posts?slug=${encodeURIComponent(slug)}&_embed`,
        {
            cache: "no-store",
        }
    );

    return posts[0] ?? null;
}