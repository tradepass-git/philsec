import React from 'react'
import Image from 'next/image';
type JurySpeakerProps = {
    bgcolor: string;
    name: string;
    designation: string;
    company: string;
    imageSrc: number;
};
const JuryComponent = ({ bgcolor, name, designation, company, imageSrc }: JurySpeakerProps) => {
    return (
        <div className='flex flex-col'>
            <div style={{ backgroundColor: bgcolor }} className="overflow-hidden aspect-auto">
                <img
                    src={`/api/image/${imageSrc}/`}
                    width={400}
                    height={300}
                    alt={name}
                    className="w-full object-cover"
                />
            </div>
            <div className='flex flex-col gap-[5px] p-[10px]'>
                <h3 className='font-montserrat text-[clamp(1.3rem,3vw,1.6rem)] font-bold text-white leading-[1.2]' dangerouslySetInnerHTML={{ __html: name ?? "" }}></h3>
                <p className='text-white font-montserrat' dangerouslySetInnerHTML={{ __html: designation ?? "" }}></p>
                <p className='text-white font-bold font-montserrat' dangerouslySetInnerHTML={{ __html: company ?? "" }}></p>
            </div>
        </div>
    )
}

export default JuryComponent