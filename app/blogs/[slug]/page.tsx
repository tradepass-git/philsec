import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BlogsPage from "../BlogsPage";
import { getPosts, getPostBySlug } from "@/lib/wordpress/posts";

import customFonts from "@/public/css/CustomFonts.module.css";
import customCalss from "@/public/css/CustomClass.module.css";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Dynamic SEO Metadata
 */
export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;

    // Handle pagination URLs: /blogs/2/, /blogs/3/, etc.
    if (/^\d+$/.test(slug)) {
        const currentPage = Number(slug);

        return {
            title: `DCCI Malaysia Blogs: Data Center & Cloud Industry Insights -Page${currentPage}`,
            description:
                "Explore the latest DCCI Malaysia blogs covering data centers, cloud computing, AI, digital infrastructure, cybersecurity, edge computing, and industry trends.",

            alternates: {
                canonical:
                    `https://malaysia.dccisummit.com/blogs/${currentPage}/`,
            },

            robots: {
                index: true,
                follow: true,
            },

            openGraph: {
                title: `DCCI Malaysia Blogs: Data Center & Cloud Industry Insights -Page${currentPage}`,

                description:
                    "Explore the latest DCCI Malaysia blogs covering data centers, cloud computing, AI, digital infrastructure, cybersecurity, edge computing, and industry trends.",

                url: `https://malaysia.dccisummit.com/blogs/${currentPage}/`,

                siteName: "DCCI Malaysia",

                images: [
                    {
                        url: "/images/og-image.png",
                        width: 1200,
                        height: 630,
                        alt: "DCCI Malaysia Blogs",
                    },
                ],

                locale: "en_MY",
                type: "website",
            },

            twitter: {
                card: "summary_large_image",

                title: `DCCI Malaysia Blogs: Data Center & Cloud Industry Insights -Page${currentPage}`,

                description:
                    "Explore the latest DCCI Malaysia blogs covering data centers, cloud computing, AI, digital infrastructure, cybersecurity, edge computing, and industry trends.",

                images: ["/images/og-image.png"],

                creator: "@tradepass",
                site: "@tradepass",
            },
        };
    }

    // Individual blog metadata
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Blog Not Found",
        };
    }

    const title = String(
        post.acf?.single_post_title ||
        post.title?.rendered ||
        ""
    );

    const description = String(
        post.acf?.single_post_description ||
        post.excerpt?.rendered
            ?.replace(/<[^>]*>/g, "")
            .trim() ||
        ""
    );

    const image = post.featured_media
        ? `/api/image/${post.featured_media}`
        : undefined;

    return {
        title: `${title}`,
        description,

        alternates: {
            canonical:
                `https://malaysia.dccisummit.com/blogs/${slug}/`,
        },

        openGraph: {
            title,
            description,
            type: "article",
            url: `https://malaysia.dccisummit.com/blogs/${slug}/`,

            images: image
                ? [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ]
                : undefined,
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}

const recentPostsCount = 10;

export default async function Page({
    params,
}: PageProps) {
    const { slug } = await params;

    /*
     * /blogs/2
     * /blogs/3
     * /blogs/4
     *
     * Treat numeric slug as pagination.
     */
    if (/^\d+$/.test(slug)) {
        const currentPage = Number(slug);

        if (currentPage < 1) {
            notFound();
        }

        return (
            <BlogsPage
                currentPage={currentPage}
            />
        );
    }

    /*
     * Otherwise it's an individual blog.
     *
     * /blogs/my-blog-post
     */
    const post = await getPostBySlug(slug);

    const {
        data: sidebarblogs,
    } = await getPosts(recentPostsCount, 1);

    if (!post) {
        notFound();
    }

    return (

        <>
            <div className="page-content bg-white">
                <section className="bg-style4 relative overflow-hidden pt-[120px]">
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                        <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
                            <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-black" dangerouslySetInnerHTML={{
                                __html: post.title.rendered
                            }}></h1>
                            <div className="flex text-black gap-[10px]"><a href="/">Home</a> | <a href="/blogs/">Blogs</a></div>
                        </div>
                    </div>
                </section>
                <section className="py-[80px] pt-0 relative">
                    <div className="relative z-10 max-w-[85rem] mx-auto w-full px-[20px]">
                        <div className='grid grid-cols-12 gap-y-[60px] min-[1200px]:gap-[60px]'>
                            <div className={`${customCalss["post-content"]} lg:col-span-8 col-span-12 flex flex-col gap-[40px] text-black`}>
                                <div className="relative w-full">
                                    <img
                                        src={`/api/image/${post.featured_media}/`}
                                        alt={post.title.rendered}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.rendered
                                            .replace(/<figure[^>]*>\s*<img\b[^>]*>\s*<\/figure>/gi, "")
                                            .replace(/<img\b[^>]*>/gi, ""),
                                    }}
                                />
                            </div>

                            <div className='lg:col-span-4 col-span-12'>
                                <div className={`${customCalss["mil-sidebar-frame"]} border-[5px] border-[#e5e5e5] p-[30px] flex flex-col gap-[30px]`}>

                                    <h2 className="text-[clamp(1.4rem,3vw,1.5rem)] text-black font-bold leading-[1.2] uppercase">
                                        Recent Posts
                                    </h2>
                                    <ul className={`${customCalss['mil-list']} space-y-[20px]`}>
                                        {sidebarblogs.map((sidebarblog: any, index: number) => (
                                            <li key={index} className='relative flex flex-col gap-[8px]  text-black pl-[20px]'><a href={`/blogs/${sidebarblog.slug}/`} className='text-black font-medium' dangerouslySetInnerHTML={{
                                                __html: sidebarblog.title.rendered
                                            }}></a><span className='opacity-80 text-[12px] text-black'>{new Date(sidebarblog.date).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                            }).replace(/\//g, ".")}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}