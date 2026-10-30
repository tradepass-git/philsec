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
            "DSC_1798",
            "DSCF7102",
            "DSCF7114",
            "DSCF7117",
            "DSCF7118",
            "DSCF7119",
            "IMGL0001",
            "IMGL0005",
            "IMGL0026",
            "IMGL0075",
            "IMGL0088",
            "IMGL0094",
            "IMGL0109",
            "IMGL0114",
            "IMGL0121",
            "IMGL0127",
            "IMGL0128",
            "IMGL0133",
            "IMGL0145",
            "IMGL0151",
            "IMGL0163",
            "JME_9054",
            "JME_9063",
            "P1048077_1",
            "RDY_7065",

        ]
    },
    {
        name: "Opening Ceremony",
        photoId: [
            "DSC_1921",
            "DSC_1923",
            "DSC_1930",
            "DSC_1936",
            "DSC_1949",
            "DSC_2044",
            "DSC_2063",
            "DSC_2121",
            "DSC_2127",
            "DSC_2161",
            "IMGL0196",
            "IMGL0197",
            "IMGL0202",
            "IMGL0205",
            "IMGL0244",
            "IMGL0262",
            "IMGL0283",
            "ROD03819",
            "ROD03835",
            "ROD03884",
            "ROD03887",
            "ROD03890",
            "ROD03895",
            "ROD03913",
            "ROD03916",
        ]
    },
    {
        name: "Networking",
        photoId: [
            "DSCF7848",
            "DSCF8151",
            "DSCF8308",
            "DSCF8318",
            "DSCF8368",
            "DSCF8502",
            "DSCF8543",
            "DSCF8563_1",
            "DSCF8628_1",
            "P1055950",
            "ROD04308",
            "ROD04315",
            "ROD04322",
            "ROD04330",
            "ROD04334",
            "ROD04336",
            "ROD04338",
            "ROD04347",
            "ROD04360",
            "ROD04367",
            "ROD04370",
            "ROD04371",
            "ROD04387",
            "ROD04399",
            "ROD04402",
            "ROD04407",
            "ROD04421",
            "ROD04422",
            "ROD04432",
            "ROD04435",
            "ROD04449",
            "ROD04451",
            "ROD04452",
            "ROD04454",
            "ROD04462",
            "ROD04466",
            "ROD04474",
            "ROD04477",
            "ROD04486",
            "ROD04488",
        ]
    },
    {
        name: "Keynote",
        photoId: [
            "IMGL0302",
            "IMGL0395",
            "IMGL0433",
            "IMGL0451",
            "IMGL0469",
            "IMGL0481",
            "IMGL0562",
            "IMGL0627",
            "IMGL0636",
            "IMGL0649",
            "IMGL0975",
            "IMGL1012",
            "IMGL1025",
            "IMGL1084",
            "IMGL1117",
            "IMGL1133",
            "IMGL1139",
            "IMGL1145",
            "IMGL1172",
            "IMGL1207",
            "JME_0353",
            "JME_9448",
            "JME_9605",
            "JME_9770",
            "P1054867",
            "P1054905",
            "P1055284",
            "P1055375",
            "RDY_7393",
            "RDY_7534",
        ]
    },
    {
        name: "Panel Discussion",
        photoId: [
            "DSCF8286",
            "DSCF8582_1",
            "IMGL0657",
            "IMGL0713",
            "IMGL0810",
            "IMGL0819",
            "IMGL0852",
            "IMGL0944",
            "IMGL1247",
            "IMGL1298",
            "IMGL1302",
            "IMGL1453",
            "IMGL1622",
            "IMGL1683",
            "IMGL1748",
            "IMGL1825",
            "IMGL2543",
            "IMGL2547",
            "IMGL3369",
            "IMGL3469",
            "JME_0085",
            "JME_0447",
            "JME_0726",
            "JME_1970",
            "P1054957",
            "P1055458",
            "P1055524",
            "RDY_7605",
            "ROD04717",
            "ROD06030",
            "ROD06051",
            "ROD06115",
            "ROD06183",
        ]
    },
    {
        name: "Lunch",
        photoId: [
            "_DSC8332",
            "_DSC8333",
            "_DSC8335",
            "_DSC8737",
            "_DSC8741",
            "_DSC8742",
            "_DSC8745",
            "_DSC8748",
            "_DSC8752",
            "_DSC8770",
            "JME_2441",
            "JME_3363",
            "P1055601",
            "RDY_2392",
            "RDY_2418",
            "RDY_2775",
            "RDY_2788",
            "RDY_8388",
            "RDY_8475",
            "RDY_8488",
            "ROD06368",
            "ROD06373",
            "ROD06376",
            "ROD06381",
            "ROD06390",
        ]
    },
    {
        name: "Exhibition",
        photoId: [
            "_DSC8074",
            "_DSC8079",
            "_DSC8081",
            "_DSC8338",
            "_DSC8356",
            "_DSC8762",
            "_DSC8776",
            "DSCF8539",
            "DSCF8551",
            "DSCF8552_1",
            "DSCF8606_1",
            "JME_9164",
            "JME_9181",
            "JME_9223",
            "JME_9232",
            "P1048042",
            "P1048048",
            "ROD04314",
            "ROD04316",
            "ROD04318",
            "ROD04320",
            "ROD04324",
            "ROD04344",
            "ROD04356",
            "ROD04361",
            "ROD04376",
            "ROD04418",
            "ROD04418",
            "ROD04424",
            "ROD04427",
            "ROD04434",
            "ROD04444",
            "ROD04464",
        ]
    },
    {
        name: "Awards",
        photoId: [
            "IMGL3800",
            "IMGL3803",
            "IMGL3805",
            "IMGL3892",
            "IMGL3914",
            "IMGL4065",
            "IMGL4222",
            "IMGL4273",
            "IMGL4278",
            "IMGL4312",
            "IMGL4323",
            "IMGL4348",
            "IMGL4361",
            "IMGL4396",
            "IMGL4402",
            "IMGL4434",
            "IMGL4437",
            "IMGL4464",
            "IMGL4482",
            "IMGL4568",
            "IMGL4571",
            "IMGL4574",
            "IMGL4580",
            "IMGL4627",
            "IMGL4667",
            "ROD07260",
            "ROD07263",
            "ROD07266",
            "ROD07293",
            "ROD07951"
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
                                                src={`/images/gallery/2026/${sectionSlug}/${id}.webp`}
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
                                    src={`/images/gallery/2026/${slug}/${images[currentIndex]}.webp`}
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