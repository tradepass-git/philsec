import type { Metadata } from "next";
import { getSpeakers } from "@/lib/wordpress/speakers";
import SingleSpeaker from "@/components/ui/SingleSpeaker";

export const metadata: Metadata = {
    title: "DCCI Malaysia 2023 Speakers: Top data center & cloud voices",

    description:
        "Explore DCCI Malaysia 2023's most influential thought leaders from cloud infrastructure, edge data centers, cybersecurity, AI, green data centers and more.",

    alternates: {
        canonical: "https://malaysia.dccisummit.com/2023-speakers/",
    },

    openGraph: {
        title: "DCCI Malaysia 2023 Speakers: Top data center & cloud voices",

        description:
            "Explore DCCI Malaysia 2023's most influential thought leaders from cloud infrastructure, edge data centers, cybersecurity, AI, green data centers and more.",

        url: "https://malaysia.dccisummit.com/2023-speakers/",

        siteName: "DCCI Malaysia",

        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "DCCI Malaysia Speakers 2023",
            },
        ],

        locale: "en_MY",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "DCCI Malaysia 2023 Speakers: Top data center & cloud voices",

        description:
            "Explore DCCI Malaysia 2023's most influential thought leaders from cloud infrastructure, edge data centers, cybersecurity, AI, green data centers and more.",

        images: ["/images/og-image.png"],

        creator: "@tradepass",
        site: "@tradepass",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default async function Speakers2024() {
    const speakers = await getSpeakers(2024);
    return (
        <>
            <div className="page-content pt-[120px]">
                <section className="bg-style4 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                        <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
                            <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">2024 Speakers</h1>
                        </div>
                    </div>
                </section>
                <section className="speakers-section relative overflow-hidden py-[60px] pt-0">
                    <div className="mx-auto w-full relative z-10 px-5">
                        <div className="flex flex-col items-center gap-[60px]">
                            <div className="w-full flex flex-wrap justify-center gap-4">
                                {speakers.map((speaker: any, index: number) => {
                                    const fullName = speaker?.title?.rendered?.trim() || "";
                                    return (
                                        <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] 2xl:w-[calc(20%-14px)]">

                                            <SingleSpeaker key={index}
                                                name={fullName}
                                                designation={speaker?.acf?.designation}
                                                company={speaker?.acf?.company}
                                                imageId={speaker?.acf?.speaker_image}
                                                linkedinUrl={speaker?.acf?.linkedin_url}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}