import React from 'react'
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

const Industry = () => {
    return (
        <section className="topics-section relative overflow-hidden py-[100px]">
            <div className="max-w-7xl mx-auto w-full relative z-10 items-center px-[10px]">
                <div className="flex flex-col items-center gap-[80px]">
                    <div className="heading flex flex-col items-center gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">
                                Industry Breakdown</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[20] gap-y-[20] w-full'>
                        {topics.map((topic, i) => (
                            <div key={i} className="group relative flex flex-col gap-[40] justify-center items-center rounded-xl border border-[#2472fc] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[var(--secondary-color)] cursor-pointer">
                                <div className='w-full flex flex-col gap-[14px] justify-center items-center text-center min-h-[150px]'>
                                    <div className="relative w-[42px] h-[42px]">
                                        <Image
                                            priority
                                            src={topic.icon}
                                            alt={topic.name}
                                            fill
                                            sizes="42px"
                                            className="object-contain transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:rotate-y-180 group-hover:[filter:none] group-hover:duration-[900ms]"
                                        />
                                    </div>
                                    <p className='text-white font-bold text-[12px] lg:text-[0.9rem] leading-[150%] uppercase' dangerouslySetInnerHTML={{ __html: topic.name }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industry