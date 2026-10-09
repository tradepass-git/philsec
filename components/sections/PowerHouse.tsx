import React from 'react'

const PowerHouse = () => {

    const powers = [
        {
            image: "/images/pre-qualified-delegates.jpg",
            video: "/video/powerhouse/pre-qualified-delegates.mp4",
            name: "Pre-Qualified Delegates",
            number: "1000+",
        },
        {
            image: "/images/leading-organisations.jpg",
            video: "/video/powerhouse/leading-organisations.mp4",
            name: "Leading Organisations",
            number: "400+",
        },
        {
            image: "/images/industry-speakers.jpg",
            video: "/video/powerhouse/industry-speakers.mp4",
            name: "Thought Leaders",
            number: "60+",
        },
        {
            image: "/images/solution-providers.jpg",
            video: "/video/powerhouse/solution-providers.mp4",
            name: "Solution Providers",
            number: "50+",
        },
    ]
    return (
        <section className="topics-section relative overflow-hidden py-[100px] h-fit PowerHouse" data-gradient-section="default">
            <div className="w-full relative z-10 items-center px-[10px] lg:px-[60px]">
                <div className="flex flex-col items-center gap-[80px]">
                    <div className="heading flex flex-col items-center gap-[40px]">
                        <div className="mx-auto flex w-full max-w-2xl flex flex-col items-center gap-[40px] text-center">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">
                                Filipino Cyber-Savvy<br />Leaders Coming To PhilSec
                            </h2>
                            <div className="flex flex-col gap-[20px]">
                                <p
                                    className=" text-white">
                                    Dive into the world of cybersecurity excellence at PhilSec, where sharp minds unite for cutting-edge solutions and collaboration.</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 xl:grid-cols-4 w-full gap-[20px]'>
                        {powers.map((power, i) => (
                            <div key={i} className='relative bg-[var(--overview-bg)] p-[10px] rounded-[20px]'>
                                <div className="absolute inset-0 rounded-[inherit] overflow-hidden" style={{
                                    WebkitMaskImage: "-webkit-radial-gradient(white, white)",
                                }}><div className="tp-glass-border animate-border absolute inset-0 rounded-[inherit]"></div></div>
                                <div className='flex flex-col text-center gap-[20px]'>
                                    <div className="w-full h-[250px] md:h-[350px] lg:h-[400px] min-[1800px]:h-[500px] overflow-hidden rounded-[20px]">
                                        <video
                                            muted
                                            autoPlay
                                            loop
                                            playsInline
                                            preload="metadata"
                                            poster={power.image}
                                            className="w-full h-full object-cover"
                                        >
                                            <source src={power.video} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className='font-zuume text-[var(--secondary-color)] font-bold text-[clamp(1.9rem,8vw,7rem)] tracking-[0.09rem] leading-[1]'>{power.number}</div>
                                        <h3 className='font-zuume text-[var(--secondary-color)] font-bold text-[2rem] tracking-[0.04rem]'>{power.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PowerHouse