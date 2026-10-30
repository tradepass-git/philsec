import type { Metadata } from "next";
import Gallery from "@/components/ui/Gallery";
export const metadata: Metadata = {
    title: "PhilSec - Official Gallery & Key Event Moments",

    description:
        "Explore the PhilSec gallery featuring photos from event's registration, the opening ceremony, keynote sessions, panel discussions, networking & awards",

    alternates: {
        canonical: "https://www.philsecsummit.com/gallery/",
    },

    openGraph: {
        title: "PhilSec - Official Gallery & Key Event Moments",

        description:
            "Explore the PhilSec gallery featuring photos from event's registration, the opening ceremony, keynote sessions, panel discussions, networking & awards",

        url: "https://www.philsecsummit.com/gallery/",

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

        title: "PhilSec - Official Gallery & Key Event Moments",

        description:
            "Explore the PhilSec gallery featuring photos from event's registration, the opening ceremony, keynote sessions, panel discussions, networking & awards",

        images: ["/images/og-image.png"],

        creator: "@tradepass",
        site: "@tradepass",
    },

    robots: {
        index: true,
        follow: true,
    },
};

const page = () => {
    return (
        <>
            <main className="w-full bg-white pt-[120px]">
                <section className="bg-style4 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                        <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
                            <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-black">Gallery</h1>
                            <div className="bg-[var(--main-color)] w-[150px] h-[3px] hidden"></div>
                        </div>
                    </div>
                </section>
                <Gallery />
            </main>
        </>
    )

}

export default page