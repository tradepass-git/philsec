import type { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
    title: "PhilSec Awards 2027 - Recognizing Cybersecurity Leaders",

    description:
        "PhilSec Awards 2027 celebrates excellence in cybersecurity, honouring industry pioneers driving digital defence and resilience across the Philippines.",

    alternates: {
        canonical: "https://www.philsecsummit.com/awards/",
    },

    openGraph: {
        title: "PhilSec Awards 2027 - Recognizing Cybersecurity Leaders",

        description:
            "PhilSec Awards 2027 celebrates excellence in cybersecurity, honouring industry pioneers driving digital defence and resilience across the Philippines.",

        url: "https://www.philsecsummit.com/awards/",

        siteName: "PhilSec",

        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "PhilSec",
            },
        ],

        locale: "en_MY",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "PhilSec Awards 2027 - Recognizing Cybersecurity Leaders",

        description:
            "PhilSec Awards 2027 celebrates excellence in cybersecurity, honouring industry pioneers driving digital defence and resilience across the Philippines.",

        images: ["/images/og-image.png"],

        creator: "@tradepass",
        site: "@tradepass",
    },

    robots: {
        index: true,
        follow: true,
    },
};

const Page = () => {
    redirect("/awards-2026");
};

export default Page;