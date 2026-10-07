"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        id: 1,
        image: "/images/overview.jpg",
        title: "Industry Leaders",
        description:
            "Connect with leading professionals and decision makers.",
    },
    {
        id: 2,
        image: "/images/overview.jpg",
        title: "Networking",
        description:
            "Build meaningful connections with industry experts.",
    },
    {
        id: 3,
        image: "/images/overview.jpg",
        title: "Knowledge",
        description:
            "Explore the latest trends, technologies and innovations.",
    },
    {
        id: 4,
        image: "/images/overview.jpg",
        title: "Innovation",
        description:
            "Discover solutions shaping the future of the industry.",
    },
];

const HorizontalScroll = () => {
    return (
        <div className="relative h-[700px] w-full overflow-hidden">

            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                ]}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={0}
                speed={700}
                loop={false}
                grabCursor={true}
                allowTouchMove={true}

                /* Mouse Wheel */
                mousewheel={{
                    enabled: true,
                    forceToAxis: true,
                    sensitivity: 1,
                    thresholdDelta: 20,
                    thresholdTime: 300,
                    releaseOnEdges: true,
                }}

                /* Navigation */
                navigation={{
                    nextEl: ".horizontal-next",
                    prevEl: ".horizontal-prev",
                }}

                /* Pagination */
                pagination={{
                    el: ".horizontal-pagination",
                    clickable: true,
                    dynamicBullets: false,
                }}

                className="!h-full !w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide
                        key={slide.id}
                        className="!h-full !w-full"
                    >
                        <div className="relative h-full w-full overflow-hidden">

                            {/* Image */}
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority={slide.id === 1}
                                sizes="100vw"
                                className="object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* Content */}
                            <div className="relative z-10 flex h-full items-end">

                                <div className="w-full p-6 md:p-10 lg:p-16">

                                    <div className="max-w-2xl text-white">

                                        <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                                            {slide.title}
                                        </h2>

                                        <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg">
                                            {slide.description}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* =========================
                NAVIGATION
            ========================= */}

            <div className="pointer-events-none absolute bottom-8 right-6 z-30 flex items-center gap-3 md:right-10">

                {/* Previous */}
                <button
                    type="button"
                    aria-label="Previous slide"
                    className="
                        horizontal-prev
                        pointer-events-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white
                        text-xl
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    ←
                </button>

                {/* Next */}
                <button
                    type="button"
                    aria-label="Next slide"
                    className="
                        horizontal-next
                        pointer-events-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white
                        text-xl
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    →
                </button>

            </div>


            {/* =========================
                PAGINATION
            ========================= */}

            <div
                className="
                    horizontal-pagination
                    absolute
                    bottom-5
                    left-1/2
                    z-30
                    flex
                    -translate-x-1/2
                    items-center
                    justify-center
                "
            />

        </div>
    );
};

export default HorizontalScroll;