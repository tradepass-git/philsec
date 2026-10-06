import React from "react";
import CustomClass from "@/public/css/CustomClass.module.css";
import HorizontalScroll from "@/components/ui/HorizontalScroll";


const Happenings = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto w-full max-w-7xl">
                <div id="sectionPin" className="relative overflow-hidden">
                    <HorizontalScroll />
                    <div className="pin-wrap flex mx-auto w-full h-screen items-center justify-start px-[10vw] py-[50px]">
                        {/* Conference */}
                        <div className="flex w-screen h-screen max-w-7xl shrink-0 items-center px-[10px]">
                            <div className="mx-auto w-full">
                                <div className="overflow-hidden rounded-3xl border border-[#3f3f3f87] p-[60px] h-[calc(600px)]">

                                    <div className="grid grid-cols-12 gap-[60px]">

                                        <div className="col-span-12 flex flex-col justify-center gap-[40px] lg:col-span-5">

                                            <h3 className="font-oswald text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2] text-white">
                                                Conference
                                            </h3>

                                            <div className="flex flex-col gap-[30px]">
                                                <p>
                                                    Presenting the top inspiring names from the industry
                                                    at the main stage to share crucial intelligence on the
                                                    most pressing topics, which gets further enriched by a
                                                    Q&A session.
                                                </p>

                                                <p>
                                                    It showcases thought leadership and cutting-edge
                                                    knowledge for the growth of the entire business
                                                    community. A perfect platform that projects the pulse
                                                    of the industry.
                                                </p>
                                            </div>

                                            <a
                                                href="#"
                                                className={`${CustomClass.ctaButton} w-fit`}
                                            >
                                                <span>
                                                    <span>Speak</span>
                                                    <span>Speak</span>
                                                </span>
                                            </a>

                                        </div>

                                        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">

                                            <div className="relative aspect-video w-full h-[480px] overflow-hidden rounded-3xl">
                                                <video
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    className="absolute inset-0 z-0 h-full w-full object-cover"
                                                >
                                                    <source
                                                        src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

{/* Exhibition */}
                        <div className="flex w-screen h-screen max-w-7xl shrink-0 items-center px-[10px]">
                            <div className="mx-auto w-full">
                                <div className="overflow-hidden rounded-3xl border border-[#3f3f3f87] p-[60px] h-[calc(600px)]">

                                    <div className="grid grid-cols-12 gap-[60px]">

                                        <div className="col-span-12 flex flex-col justify-center gap-[40px] lg:col-span-5">

                                            <h3 className="font-oswald text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2] text-white">
                                                Exhibition
                                            </h3>

                                            <div className="flex flex-col gap-[30px]">
                                                <p>
                                                    Presenting the top inspiring names from the industry
                                                    at the main stage to share crucial intelligence on the
                                                    most pressing topics, which gets further enriched by a
                                                    Q&A session.
                                                </p>

                                                <p>
                                                    It showcases thought leadership and cutting-edge
                                                    knowledge for the growth of the entire business
                                                    community. A perfect platform that projects the pulse
                                                    of the industry.
                                                </p>
                                            </div>

                                            <a
                                                href="#"
                                                className={`${CustomClass.ctaButton} w-fit`}
                                            >
                                                <span>
                                                    <span>Speak</span>
                                                    <span>Speak</span>
                                                </span>
                                            </a>

                                        </div>

                                        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">

                                            <div className="relative aspect-video w-full h-[480px] overflow-hidden rounded-3xl">
                                                <video
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    className="absolute inset-0 z-0 h-full w-full object-cover"
                                                >
                                                    <source
                                                        src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Awards & Gala Evening */}
                        <div className="flex w-screen h-screen max-w-7xl shrink-0 items-center px-[10px]">
                            <div className="mx-auto w-full">
                                <div className="overflow-hidden rounded-3xl border border-[#3f3f3f87] p-[60px] h-[calc(600px)]">

                                    <div className="grid grid-cols-12 gap-[60px]">

                                        <div className="col-span-12 flex flex-col justify-center gap-[40px] lg:col-span-5">

                                            <h3 className="font-oswald text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2] text-white">
                                                Awards & Gala Evening
                                            </h3>

                                            <div className="flex flex-col gap-[30px]">
                                                <p>
                                                    Presenting the top inspiring names from the industry
                                                    at the main stage to share crucial intelligence on the
                                                    most pressing topics, which gets further enriched by a
                                                    Q&A session.
                                                </p>

                                                <p>
                                                    It showcases thought leadership and cutting-edge
                                                    knowledge for the growth of the entire business
                                                    community. A perfect platform that projects the pulse
                                                    of the industry.
                                                </p>
                                            </div>

                                            <a
                                                href="#"
                                                className={`${CustomClass.ctaButton} w-fit`}
                                            >
                                                <span>
                                                    <span>Speak</span>
                                                    <span>Speak</span>
                                                </span>
                                            </a>

                                        </div>

                                        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">

                                            <div className="relative aspect-video w-full h-[480px] overflow-hidden rounded-3xl">
                                                <video
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    className="absolute inset-0 z-0 h-full w-full object-cover"
                                                >
                                                    <source
                                                        src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* LIVE Performances */}
                        <div className="flex w-screen h-screen max-w-7xl shrink-0 items-center px-[10px]">
                            <div className="mx-auto w-full">
                                <div className="overflow-hidden rounded-3xl border border-[#3f3f3f87] p-[60px] h-[calc(600px)]">

                                    <div className="grid grid-cols-12 gap-[60px]">

                                        <div className="col-span-12 flex flex-col justify-center gap-[40px] lg:col-span-5">

                                            <h3 className="font-oswald text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2] text-white">
                                                LIVE Performances
                                            </h3>

                                            <div className="flex flex-col gap-[30px]">
                                                <p>
                                                    Presenting the top inspiring names from the industry
                                                    at the main stage to share crucial intelligence on the
                                                    most pressing topics, which gets further enriched by a
                                                    Q&A session.
                                                </p>

                                                <p>
                                                    It showcases thought leadership and cutting-edge
                                                    knowledge for the growth of the entire business
                                                    community. A perfect platform that projects the pulse
                                                    of the industry.
                                                </p>
                                            </div>

                                            <a
                                                href="#"
                                                className={`${CustomClass.ctaButton} w-fit`}
                                            >
                                                <span>
                                                    <span>Speak</span>
                                                    <span>Speak</span>
                                                </span>
                                            </a>

                                        </div>

                                        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">

                                            <div className="relative aspect-video w-full h-[480px] overflow-hidden rounded-3xl">
                                                <video
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    className="absolute inset-0 z-0 h-full w-full object-cover"
                                                >
                                                    <source
                                                        src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        

                        {/* Conference 1 */}
                        <div className="flex w-screen h-screen max-w-7xl shrink-0 items-center px-[10px] opacity-0">
                            <div className="mx-auto w-full">
                                <div className="overflow-hidden rounded-3xl border border-[#3f3f3f87] p-[60px] h-[calc(600px)]">

                                    <div className="grid grid-cols-12 gap-[60px]">

                                        <div className="col-span-12 flex flex-col justify-center gap-[40px] lg:col-span-5">

                                            <h3 className="font-oswald text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2] text-white">
                                                Conference 1
                                            </h3>

                                            <div className="flex flex-col gap-[30px]">
                                                <p>
                                                    Presenting the top inspiring names from the industry
                                                    at the main stage to share crucial intelligence on the
                                                    most pressing topics, which gets further enriched by a
                                                    Q&A session.
                                                </p>

                                                <p>
                                                    It showcases thought leadership and cutting-edge
                                                    knowledge for the growth of the entire business
                                                    community. A perfect platform that projects the pulse
                                                    of the industry.
                                                </p>
                                            </div>

                                            <a
                                                href="#"
                                                className={`${CustomClass.ctaButton} w-fit`}
                                            >
                                                <span>
                                                    <span>Speak</span>
                                                    <span>Speak</span>
                                                </span>
                                            </a>

                                        </div>

                                        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">

                                            <div className="relative aspect-video w-full h-[480px] overflow-hidden rounded-3xl">
                                                <video
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    preload="metadata"
                                                    className="absolute inset-0 z-0 h-full w-full object-cover"
                                                >
                                                    <source
                                                        src="/video/powerhouse/pre-qualified-delegates.mp4"
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Happenings