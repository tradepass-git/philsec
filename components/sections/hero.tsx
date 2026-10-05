"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react'
import Modal from '@/components/ui/Modal';
import CustomClass from "@/public/css/CustomClass.module.css";
const facts = [
    {
        number: "$682.16",
        sing: "M",
        text: "Projected value of the Philippines cybersecurity market by 2032",
        border: "border-b sm:border-0 sm:border-r  border-[#3f3f3f87]"
    },
    {
        number: "84",
        sing: "%",
        text: "Philippine firms faced supply chain cyber incidents last year",
        border: "border-b sm:border-0 sm:border-r border-[#3f3f3f87]"
    },
    {
        number: "$169.8",
        sing: "M",
        text: "Estimated annual loss attributed to cybercrime",
        border: "border-b sm:border-0 sm:border-r border-[#3f3f3f87]"
    },
    {
        number: "97.5",
        sing: "M",
        text: "Total internet users in the Philippines",
        border: "border-b sm:border-0 sm:border-r border-[#3f3f3f87]"
    },
    {
        number: "9.73",
        sing: "%",
        text: "Expected CAGR for cybersecurity services segment through 2030",
    }

]
const hero = () => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [hubspotId, setHubspotId] = useState<string>("");
    return (
        <>
            <section className="relative w-full h-screen bg-black flex flex-col justify-between overflow-hidden">
                <div className="hero-video relative w-full h-[60vh]">
                    <video
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    >
                        <source src="/video/hero.mp4" type="video/mp4" />
                    </video>
                    <div className="relative flex flex-col h-full w-full justify-center gap-[30px] z-10">
                        <div className="relative w-full h-[clamp(110px,18vw,120px)] min-[1400]:!h-[200px]">
                            <Image
                                src="/images/philsec-logo.png"
                                alt="PhilSec"
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex gap-[40px] items-center justify-center">
                            <div className="text-[clamp(1rem,3vw,1.5rem)] font-bold uppercase flex justify-center items-center gap-[10px]">july 1-2 <span className="block w-[1px] h-[15px] bg-white"></span> 2027</div>
                            <div className="flex gap-[20px] items-center">
                                <a href="#" id="sss-sponsor" onClick={(e) => {
                                    e.preventDefault();
                                    setHubspotId("3656a56e-729c-4535-a064-83d26f8f18e2");
                                    setModalTitle("Sponsor Enquiry");
                                    setOpen(true);
                                }} className={`${CustomClass.ctaButton}`}>

                                    <span><span>REGISTER FOR 2027</span><span>REGISTER FOR 2027</span></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /></svg>
                                </a>

                            </div>
                            <div className="text-[clamp(1rem,3vw,1.5rem)] font-bold flex justify-center items-center gap-[10px] leading-[1.1]">Manila Marriott Hotel,<br />Philippines</div>

                        </div>
                        <div className='flex flex-col items-center justify-center'><h2
                            className="font-satoshi text-white font-black leading-[1.4] text-[clamp(1.2rem,4vw,2.5rem)] text-center tracking-[0.04rem] uppercase  flex flex-col">
                            <span className='font-light text-white text-[clamp(1.2rem,4vw,1.8rem)]'>The Philippines’ Roadmap to a</span> <span> Cyber Resilient Future</span></h2></div>

                    </div>
                </div>
                <div className="glance-section relative overflow-hidden h-[38vh]">
                    <div className="mx-auto w-[90%] min-[1800px]:w-[80%] min-[2200px]:w-[75%] relative z-10 py-[20px] px-[20px] border border-[#3f3f3f87] rounded-3xl">
                        <div className="grid grid-cols-12 justify-items-center gap-y-[20px]">
                            <div className="xl:col-span-1 col-span-12 flex items-center pl-[40px]">
                                <div className="text-[clamp(1rem,4vw,1.5rem)] hidden xl:block font-bold uppercase text-white tracking-[0.01rem] leading-[1.2]">
                                    Key<br />Statistics</div>
                                <div className="text-[1.5rem] text-center xl:hidden font-bold uppercase text-white tracking-[0.01rem]">
                                    Key Statistics</div>
                            </div>
                            <div className="xl:col-span-11 col-span-12">
                                <div className="flex flex-col flex-wrap w-full gap-y-[20px] sm:gap-y-[40px] lg:gap-0 sm:flex-row justify-between lg:justify-start lg:flex-nowrap xl:ml-[70px]">
                                    {facts.map((fact, i) => (
                                        <div key={i}
                                            className={`flex flex-col justify-center w-full sm:w-[20%] lg:w-full gap-[5px] px-[1rem] 2xl:px-[1.5rem] min-[1800px]:px-[3rem] min-[2200px]:px-[2rem] text-left ${fact.border}`}>
                                            <div
                                                className="font-zuume text-[clamp(4.4rem,6vw,4.4rem)] lg:text-[clamp(2rem,4vw,4.4rem)] justify-center xl:justify-start font-semibold uppercase text-[var(--secondary-color)] tracking-[0.01rem] leading-[1] flex items-center gap-[5px]">
                                                {fact.number}<span className="text-[clamp(1.5rem,4vw,2rem)] font-bold">{fact.sing}</span></div>
                                            <p className="text-[0.7rem] 2xl:text-[0.9rem] pb-[20px] sm:pb-0 font-medium text-white tracking-wide leading-[1.4] text-center xl:text-left" dangerouslySetInnerHTML={{ __html: fact.text }}></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
            <Modal
                isOpen={open}
                title={modalTitle}
                formId={hubspotId}
                onClose={() => {
                    setOpen(false);
                }}>
            </Modal>
        </>
    )
}

export default hero