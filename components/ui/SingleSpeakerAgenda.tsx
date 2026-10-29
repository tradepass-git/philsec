"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SingleSpeakerProps = {
    speaker_id: number;
    year: number;
};


const SingleSpeakerAgenda = ({
    speaker_id,
    year
}: SingleSpeakerProps) => {
    const [speaker, setSpeaker] = useState<any>(null);

    useEffect(() => {
        if (!speaker_id) return;

        const getSpeakerById = async () => {
            try {
                const res = await fetch(
                    `https://backend.tradepassglobal.com/wp-json/wp/v2/philsec_speaker/${speaker_id}`
                );

                if (!res.ok) {
                    throw new Error(
                        `Failed to fetch speaker: ${res.status}`
                    );
                }

                const data = await res.json();

                //console.log("Speaker API:", data);
                //console.log("Speaker ACF:", data?.acf);

                setSpeaker(data);
            } catch (error) {
                console.error("Speaker error:", error);
            }
        };

        getSpeakerById();
    }, [speaker_id]);

    if (!speaker) {
        return null;
    }

    const name =
        speaker?.acf?.name ||
        speaker?.title?.rendered ||
        "";

    const designation =
        speaker?.acf?.designation || "";

    const company =
        speaker?.acf?.company || "";

    const imageId =
        speaker?.acf?.speaker_image || "";

    return (
        <div className={`relative flex flex-col gap-[10px] py-[5px] px-[20px] z-2`}>

            {/* Speaker Image */}
            <div className="relative w-[60px] h-[60px]  border border-[#0e0e0e29] rounded-full bg-[var(--secondary-color)] flex items-center justify-center overflow-hidden">
                {imageId && (
                    <img
                        src={`/api/image/${imageId}/`}
                        alt={name || "Speaker"}
                        className="w-full h-full object-cover object-[center_10%]"
                    />
                )}
            </div>
            <div>
                {/* Name */}
                <h3 className="font-montserrat text-[0.9rem] text-black leading-[1.4] uppercase font-bold" dangerouslySetInnerHTML={{ __html: name }}></h3>

                {/* Designation */}
                <p className="font-montserrat text-[0.8rem] leading-[1.4] text-black" dangerouslySetInnerHTML={{ __html: designation }}></p>

                {/* Company */}
                <p className="font-montserrat text-[0.8rem] leading-[1.4] font-semibold text-black" dangerouslySetInnerHTML={{ __html: company }}></p>
            </div>
        </div>
    );
};

export default SingleSpeakerAgenda;