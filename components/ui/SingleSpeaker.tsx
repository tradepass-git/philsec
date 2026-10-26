
import styles from "@/public/css/SingleSpeaker.module.css";
import customFonts from "@/public/css/CustomFonts.module.css";
import Image from "next/image";
type SingleSpeakerProps = {
    name: string;
    designation: string;
    company: string;
    imageId: number
};

const SingleSpeaker = ({ name, designation, company, imageId }: SingleSpeakerProps) => {
    return (
        <>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-1">
                <div className='relative rounded-[12px] overflow-hidden bg-[#222222] p-[10px]'>
                    <div className="relative h-[357px] rounded-[12px] overflow-hidden bg-[url('/images/speakers-bg.webp')] bg-cover bg-center bg-no-repeat">
                        <img
                            src={`/api/image/${imageId}/`}
                            alt={name || "Speaker"}
                            className="absolute inset-0 w-full h-full object-contain object-bottom"
                        />
                    </div>
                    <div className="py-[30px] px-[10px] flex flex-col justify-center items-center gap-[10px] w-full h-[200px]">
                        <h3 className="font-zuume text-[1.75rem] font-bold leading-[1] uppercase text-white text-center tracking-[1px]" dangerouslySetInnerHTML={{ __html: name ?? "" }} />
                        <p className="text-white text-[0.9rem] text-center" dangerouslySetInnerHTML={{ __html: designation ?? "" }}
                        />
                        <p className="text-[var(--secondary-color)] font-bold text-[0.9rem] text-center" dangerouslySetInnerHTML={{ __html: company ?? "" }} />
                    </div>
                </div>
            </div>
        </>
    )

};
export default SingleSpeaker;