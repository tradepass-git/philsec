"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("#sectionPin");
    const pinWrap = document.querySelector<HTMLElement>(".pin-wrap");

    if (!section || !pinWrap) return;

    const getScrollLength = () => {
      return Math.max(0, pinWrap.scrollWidth - window.innerWidth);
    };

    const horizontalTween = gsap.to(pinWrap, {
      x: () => -getScrollLength(),
      ease: "none",

      scrollTrigger: {
        trigger: section,
        scrub: 1,
        pin: true,
        start: "top top",
        end: () => `+=${getScrollLength()}`,
        invalidateOnRefresh: true,
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", handleResize);

      horizontalTween.scrollTrigger?.kill();
      horizontalTween.kill();

      gsap.set(pinWrap, {
        clearProps: "transform",
      });
    };
  }, []);

  return null;
}