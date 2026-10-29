import React from 'react'

const MoreThanJust = () => {
    return (
        <section className="relative h-[500px] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video/awards/award-video-final-2026.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(360deg,#0a0118_0%,rgba(0,0,0,0.3)_80%)] z-[1]"></div>
            <div className="relative z-[2] max-w-7xl mx-auto w-full px-[20px] h-full flex items-center justify-center">
                <div className="text-white text-center flex flex-col gap-[40px] lg:w-[85%] w-full">
                    <h2 className='mil-up uppercase flex flex-col text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1] font-montserrat'>More Than Just<span className='text-[#ffc470] text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.4]'>An Awards Show!</span></h2>
                    <div className='flex flex-col gap-[20px]'>
                        <p className='font-montserrat'>PhilSec Awards seeks to go beyond the conventional realms of a typical awards show. It aims to facilitate an industrywide celebration of pioneering work and relentless efforts that are playing a pivotal role in pushing the industry forward.</p>
                        <p className='font-montserrat'>The idea is to bring the entire cybersecurity community in a very extravagant setting that comes entwined with glamour, entertainment and an exotic gala dinner.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreThanJust