import React from 'react'
import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
const KeyBenefits = () => {
    const benefits = [
        {
            title: "Industrywide<br />Recognition & Credibility",
            description: "Being a nominee puts your innovations in the spotlight whilst reinforcing your subject matter expertise in the Philippines’ thriving cybersecurity landscape.",
            iconImg: "/images/Credibility.png"
        },
        {
            title: "Enhanced<br />Brand Visibility",
            description: "Nominees and winners receive extensive media exposure that further positions their brand as a trailblazer in cutting-edge technology and cybersecurity solutions.",
            iconImg: "/images/Brand-visibility.png"
        },
        {
            title: "Increased Business<br />& Potential Partnerships",
            description: "Nomination elevates your reputation among industry leaders, powerful investors, and potential customers, thereby opening doors to new business opportunities and crucial synergies.",
            iconImg: "/images/Partnerships.png"
        },
        {
            title: "Motivation<br />For The Entire Team",
            description: "Being acknowledged at the country’s foremost awards show provides instant validation to your team’s hard work, thereby boosting morale and fostering a culture of excellence.",
            iconImg: "/images/morale.png"
        }
    ];
    return (
        <section className='relative py-[120px] bg-black'>
            <div className='w-full md:px-[40px] px-[20px]'>
                <div className='flex flex-col gap-[90px] w-full mx-auto'>
                    <div className='flex flex-col gap-[30px] justify-center items-center'>
                        <h2 className='mil-up flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] font-black uppercase leading-[1] gap-[10px] text-white font-montserrat'>KEY<span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>Benefits</span></h2>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px]'>
                        {benefits.map((item, index) => (
                            <div key={index} className={`${customCalss["mil-advantage"]} mil-up relative flex flex-col gap-[30px] justify-center items-center min-[1400]:px-[40px]`}>
                                <h3 className="text-[clamp(1rem,2vw,1.13rem)] min-[992px]:max-[1640px]:text-[0.8rem] font-bold uppercase text-white text-center font-montserrat" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                <div className={`${customCalss["mil-icon-border"]} bg-white transform transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) border-[5] border-[#e5e5e5] py-[10px] px-[15px] z-[1]`}><Image src={item.iconImg} alt="WFIS Kenya" width={36} height={36} /></div>
                                <div className='min-h-[150px]'>
                                    <p className='text-white text-center min-[992px]:max-[1640px]:text-[0.8rem]'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default KeyBenefits