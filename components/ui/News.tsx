"use client";

import { useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import CustomClass from "@/public/css/CustomClass.module.css";

import { WPNews } from "@/types/wordpress";

interface NewsCardProps {
    newsdata: WPNews[];
}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export function NewsCard({ newsdata }: NewsCardProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <>
            {/* MAIN NEWS */}
            <div className="lg:col-span-8 col-span-12 w-full">
                <div className="relative p-[30px] border border-[#6f7aa27d] rounded-[10px] h-full">

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, Thumbs]}
                        spaceBetween={20}
                        loop={true}
                        slidesPerView={1}
                        initialSlide={0}
                        pagination={{
                            el: ".blog__dot",
                            clickable: true
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}

                    >
                        {newsdata.map((news, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[30px]">
                                    <div className="flex flex-col justify-center gap-[20px]">
                                        <h3 className="font-satoshi text-[1.2rem] text-white font-bold">
                                            <a
                                                href={news?.acf?.link || "#"}
                                                target="_blank"
                                            >
                                                {news.title.rendered}
                                            </a>
                                        </h3>
                                        <p className="text-[0.9rem] text-white" dangerouslySetInnerHTML={{ __html: news?.acf?.description ?? "" }}></p>
                                        
                                         <a href={news?.acf?.link || "#"} className={`${CustomClass.ctaButton} w-fit`}>
                            <span><span>Read More</span><span>Read More</span></span>
                        </a>
                                    </div>
                                    <div className="relative w-full h-[430px] overflow-hidden rounded-[10px]">
                                        <img
                                            src={`/api/image/${news?.acf?.news_image}/`}
                                            alt={news.title.rendered}
                                            className="w-full h-full object-cover"
                                            loading="eager"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute bottom-[30px] z-[1] w-full  max-[767px]:right-0  max-[767px]:text-center"><div className="dot blog__dot"></div></div>
                </div>
            </div>

            {/* THUMBNAIL NEWS */}
            <div className="hidden lg:block lg:col-span-4 col-span-12">
                <div className="p-[30px] border border-[#6f7aa27d] rounded-[10px] h-full">

                    <Swiper
                        modules={[Autoplay, Thumbs]}
                        spaceBetween={0}
                        loop={true}
                        slidesPerView={1}
                        direction="vertical"
                        watchSlidesProgress={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        onSwiper={setThumbsSwiper}
                        mousewheel={true}
                        initialSlide={1}
                        className="h-[420px]"
                    >
                        {newsdata.map((news, index) => (
                            <SwiperSlide key={index}>

                                <div className="flex flex-col gap-[30px] h-full">
                                    <div className="h-[260px]">
                                        <a href={news.link} target="_blank" >
                                            <div className="relative w-full h-[260px] rounded-[10px] overflow-hidden">
                                                <img
                                                    src={`/api/image/${news?.acf?.news_image}/`}
                                                    alt={news.title.rendered}
                                                    className="w-full h-full object-cover"
                                                    loading="eager"
                                                />

                                            </div>
                                        </a>
                                    </div>
                                    <h3 className="text-[1.2rem] m-0 text-white font-satoshi font-bold">
                                        <a href={news?.acf?.link || "#"} target="_blank"> {news.title.rendered} </a> </h3> </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </>
    )


}