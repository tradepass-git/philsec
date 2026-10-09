"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomClass from "@/public/css/CustomClass.module.css";

const Speakers = () => {
    const swiperRef = useRef<any>(null);
    return (
        <section className="speakers-section relative pb-[80px] bg-black">
            <div className={CustomClass.devLine}><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"></path></svg></div>
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className='flex flex-col gap-[80px]'>
                    <div className="flex flex-col items-center gap-[60px]">
                        <div className="heading flex flex-col items-center gap-[40px]">
                            <div className="max-w-5xl mx-auto w-ful flex flex-col gap-[20px] items-center text-center">
                                <h2
                                    className="font-oswald text-white font-bold leading-[1] text-[clamp(1.2rem,4vw,2.53rem)] text-center uppercase leading-[1]">
                                    VIP Chief Guest</h2>
                            </div>
                            <div className="bg-[var(--secondary-color)] w-[150px] h-[3px]"></div>
                        </div>
                        <div className="grid grid-cols-8 gap-[20px] justify-center">
                            <div className="col-span-6 md:col-span-2"></div>
                            <div className="col-span-6 md:col-span-2">
                                <div className='relative rounded-[12px] overflow-hidden bg-[#222222] p-[10px]'>
                                    <div className="relative h-[357px] rounded-[12px] overflow-hidden bg-[url('/images/speakers-bg.webp')] bg-cover bg-center bg-no-repeat">
                                        <img
                                            src="/images/speakers/Henry-Aguda.png"
                                            alt="Henry Aguda"
                                            className="absolute inset-0 w-full h-full object-contain object-bottom"
                                        />
                                    </div>
                                    <div className="py-[30px] px-[10px] flex flex-col justify-center items-center gap-[10px] w-full h-[200px]">
                                        <h3 className="text-[1.2rem] font-bold text-white leading-[1.2] uppercase text-center">
                                            Sec. Henry Aguda</h3>
                                        <p className="text-white text-[14px] text-center">Secretary</p>
                                        <p className="text-[var(--secondary-color)] font-bold text-[1rem] text-center">Department of Information and Communications Technology (DICT)</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-span-6 md:col-span-2">
                                <div className='relative rounded-[12px] overflow-hidden bg-[#222222] p-[10px]'>
                                    <div className="relative h-[357px] rounded-[12px] overflow-hidden bg-[url('/images/speakers-bg.webp')] bg-cover bg-center bg-no-repeat">
                                        <img
                                            src="/images/speakers/Usec.-Rodil-Aniban-1.png"
                                            alt="Henry Aguda"
                                            className="absolute inset-0 w-full h-full object-contain object-bottom"
                                        />
                                    </div>
                                    <div className="py-[30px] px-[10px] flex flex-col justify-center items-center gap-[10px] w-full h-[200px]">
                                        <h3 className="text-[1.2rem] font-bold text-white leading-[1.2] uppercase text-center">
                                            Usec. Rodil Aniban</h3>
                                        <p className="text-white text-[14px] text-center">Officer-in-Charge, Undersecretary for Cybersecurity</p>
                                        <p className="text-[var(--secondary-color)] font-bold text-[1rem] text-center">Department of Information and Communications Technology (DICT)</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-2"></div>
                        </div>

                    </div>


                    {/* Past Speakers */}

                    <div className="flex flex-col items-center gap-[60px]">
                        <div className="heading flex flex-col items-center gap-[40px]">
                            <div className="max-w-5xl mx-auto w-ful flex flex-col gap-[20px] items-center text-center">
                                <h2
                                    className="font-oswald text-white font-bold leading-[1] text-[clamp(1.2rem,4vw,2.53rem)] text-center tracking-[0.04rem] uppercase leading-[1]">
                                    Past Speakers</h2>
                            </div>
                            <div className="bg-[var(--secondary-color)] w-[150px] h-[3px]"></div>
                        </div>
                        <div className="overflow-hidden w-full mx-auto">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                loop={true}
                                navigation={false}
                                autoplay={{ delay: 3000 }}
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

                                {Array.from({ length: 10 }).map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='relative rounded-[12px] overflow-hidden bg-[#222222] p-[10px]'>
                                            <div className="relative h-[276px] rounded-[12px] overflow-hidden bg-[url('/images/speakers-bg.webp')] bg-cover bg-center bg-no-repeat">
                                                <img
                                                    src="/images/speakers/Edmund.png"
                                                    alt="Henry Aguda"
                                                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                                                />
                                            </div>
                                            <div className="py-[30px] px-[10px] flex flex-col justify-center items-center gap-[10px] w-full h-[150px]">
                                                <h3 className="text-[1rem] font-bold text-white leading-[1.2] uppercase text-center">
                                                    Edmund Goh</h3>
                                                <p className="text-white text-[12px] text-center">Head - Asia & South Pacific Cybercrime Operations Desk</p>
                                                <p className="text-[var(--secondary-color)] font-bold text-[12px] text-center">INTERPOL</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                        </div>
                        <a href="#" className={`${CustomClass.ctaButton}`}>
                            <span><span>View All Speakers</span><span>View All Speakers</span></span>
                        </a>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Speakers