"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function CarticleSlide() {
    useEffect(() => {
        const activeElement = document.querySelector(
            ".carticle-slide-active"
        );

        if (!activeElement) return;

        const wrapper = document.querySelector<HTMLElement>(
            ".scroller-wrapper"
        );

        if (!wrapper) return;

        const scroller = wrapper.querySelector<HTMLElement>(
            ".scroller"
        );

        if (!scroller) return;

        /*
         * Create ScrollSmoother only if you don't already
         * create it somewhere else in your application.
         */
        let scrollMain: ScrollSmoother | null = null;

        if (!ScrollSmoother.get()) {
            scrollMain = ScrollSmoother.create({
                smooth: 1,
                effects: true,
            });
        }

        // Random color theme
        document.body.style.setProperty(
            "--hue",
            `${Math.round(Math.random() * 360)}`
        );

        const getToValue = () => {
            return (
                scroller.scrollWidth -
                wrapper.getBoundingClientRect().width
            );
        };

        const mm = gsap.matchMedia();

        mm.add("(min-width: 641px)", () => {
            const timelines: gsap.core.Tween[] = [];

            /*
             * Before ScrollTrigger pinning
             */
            const beforeST = gsap.fromTo(
                scroller,
                {
                    x: () => {
                        const distance =
                            scroller.getBoundingClientRect().top +
                            window.scrollY;

                        return distance * 0.5;
                    },
                    opacity: 0.2,
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: "none",
                    immediateRender: true,

                    scrollTrigger: {
                        trigger: scroller,
                        start: -10,
                        end: "50% 46.99%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            timelines.push(beforeST);

            /*
             * Main horizontal scroll
             */
            const mainST = gsap.fromTo(
                scroller,
                {
                    x: () => 0,
                },
                {
                    x: () => -getToValue(),

                    immediateRender: false,
                    ease: "none",

                    scrollTrigger: {
                        trigger: scroller,
                        start: "50% 47%",

                        end: () =>
                            "+=" +
                            Math.min(
                                getToValue(),
                                Math.max(
                                    window.innerHeight,
                                    window.innerWidth
                                ) + 200
                            ),

                        pin: true,
                        markers: false,
                        invalidateOnRefresh: true,
                        scrub: true,
                    },
                }
            );

            timelines.push(mainST);

            /*
             * After horizontal scroll
             */
            const afterST = gsap.fromTo(
                scroller,
                {
                    x: () => -getToValue(),
                    opacity: 1,
                },
                {
                    x: () =>
                        -getToValue() -
                        window.innerWidth * 0.5,

                    opacity: 0,
                    ease: "none",

                    scrollTrigger: {
                        trigger: scroller,

                        start: () => {
                            return mainST.scrollTrigger
                                ? mainST.scrollTrigger.end
                                : 0;
                        },

                        end: () =>
                            "+=" + window.innerHeight * 0.75,

                        invalidateOnRefresh: true,
                        markers: false,
                        scrub: true,
                    },
                }
            );

            timelines.push(afterST);

            /*
             * Cleanup for desktop matchMedia
             */
            return () => {
                timelines.forEach((timeline) => {
                    timeline.kill();
                });

                gsap.set([scroller, wrapper], {
                    clearProps: "all",
                });
            };
        });

        /*
         * Component cleanup
         */
        return () => {
            mm.revert();

            if (scrollMain) {
                scrollMain.kill();
                scrollMain = null;
            }

            ScrollTrigger.refresh();
        };
    }, []);

    return null;
}