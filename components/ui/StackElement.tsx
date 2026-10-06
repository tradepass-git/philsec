"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackElement() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = document.querySelectorAll<HTMLElement>(".stack-element");

            if (!sections.length) return;

            let resizeTimeout: ReturnType<typeof setTimeout>;

            const updateTotalHeight = () => {
                const container = document.querySelector<HTMLElement>(
                    ".stack-element-main"
                );

                if (!container) return;

                const containerHeight = container.offsetHeight;

                // Kill existing ScrollTriggers created by this component
                ScrollTrigger.getAll().forEach((trigger) => {
                    if (trigger.vars.trigger instanceof HTMLElement) {
                        const triggerElement = trigger.vars.trigger as HTMLElement;

                        if (triggerElement.classList.contains("element")) {
                            trigger.kill();
                        }
                    }
                });

                const elements = document.querySelectorAll<HTMLElement>(
                    ".stack-element-main .element:not(:last-child)"
                );

                elements.forEach((element) => {
                    const elementHeight = element.offsetHeight;

                    ScrollTrigger.create({
                        trigger: element,
                        scrub: 1,
                        start: "top top+=30",
                        end: `+=${containerHeight - elementHeight}`,
                        pin: true,
                        pinSpacing: false,

                        animation: gsap.to(element, {
                            scale: 0.4,
                            opacity: 0,
                            ease: "none",
                        }),
                    });
                });

                ScrollTrigger.refresh();
            };

            // Initial setup
            updateTotalHeight();

            // Resize
            const handleResize = () => {
                clearTimeout(resizeTimeout);

                resizeTimeout = setTimeout(() => {
                    updateTotalHeight();
                }, 150);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                clearTimeout(resizeTimeout);
                window.removeEventListener("resize", handleResize);
            };
        });

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);

    return null;
}