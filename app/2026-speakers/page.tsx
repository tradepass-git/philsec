import type { Metadata } from "next";
import { getSpeakers } from "@/lib/wordpress/speakers";
import SingleSpeaker from "@/components/ui/SingleSpeaker";
import VIPSpeaker from "@/components/ui/VIPSpeaker";
export const metadata: Metadata = {
    title: "PhilSec 2026 Speakers - Leading Minds in Cybersecurity",

    description:
        "Get to know the PhilSec 2026 speakers, including influential industry leaders driving cybersecurity innovation & addressing evolving cyber risks",

    alternates: {
        canonical: "https://www.philsecsummit.com/2026-speakers/",
    },

    openGraph: {
        title: "PhilSec 2026 Speakers - Leading Minds in Cybersecurity",

        description:
            "Get to know the PhilSec 2026 speakers, including influential industry leaders driving cybersecurity innovation & addressing evolving cyber risks",

        url: "https://www.philsecsummit.com/2026-speakers/",

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

        title: "PhilSec 2026 Speakers - Leading Minds in Cybersecurity",

        description:
            "Get to know the PhilSec 2026 speakers, including influential industry leaders driving cybersecurity innovation & addressing evolving cyber risks",

        images: ["/images/og-image.png"],

        creator: "@tradepass",
        site: "@tradepass",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default async function Speakers2026() {
    const delegate_speakers = await getSpeakers(2026, 100, "delegate-speaker");
    //console.log(delegate_speakers);
    const sponsor_speakers = await getSpeakers(2026, 100, "sponsor-speaker");
    return (
        <>
            <div className="page-content pt-[120px]">
                <section className="bg-style4 relative overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                        <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
                            <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">2026 Speakers</h1>
                        </div>
                    </div>
                </section>
                {/* VIP Speakers */}
                <section className="speakers-section relative overflow-hidden py-[60px] pt-0">
                    <div className="mx-auto w-full relative z-10 px-5">
                        <div className="flex flex-col items-center gap-[40px]">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,1.8rem)] font-500 uppercase leading-[1.2] w-full  text-white">VIP Chief Guests</h2>
                            <VIPSpeaker />
                        </div>
                    </div>
                </section>
                {/* Delegate Speakers */}
                <section className="speakers-section relative overflow-hidden py-[60px]">
                    <div className="mx-auto w-full relative z-10 px-5">
                        <div className="flex flex-col items-center gap-[40px]">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,1.8rem)] font-500 uppercase leading-[1.2] w-full  text-white">Delegate Speakers</h2>
                            <div className="w-full flex flex-wrap justify-center gap-4">
                                {delegate_speakers.map((speaker: any, index: number) => {
                                    const fullName = speaker?.title?.rendered?.trim() || "";
                                    return (
                                        <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] 2xl:w-[calc(20%-14px)]">
                                            <SingleSpeaker key={index}
                                                name={fullName}
                                                designation={speaker?.acf?.designation}
                                                company={speaker?.acf?.company}
                                                imageId={speaker?.acf?.speaker_image}
                                                linkedinUrl={speaker?.acf?.linkedin_url}
                                                id={speaker?.id}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Sponsor Speakers */}
                <section className="speakers-section relative overflow-hidden py-[60px]">
                    <div className="mx-auto w-full relative z-10 px-5">
                        <div className="flex flex-col items-center gap-[40px]">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,1.8rem)] font-500 uppercase leading-[1.2] w-full  text-white">Sponsor Speakers</h2>
                            <div className="w-full flex flex-wrap justify-center gap-4">
                                {sponsor_speakers.map((speaker: any, index: number) => {
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