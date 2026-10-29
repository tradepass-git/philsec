import Image from 'next/image';
import customCalss from "@/public/css/CustomClass.module.css";
type NominationProps = {
    text: string;
    image: string;
    onClick: () => void;
};
const Nomination = ({ text, image, onClick }: NominationProps) => {
    return (
        <a href='#' onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
            className={`${customCalss["mil-service-card"]} group bg-white overflow-hidden border-[5] border-[#0000001c] relative flex flex-col justify-center items-center gap-[0] h-[370px] text-center w-full md:w-[45%] lg:w-[31%] `}>
            <div className='relative text-center w-full h-full flex flex-col items-center justify-center group-hover:justify-start'>
                <Image
                    src={image}
                    alt={text}
                    width={250}
                    height={139}
                    className="transition-transform duration-400 ease-[cubic-bezier(0,0,0.3642,1)] group-hover:scale-60"
                />
                <p className='text-[1rem] font-montserrat text-black hidden translate-y-0 opacity-0 scale-0 transition-all duration-400 group-hover:block group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-80 lg:group-hover:-mt-[40px] md:group-hover:-mt-[30px]'>{text}</p>
                <div className='flex justify-center bg-[#ffcd7f] p-[10px] absolute -bottom-[60px] left-1/2 -translate-x-1/2 transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) group-hover:bottom-0 text-black'>Nominate  <img src="/images/arrow.svg" alt='arrow' className='transform translate-y-0 scale-100 transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) group-hover:translate-y-0 group-hover:scale-60' /></div>
            </div>
        </a>
    )
}

export default Nomination