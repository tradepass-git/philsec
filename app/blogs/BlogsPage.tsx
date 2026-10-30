import Image from "next/image";
import type { Metadata } from "next";

import { getPosts } from "@/lib/wordpress/posts";
import customFonts from "@/public/css/CustomFonts.module.css";
import customClass from "@/public/css/CustomClass.module.css";

const perPage = 5;
const recentPostsCount = 10;

interface BlogsPageProps {
    currentPage: number;
}

const BlogsPage = async ({
    currentPage,
}: BlogsPageProps) => {

    const {
        data: allblogs,
        totalPages,
    } = await getPosts(perPage, currentPage);

    const {
        data: sidebarblogs,
    } = await getPosts(recentPostsCount, 1);

    //console.log(allblogs);

    return (
        <>
            <div className="page-content bg-white">
                <section className="bg-style4 relative overflow-hidden pt-[120px]">
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                        <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
                            <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-black">Blogs</h1>
                        </div>
                    </div>
                </section>
                <section className="py-[80px] pt-0 relative">
                    <div className="relative z-10 max-w-[85rem] mx-auto w-full px-[20px]">

                        <div className="grid grid-cols-12 gap-y-[60px] min-[1200px]:gap-[60px]">

                            {/* Blogs */}
                            <div className="lg:col-span-8 col-span-12 flex flex-col gap-[60px]">

                                {allblogs.length > 0 ? (
                                    allblogs.map(
                                        (blog: any, index: number) => (
                                            <a
                                                key={blog.id ?? index}
                                                href={`/blogs/${blog.slug}/`}
                                                className={`${customClass["mil-blog-card"]} grid grid-cols-1 sm:grid-cols-2 gap-[30px] group`}
                                            >
                                                <div className="relative overflow-hidden aspect-square">

                                                    <img
                                                        src={`/api/image/${blog.featured_media}/`}
                                                        alt={blog.title?.rendered || "Blog image"}
                                                        className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-400 group-hover:scale-100"
                                                    />

                                                    <div className="absolute bottom-[45px] -right-[15px] transform rotate-[-90deg] bg-[var(--secondary-color)] text-black tracking-[1px] w-[120px] h-[30px] flex justify-center items-center">
                                                        {new Date(blog.date).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "numeric",
                                                        }).replace(/\//g, ".")}
                                                    </div>

                                                </div>

                                                <div className="flex flex-col justify-center gap-[20px]">

                                                    <h4
                                                        className="text-[clamp(1.4rem,3vw,1.5rem)] text-black font-bold leading-[1.2] uppercase"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                blog.title?.rendered ||
                                                                "",
                                                        }}
                                                    />

                                                    <div className="text-black"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                blog.excerpt?.rendered ||
                                                                "",
                                                        }}
                                                    />

                                                    <div className="text-black font-semibold uppercase flex items-center gap-[10px]">
                                                        Read

                                                        <div className="bg-[var(--secondary-color)] w-[40px] h-[40px] flex items-center justify-center group-hover:ml-[10px]">
                                                            <Image
                                                                src="/images/1.svg"
                                                                alt="arrow"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        )
                                    )
                                ) : (
                                    <p>No blogs found.</p>
                                )}

                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4 col-span-12">

                                <div
                                    className={`${customClass["mil-sidebar-frame"]} border-[5px] border-[#e5e5e5] p-[30px] flex flex-col gap-[30px]`}
                                >

                                    <h2 className="text-[clamp(1.4rem,3vw,1.5rem)] text-black font-bold leading-[1.2] uppercase">
                                        Recent Posts
                                    </h2>

                                    <ul className={`${customClass["mil-list"]} space-y-[20px]`}>

                                        {sidebarblogs.map(
                                            (blog: any, index: number) => (
                                                <li
                                                    key={blog.id ?? index}
                                                    className="relative flex flex-col gap-[8px]  text-black pl-[20px]"
                                                >
                                                    <a
                                                        href={`/blogs/${blog.slug}/`}
                                                        className="text-black font-medium"
                                                    >
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html:
                                                                    blog.title?.rendered ||
                                                                    "",
                                                            }}
                                                        />
                                                    </a>

                                                    <span className="opacity-80 text-[12px]">
                                                        {new Date(blog.date).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "numeric",
                                                        }).replace(/\//g, ".")}
                                                    </span>
                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>

                            </div>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="pt-[60px]">
                                <ul className="flex items-center gap-3">

                                    {currentPage > 1 && (
                                        <li>
                                            <a
                                                href={
                                                    currentPage === 2
                                                        ? "/blogs/"
                                                        : `/blogs/${currentPage - 1}/`
                                                }
                                                className="py-[5px] px-[10px] text-black font-semibold"
                                            >
                                                Previous
                                            </a>
                                        </li>
                                    )}

                                    {Array.from(
                                        { length: totalPages },
                                        (_, index) => index + 1
                                    ).map((pageNumber) => (
                                        <li
                                            key={pageNumber}
                                            className={`py-[5px] px-[10px] ${currentPage === pageNumber
                                                ? "bg-[var(--secondary-color)]"
                                                : ""
                                                }`}
                                        >
                                            <a
                                                href={
                                                    pageNumber === 1
                                                        ? "/blogs/"
                                                        : `/blogs/${pageNumber}/`
                                                }
                                                className="text-black font-semibold"
                                            >
                                                {pageNumber}
                                            </a>
                                        </li>
                                    ))}

                                    {currentPage < totalPages && (
                                        <li>
                                            <a
                                                href={`/blogs/${currentPage + 1}/`}
                                                className="py-[5px] px-[10px] text-black font-semibold"
                                            >
                                                Next
                                            </a>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        )}

                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogsPage;