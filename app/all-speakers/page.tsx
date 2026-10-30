import type { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
    title: "PhilSec 2027 Speakers - Cybersecurity Leaders in Philippines",

    description:
        "Meet the expert speakers at PhilSec 2027, featuring CIS0s, cybersecurity leaders, innovators, and industry experts shaping digital defense in the Philippines.",

    alternates: {
        canonical: "https://www.philsecsummit.com/all-speakers/",
    },

    openGraph: {
        title: "PhilSec 2027 Speakers - Cybersecurity Leaders in Philippines",

        description:
            "Meet the expert speakers at PhilSec 2027, featuring CIS0s, cybersecurity leaders, innovators, and industry experts shaping digital defense in the Philippines.",

        url: "https://www.philsecsummit.com/all-speakers/",

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

        title: "PhilSec 2027 Speakers - Cybersecurity Leaders in Philippines",

        description:
            "Meet the expert speakers at PhilSec 2027, featuring CIS0s, cybersecurity leaders, innovators, and industry experts shaping digital defense in the Philippines.",

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
    redirect("/2026-speakers/");
};

export default Page;