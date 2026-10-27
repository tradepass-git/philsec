import CustomClass from "@/public/css/CustomClass.module.css";
import VIPSpeaker from "../ui/VIPSpeaker";
import PastSpeaker from "../ui/PastSpeaker";
import { getSpeakers } from "@/lib/wordpress/speakers";
const Speakers = async () => {
    const past_speakers = await getSpeakers(2026, 10, "delegate-speaker");
    return (
        <section className="speakers-section relative overflow-hidden pb-[80px] bg-black">
            <div className={CustomClass.devLine}><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"></path></svg></div>
            <div className="mx-auto w-full relative z-10">
                <div className='flex flex-col gap-[80px]'>
                    <div className="flex flex-col items-center gap-[60px]">
                        <div className="heading flex flex-col items-center gap-[40px]">
                            <div className="max-w-5xl mx-auto w-ful flex flex-col gap-[20px] items-center text-center">
                                <h2
                                    className="font-oswald text-white font-bold leading-[1] text-[clamp(1.2rem,4vw,2.53rem)] text-center uppercase leading-[1]">
                                    VIP Chief Guest</h2>
                            </div>
                            <div className="bg-[var(--secondary-color)] w-[150px] h-[3px] hidden"></div>
                        </div>
                        <VIPSpeaker />
                    </div>

                    {/* Past Speakers */}
                    <div className="max-w-10/12 mx-auto w-full relative z-10">
                        <PastSpeaker pastspeakerdata={past_speakers} />
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Speakers