import React from 'react'
import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
const BecomeSponsor = () => {
    return (
        <section className="relative py-[120px] bg-black">
            <div className='max-w-7xl mx-auto w-full px-[20px]'>
                <div className='flex flex-col gap-[40px] md:w-[85%] w-full mx-auto'>
                    <div className='flex flex-col gap-[30px] justify-center items-center'>
                        <h2 className='mil-up uppercasemil-up flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] font-black text-white uppercase leading-[1] gap-[10px] text-center font-montserrat'>BECOME A SPONSOR<span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>Power PhilSec Awards</span></h2>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center'>
                        <p className='mil-up text-[1rem] leading-[1.6] text-center text-white font-montserrat'>The awards show presents the lucrative opportunity to fuel the industry’s most remarkable celebration of excellence and position your organisation amidst influential C-suite audience.</p>
                        <div className='flex flex-col gap-[40px]'>
                            <div className='mil-up text-white text-[1.5rem] font-normal text-center uppercase font-montserrat'>KEY Benefits</div>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[100px] gap-y-[60px]'>
                                <div className={`${customCalss["mil-benefits"]} mil-up relative flex flex-col gap-[30px] items-center`}>
                                    <div className={`${customCalss["mil-icon-border"]} bg-transparent  transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src="/images/icon1-2.png" alt="WFIS Kenya" width={36} height={36} /></div>
                                    <h3 className="text-[1.13rem] font-bold uppercase text-white text-center font-montserrat">Enhance your brand visibility</h3>
                                </div>
                                <div className={`${customCalss["mil-benefits"]} mil-up relative flex flex-col gap-[30px] items-center`}>
                                    <div className={`${customCalss["mil-icon-border"]} bg-transparent  transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src="/images/icon2-2.png" alt="WFIS Kenya" width={36} height={36} /></div>
                                    <h3 className="text-[1.13rem] font-bold uppercase text-white text-center font-montserrat">Leverage unparalleled networking opportunities</h3>
                                </div>
                                <div className={`${customCalss["mil-benefits"]} mil-up relative flex flex-col gap-[30px] items-center`}>
                                    <div className={`${customCalss["mil-icon-border"]} bg-transparent  transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src="/images/icon3-2.png" alt="WFIS Kenya" width={36} height={36} /></div>
                                    <h3 className="text-[1.13rem] font-bold uppercase text-white text-center font-montserrat">Gain industry-wide recognition & credibility</h3>
                                </div>
                                <div className={`${customCalss["mil-benefits"]} mil-up relative flex flex-col gap-[30px] items-center`}>
                                    <div className={`${customCalss["mil-icon-border"]} bg-transparent  transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src="/images/icon4-2.png" alt="WFIS Kenya" width={36} height={36} /></div>
                                    <h3 className="text-[1.13rem] font-bold uppercase text-white text-center font-montserrat">Opportunity to reward regional talent</h3>
                                </div>
                                <div className={`${customCalss["mil-benefits"]} mil-up relative flex flex-col gap-[30px] items-center`}>
                                    <div className={`${customCalss["mil-icon-border"]} bg-transparent  transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src="/images/icon5-2.png" alt="WFIS Kenya" width={36} height={36} /></div>
                                    <h3 className="text-[1.13rem] font-bold uppercase text-white text-center font-montserrat">Get maximum industry influence</h3>
                                </div>
                                <div className={`${customCalss["mil-benefits"]} mil-up relative flex flex-col gap-[30px] items-center`}>
                                    <div className={`${customCalss["mil-icon-border"]} bg-transparent  transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src="/images/morale-white.png" alt="WFIS Kenya" width={36} height={36} /></div>
                                    <h3 className="text-[1.13rem] font-bold uppercase text-white text-center font-montserrat">Position your brand as an industry leader</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BecomeSponsor