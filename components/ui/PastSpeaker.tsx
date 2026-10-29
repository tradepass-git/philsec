"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomClass from "@/public/css/CustomClass.module.css";

import { WPSpeaker } from "@/types/wordpress";
import SingleSpeaker from "@/components/ui/SingleSpeaker";

interface PastSpeakerProps {
    pastspeakerdata: WPSpeaker[];
}

const PastSpeaker = ({ pastspeakerdata }: PastSpeakerProps) => {
    const swiperRef = useRef<any>(null);
    return (
        <div className="flex flex-col items-center gap-[60px]">
            <div className="heading flex flex-col items-center gap-[40px]">
                <div className="max-w-5xl mx-auto w-ful flex flex-col gap-[20px] items-center text-center">
                    <h2
                        className="font-oswald text-white font-bold leading-[1] text-[clamp(1.2rem,4vw,2.53rem)] text-center tracking-[0.04rem] uppercase leading-[1]">
                        Past Speakers</h2>
                </div>
                <div className="bg-[var(--secondary-color)] w-[150px] h-[3px] hidden"></div>
            </div>
            <div className="overflow-hidden w-full mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={14}
                    loop={true}
                    navigation={false}
                    autoplay={{ delay: 3000 }}
                    //autoplay={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={5}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5, // 👈 5 slides on desktop
                        },
                    }}
                >

                    {pastspeakerdata.map((speaker: any, index: number) => {
                        const fullName = speaker?.title?.rendered?.trim() || "";
                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full">
                                    <SingleSpeaker key={index}
                                        name={fullName}
                                        designation={speaker?.acf?.designation}
                                        company={speaker?.acf?.company}
                                        imageId={speaker?.acf?.speaker_image}
                                        linkedinUrl={speaker?.acf?.linkedin_url}
                                        id={speaker?.id}
                                    />
                                </div>
                            </SwiperSlide>

                        );
                    })}

                </Swiper>

            </div>
            <a href="/2026-speakers/" className={`${CustomClass.ctaButton}`}>
                <span><span>View All Speakers</span><span>View All Speakers</span></span>
            </a>

        </div>
    )
}

export default PastSpeaker