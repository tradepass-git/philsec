import Image from "next/image";
import styles from "@/public/css/SingleSpeaker.module.css";
import customFonts from "@/public/css/CustomFonts.module.css";

type SingleSpeakerProps = {
    name: string;
    designation: string;
    company: string;
    imageId: number;
    linkedinUrl?: string;
    id?: number
};

const SingleSpeaker = ({
    name,
    designation,
    company,
    imageId,
    linkedinUrl,
    id,
}: SingleSpeakerProps) => {
    return (
        <div className="relative overflow-hidden rounded-[12px] bg-[#222222] p-[10px]">

            {linkedinUrl && (
                <div className="absolute top-[20px] right-[20px] z-10 flex flex-col">
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} LinkedIn profile`}
                        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0A66C2] text-white opacity-100 [transform:scale(1)_rotate(0deg)]"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.39756 18.333H1.9422V7.20581H5.39756V18.333ZM3.66802 5.68795C2.56311 5.68795 1.6669 4.77277 1.6669 3.66786C1.6669 3.13714 1.87773 2.62814 2.25301 2.25286C2.6283 1.87758 3.13729 1.66675 3.66802 1.66675C4.19875 1.66675 4.70774 1.87758 5.08302 2.25286C5.4583 2.62814 5.66913 3.13714 5.66913 3.66786C5.66913 4.77277 4.77256 5.68795 3.66802 5.68795ZM18.3298 18.333H14.8819V12.9164C14.8819 11.6255 14.8559 9.96995 13.0854 9.96995C11.2889 9.96995 11.0136 11.3725 11.0136 12.8234V18.333H7.56199V7.20581H10.876V8.72367H10.9243C11.3857 7.84941 12.5125 6.92679 14.1937 6.92679C17.6907 6.92679 18.3336 9.22962 18.3336 12.2207V18.333H18.3298Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            )}

            <div className="relative h-[357px] overflow-hidden rounded-[12px] bg-[url('/images/speakers-bg.png')] bg-cover bg-center bg-no-repeat">
                <img
                    src={`/api/image/${imageId}/`}
                    alt={name || "Speaker"}
                    className="absolute inset-0 h-full w-full object-contain object-bottom"
                />
            </div>

            <div className="flex h-[200px] w-full flex-col items-center justify-center gap-[10px] px-[10px] py-[30px]">
                <h3
                    className={`font-zuume text-center ${id == 8650 ? "text-[1.4rem]" : "text-[1.75rem]"} font-bold uppercase leading-[1] tracking-[1px] text-white`}
                    dangerouslySetInnerHTML={{ __html: name ?? "" }}
                />

                <p
                    className="text-center text-[0.9rem] text-white leading-5"
                    dangerouslySetInnerHTML={{
                        __html: designation ?? "",
                    }}
                />

                <p
                    className="text-center text-[0.9rem] font-bold text-[var(--secondary-color)]"
                    dangerouslySetInnerHTML={{
                        __html: company ?? "",
                    }}
                />


            </div>
        </div>
    );
};

export default SingleSpeaker;