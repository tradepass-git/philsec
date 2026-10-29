import React from 'react'

const HowAward = () => {
    return (
        <section className='relative py-[120px]'>
            <div className='max-w-7xl mx-auto w-full px-[20px]'>
                <div className='flex flex-col gap-[40px] md:w-[90%] w-full mx-auto'>
                    <div className='flex flex-col gap-[30px] justify-center items-center'>
                        <h2 className='mil-up uppercasemil-up flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] text-black font-black uppercase leading-[1] gap-[10px] text-center font-montserrat'>How the award<span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>categories are chosen</span></h2>
                    </div>
                    <div className='flex flex-col gap-[20px] items-center'>
                        <p className='mil-up text-[1rem] leading-[1.6] text-center text-black font-montserrat'>PhilSec Award categories are carefully curated to reflect the evolving industry landscape, emerging trends and the worthiest contributions that are playing an active role in shaping the cybersecurity landscape.</p>
                        <p className='mil-up text-[1rem] leading-[1.6] text-center text-black font-montserrat'>The awards platform aims to review and update the categories every year to stay relevant to the evolving cybersecurity ecosystem. The primary goal is to honour the industry’s very best whilst celebrating excellence, innovation and leadership.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowAward