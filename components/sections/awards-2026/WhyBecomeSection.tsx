import React from 'react'
import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
const WhyBecomeSection = () => {
    return (
        <section className='relative pb-[90px]'>
            <div className='max-w-7xl mx-auto w-full px-[20px]'>
                <div className='flex flex-wrap gap-y-[60px] items-center justify-between'>
                    <div className='lg:w-[40%] w-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <h2 className='mil-up flex flex-col text-[clamp(1.3rem,3vw,2rem)] font-black uppercase leading-[1] gap-[10px] font-montserrat text-black'>Why become a nominee <span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>at PhilSec Awards</span></h2>
                            <p className='mil-up text-[1rem] leading-[1.6] font-montserrat text-black'>PhilSec Awards not only brings you and your organisation in the eyes of cybersecurity’s biggest stakeholders including government institutions, regulators and policy makers but also ranks your authority amidst industry competitors. Most importantly, being a nominee gives you the ultimate opportunity to showcase your achievements on a national stage that witnesses participations from numerous domains.</p>
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full'>
                        <div className="mil-up relative pb-[90px] mb-[90px] sm:h-[606px] h-[300px] w-full">
                            <div className="mil-image-frame absolute overflow-hidden top-0 left-0 w-full h-full z-20">
                                <Image
                                    src="/images/awards-announcement-2026.jpg"
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

export default WhyBecomeSection