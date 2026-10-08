"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageOrbitSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const orbit = orbitRef.current;

        if (!section || !orbit) return;

        const items =
            orbit.querySelectorAll<HTMLElement>(".image-rotate-item");

        // ------------------------------------
        // Original angles from your animation
        // ------------------------------------
        const images = Array.from(items).map((item) => ({
            element: item,
            angle: Number(item.dataset.angle || 0),
        }));

        // ------------------------------------
        // Set image position
        // ------------------------------------
        const updateImages = (progress: number) => {
            /*
             * One complete rotation
             *
             * progress:
             * 0 -> 1
             *
             * rotation:
             * 0 -> 360
             */
            const rotation = progress * 360;

            images.forEach(({ element, angle: baseAngle }, index) => {
                const angle = baseAngle + rotation;

                /*
                 * Normalize angle
                 */
                const normalized =
                    ((angle % 360) + 360) % 360;

                /*
                 * 0 = front
                 * 180 = back
                 */
                const distanceFromFront = Math.abs(
                    ((normalized + 180) % 360) - 180
                );

                /*
                 * Scale
                 *
                 * Front:
                 * ~0.97
                 *
                 * Back:
                 * ~0.68
                 */
                const scale =
                    0.68 +
                    (1 - distanceFromFront / 180) * 0.29;

                /*
                 * Opacity
                 */
                const opacity =
                    0.43 +
                    (1 - distanceFromFront / 180) * 0.57;

                /*
                 * Z-index
                 */
                const zIndex = Math.round(
                    55 +
                    (1 - distanceFromFront / 180) * 45
                );

                gsap.set(element, {
                    transform: `
            rotate(${angle}deg)
            translate(43.125rem)
            rotate(${-angle}deg)
            scale(${scale})
          `,
                    opacity,
                    zIndex,
                });
            });
        };

        // Initial position
        updateImages(0);

        // ------------------------------------
        // ScrollTrigger
        // ------------------------------------
        const trigger = ScrollTrigger.create({
            trigger: section,

            /*
             * Pin this section while rotation happens
             */
            pin: true,

            /*
             * One complete rotation
             */
            start: "top top",
            end: "+=1800",

            scrub: 1,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
                updateImages(self.progress);
            },

            onLeave: () => {
                // Rotation is complete
                updateImages(1);
            },

            onEnterBack: (self) => {
                updateImages(self.progress);
            },

            onLeaveBack: () => {
                updateImages(0);
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <div
            ref={orbitRef}
            className="
          image-rotate
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
          w-[23.5rem]
          h-[28.125rem]
          flex
          items-center
          justify-center
        "
        >
            {/* IMAGE 1 */}
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
          "
                data-angle="-219.401"
            >
                <img
                    src="/images/testimonial_img1.jpg"
                    alt="Marketing"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 2 */}
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
          "
                data-angle="-174.401"
            >
                <img
                    src="/images/testimonial_img2.jpg"
                    alt="Social"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 3 */}
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
          "
                data-angle="-129.401"
            >
                <img
                    src="/images/testimonial_img3.jpg"
                    alt="Ecommerce"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 4 */}
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
          "
                data-angle="-84.4008"
            >
                <img
                    src="/images/testimonial_img4.jpg"
                    alt="Performance"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 5 */}
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
          "
                data-angle="-39.4008"
            >
                <img
                    src="/images/testimonial_img5.jpg"
                    alt="Events"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 6 */}
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
          "
                data-angle="5.5992"
            >
                <img
                    src="/images/testimonial_img6.png"
                    alt="Testimonial"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 7 */}
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
          "
                data-angle="50.5992"
            >
                <img
                    src="/images/testimonial_img7.jpg"
                    alt="Testimonial"
                    className="h-full w-auto max-w-none"
                />
            </div>

            {/* IMAGE 8 */}
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
          "
                data-angle="95.5992"
            >
                <img
                    src="/images/testimonial_img8.jpg"
                    alt="Testimonial"
                    className="h-full w-auto max-w-none"
                />
            </div>
        </div>
    );
}