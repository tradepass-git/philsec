"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SeriesPartner = () => {
    const swiperRef = useRef<any>(null);
    const logos = Array.from({ length: 135 }, (_, i) => `/images/series-patners/${i + 1}.jpg`);
    const groupedLogos = [];
    for (let i = 0; i < logos.length; i += 2) {
        groupedLogos.push(logos.slice(i, i + 2));
    }
    return (
        <section className='sponsors-partner relative overflow-hidden flex flex-col justify-center items-center py-[80px]'>
            <div className="mx-auto w-full flex flex-col gap-[80px] lg:px-20">
                <div data-anim="fade-up" data-speed="1" data-delay="0.3" className="heading flex flex-col items-center gap-[40px]">
                    <div className="flex flex-col gap-[20px]">
                        <h2
                            className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">
                            Series Sponsors</h2>
                    </div>
                </div>
                <div className='
                relative flex
before:absolute before:block before:content-[""] before:w-[60px] before:h-full
before:bg-[linear-gradient(90deg,_#000000_20%,_transparent_100%)]
before:top-0 before:left-0 before:z-10

after:absolute after:block after:content-[""] after:w-[60px] after:h-full
after:bg-[linear-gradient(270deg,_#000000_20%,_transparent_100%)]
after:top-0 after:right-0 after:z-10
                '>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        loop={true}
                        navigation={false}
                        autoplay={{ delay: 3000 }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1280: {
                                slidesPerView: 7,
                            },

                        }}
                    >
                        {groupedLogos.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col flex-wrap">
                                    {group.map((logo, i) => (
                                        <div
                                            className={`img-wrap flex items-center justify-center overflow-hidden p-[5px]`}
                                            key={i}
                                        >
                                            <img src={logo} alt="Sponsor" className="h-auto" />
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default SeriesPartner