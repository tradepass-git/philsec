import Image from "next/image";
const Overview = () => {

    return (
        <section className="bg-white py-[80px]">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col items-center gap-[120px]">
                    <div className="heading flex flex-col items-center gap-[40px]">
                        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[40px] text-center">
                            <h2 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1]  text-black">
                                Overview
                            </h2>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-black">With the Philippines entering the most decisive phase of its digital transformation, cybersecurity has now become the central pillar supporting its national digital agenda.</p>
                                <p className="text-black">Following the implementation of the National Cybersecurity Plan (NCSP) 2023–2028, the government continues to reinforce its commitment through bold new initiatives aimed at strengthening digital resilience across both public and private sectors.</p>
                            </div>
                            <div className="flex gap-[30px] items-end">
                                <div className="flex flex-col gap-[15px] justify-center items-center">
                                    <Image
                                        src="/images/icon-philSec-1.png"
                                        alt="icon-philSec-1"
                                        width={40}
                                        height={38}
                                        className=""
                                    />
                                    <p className="text-black font-bold  leading-[1.4]">AI-Powered Threat Detection & Defense</p>
                                </div>
                                <span className="block w-[1px] h-[60px] bg-[#2a2a2c4f]"></span>
                                <div className="flex flex-col gap-[15px] justify-center items-center">
                                    <Image
                                        src="/images/icon-philSec-2.png"
                                        alt="icon-philSec-2"
                                        width={40}
                                        height={38}
                                        className=""
                                    />
                                    <p className="text-black font-bold leading-[1.4]">Expansion of National Cyber Infrastructure</p>
                                </div>
                                <span className="block w-[1px] h-[60px] bg-[#2a2a2c4f]"></span>
                                <div className="flex flex-col gap-[15px] justify-center items-center">
                                    <Image
                                        src="/images/icon-philSec-3.png"
                                        alt="icon-philSec-3"
                                        width={40}
                                        height={38}
                                        className=""
                                    />
                                    <p className="text-black font-bold  leading-[1.4]">Rise in Cloud and IoT Adoption</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-[40px] w-full">
                        <div className="col-12 col-span-6">
                            <div className="flex flex-col gap-0 justify-center items-start w-full h-full">
                                <div className="font-light text-[clamp(1.2rem,5vw,2.6rem)] text-black leading-[1.4] w-full md:w-[80%]">Philippines cybersecurity market by 2032</div>
                                <div className="font-mango text-[clamp(3rem,20vw,15rem)] text-[var(--forth-color)] leading-[1] mt-[40px]">$682.16</div>
                                <div className="font-light text-[clamp(1.2rem,5vw,2.6rem)] text-black leading-[1.4] w-full">Million</div>
                            </div>
                        </div>
                        <div className="col-12 col-span-6">
                            <div className="flex flex-col gap-[30px] text-black justify-center items-start w-full h-full">
                                <p>The Philippines’ cybersecurity market, valued at USD 261.5 million in 2025, is projected to surpass USD 682.16 million by 2032, supported by national regulations such as the Data Privacy Act and multi-sector initiatives like the newly introduced Cybersecurity Council of the Philippines (CSCP). </p>
                                <p>Information and Communications Technology (DICT) continues to lead the charge with initiatives like Cybersecurity Awareness Month, national cyber drills, and the establishment of regional Security Operations Centers (SOCs) to elevate the nation’s cyber defense posture.</p>
                                <p><strong>Organised by Tradepass</strong>, the <strong>6th edition</strong> of <strong>PhilSec</strong> on <strong>30 June – 1 July 2026</strong> at the Manila Marriott Hotel, will once again gather over 1000+ cybersecurity leaders including the Heads of Information Security, Risk, Compliance, Forensics and Cyber Law from the leading public and private enterprises across the country.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Overview