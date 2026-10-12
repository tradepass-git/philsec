
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

type GalleryItem =
    | { type: "image"; data: GalleryImage }
    | { type: "stat"; data: GalleryStat };

const image = (id: string, width: number, height: number): GalleryItem => ({
    type: "image",
    data: { id, width, height },
});

const stat = (
    value: string,
    lines: string[],
    variant?: "teal" | "yellow"
): GalleryItem => ({
    type: "stat",
    data: { value, lines, variant },
});

/* First row */
const topRow: GalleryItem[] = [
    image("6212", 500, 281),
    stat("50K+", ["sqft of", "Exhibition Space"]),
    image("6187", 500, 368),
    image("6206", 500, 463),
    stat("1500+", ["Leading", "Organisations"]),
    image("6207", 452, 563),
    image("6208", 312, 375),
    image("6209", 500, 463),
    stat("15+", ["Award", "Winners"], "teal"),
    image("6210", 452, 563),
    image("6211", 500, 368),
    stat("250+", ["Sponsors &", "Partners"], "yellow"),
    image("6189", 500, 463),
    image("6216", 500, 463),
    image("6217", 452, 563),
    stat("3500+", ["Pre-Qualified", "Attendees"], "teal"),
    image("6213", 500, 463),
    stat("200+", ["Top-Notch", "Speakers"], "yellow"),
];

/* Second row */
const bottomRow: GalleryItem[] = [
    image("6218", 400, 563),
    image("6219", 500, 375),
    stat("200+", ["Top-Notch", "Speakers"], "teal"),
    image("6225", 500, 463),
    stat("3500+", ["Pre-Qualified", "Attendees"], "yellow"),
    image("6220", 312, 375),
    image("6224", 312, 375),
    image("6204", 312, 375),
    stat("250+", ["Sponsors &", "Partners"], "teal"),
    image("6186", 400, 563),
    image("6196", 500, 463),
    image("6191", 500, 463),
    image("6202", 400, 563),
    stat("15+", ["Awards", "Winners"], "yellow"),
    image("4820", 500, 463),
];

function GalleryItemView({ item }: { item: GalleryItem }) {
    if (item.type === "image") {
        const photo = item.data;

        return (
            <div
                className="relative h-[180px] w-[180px] shrink-0 overflow-hidden sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px]"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
                <Image
                    src={`/images/community/${photo.id}.webp`}
                    alt="PhilSec community"
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
                    className="h-full w-full object-cover"
                />
            </div>
        );
    }

    const card = item.data;

    const colorClass =
        card.variant === "teal"
            ? "bg-[#00C8B3] text-black"
            : card.variant === "yellow"
                ? "bg-[#D3FF00] text-black"
                : "bg-[#F3F3F3] text-black";

    return (
        <div
            className={`flex h-[180px] w-[180px] shrink-0 flex-col justify-between p-4 sm:h-[220px] sm:w-[220px] sm:p-5 lg:h-[260px] lg:w-[260px] lg:p-6 ${colorClass}`}
        >
            <h3 className="text-[42px] font-bold leading-none tracking-[-0.04em] sm:text-[54px] lg:text-[clamp(48px,5vw,80px)]">
                {card.value}
            </h3>

            <div className="text-[19px] font-medium leading-tight sm:text-[23px] lg:text-[28px]">
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
        <div className="community-marquee relative flex w-full overflow-hidden">
            <div
                className={`community-marquee-track flex w-max shrink-0 items-stretch gap-[10px] pr-[10px] ${direction === "left"
                        ? "community-marquee-left"
                        : "community-marquee-right"
                    }`}
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        className="flex shrink-0 items-stretch gap-[10px]"
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
        <section className="gallery relative overflow-hidden bg-black py-[50px] sm:py-[70px] lg:py-[100px]">
            <div className="mx-auto flex w-full flex-col gap-[10px]">
                <MarqueeRow items={topRow} direction="left" />
                <MarqueeRow items={bottomRow} direction="right" />
            </div>
        </section>
    );
}
