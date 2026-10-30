"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
type GallerySection = {
    name: string;
    photoId: string[];
};

const gallery: GallerySection[] = [
    {
        name: "Registration",
        photoId: [
            "DSC03343",
            "DSC03344",
            "DSC03318",
            "DSC03204",
            "C8698T01",
            "C8709T01",
            "DSC03153",
            "DSC03349",
            "DSC03960",
            "DSC03359",
            "DSC03206",
            "DSC03309",
            "DSC03317",
            "DSC03348",
            "DSC03208"
        ]
    },
    {
        name: "Opening Ceremony",
        photoId: [
            "DSC03231",
            "DSC03247",
            "DSC03243",
            "DSC05993",
            "DSC06124",
            "IQP03797",
            "DSC06447",
            "DSC06450",
            "IQP03802",
            "IQP03817"
        ]
    },
    {
        name: "Networking",
        photoId: [
            "C8823T01",
            "DSC03462",
            "DSC03746",
            "DSC03618",
            "DSC03756",
            "DSC03749",
            "DSC03216",
            "DSC03619",
            "DSC03488",
            "DSC03510"
        ]
    },
    {
        name: "Keynote",
        photoId: [
            "DSC06421",
            "DSC06427",
            "C8897T01",
            "DSC06480",
            "C8875T01",
            "DSC06409",
            "DSC06847",
            "DSC06851",
            "DSC07121",
            "DSC07136",
            "DSC07057",
            "DSC07061",
            "DSC06854",
            "DSC06870",
            "DSC06149",
            "DSC03449",
            "DSC06502",
            "DSC06516",
            "DSC06986",
            "DSC06998"
        ]
    },
    {
        name: "Panel Discussion",
        photoId: [
            "DSC06200",
            "DSC06254",
            "DSC06259",
            "DSC06344",
            "DSC06672",
            "DSC06744",
            "DSC06793",
            "DSC06803",
            "DSC06874",
            "DSC06957"
        ]
    },
    {
        name: "Lunch",
        photoId: [
            "DSC03739",
            "DSC03740",
            "DSC04223",
            "DSC04230",
            "DSC04151",
            "DSC04228",
            "C8888T01",
            "C8885T01",
            "DSC03737",
            "DSC03734",
            "DSC04036",
            "DSC03726",
            "DSC03733",
            "DSC03724",
            "DSC03932"
        ]
    },
    {
        name: "Exhibition",
        photoId: [
            "DSC03582",
            "DSC03768",
            "DSC03702",
            "DSC03711",
            "DSC04098",
            "DSC03283",
            "DSC03555",
            "DSC03593",
            "DSC03580",
            "DSC03670",
            "DSC03643",
            "DSC03594",
            "DSC04053",
            "DSC03681",
            "DSC03603",
            "DSC03792",
            "DSC03300",
            "C8819T01",
            "DSC03763",
            "DSC03430"
        ]
    }
];

const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-");

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slug, setSlug] = useState("");
    const [mounted, setMounted] = useState(false);

    // Fix hydration issue for portal
    useEffect(() => {
        setMounted(true);
    }, []);

    // Disable scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight")
                setCurrentIndex((prev) => (prev + 1) % images.length);
            if (e.key === "ArrowLeft")
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, images]);

    return (
        <>
            <section className="py-[80px] bg-white">
                <div className="flex flex-col gap-[60px] px-[20px]">
                    {gallery.map((section, index) => {
                        const sectionSlug = slugify(section.name);

                        return (
                            <div key={index}>
                                <h3 className="text-[1.75rem] font-bold text-black mb-6">
                                    {section.name}
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px]">
                                    {section.photoId.map((id, i) => (
                                        <div
                                            key={i}
                                            className="relative w-full aspect-square cursor-pointer overflow-hidden"
                                            onClick={() => {
                                                setImages(section.photoId);
                                                setCurrentIndex(i);
                                                setSlug(sectionSlug);
                                                setIsOpen(true);
                                            }}
                                        >
                                            <Image
                                                src={`/images/gallery/2025/${sectionSlug}/${id}.jpg`}
                                                alt={id}
                                                fill
                                                className="object-cover hover:scale-110 transition"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 🔥 Portal Modal */}
            {mounted &&
                createPortal(
                    isOpen && images[currentIndex] && (
                        <div
                            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {/* Close */}
                            <button className="absolute top-6 right-6 text-white text-3xl">
                                ✕
                            </button>

                            {/* Image */}
                            <div
                                className="relative w-[85vw] max-w-[900px] h-[75vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={`/images/gallery/2025/${slug}/${images[currentIndex]}.jpg`}
                                    alt=""
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Prev */}
                            <button
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(
                                        (currentIndex - 1 + images.length) % images.length
                                    );
                                }}
                            >
                                ‹
                            </button>

                            {/* Next */}
                            <button
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(
                                        (currentIndex + 1) % images.length
                                    );
                                }}
                            >
                                ›
                            </button>
                        </div>
                    ),
                    document.body
                )}
        </>
    );
}