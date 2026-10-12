import React from "react";
import Image from 'next/image';
const topics = [
    {
        icon: "/images/industry/goverment.svg",
        name: "Government",
    },
    {
        icon: "/images/industry/bank.svg",
        name: "Bank",
    },
    {
        icon: "/images/industry/insurance.svg",
        name: "Insurance",
    },
    {
        icon: "/images/industry/ecommerce.svg",
        name: "E-COMMERCE",
    },
    {
        icon: "/images/industry/telecom.svg",
        name: "TELECOM",
    },
    {
        icon: "/images/industry/oilgas.svg",
        name: "OIL & GAS",
    },
    {
        icon: "/images/industry/retail.svg",
        name: "RETAIL",
    },
    {
        icon: "/images/industry/healthcare.svg",
        name: "HEALTHCARE",
    },
    {
        icon: "/images/industry/mining.svg",
        name: "MINING",
    },
    {
        icon: "/images/industry/fmcg.svg",
        name: "FMCG",
    },
    {
        icon: "/images/industry/media.svg",
        name: "MEDIA",
    },
    {
        icon: "/images/industry/avacation.svg",
        name: "AVIATION",
    },
    {
        icon: "/images/industry/logistics.svg",
        name: "LOGISTICS",
    },
    {
        icon: "/images/industry/construction.svg",
        name: "CONSTRUCTION",
    },
    {
        icon: "/images/industry/education.svg",
        name: "EDUCATION",
    },
    {
        icon: "/images/industry/agriculture.svg",
        name: "AGRICULTURE",
    },
    {
        icon: "/images/industry/hospitality.svg",
        name: "HOSPITALITY",
    },
    {
        icon: "/images/industry/automobile.svg",
        name: "AUTOMOBILE",
    }
];

const Industry_2 = () => {
    const rows = [7, 5, 3, 2, 1];
    let startIndex = 0;

    return (
        <section
            className="topics-section Industry relative overflow-hidden py-[100px]"
            data-gradient-section="default"
        >
            <div className="relative z-10 mx-auto w-full max-w-7xl px-[10px]">
                <div className="flex flex-col items-center gap-[60px]">
                    <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2] text-white">
                        Industry Breakdown
                    </h2>

                    <div className="flex w-full flex-col items-center gap-[20px]">
                        {rows.map((rowCount, rowIndex) => {
                            const rowTopics = topics.slice(
                                startIndex,
                                startIndex + rowCount
                            );

                            startIndex += rowCount;

                            if (rowTopics.length === 0) return null;

                            return (
                                <div
                                    key={rowIndex}
                                    className="flex w-full flex-wrap justify-center gap-[12px] md:gap-[20px]"
                                >
                                    {rowTopics.map((topic, index) => (
                                        <div
                                            key={`${topic.name}-${index}`}
                                            className="group flex gap-[10px] min-w-[100px] cursor-pointer items-center justify-center rounded-3xl border border-[#e3ff65] px-[20px] py-[10px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                                        >
                                            <div className="relative w-[22px] h-[22px]">
                                                <Image
                                                    priority
                                                    src={topic.icon}
                                                    alt={topic.name}
                                                    fill
                                                    sizes="22px"
                                                    className="object-contain transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:rotate-y-180 group-hover:[filter:none] group-hover:duration-[900ms]"
                                                />
                                            </div>
                                            <p className="text-center text-[12px] font-normal uppercase leading-[150%] text-white transition-colors duration-300 lg:text-[0.9rem]">
                                                {topic.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industry_2;