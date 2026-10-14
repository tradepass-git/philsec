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
        name: "E-Commerce",
    },
    {
        icon: "/images/industry/telecom.svg",
        name: "Telecom",
    },
    {
        icon: "/images/industry/oilgas.svg",
        name: "Oil & Gas",
    },
    {
        icon: "/images/industry/retail.svg",
        name: "Retail",
    },
    {
        icon: "/images/industry/healthcare.svg",
        name: "Healthcare",
    },
    {
        icon: "/images/industry/mining.svg",
        name: "Mining",
    },
    {
        icon: "/images/industry/fmcg.svg",
        name: "FMCG",
    },
    {
        icon: "/images/industry/media.svg",
        name: "Media",
    },
    {
        icon: "/images/industry/avacation.svg",
        name: "Aviation",
    },
    {
        icon: "/images/industry/logistics.svg",
        name: "Logistics",
    },
    {
        icon: "/images/industry/construction.svg",
        name: "Construction",
    },
    {
        icon: "/images/industry/education.svg",
        name: "Education",
    },
    {
        icon: "/images/industry/agriculture.svg",
        name: "Agriculture",
    },
    {
        icon: "/images/industry/hospitality.svg",
        name: "Hospitality",
    },
    {
        icon: "/images/industry/automobile.svg",
        name: "Automobile",
    }
];

const Industry_2 = () => {
    const rows = [6, 5, 4, 3, 2];
    let startIndex = 0;

    return (
        <section
            className="topics-section Industry relative overflow-hidden py-[80px]"
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
                                    className="flex gap-[0.75rem] lg:gap-[1.25rem]"
                                >
                                    {rowTopics.map((topic, index) => (
                                        <div key={`${topic.name}-${index}`} className="bg-[#18181969] py-[0.4rem] px-[0.4rem] rounded-full min-w-[11.50rem] justify-center items-center">
                                            <div className="bg-black relative rounded-full flex py-[0.9rem] px-[1rem] gap-[0.9rem] items-center">
                                                <div className="absolute inset-0 rounded-[inherit] overflow-hidden" style={{
                                                    WebkitMaskImage: "-webkit-radial-gradient(white, white)",
                                                }}><div className="tp-glass-border animate-border absolute inset-0 rounded-[inherit]"></div></div>
                                                <div className="relative z-[1] flex justify-center items-center w-[36px] h-[36px] bg-gradient-to-r from-[#FF9D00] to-[#FF6A00] rounded-[50%]">
                                                    <Image
                                                        priority
                                                        src={topic.icon}
                                                        alt={topic.name}
                                                        width={18}
                                                        height={18}
                                                        className=""
                                                    />
                                                </div>
                                                <p className="relative z-[1] fs-14 fs-6-mb text-white">
                                                    {topic.name}
                                                </p>
                                            </div>

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