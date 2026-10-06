"use client";

import { useEffect } from "react";

const KeyStatistics = () => {

  useEffect(() => {
    const speed = 20;
    const items = document.querySelectorAll(".bar-group");

    items.forEach((group) => {
      const progress = group.querySelector<HTMLElement>(".progress");
      if (!progress) return;

      const target = Number(progress.dataset.progress);
      let i = 0;

      const interval = setInterval(() => {
        if (i <= target) {
          progress.style.width = i + "%";
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    });
  }, []);
  return (
    <section className="bg-style8 attendees-section relative overflow-hidden py-[80px]">
      <div className="w-full relative z-10 items-center px-[10px] md:px-[30px] lg:px-[60px] min-[1800px]:!px-[10%] min-[2000px]:!px-[15%]">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="max-w-4xl mx-auto w-full heading flex flex-col items-center text-center gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-black">
                Key Statistics From 2025
              </h2>
            </div>
          </div>
          <div className='w-full flex flex-col gap-[40px]'>
            <div className='grid grid-cols-12 items-stretch w-full mx-auto lg:gap-x-[40px] gap-y-[40px]'>
              <div className='bg-white xl:col-span-5 col-span-12 relative rounded-[20px] p-[30px] pr-0 overflow-hidden attendees-box border border-[#e3ff65]'>
                <div className='flex flex-col justify-between gap-[30px] h-full'>
                  <h3 className="font-oswald text-black font-bold leading-[1] text-[clamp(1.4rem,3vw,1.4rem)] min-[1600px]:text-[1.8rem] uppercase">
                    Attendees' Job Titles</h3>

                  <div className="h-[100%] flex flex-col justify-center">
                    <img src="/images/key-statistics/attendees-job-titles.svg" alt='Attendees Job titles' className='w-[100%]' />
                  </div>
                </div>
              </div>
              <div className='bg-white xl:col-span-4 col-span-12 relative rounded-[20px] p-[30px] overflow-hidden attendees-box border border-[#e3ff65]'>
                <div className='flex flex-col justify-between gap-[30px] h-full'>
                  <h3 className="font-oswald text-black font-bold leading-[1] text-[clamp(1.4rem,3vw,1.4rem)] min-[1600px]:text-[1.8rem] uppercase">
                    Decision-Making Authority</h3>
                  <div className="h-[100%] flex flex-col justify-center items-center gap-[40px]">
                    <img src="/images/key-statistics/decision-making authority-new.svg" alt='Decision Making Authority' className="mx-auto lg:w-[80%] w-full h-auto" />
                    <ul className="space-y-2 pl-0 text-[clamp(1rem,3vw,1rem)] font-bold">
                      <li className="relative pl-7 text-black before:absolute before:left-0 before:top-1/2 before:h-[15px] before:w-[15px] before:-translate-y-1/2 before:rounded-full before:bg-[#FCB422]">
                        Final Decision Makers
                      </li>

                      <li className="relative pl-7 text-black before:absolute before:left-0 before:top-1/2 before:h-[15px] before:w-[15px] before:-translate-y-1/2 before:rounded-full before:bg-[#F4E6C5]">
                        Evaluators
                      </li>

                      <li className="relative pl-7 text-black before:absolute before:left-0 before:top-1/2 before:h-[15px] before:w-[15px] before:-translate-y-1/2 before:rounded-full before:bg-[#222222]">
                        Influencers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='bg-white xl:col-span-3 col-span-12 relative rounded-[20px] p-[30px] overflow-hidden attendees-box border border-[#e3ff65]'>
                <div className='flex flex-col justify-center gap-[30px] h-full'>
                  <p className=" text-black">PhilSec is a highly focused initiative that carefully cherry-picks key decision-making profiles from the Philippines' leading organisations that’re actively seeking cybersecurity solutions.</p>
                  <div className="flex flex-col gap-0">
                    <p className="text-black leading-[1.2] font-semibold text-[clamp(1.8rem,5vw,2.5rem)] min-[1600]:text-[3rem] tracking-wide">Over</p>
                    <h3 className="font-zuume text-[clamp(7.5rem,12vw,12rem)] text-[var(--forth-color)] font-normal p-0 m-0 leading-[1]">71%</h3>
                    <p className="text-black leading-[1.2] font-semibold text-[clamp(1.8rem,5vw,2.5rem)] min-[1600]:text-[3rem] tracking-wide">of attendees</p>
                    <p className=" text-black">in 2025 had influence or sole responsibility in purchasing decisions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-12 items-stretch w-full mx-auto lg:gap-x-[40px] gap-y-[40px]'>
              <div className='xl:col-span-5 col-span-12 bg-white flex flex-col gap-[40px] justify-between relative rounded-[20px] p-[30px] overflow-hidden attendees-box border border-[#e3ff65]'>
                <div className='flex flex-col gap-[10px] lg:w-[100%] w-full'>
                  <h3 className="text-black font-oswald text-[clamp(1.4rem,3vw,1.4rem)] min-[1600px]:text-[1.8rem] font-semibold leading-[1.4] uppercase">Budget-Based Bifurcation Of Delegates</h3>
                  <p className="text-black">All delegates at PhilSec 2025 were pre-qualified based on their allocated budgets for the procurement of new solutions.</p>
                </div>
                <div className="flex flex-col lg:w-[100%] justify-center w-full h-[100%]">
                  <img src="/images/key-statistics/delegate-bifurcation-new.svg" alt="PhilSec" className="mx-auto lg:w-[80%] w-full h-auto" />
                </div>
              </div>
              <div className='xl:col-span-7 col-span-12 bg-white flex flex-col gap-[80px] relative rounded-[20px] p-[30px] overflow-hidden attendees-box border border-[#e3ff65]'>
                <div className='flex flex-col gap-[10px]'>
                  <h3 className="text-black font-oswald lg:w-[70%] w-full text-[clamp(1.4rem,3vw,1.4rem)] min-[1600px]:text-[1.8rem] font-semibold leading-[1.4] uppercase">Timeline-based Bifurcation Of Delegates</h3>
                  <p className="text-black">All delegates at PhilSec 2025 came with a pre-determined timeline for the procurement and implementation of new solutions. Here’s a quick representation.</p>
                </div>
                <div className="grid grid-cols-12 gap-[20px] gap-y-[60px]">
                  <div className="sm:col-span-4 col-span-12">
                    <img src="/images/key-statistics/Delegate-Bifurcation-1.svg" alt="Delegate-Bifurcation" className="mx-auto lg:w-[90%] w-[60%] h-auto" />
                  </div>
                  <div className="sm:col-span-4 col-span-12">
                    <img src="/images/key-statistics/Delegate-Bifurcation-2.svg" alt="Delegate-Bifurcation" className="mx-auto lg:w-[90%] w-[60%] h-auto" />
                  </div>
                  <div className="sm:col-span-4 col-span-12">
                    <img src="/images/key-statistics/Delegate-Bifurcation-3.svg" alt="Delegate-Bifurcation" className="mx-auto lg:w-[90%] w-[60%] h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyStatistics