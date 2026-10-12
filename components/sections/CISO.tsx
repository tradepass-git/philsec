import React from 'react'

const CISO = () => {
    return (
        <section className="ciso relative overflow-hidden flex flex-col justify-center items-center py-[100px]" data-gradient-section="default">
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center gap-[80px]">
                    <div className="heading flex flex-col items-center gap-[40px]">
                        <div className="mx-auto flex w-full max-w-2xl flex flex-col items-center gap-[20px] text-center">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">
                                CISO Lounge</h2>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-white text-[1.5rem]">Connecting the Guardians of Cybersecurity</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-[80] w-full'>
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-white">PhilSec 2027 will feature the Philippines’ most exclusive space for the leading Chief Information Security Officers (CISOs) and senior cybersecurity leaders to shake hands, have meaningful exchanges and together cultivate a deeper understanding of the prevailing digital landscape.</p>
                            <p className="text-white">Hailing from myriad industry verticals, the high-profile security luminaries at this focused space will find an unparalleled opportunity to reflect on experiences, seek diverse perspectives and shape industry narratives.</p>
                            <p className="text-white">This invite-only lounge will specifically enable a relaxed, closed-door roundtable where participants can discuss common challenges in securing organizations, decode emerging threats, streamline risk management strategies, and most importantly, forge crucial synergies.</p>
                        </div>
                        <video
                            muted
                            autoPlay
                            loop
                            playsInline
                            preload="metadata"
                            className="h-full w-auto max-w-none rounded-3xl"
                        >
                            <source
                                src="/video/ciso_lounge.mp4"
                                type="video/mp4"
                            />
                        </video>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CISO