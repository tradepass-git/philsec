"use client";

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
const Counter = ({ end = 35 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;

        let start = 0;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, 30);

        return () => clearInterval(timer);
    }, [visible, end]);

    return <span ref={ref}>{count}%</span>;
};
const JudgingProcedure = () => {
    return (
        <section className={`${customCalss["judging-procedure"]} relative py-[120px] bg-black`}>
            <div className='max-w-7xl mx-auto w-full px-[20px]'>
                <div className='flex flex-col justify-between lg:flex-row'>
                    <div className='w-full lg:w-[40%] flex flex-col gap-[30px]'>
                        <div className='mil-up text-[clamp(1.3rem,3vw,2rem)] text-white font-black uppercase leading-[1] font-montserrat'>Judging Procedure</div>
                        <p className='mil-up text-[#ffffffbf] font-montserrat'> Esteemed thought leaders and industry experts judge entries based on uploaded project-related
                            documents. Confidentiality is ensured, and winners are determined by the entrant with the
                            highest overall score after multiple rounds of evaluation.</p>
                        <div className="mil-up relative pb-[90px] mb-[90px] sm:h-[549px] h-[300px] w-full">
                            <div className="mil-image-frame absolute overflow-hidden top-0 left-0 w-full h-full z-20">
                                <Image
                                    src="/images/judging-2025.jpg"
                                    alt="PhilSec Awards"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    data-value1="1"
                                    data-value2="1.3"
                                    className="mil-scale object-cover object-center"
                                />
                            </div>
                            <div className={`${customCalss["mil-about-counter"]} absolute p-[60px] -right-[1px] -bottom-[1px] bg-[#fff0] min-h-[270px] w-[245px] z-10`}></div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%] flex flex-col gap-[30px]'>
                        <div className={`${customCalss["mil-accordion-group"]} mil-up flex flex-col gap-[30px] pb-[30px]`}>
                            <div className='uppercase text-white text-[1rem] font-bold px-[10px] font-montserrat'>Crucial Steps</div>
                            <ul className='pl-[30px] pr-[10px] h-full w-full space-y-[20px]'>
                                <li className='flex items-start text-[#ffffffbf] cursor-pointer group font-montserrat'><Image width={15} height={15} src="/images/11.svg" alt='icon' className='mt-5 mr-[20px] group-hover:mr-[30px] transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1)' /> Each entry is first screened to ensure that it meets the
                                    qualification criteria.</li>
                                <li className='flex items-start  text-[#ffffffbf] cursor-pointer group font-montserrat'><Image width={15} height={15} src="/images/11.svg" alt='icon' className='mt-5 mr-[20px] group-hover:mr-[30px] transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1)' /> After the initial round of screening, the entry gets approved and
                                    enters the evaluation stage.</li>
                                <li className='flex items-start  text-[#ffffffbf] cursor-pointer group font-montserrat'><Image width={15} height={15} src="/images/11.svg" alt='icon' className='mt-5 mr-[20px] group-hover:mr-[30px] transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1)' /> Rejected entries are provided with the feedback showcasing the
                                    reasons for the same, which gives the entrant the chance to make the required edits
                                    and do a re-submission.</li>
                                <li className='flex items-start  text-[#ffffffbf] cursor-pointer group font-montserrat'><Image width={15} height={15} src="/images/11.svg" alt='icon' className='mt-5 mr-[20px] group-hover:mr-[30px] transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1)' /> Based on set parameters all approved entries in a category are then
                                    evaluated based on their individual merit.</li>
                                <li className='flex items-start  text-[#ffffffbf] cursor-pointer group font-montserrat'><Image width={15} height={15} src="/images/11.svg" alt='icon' className='mt-5 mr-[20px] group-hover:mr-[30px] transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1)' /> The final collated score against each entry is the main decisive
                                    factor.</li>
                            </ul>

                        </div>

                        <div className={`${customCalss["mil-accordion-group"]} mil-up flex flex-col gap-[30px] pb-[30px]`}>
                            <div className='uppercase text-white text-[1rem] font-bold flex px-[10px] justify-between font-montserrat'>Achievement and Outcome <Counter end={35} /> </div>

                        </div>
                        <div className={`${customCalss["mil-accordion-group"]} mil-up flex flex-col gap-[30px] pb-[30px]`}>
                            <div className='uppercase text-white text-[1rem] font-bold flex px-[10px] justify-between font-montserrat'>Methodology of The Project <Counter end={20} /></div>

                        </div>
                        <div className={`${customCalss["mil-accordion-group"]} mil-up flex flex-col gap-[30px] pb-[30px]`}>
                            <div className='uppercase text-white text-[1rem] font-bold flex px-[10px] justify-between font-montserrat'>Creativity and Innovation <Counter end={10} /></div>

                        </div>
                        <div className={`${customCalss["mil-accordion-group"]} mil-up flex flex-col gap-[30px] pb-[30px] !border-0`}>
                            <div className='uppercase text-white text-[1rem] font-bold flex px-[10px] justify-between font-montserrat'>Execution of The Project <Counter end={35} /></div>

                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default JudgingProcedure