import type { Metadata } from "next";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
    title: "PhilSec 2027 Agenda - Cybersecurity Trends & Innovations",

    description:
        "Explore the PhilSec 2027 agenda covering AI in cybersecurity, emerging cyber threats, risk management & cybersecurity solutions in the Philippines",

    alternates: {
        canonical: "https://www.philsecsummit.com/agenda/",
    },

    openGraph: {
        title: "PhilSec 2027 Agenda - Cybersecurity Trends & Innovations",

        description:
            "Explore the PhilSec 2027 agenda covering AI in cybersecurity, emerging cyber threats, risk management & cybersecurity solutions in the Philippines",

        url: "https://www.philsecsummit.com/agenda/",

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

        title: "PhilSec 2027 Agenda - Cybersecurity Trends & Innovations",

        description:
            "Explore the PhilSec 2027 agenda covering AI in cybersecurity, emerging cyber threats, risk management & cybersecurity solutions in the Philippines",

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
    redirect("/agenda-2026/");
};

export default Page;