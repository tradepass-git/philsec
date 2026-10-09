"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Happenings4 = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const dotGroupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const dotGroup = dotGroupRef.current;

        if (!section || !container) return;

        const items =
            container.querySelectorAll<HTMLElement>(
                ".image-rotate-item"
            );

        const cards =
            section.querySelectorAll<HTMLElement>(
                ".happening-card"
            );

        if (!items.length || !cards.length) return;

        const ctx = gsap.context(() => {
            const imageData = Array.from(items).map((item) => ({
                element: item,
                angle: Number(item.dataset.angle || 0),
            }));

            /*
             * ---------------------------------------
             * UPDATE IMAGES + CARDS
             * ---------------------------------------
             */
            const updateImagesAndCards = (progress: number) => {
                const rotation = -progress * 360;

                /*
                 * ---------------------------------------
                 * IMAGE ORBIT
                 * ---------------------------------------
                 */
                imageData.forEach(
                    ({ element, angle: baseAngle }) => {
                        const angle = baseAngle + rotation;

                        const normalizedAngle =
                            ((angle % 360) + 360) % 360;

                        const distanceFromCenter =
                            Math.abs(
                                ((normalizedAngle + 180) %
                                    360) -
                                180
                            );

                        const scale =
                            0.68 +
                            (1 -
                                distanceFromCenter / 180) *
                            0.29;

                        const opacity =
                            0.43 +
                            (1 -
                                distanceFromCenter / 180) *
                            0.57;

                        const zIndex = Math.round(
                            55 +
                            (1 -
                                distanceFromCenter /
                                180) *
                            45
                        );

                        gsap.set(element, {
                            transform: `
                                rotate(${angle}deg)
                                translate(43.125rem)
                                rotate(${-angle}deg)
                                scale(${Math.max(
                                0.68,
                                Math.min(
                                    0.97,
                                    scale
                                )
                            )})
                            `,
                            opacity: Math.max(
                                0.43,
                                Math.min(1, opacity)
                            ),
                            zIndex,
                        });
                    }
                );

                /*
                 * ---------------------------------------
                 * ACTIVE ORDER
                 *
                 * Video 1 → Card 1
                 * Video 2 → Card 2
                 * Video 3 → Card 3
                 * Video 4 → Card 4
                 * ---------------------------------------
                 */
                const activeIndex = Math.min(
                    3,
                    Math.floor(progress * 4)
                );

                /*
                 * ---------------------------------------
                 * RIGHT CONTENT CARDS
                 * ---------------------------------------
                 */
                cards.forEach((card, index) => {
                    const isActive =
                        index === activeIndex;

                    gsap.set(card, {
                        opacity: isActive
                            ? 1
                            : 0.35,
                    });

                    /*
                     * ICON
                     */
                    const icon =
                        card.querySelector<HTMLElement>(
                            ".happening-card-icon"
                        );

                    if (icon) {
                        gsap.set(icon, {
                            opacity: isActive
                                ? 1
                                : 0.45,
                            scale: isActive
                                ? 1
                                : 0.9,
                        });
                    }

                    /*
                     * TITLE
                     */
                    const title =
                        card.querySelector<HTMLElement>(
                            ".happening-card-title"
                        );

                    if (title) {
                        gsap.set(title, {
                            opacity: isActive
                                ? 1
                                : 0.5,
                        });
                    }

                    /*
                     * CONTENT
                     */
                    const contents =
                        card.querySelectorAll<HTMLElement>(
                            ".happening-card-content"
                        );

                    contents.forEach(
                        (content) => {
                            gsap.set(content, {
                                opacity: isActive
                                    ? 1
                                    : 0.45,
                            });
                        }
                    );

                    /*
                     * PROGRESS BORDER
                     */
                    const progressBorder =
                        card.querySelector<SVGElement>(
                            ".happening-card-progress"
                        );

                    if (progressBorder) {
                        gsap.set(progressBorder, {
                            strokeDasharray: 0,
                            strokeDashoffset:
                                isActive
                                    ? 0
                                    : 0,
                        });
                    }
                });

                /*
                 * ---------------------------------------
                 * DOTS
                 * ---------------------------------------
                 */
                const dots =
                    dotGroup?.querySelectorAll<HTMLElement>(
                        ".orbit-dot"
                    );

                if (dots) {
                    dots.forEach(
                        (dot, index) => {
                            gsap.set(dot, {
                                backgroundColor:
                                    index ===
                                        activeIndex
                                        ? "#fff"
                                        : "#D9D9D9",
                            });
                        }
                    );
                }

                /*
                 * ---------------------------------------
                 * ROTATE DOT ORBIT
                 * ---------------------------------------
                 */
                if (dotGroup) {
                    gsap.set(dotGroup, {
                        rotation:
                            153.718 + rotation,
                    });
                }
            };

            /*
             * ---------------------------------------
             * INITIAL STATE
             * ---------------------------------------
             */
            updateImagesAndCards(0);

            /*
             * ---------------------------------------
             * SCROLL TRIGGER
             * ---------------------------------------
             */
            const trigger =
                ScrollTrigger.create({
                    trigger: section,

                    pin: true,

                    start: "top top",

                    /*
                     * Longer = slower rotation
                     */
                    end: "+=1800",

                    scrub: 1,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,

                    onUpdate: (self) => {
                        updateImagesAndCards(
                            self.progress
                        );
                    },

                    onLeave: () => {
                        updateImagesAndCards(1);
                    },

                    onEnterBack: (self) => {
                        updateImagesAndCards(
                            self.progress
                        );
                    },

                    onLeaveBack: () => {
                        updateImagesAndCards(0);
                    },
                });

            ScrollTrigger.refresh();

            return () => {
                trigger.kill();
            };
        }, section);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="tp-home-capabilities relative w-full h-screen overflow-hidden" data-gradient-section="default">
            <div className="tp-grid tp-container h-full">
                <div className="col-[1/-1] ms-[-2rem] h-full flex tp-home-capabilities-inner relative overflow-visible">
                    <div className="flex-none flex flex-row gap-[20.5rem] tp-home-capabilities-content will-change-transform">
                        {/* =====================================================
                            LEFT / ORBIT SECTION
                        ===================================================== */}

                        <section className="relative home-testimonial-tp home-testimonial-capabilities-tp h-screen w-screen flex-none opacity-100">
                            <div className="tp-grid h-full tp-container max-lg:!px-0">

                                {/* =================================================
                                    ORBIT
                                ================================================= */}

                                <div className="relative col-[1/2] lg:flex hidden h-screen items-center justify-center">

                                    {/* OUTER CIRCLE */}
                                    <div className="absolute w-[40.25rem] h-[40.25rem] 2xl:w-[48.25rem] 2xl:h-[48.25rem] flex justify-center items-center">

                                        <div className="absolute inset-0 border-[0.125rem] rounded-full border-[#E2E2E21A]" />

                                        {/* =================================================
                                            CENTER AREA
                                        ================================================= */}

                                        <div className="w-[23.5rem] h-[23.5rem] relative flex justify-center items-center">

                                            {/* =================================================
                                                CENTER LOGO
                                            ================================================= */}

                                            <div className="relative z-[100] w-[8rem] h-[8rem] rounded-full flex items-center justify-center bg-white">

                                                <div className="w-[5rem] h-[5rem] rounded-full bg-[#FE7061] flex items-center justify-center">
                                                    <span className="text-white text-[1rem] font-bold">
                                                        LOGO
                                                    </span>
                                                </div>

                                            </div>

                                            {/* =================================================
                                                DASHED CIRCLE
                                            ================================================= */}

                                            <div className="absolute inset-0 rounded-full">
                                                <svg
                                                    width="100%"
                                                    viewBox="0 0 386 386"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="193"
                                                        cy="193"
                                                        r="188"
                                                        stroke="#E2E2E2"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="10"
                                                        strokeDasharray="1 6"
                                                    />
                                                </svg>
                                            </div>

                                            {/* =================================================
                                                DOT ORBIT
                                            ================================================= */}

                                            <div
                                                ref={
                                                    dotGroupRef
                                                }
                                                className="absolute inset-[1.25rem] dot-group will-change-transform"
                                            >

                                                {/* DOT 1 */}

                                                <div
                                                    className="orbit-dot absolute top-1/2 left-1/2 w-[0.5rem] h-[0.5rem] rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            "#fff",
                                                        transform:
                                                            "translate(-50%, -50%) rotate(0deg) translate(10.5rem)",
                                                    }}
                                                />

                                                {/* DOT 2 */}

                                                <div
                                                    className="orbit-dot absolute top-1/2 left-1/2 w-[0.5rem] h-[0.5rem] rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            "#D9D9D9",
                                                        transform:
                                                            "translate(-50%, -50%) rotate(90deg) translate(10.5rem)",
                                                    }}
                                                />

                                                {/* DOT 3 */}

                                                <div
                                                    className="orbit-dot absolute top-1/2 left-1/2 w-[0.5rem] h-[0.5rem] rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            "#D9D9D9",
                                                        transform:
                                                            "translate(-50%, -50%) rotate(180deg) translate(10.5rem)",
                                                    }}
                                                />

                                                {/* DOT 4 */}

                                                <div
                                                    className="orbit-dot absolute top-1/2 left-1/2 w-[0.5rem] h-[0.5rem] rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            "#D9D9D9",
                                                        transform:
                                                            "translate(-50%, -50%) rotate(270deg) translate(10.5rem)",
                                                    }}
                                                />

                                            </div>

                                            {/* =================================================
                                                4 VIDEO ORBIT
                                            ================================================= */}

                                            <div
                                                ref={
                                                    containerRef
                                                }
                                                className="
                                                    image-rotate
                                                    absolute
                                                    top-1/2
                                                    left-1/4
                                                    min-[1400px]:left-1/3
                                                    min-[1600px]:left-1/2
                                                    -translate-x-1/2
                                                    -translate-y-1/4
                                                    min-[1400px]:-translate-y-1/3
                                                    min-[1600px]:-translate-y-1/2
                                                    pointer-events-none
                                                    w-[23.5rem]
                                                    h-[55vh]
                                                    min-[1400px]:h-[60vh]
                                                    min-[1600px]:h-[65vh]
                                                    min-[1800px]:h-[50vh]
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >

                                                {/* =================================================
                                                    VIDEO 1
                                                ================================================= */}

                                                <div
                                                    className="
                                                        image-rotate-item
                                                        absolute
                                                        w-full
                                                        h-full
                                                        flex
                                                        items-center
                                                        justify-center
                                                        overflow-visible
                                                        will-change-[transform,opacity]
                                                        rounded-3xl
                                                    "
                                                    data-angle="-174.401"
                                                >
                                                    <video
                                                        muted
                                                        autoPlay
                                                        loop
                                                        playsInline
                                                        preload="metadata"
                                                        className="h-full w-auto max-w-none rounded-3xl"
                                                    >
                                                        <source
                                                            src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                </div>

                                                {/* =================================================
                                                    VIDEO 2
                                                ================================================= */}

                                                <div
                                                    className="
                                                        image-rotate-item
                                                        absolute
                                                        w-full
                                                        h-full
                                                        flex
                                                        items-center
                                                        justify-center
                                                        overflow-visible
                                                        will-change-[transform,opacity]
                                                        rounded-3xl
                                                    "
                                                    data-angle="-84.4008"
                                                >
                                                    <video
                                                        muted
                                                        autoPlay
                                                        loop
                                                        playsInline
                                                        preload="metadata"
                                                        className="h-full w-auto max-w-none rounded-3xl"
                                                    >
                                                        <source
                                                            src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                </div>

                                                {/* =================================================
                                                    VIDEO 3
                                                ================================================= */}

                                                <div
                                                    className="
                                                        image-rotate-item
                                                        absolute
                                                        w-full
                                                        h-full
                                                        flex
                                                        items-center
                                                        justify-center
                                                        overflow-visible
                                                        will-change-[transform,opacity]
                                                        rounded-3xl
                                                    "
                                                    data-angle="5.5992"
                                                >
                                                    <video
                                                        muted
                                                        autoPlay
                                                        loop
                                                        playsInline
                                                        preload="metadata"
                                                        className="h-full w-auto max-w-none rounded-3xl"
                                                    >
                                                        <source
                                                            src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                </div>

                                                {/* =================================================
                                                    VIDEO 4
                                                ================================================= */}

                                                <div
                                                    className="
                                                        image-rotate-item
                                                        absolute
                                                        w-full
                                                        h-full
                                                        flex
                                                        items-center
                                                        justify-center
                                                        overflow-visible
                                                        will-change-[transform,opacity]
                                                        rounded-3xl
                                                    "
                                                    data-angle="95.5992"
                                                >
                                                    <video
                                                        muted
                                                        autoPlay
                                                        loop
                                                        playsInline
                                                        preload="metadata"
                                                        className="h-full w-auto max-w-none rounded-3xl"
                                                    >
                                                        <source
                                                            src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* =====================================================
                                    RIGHT CONTENT
                                ===================================================== */}

                                <div className="relative col-[1/-1] lg:col-[11/-1] h-auto lg:h-screen flex flex-col justify-center">

                                    <div className="relative lg:w-full w-full">

                                        <div className="flex flex-col gap-[0.25rem] w-full self-start">

                                            {/* =================================================
                                                CARD 1
                                            ================================================= */}

                                            <div className="happening-card relative flex items-center gap-[1.5rem] py-[1rem] border-b border-[#E2E2E220] will-change-[opacity]">

                                                <div className="happening-card-icon relative shrink-0 w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full border border-[#E2E2E240] will-change-transform">

                                                    <span className="text-[1.25rem] font-bold">
                                                        01
                                                    </span>

                                                    <svg
                                                        className="absolute inset-[-0.125rem] w-[3.75rem] h-[3.75rem] rotate-[-90deg]"
                                                        viewBox="0 0 60 60"
                                                    >
                                                        <rect
                                                            className="happening-card-progress"
                                                            x="2"
                                                            y="2"
                                                            width="56"
                                                            height="56"
                                                            rx="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeDasharray="165.2"
                                                            strokeDashoffset="0"
                                                        />
                                                    </svg>

                                                </div>

                                                <div className="flex-1 min-w-0">

                                                    <h3 className="font-oswald happening-card-title text-[1.5rem] font-bold leading-none will-change-[opacity] uppercase">
                                                        Conference
                                                    </h3>

                                                    <p className="happening-card-content mt-[0.5rem] text-[0.775rem] 2xl:text-[1rem] leading-[1.4] opacity-70 max-w-[28rem] will-change-[opacity]">
                                                        Presenting the top inspiring names from the industry at the main stage to share crucial intelligence on the most pressing topics, which gets further enriched by a Q&A session.
                                                    </p>

                                                </div>
                                            </div>

                                            {/* =================================================
                                                CARD 2
                                            ================================================= */}

                                            <div className="happening-card relative flex items-center gap-[1.5rem] py-[1rem] border-b border-[#E2E2E220] will-change-[opacity]">

                                                <div className="happening-card-icon relative shrink-0 w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full border border-[#E2E2E240] will-change-transform">

                                                    <span className="text-[1.25rem] font-bold">
                                                        02
                                                    </span>

                                                    <svg
                                                        className="absolute inset-[-0.125rem] w-[3.75rem] h-[3.75rem] rotate-[-90deg]"
                                                        viewBox="0 0 60 60"
                                                    >
                                                        <rect
                                                            className="happening-card-progress"
                                                            x="2"
                                                            y="2"
                                                            width="56"
                                                            height="56"
                                                            rx="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeDasharray="165.2"
                                                            strokeDashoffset="165.2"
                                                        />
                                                    </svg>

                                                </div>

                                                <div className="flex-1 min-w-0">

                                                    <h3 className="font-oswald happening-card-title text-[1.5rem] font-bold leading-none will-change-[opacity] uppercase">
                                                        Exhibition
                                                    </h3>

                                                    <p className="happening-card-content mt-[0.5rem] text-[0.775rem] 2xl:text-[1rem] leading-[1.4] opacity-70 max-w-[28rem] will-change-[opacity]">
                                                        Presenting the top inspiring names from the industry at the main stage to share crucial intelligence on the most pressing topics, which gets further enriched by a Q&A session.
                                                    </p>

                                                   

                                                </div>
                                            </div>

                                            {/* =================================================
                                                CARD 3
                                            ================================================= */}

                                            <div className="happening-card relative flex items-center gap-[1.5rem] py-[1rem] border-b border-[#E2E2E220] will-change-[opacity]">

                                                <div className="happening-card-icon relative shrink-0 w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full border border-[#E2E2E240] will-change-transform">

                                                    <span className="text-[1.25rem] font-bold">
                                                        03
                                                    </span>

                                                    <svg
                                                        className="absolute inset-[-0.125rem] w-[3.75rem] h-[3.75rem] rotate-[-90deg]"
                                                        viewBox="0 0 60 60"
                                                    >
                                                        <rect
                                                            className="happening-card-progress"
                                                            x="2"
                                                            y="2"
                                                            width="56"
                                                            height="56"
                                                            rx="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeDasharray="165.2"
                                                            strokeDashoffset="165.2"
                                                        />
                                                    </svg>

                                                </div>

                                                <div className="flex-1 min-w-0">

                                                    <h3 className="font-oswald happening-card-title text-[1.5rem] font-bold leading-none will-change-[opacity] uppercase">
                                                        Awards & Gala Evening
                                                    </h3>

                                                    <p className="happening-card-content mt-[0.5rem] text-[0.775rem] 2xl:text-[1rem] leading-[1.4] opacity-70 max-w-[28rem] will-change-[opacity]">
                                                        Presenting the top inspiring names from the industry at the main stage to share crucial intelligence on the most pressing topics, which gets further enriched by a Q&A session.
                                                    </p>

                                                    

                                                </div>
                                            </div>

                                            {/* =================================================
                                                CARD 4
                                            ================================================= */}

                                            <div className="happening-card relative flex items-center gap-[1.5rem] py-[1rem] will-change-[opacity]">

                                                <div className="happening-card-icon relative shrink-0 w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full border border-[#E2E2E240] will-change-transform">

                                                    <span className="text-[1.25rem] font-bold">
                                                        04
                                                    </span>

                                                    <svg
                                                        className="absolute inset-[-0.125rem] w-[3.75rem] h-[3.75rem] rotate-[-90deg]"
                                                        viewBox="0 0 60 60"
                                                    >
                                                        <rect
                                                            className="happening-card-progress"
                                                            x="2"
                                                            y="2"
                                                            width="56"
                                                            height="56"
                                                            rx="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeDasharray="165.2"
                                                            strokeDashoffset="165.2"
                                                        />
                                                    </svg>

                                                </div>

                                                <div className="flex-1 min-w-0">

                                                    <h3 className="font-oswald happening-card-title text-[1.5rem] font-bold leading-none will-change-[opacity] uppercase">
                                                        LIVE Performances
                                                    </h3>

                                                    <p className="happening-card-content mt-[0.5rem] text-[0.775rem] 2xl:text-[1rem] leading-[1.4] opacity-70 max-w-[28rem] will-change-[opacity]">
                                                        Presenting the top inspiring names from the industry at the main stage to share crucial intelligence on the most pressing topics, which gets further enriched by a Q&A session.
                                                    </p>

                                                    

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Happenings4;