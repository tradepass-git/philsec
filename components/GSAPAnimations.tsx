"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const GSAPAnimations = () => {
  const pathname = usePathname();

  useEffect(() => {
    // kill old triggers (important for Next.js navigation)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const elements = gsap.utils.toArray("[data-anim]");

    elements.forEach((el: any) => {
      const anim = el.getAttribute("data-anim");
      const speed = parseFloat(el.getAttribute("data-speed")) || 1;
      const delay = parseFloat(el.getAttribute("data-delay")) || 0;

      let animationProps: any = {
        opacity: 0,
        duration: speed,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      };

      // animation types
      switch (anim) {
        case "fade-up":
          animationProps.y = 80;
          break;

        case "fade-down":
          animationProps.y = -80;
          break;

        case "fade-right":
          animationProps.x = -80;
          break;

        case "zoom-in":
          animationProps.scale = 0.7;
          break;

        case "flip-left":
          animationProps.rotateY = -90;
          animationProps.transformPerspective = 1000;
          break;

        default:
          animationProps.y = 80;
      }

      gsap.from(el, animationProps);
    });

    // refresh after render (important for Swiper / dynamic content)
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

  }, [pathname]);

  return null;
};

export default GSAPAnimations;