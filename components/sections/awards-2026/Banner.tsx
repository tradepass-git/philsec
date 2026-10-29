import React from 'react'
import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
const Banner = () => {
  return (
    <section className={`${customCalss["award-banner"]} relative overflow-hidden h-[100vh]`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster=""
        className="w-full h-full object-cover object-center absolute top-0 left-0"
      >
        <source src="/video/awards/award-video-2026.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(360deg,rgba(0,0,0,1)_0%,rgb(0_0_0/30%)_80%)] z-[1]"></div>
      <div className='max-w-7xl mx-auto w-full px-20 relative z-[1]'>
        <div className='flex flex-col gap-[30px] justify-center items-center h-[100vh]'>
          <img src="/images/awards-2026.svg" alt="Philse Award" className="w-[200px] md:w-[300px] h-auto" />
          <div className='flex flex-col gap-[20px] justify-center items-center'>
            <h1 className='flex flex-col text-[clamp(1.5rem,4vw,2rem)] font-normal text-[#fff] leading-[1.2] text-center font-montserrat'>Recognizing the Philippines' <span className="font-bold text-[var(--secondary-color)]">top cybersecurity minds - PhilSec Awards 2026</span></h1>
            <div className="flex flex-col gap-[5px]">
              <div className='text-[clamp(1.2rem,3vw,1.4rem)] font-medium text-white leading-[1.2] text-center font-montserrat'>LIVE WEDNESDAY, 1 JULY 2026</div>
              <div className='text-[clamp(1.1rem,2vw,1.3rem)]  text-white leading-[1.2] text-center font-montserrat'>4:00 PM ONWARDS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner