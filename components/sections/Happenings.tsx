import React from 'react'
import StackElement from "@/components/ui/StackElement";
const Happenings = () => {
    return (
        <>
            <StackElement />
            <section className="section-selected-work-v2 flat-spacing stack-element py-[80px]" id="happenings">
                <div className="mx-auto w-full max-w-7xl px-[10px]">
                    <div className="work-list stack-element-main relative">
                        <div className="element">
                            <a href="#" className="wg-work overflow-hidden">
                                <div className="work-image w-full h-[748px] relative">
                                    <video
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                                    >
                                        <source src="/video/powerhouse/pre-qualified-delegates.mp4" type="video/mp4" />
                                    </video>
                                </div>

                            </a>
                        </div>
                        <div className="element">
                            <a href="#" className="wg-work overflow-hidden">
                                <div className="work-image w-full h-[748px] relative">
                                    <video
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                                    >
                                        <source src="/video/powerhouse/leading-organisations.mp4" type="video/mp4" />
                                    </video>
                                </div>

                            </a>
                        </div>
                        <div className="element">
                            <a href="#" className="wg-work overflow-hidden">
                                <div className="work-image w-full h-[748px] relative">
                                    <video
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                                    >
                                        <source src="/video/powerhouse/industry-speakers.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Happenings