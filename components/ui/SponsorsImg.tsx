"use client";

import { useState } from "react";
import Modal from "./Modal";

type SponsorsImgProps = {
    imgUrl?: number;
    companyname?: string;
    hubspotId?: string;
    weblink?: string;
    modaltitle?: string;
    widthclass?: string;
    onOpen?: (title: string, id: string) => void;
};

const SponsorsImg = ({
    imgUrl,
    companyname = "",
    hubspotId = "",
    weblink = "",
    modaltitle = "",
    widthclass = "md:w-1/3",
    onOpen,
}: SponsorsImgProps) => {
    const [open, setOpen] = useState(false);

    const hasLink = weblink && weblink !== "#";

    const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (!hubspotId) return;

        // If parent wants to handle the modal
        if (onOpen) {
            onOpen(modaltitle, hubspotId);
            return;
        }

        // Otherwise open local modal
        setOpen(true);
    };

    const image = (
        <picture>
            <img
                src={`/api/image/${imgUrl}/`}
                alt={`${modaltitle} - ${companyname}`}
                className="w-full h-auto border border-[#cccccc85]"
            />
        </picture>
    );

    const overlay = (
        <>
            <div className="absolute inset-0 bg-[#00000021] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <i className="fa-solid fa-link absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 rounded-full text-[20px] text-black !w-[50px] !h-[50px] !leading-[50px] bg-white shadow-[0_0_5px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(.6,-.28,.735,.045)]" />
        </>
    );

    return (
        <>
            {/* =========================
                EXTERNAL WEBSITE LINK
            ========================= */}
            {hasLink ? (
                <div
                    className={`${widthclass} px-[10px] mb-[40px] transition-all duration-[350ms] ease-in-out`}
                >
                    <a
                        href={weblink}
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        className="relative group block"
                    >
                        {image}
                        {overlay}
                    </a>
                </div>
            ) : (
                /* =========================
                   HUBSPOT / MODAL
                ========================= */
                <div
                    className={`${widthclass} px-[10px] mb-[40px] transition-all duration-[350ms] ease-in-out`}
                >
                    <a
                        href="#"
                        onClick={handleOpenModal}
                        className="relative group block cursor-pointer"
                    >
                        {image}
                        {overlay}
                    </a>
                </div>
            )}

            {/* =========================
                MODAL
            ========================= */}
            <Modal
                isOpen={open}
                title={modaltitle}
                formId={hubspotId}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default SponsorsImg;