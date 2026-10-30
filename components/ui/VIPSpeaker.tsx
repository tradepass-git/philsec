import { getSpeakers } from "@/lib/wordpress/speakers";
import SingleSpeaker from "@/components/ui/SingleSpeaker";

const VIPSpeaker = async () => {
    const vip_speakers = await getSpeakers(2026, 100, "vip-speaker");
    return (

        <div className="w-full flex flex-wrap justify-center gap-4">
            {vip_speakers.map((speaker: any, index: number) => {
                const fullName = speaker?.title?.rendered?.trim() || "";
                return (
                    <div key={index} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)] 2xl:w-[calc(20%-14px)]">
                        <SingleSpeaker key={index}
                            name={fullName}
                            designation={speaker?.acf?.designation}
                            company={speaker?.acf?.company}
                            imageId={speaker?.acf?.speaker_image}
                            linkedinUrl={speaker?.acf?.linkedin_url}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default VIPSpeaker