import React from 'react'

const WhySection = () => {
  return (
    <section className='relative pb-[120px]'>
        <div className='max-w-7xl mx-auto w-full px-[20px]'>
            <div className='flex flex-col gap-[40px] md:w-[90%] w-full mx-auto'>
                <div className='flex flex-col gap-[30px] justify-center items-center'>
                    <div className='mil-up uppercase text-[clamp(12px,2vw,1rem)] font-semibold text-center font-montserrat text-black'>Certified By The Best. Won By The Greatest.</div>
                    <h2 className='mil-up uppercasemil-up flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] font-black uppercase leading-[1] gap-[10px] text-center font-montserrat text-black'>Why PhilSec Awards is the <span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>industry’s foremost awards show</span></h2>
                </div>
                <div className='flex flex-col gap-[20px] items-center'>
                    <p className='mil-up text-[1rem] leading-[1.6] text-center font-montserrat text-black'>While PhilSec has emerged as the most accredited platform in the industry—backed by government entities—its awards segment features a premier gathering of tech moguls, industry luminaries, and visionary leaders regarded as the foremost authorities in the cybersecurity realm.</p>
                    <p className='mil-up text-[1rem] leading-[1.6] text-center font-montserrat text-black'>With a recognition and applaud like no other and a jury comprising the most senior industry icons, PhilSec Awards specifically rewards professionals with outstanding merit, who’re undeniably a class apart from the rest.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhySection