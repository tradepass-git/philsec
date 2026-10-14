"use client";

import Image from "next/image";

type GalleryImage = {
    id: string;
    width: number;
    height: number;
};

type GalleryStat = {
    value: string;
    lines: string[];
    variant?: "teal" | "yellow";
};

type GalleryVideo = {
    path: string;
    width: number;
    height: number;
};

type GalleryItem =
    | { type: "image"; data: GalleryImage }
    | { type: "stat"; data: GalleryStat }
    | { type: "video"; data: GalleryVideo };

const image = (
    id: string,
    width: number,
    height: number
): GalleryItem => ({
    type: "image",
    data: { id, width, height },
});

const video = (
    path: string,
    width: number,
    height: number
): GalleryItem => ({
    type: "video",
    data: { path, width, height },
});

const stat = (
    value: string,
    lines: string[],
    variant?: "teal" | "yellow"
): GalleryItem => ({
    type: "stat",
    data: { value, lines, variant },
});

const topRow: GalleryItem[] = [
    video("cocktail_gala_dinner_312_208_1.mp4", 500, 300),
    stat("50K+", ["sqft of", "Exhibition Space"]),
    video("speaker_1_500_333_1.mp4", 500, 300),
    stat("1500+", ["Leading", "Organisations"]),
    video("grand_premier_performance_452_301_1.mp4", 500, 300),
    stat("15+", ["Award", "Winners"], "teal"),
    video("exhibition_500_333_1.mp4", 500, 300),
    stat("250+", ["Sponsors &", "Partners"], "yellow"),
    video("conference_312x208_1.mp4", 500, 300),
    stat("3500+", ["Pre-Qualified", "Attendees"], "teal"),
    video("timelapse_500_333_1.mp4", 500, 300),
    stat("200+", ["Top-Notch", "Speakers"], "yellow"),
    video("award_speaker_1_500_333_1.mp4", 500, 300),
];

const bottomRow: GalleryItem[] = [
    video("cocktail_gala_dinner_312_208_1.mp4", 500, 300),
    stat("50K+", ["sqft of", "Exhibition Space"]),
    video("speaker_1_500_333_1.mp4", 500, 300),
    stat("1500+", ["Leading", "Organisations"]),
    video("grand_premier_performance_452_301_1.mp4", 500, 300),
    stat("15+", ["Award", "Winners"], "teal"),
    video("exhibition_500_333_1.mp4", 500, 300),
    stat("250+", ["Sponsors &", "Partners"], "yellow"),
    video("conference_312x208_1.mp4", 500, 300),
    stat("3500+", ["Pre-Qualified", "Attendees"], "teal"),
    video("timelapse_500_333_1.mp4", 500, 300),
    stat("200+", ["Top-Notch", "Speakers"], "yellow"),
    video("award_speaker_1_500_333_1.mp4", 500, 300),
];

function GalleryItemView({ item }: { item: GalleryItem }) {
    if (item.type === "image") {
        const photo = item.data;

        return (
            <div
                className="relative h-[220px] max-h-[23.44rem] shrink-0 overflow-hidden rounded-3xl sm:h-[280px] lg:h-[350px]"
                style={{
                    aspectRatio: `${photo.width} / ${photo.height}`,
                }}
            >
                <Image
                    src={`/images/community/${photo.id}.webp`}
                    alt="PhilSec community"
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 300px"
                    className="object-cover"
                />
            </div>
        );
    }

    if (item.type === "video") {
        const clip = item.data;

        return (
            <div
                className="relative h-[220px] max-h-[23.44rem] shrink-0 overflow-hidden rounded-3xl sm:h-[280px] lg:h-[350px]"
                style={{
                    aspectRatio: `${clip.width} / ${clip.height}`,
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                >
                    <source
                        src={`/video/videogallery/${clip.path}`}
                        type="video/mp4"
                    />
                </video>
            </div>
        );
    }

    const card = item.data;

    const colorClass =
        card.variant === "teal"
            ? "bg-[var(--forth-color)] text-black"
            : card.variant === "yellow"
                ? "bg-[var(--secondary-color)] text-black"
                : "bg-[#F3F3F3] text-black";

    return (
        <div
            className={`flex h-[220px] max-h-[23.44rem] w-[220px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-6 sm:h-[280px] sm:w-[280px] sm:p-8 lg:h-[350px] lg:w-[350px] lg:p-10 ${colorClass}`}
        >
            <h3 className="font-oswald text-[clamp(2.5rem,5vw,12rem)] font-bold leading-none tracking-[-0.04em]">
                {card.value}
            </h3>

            <div className="text-[clamp(1rem,2vw,2rem)] font-medium leading-tight">
                {card.lines.map((line, index) => (
                    <div key={`${line}-${index}`}>{line}</div>
                ))}
            </div>
        </div>
    );
}

function MarqueeRow({
    items,
    direction,
}: {
    items: GalleryItem[];
    direction: "left" | "right";
}) {
    return (
        <div className="community-marquee relative w-full overflow-hidden">
            <div
                className={`community-marquee-track flex w-max items-stretch gap-[30px] ${direction === "left"
                        ? "community-marquee-left"
                        : "community-marquee-right"
                    }`}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        className="flex shrink-0 items-stretch gap-[30px]"
                        aria-hidden={copy === 1}
                    >
                        {items.map((item, index) => (
                            <GalleryItemView
                                key={`${copy}-${item.type}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CommunityGallery() {
    return (
        <section className="gallery relative flex flex-col gap-[30px] overflow-hidden py-[80px]" data-gradient-section="default">
            <MarqueeRow items={topRow} direction="left" />
            <MarqueeRow items={bottomRow} direction="right" />
        </section>
    );
}