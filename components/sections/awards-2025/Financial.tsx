import React from 'react'
import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
const Financial = () => {
    return (
        <section className='bg-white relative md:pt-[120px] md:py-[90px] pt-[90px]'>
            <div className='max-w-7xl mx-auto w-full px-[20px]'>
                <div className='flex flex-col gap-y-[60px] lg:flex-row-reverse items-center justify-between'>
                    <div className='lg:w-[40%] w-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <h2 className="font-montserrat mil-up flex flex-col text-[clamp(1.3rem,3vw,2rem)] text-black font-black uppercase leading-[1] gap-[10px]">Cybersecurity’s<span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'> Most Prestigious!</span></h2>
                            <p className='font-montserrat mil-up text-[1rem] leading-[1.6] text-black'>Diving into the Philippines’ rich talent base, the award platform recognizes the best minds from the cybersecurity landscape for their pioneering work, remarkable achievements and exemplary contributions that are redefining the course of the industry’s future.</p>
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full'>
                        <div className="mil-up relative pb-[90px] mb-[90px] sm:h-[606px] h-[300px] w-full">
                            <div className="mil-image-frame absolute overflow-hidden top-0 left-0 w-full h-full z-20">
                                <Image
                                    src="/images/awards-2025.jpg"
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

                </div>

            </div>
        </section>
    )
}

export default Financial