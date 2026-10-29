"use client";

import { useState } from 'react'
import Modal from "@/components/ui/Modal";
import Nomination from "@/components/ui/Nomination";
const NominationSection = () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"individual" | "team">(
        "individual"
    );
    const handleOpenModal = () => {
        setOpen(true);
    };

    return (
        <>
            <section className='relative pb-[120px] pt-[120px]'>
                <div className='max-w-7xl mx-auto w-full px-[20px]'>
                    <div className='flex flex-col gap-[80px] w-full mx-auto'>
                        <div className='flex flex-col gap-[30px] justify-center items-center'>
                            <div className="mil-up uppercase text-[clamp(12px,2vw,1rem)] font-semibold text-center font-montserrat text-black">Categories</div>
                            <h2 className='mil-up uppercasemil-up flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] font-black uppercase leading-[1.2] gap-[10px] text-center font-montserrat text-black'>Nominations Are Now Open!</h2>
                        </div>
                        <div className='flex flex-wrap justify-center gap-[30px]'>
                            <Nomination
                                text="This special award aims to recognize the most inspiring woman
                            personality who has been an active force behind promoting diversity and making exceptional
                            contributions to the cybersecurity sector. It also acknowledges the bold initiatives taken
                            to remove the gender stereotypes from the industry."
                                image="/images/nominations/cyber-woman-1.png"
                                onClick={handleOpenModal}
                            />
                            <Nomination
                                text="This award recognizes the most phenomenal technology professional
                            who went all out with his/her contributions in planning and implementing the most secure
                            digital infrastructure. It also aims to applaud his/her avant-garde ideas that has set the
                            tone for future innovations in the category."
                                image="/images/nominations/digital-leader.png"
                                onClick={handleOpenModal}
                            />
                            <Nomination
                                text="This award is to be bestowed upon the professional who has displayed
                            sheer magnificence in the field of Governance, Risk, and Compliance, and to acknowledge
                            his/her competence in keeping the organisation secure while also keeping it on the right
                            track for growth & scalability."
                                image="/images/nominations/GRC-leader.png"
                                onClick={handleOpenModal}
                            />
                            <Nomination
                                text="This award recognizes the most phenomenal Chief Information Security
                            Officer who went all out with his/her contributions in uplifting information security. It
                            also aims to applaud their innovative information security practices alongside their many
                            achievements."
                                image="/images/nominations/ciso.png"
                                onClick={handleOpenModal}
                            />
                            <Nomination
                                text="This award is to honour the best cybersecurity professional in the
                            public sector who has played a pivotal role in establishing a robust cyber framework for the
                            government-owned corporations. It also recognizes the work put in while devising a necessary
                            cybersecurity protocol for the public sector."
                                image="/images/nominations/gov-cyber.png"
                                onClick={handleOpenModal}
                            />
                            <Nomination
                                text="It recognizes the top cybersecurity professional in the private
                            sector who has been the driving force in stimulating growth and bringing new-age
                            developments in cyber strategies to ensure that the world is a step ahead of the cyber
                            criminals."
                                image="/images/nominations/enterprise.png"
                                onClick={handleOpenModal}
                            />
                            <Nomination
                                text="This special award is to be bestowed upon the most outstanding
                            expert who has inspired a whole generation of professionals with her/his efforts towards the
                            security of the software development process, including automating scans, code verification
                            & creating next-gen security protocols."
                                image="/images/nominations/devsec.png"
                                onClick={handleOpenModal}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                isOpen={open}
                title="NOMINATE NOW"
                formId="c8007a85-9046-43f8-93dd-af223ff57239"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default NominationSection