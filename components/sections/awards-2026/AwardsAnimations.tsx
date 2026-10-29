"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AwardsAnimations = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const appearance = gsap.utils.toArray<HTMLElement>(".mil-up");
        const scaleImage = gsap.utils.toArray<HTMLElement>(".mil-scale");

        const animations: gsap.core.Tween[] = [];

        appearance.forEach((section) => {
            const animation = gsap.fromTo(
                section,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    scrollTrigger: {
                        trigger: section,
                        toggleActions: "play none none reverse",
                    },
                }
            );

            animations.push(animation);
        });

        scaleImage.forEach((section) => {
            const value1 = section.dataset.value1 || "1";
            const value2 = section.dataset.value2 || "1";

            const animation = gsap.fromTo(
                section,
                {
                    scale: Number(value1),
                },
                {
                    scale: Number(value2),
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                    },
                }
            );

            animations.push(animation);
        });

        ScrollTrigger.refresh();

        return () => {
            animations.forEach((animation) => {
                animation.kill();
            });

            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
        };
    }, []);

    return null;
};

export default AwardsAnimations;