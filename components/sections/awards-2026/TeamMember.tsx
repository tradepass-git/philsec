import React from 'react'
import Image from 'next/image'
import customCalss from "@/public/css/CustomClass.module.css";
const TeamMember = () => {
    return (
        <section className="relative pb-[120px] pt-[120px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[50%] before:bg-black">
            <div className="max-w-7xl mx-auto w-full px-[20px]">
                <div className='bg-white sm:p-[60px] p-20 z-[1] relative grid lg:grid-cols-2 grid-cols-1 gap-[60px] border-[1] border-[#eaeaea]'>
                    <div className='relative w-full'>
                        <Image src="/images/team-member.jpg" alt='WFIS Kenya' width={589} height={707} className='w-full' />
                    </div>
                    <div className='relative w-full h-full flex flex-col justify-center'>
                        <div className='flex flex-col gap-[30px]'>
                            <h2 className='mil-up uppercasemil-up flex flex-col text-[clamp(1.3rem,3vw,2rem)] font-black uppercase leading-[1] gap-[10px] font-montserrat text-black'>MEDIA EXPOSURE<span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>AT PHILSEC AWARDS</span></h2>
                            <h3 className='mil-up uppercasemil-up flex flex-col text-[clamp(1rem,2vw,1.4rem)] font-bold uppercase leading-[1] gap-[10px] font-montserrat text-black'>Become the latest<span>industrywide sensation</span></h3>
                            <div className={`${customCalss["mil-divider-lg"]} bg-transparent border-[3] border-[#0000001a]`}></div>
                            <p className='text-[#4a4a4a] font-montserrat'>Being the Philippines’ leading cybersecurity event, PhilSec has always been favoured by a wide range of regional and international media.</p>
                            <p className='text-[#4a4a4a] font-montserrat'>Participating at the awards show does not only mean an extensive coverage through renowned news channels but also a focused promotion of your brand across various online platforms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMember