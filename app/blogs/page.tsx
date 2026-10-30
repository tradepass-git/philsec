import type { Metadata } from "next";
import BlogsPage from "./BlogsPage";

export const metadata: Metadata = {
    title: "DCCI Malaysia Blogs: Data Center & Cloud Industry Insights",

    description:
        "Explore the latest DCCI Malaysia blogs covering data centers, cloud computing, AI, digital infrastructure, cybersecurity, edge computing, and industry trends.",

    alternates: {
        canonical: "https://malaysia.dccisummit.com/blogs/",
    },

    openGraph: {
        title: "DCCI Malaysia Blogs: Data Center & Cloud Industry Insights",

        description:
            "Explore the latest DCCI Malaysia blogs covering data centers, cloud computing, AI, digital infrastructure, cybersecurity, edge computing, and industry trends.",

        url: "https://malaysia.dccisummit.com/blogs/",

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

        title: "DCCI Malaysia Blogs: Data Center & Cloud Industry Insights",

        description:
            "Explore the latest DCCI Malaysia blogs covering data centers, cloud computing, AI, digital infrastructure, cybersecurity, edge computing, and industry trends.",

        images: ["/images/og-image.png"],

        creator: "@tradepass",
        site: "@tradepass",
    },

    robots: {
        index: true,
        follow: true,
    },
};

const Page = async () => {
    return <BlogsPage currentPage={1} />;
};

export default Page;