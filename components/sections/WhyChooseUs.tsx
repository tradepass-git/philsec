import React from 'react'

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us bg-white relative py-[80px]">
            <div className="max-w-7xl mx-auto w-full relative z-10 items-center px-[10px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] ">
                    <div className="bg-[var(--black-color)] cs-iconbox group rounded-3xl relative cursor-pointer flex flex-col items-center justify-center overflow-hidden border border-[#3f3f3f87] p-[30px] text-center transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-[40px] items-center justify-center text-center">
                            <div className="ic-img">
                                <img loading="lazy" width="54" height="66" src="images/icon4.png" alt="Image Icon" className="object-contain transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:rotate-y-180 group-hover:[filter:none] group-hover:duration-[900ms]" />
                            </div>
                            <h3 className="text-white text-[clamp(1.4rem,3vw,1.8rem)] font-semibold leading-[1.4] flex flex-col gap-0"><span className="font-oswald">16+ Hours</span><span className="text-[1.2rem] font-bold">of Cybersecurity Dialogues</span></h3>
                            <p className="md:min-h-[180px]">
                               Embark on an enlightening journey with over 16 hours of thought-provoking sessions. Join industry leaders, experts, and enthusiasts from both the public and private sectors as they collaboratively pave the way for a secure digital future.
                            </p>
                            
                        </div>
                    </div>
                    <div className="bg-[var(--black-color)] cs-iconbox group rounded-3xl relative cursor-pointer flex flex-col items-center justify-center overflow-hidden border border-[#3f3f3f87] p-[30px] text-center transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-[40px] items-center justify-center text-center">
                            <div className="ic-img">
                                <img loading="lazy" width="54" height="66" src="images/icon5.png" alt="Image Icon" className="object-contain transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:rotate-y-180 group-hover:[filter:none] group-hover:duration-[900ms]" />
                            </div>
                            <h3 className="text-white text-[clamp(1.4rem,3vw,1.8rem)] font-semibold leading-[1.4] flex flex-col gap-0"><span className="font-oswald">30,000 sqft</span><span className="text-[1.2rem] font-bold">of Solutions Showcase</span></h3>
                            <p className="md:min-h-[180px]">
                               Step into the future of cybersecurity at PhilSec's expansive Solutions Showcase. Spanning 30,000 sqft, this immersive space unveils a diverse array of solutions, products, and technologies, providing an interactive experience that goes beyond traditional exhibitions.
                            </p>
                            
                        </div>
                    </div>
                    <div className="bg-[var(--black-color)] cs-iconbox group rounded-3xl relative cursor-pointer flex flex-col items-center justify-center overflow-hidden border border-[#3f3f3f87] p-[30px] text-center transition-all duration-300 ease-in-out">
                        <div className="flex flex-col gap-[40px] items-center justify-center text-center">
                            <div className="ic-img">
                                <img loading="lazy" width="54" height="66" src="images/icon6.png" alt="Image Icon" className="object-contain transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:rotate-y-180 group-hover:[filter:none] group-hover:duration-[900ms]" />
                            </div>
                            <h3 className="text-white text-[clamp(1.4rem,3vw,1.8rem)] font-semibold leading-[1.4] flex flex-col gap-0"><span className="font-oswald">Filipino</span><span className="text-[1.2rem] font-bold">Media Exposure</span></h3>
                            <p className="md:min-h-[180px]">
                              This exclusive exposure paves the way for strategic collaborations, brand visibility, and a heightened local impact, ensuring that your presence resonates across key media channels and beyond.
                            </p>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs