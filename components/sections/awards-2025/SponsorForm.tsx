"use client";

import Script from "next/script";
import customCalss from "@/public/css/CustomClass.module.css";
const SponsorForm = () => {
    return (
        <>
            <Script
                src="https://js.hsforms.net/forms/embed/v2.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if ((window as any).hbspt) {
                        (window as any).hbspt.forms.create({
                            css: '',
                            cssRequired: '',
                            region: "na1",
                            portalId: "4931918",
                            formId: "8006d4fb-c883-417d-b4f6-578743ff65ff",
                            target: "#sponsor-form"
                        });
                    }
                }}
            />
            <section className={`${customCalss["why-section"]} ${customCalss["sponsor-section"]} relative py-[120px]`}>
                <div className="max-w-7xl mx-auto w-full px-[20px]">
                    <div className="flex flex-col gap-[40px] lg:w-[85%] w-full mx-auto">
                        <div className="flex flex-col gap-[30px] justify-center items-center">
                            <h2 className="mil-up uppercase flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] font-black leading-[1] gap-[10px] font-montserrat text-black">
                                Sponsor
                                <span className="text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]">
                                    PhilSec Awards 2025
                                </span>
                            </h2>
                        </div>
                        {/* ✅ Target must exist BEFORE script runs */}
                        <div id="sponsor-form" className={`${customCalss["sponsor-form"]} lg:w-[80%] w-full mx-auto`}></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SponsorForm;