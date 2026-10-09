import React from 'react'
import Image from 'next/image';

const topics = [
    {
        icon: "dcci-01-01",
        name: "Cybersecurity Forecast",
    },
    {
        icon: "dcci-02-01",
        name: "Cloud Security",
    },
    {
        icon: "dcci-03-01",
        name: "Zero Trust",
    },
    {
        icon: "dcci-04-01",
        name: "Cyber Warfare",
    },
    {
        icon: "dcci-05-01",
        name: "IoT Cybersecurity",
    },
    {
        icon: "dcci-06-m-01",
        name: "Digital Forensics",
    },
    {
        icon: "dcci-07-01",
        name: "Mobile The New Target",
    },
    {
        icon: "dcci-08-01",
        name: "Protecting Enterprises",
    }
];

const Topics = () => {
    return (
        <section className="topics-section relative overflow-hidden flex flex-col justify-center items-center py-[100px]" data-gradient-section="default">
            <div className="max-w-7xl mx-auto w-full relative z-10 items-center px-[10px]">
                <div className="flex flex-col items-center gap-[80px]">
                    <div className="heading flex flex-col items-center gap-[40px]">
                        <div className="mx-auto flex w-full max-w-2xl flex flex-col items-center gap-[40px] text-center">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">
                                Topics of Discussion</h2>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-white">Curating the best-in-class case studies and insightful topics to aid in defining the right set of protocols and the future road map for the organizations.</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[28] gap-y-[30] w-full overflow-hidden'>
                        {topics.map((topic, i) => (
                            <div key={i} className={`single-topic ${i % 2 !== 0 ? 'top-border' : ''} totic-${i} group relative flex flex-col gap-[40] justify-center items-center`}>
                                <div className='bg-[#0d0b33] rotate-[20px] px-[20px]  w-full rounded-[20px] flex flex-col gap-[30px] justify-center items-center text-center min-h-[200px]'>

                                    <span className={`icon-${topic.icon} text-[42px] transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:rotate-y-180 group-hover:[filter:none] group-hover:duration-[900ms]`}></span>
                                    <p className='text-white font-500 text-[1rem] leading-[150%]' dangerouslySetInnerHTML={{ __html: topic.name }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topics