"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    title: string;
    formId?: string;
};

export default function Modal({ isOpen, onClose, children, title, formId }: ModalProps) {

    // Prevent body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    // Load HubSpot form
    useEffect(() => {
        if (!isOpen || !formId) return;

        const loadForm = () => {
            if ((window as any).hbspt) {
                (window as any).hbspt.forms.create({
                    region: "na1",
                    portalId: "4931918",
                    formId: formId,
                    target: "#hubspot-form",
                    onFormReady: function ($form: any) {
                        document.querySelector(".hubspot-loader")?.remove();
                        $form.find("a").attr("target", "_blank");
                    }
                });
            }
        };

        // If script already exists
        if ((window as any).hbspt) {
            loadForm();
            return;
        }

        const script = document.createElement("script");
        script.src = "https://js.hsforms.net/forms/embed/v2.js";
        script.async = true;
        script.onload = loadForm;

        document.body.appendChild(script);

    }, [isOpen, formId]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Box */}
            <div className="relative bg-white w-[90%] md:w-[70%] max-w-4xl p-0 rounded-[10px] shadow-2xl 
                      transform transition-all duration-300 scale-100 opacity-100 z-10">

                {/* Title */}
                <div className="bg-[var(--main-color)] text-white p-[1rem] text-[1.2rem] font-bold w-full uppercase rounded-tl-[10px] rounded-tr-[10px]">
                    {title}
                </div>

                {/* Close Button */}
                <button onClick={onClose} className="absolute right-[-15px] top-[-10px]  bg-[var(--tp-primary-color)] text-white  w-[32px] h-[32px] grid place-content-center rounded-full cursor-pointer border-[white] border">
                    ✕
                </button>

                <div className="p-[1rem] h-[600px] overflow-y-auto">

                    {/* Loader */}
                    {formId && (
                        <div className="hubspot-loader text-center py-[40px]">
                            Loading form...
                        </div>
                    )}

                    {/* HubSpot Form */}
                    {formId && <div id="hubspot-form"></div>}

                    {/* Optional children */}
                    {children}

                </div>

            </div>

        </div>,
        document.body
    );
}