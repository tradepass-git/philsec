import Image from "next/image";

const WhyPhilippines = () => {
    return (
        <section className="bg-[#181819] py-[80px] relative overflow-hidden">
            <div className="flex flex-col absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.12]">
                <span className="block w-[423px] h-[423px] shrink-0 rounded-full bg-gradient-to-b from-white/[0.12] to-white/[0.8]"></span>
                <span className="block w-[423px] h-[423px] shrink-0 rounded-full bg-gradient-to-b from-white/[0.12] to-white/[0.8]"></span>
                <span className="block w-[423px] h-[423px] shrink-0 rounded-full bg-gradient-to-b from-white/[0.12] to-white/[0.8]"></span>
            </div>
            <div className="max-w-5xl mx-auto w-full">
                <div className="flex flex-col items-center gap-[60px]">
                    <div className="heading flex flex-col items-center gap-[40px]">
                        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-[20px] text-center">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1]  text-white">
                                Why Philippines
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-[60px] w-full">
                        <div className="col-span-6 md:col-span-5">
                            <div className="group relative aspect-[444/557] w-full overflow-hidden rounded-[12px] overflow-hidden">
                                <Image
                                    src="/images/why-philippines.png"
                                    alt="Why Philippines"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 380px"
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-90 scale-100"
                                />
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-6">
                            <div className="flex flex-col gap-[60px] justify-center w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <p>As the country accelerates toward becoming a regional digital powerhouse, cybersecurity is emerging as both a national priority and a business imperative. With the rollout of 5G connectivity, increased AI-driven automation, and the government’s digital ID system gaining traction, the Philippines is experiencing unprecedented levels of data generation and with it, heightened exposure to cyber risks.</p>
                                    <p>Recent reports reveal that the Philippines remains among the Top 10 most targeted nations globally for cyberattacks, with SMEs and critical infrastructure sectors facing the brunt of advanced phishing, ransomware, and cloud-based exploits. At the same time, this challenge has ignited massive opportunities for cybersecurity vendors, investors, and policymakers to collaborate in building the nation’s next-generation defense ecosystem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyPhilippines