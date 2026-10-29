"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SingleSpeakerAgenda from "@/components/ui/SingleSpeakerAgenda";

const Tabs = ({ agenda, year }: any) => {

    //console.log(agenda);

    const tabsRef = useRef<HTMLDivElement>(null);

    // Get unique days from API
    const tabs = [
        ...new Set(
            agenda.map((item: any) => item.title)
        ),
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    /**
     * Add/remove Awards body class
     */
    useEffect(() => {
        if (activeTab === "Day 2 Awards & Gala Dinner") {
            document.body.classList.add("awards-gala");
        } else {
            document.body.classList.remove("awards-gala");
        }

        return () => {
            document.body.classList.remove("awards-gala");
        };
    }, [activeTab]);

    /**
     * Scroll to tabs after active tab changes.
     *
     * This is more reliable than calling window.scrollTo()
     * directly inside the button click because React first
     * needs to update the active tab/content.
     */
    useEffect(() => {
        if (!activeTab) return;

        const timer = setTimeout(() => {
            if (!tabsRef.current) return;

            const headerOffset = 100;

            const elementPosition =
                tabsRef.current.getBoundingClientRect().top;

            const offsetPosition =
                elementPosition +
                window.scrollY -
                headerOffset;

            window.scrollTo({
                top: Math.max(offsetPosition, 0),
                behavior: "smooth",
            });
        }, 50);

        return () => clearTimeout(timer);
    }, [activeTab]);

    // Filter agenda by active tab
    const filteredAgenda = agenda.filter(
        (item: any) => item.title === activeTab
    );

    /**
     * Change tab only.
     * Scrolling is handled by the useEffect above.
     */
    const handleTabChange = (tab: string) => {
        if (tab === activeTab) return;

        setActiveTab(tab);
    };

    /**
     * Reusable tab buttons
     */
    const renderTabs = () => (
        <div className="button-wrap w-fit flex items-center justify-center border border-black p-[5px] rounded-[10px]">
            {tabs.map((tab: any) => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={`uppercase px-[20px] py-[7px] font-bold cursor-pointer ${activeTab === tab
                        ? "bg-[var(--secondary-color)] rounded-[10px] text-black"
                        : "text-black nonactive"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );

    return (
        <>
            {/* =========================
                TOP TABS
            ========================= */}
            <div
                ref={tabsRef}
                className="flex items-center justify-center scroll-mt-[100px]"
            >
                {renderTabs()}
            </div>

            {/* =========================
                AGENDA CONTENT
            ========================= */}
            <div className="relative py-[80px]">

                {/* =========================
                    AWARDS AGENDA
                ========================= */}
                {activeTab === "Day 2 Awards & Gala Dinner" ? (
                    <div className="relative">
                        {filteredAgenda.map(
                            (item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-[20px] md:gap-[0]"
                                >
                                    {item.cards.map(
                                        (
                                            session: any,
                                            i: number
                                        ) => (
                                            <div
                                                key={i}
                                                id={`${i}`}
                                                className="flex flex-col justify-between gap-[20px] md:flex-row md:gap-[0]"
                                            >
                                                {/* Left content */}
                                                {i !== 5 && (
                                                    <div
                                                        className={`w-full md:w-[50%] ${i % 2 !== 0
                                                            ? "md:order-2"
                                                            : ""
                                                            }`}
                                                    >
                                                        <div className="flex h-full flex-col justify-center gap-[10px] md:px-[40px]">
                                                            <div className="font-montserrat text-[1rem] font-bold leading-[1] text-white">
                                                                {
                                                                    session.time
                                                                }
                                                            </div>

                                                            <div className="font-montserrat text-[1.2rem] font-bold leading-[1.2] text-white">
                                                                {
                                                                    session.heading
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Video */}
                                                <div
                                                    className={`relative ${i !== 5
                                                        ? "md:w-[50%]"
                                                        : "w-full"
                                                        } h-[300px] ${i % 2 !== 0
                                                            ? "md:order-1"
                                                            : ""
                                                        }`}
                                                >
                                                    {i === 5 && (
                                                        <div className="absolute flex h-full w-full flex-col gap-[10px] p-[20px] md:p-[40px]">
                                                            <div className="font-montserrat text-[1rem] font-bold leading-[1] text-white">
                                                                {
                                                                    session.time
                                                                }
                                                            </div>

                                                            <div className="font-montserrat text-[1.2rem] font-bold leading-[1.2] text-white">
                                                                {
                                                                    session.heading
                                                                }
                                                            </div>
                                                        </div>
                                                    )}

                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        poster={
                                                            session
                                                                .cards_background_video_bg
                                                                ?.url
                                                        }
                                                        className="h-full w-full object-cover"
                                                    >
                                                        <source
                                                            src={
                                                                session
                                                                    .cards_background_video
                                                                    ?.url
                                                            }
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                        )}
                    </div>
                ) : (
                    /* =========================
                       NORMAL AGENDA
                    ========================= */
                    <>
                        {filteredAgenda.map(
                            (item: any, index: number) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col gap-0 before:absolute before:left-0 before:top-[10px] before:h-full before:w-[1px] before:bg-[#d2d2d245] before:content-['']"
                                >
                                    {item.cards.map(
                                        (
                                            session: any,
                                            i: number
                                        ) => (
                                            <div key={i}>
                                                {/* Background Image */}
                                                {session.cards_background_image ? (
                                                    <div
                                                        className="flex min-h-[110px] items-center justify-center overflow-hidden rounded-[10px] bg-cover bg-center px-[20px] lg:px-[30px] mb-[20px]"
                                                        style={{
                                                            backgroundImage: `url(${`/api/image/${session.cards_background_image.ID}/`})`,
                                                        }}
                                                    >
                                                        <div className="mx-auto grid w-full grid-cols-12 gap-y-[20px] md:gap-[20px] lg:gap-[20px]">
                                                            <div className={`col-span-12 text-[1rem] font-bold leading-[1] text-white ${year == 2027 ? "md:col-span-2 lg:col-span-2":"md:col-span-3 lg:col-span-3"}`}>
                                                                {
                                                                    session.time
                                                                }
                                                            </div>

                                                            <div className={`col-span-12 text-[1.2rem] font-bold leading-[1.2] text-white sm:text-[1.2rem] ${year == 2027 ? " md:col-span-10 lg:col-span-10":" md:col-span-9 lg:col-span-9"}`}>
                                                                {
                                                                    session.heading
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    /* Normal session */
                                                    <div
                                                        className={`relative flex items-center justify-center px-[20px] lg:px-[30px] py-[40px] border-b border-[#d2d2d2b3] before:absolute before:left-[-10px] before:top-[40px] before:h-[20px] before:w-[20px] before:rounded-full before:border-2 before:border-solid before:border-[var(--secondary-color)] before:bg-white before:content-['']`}
                                                    >
                                                        <div className="mx-auto grid w-full grid-cols-12 gap-y-[40px] md:gap-[20px] lg:gap-[20px]">

                                                            {/* Time */}
                                                            <div className={`flex flex-col gap-[40px] col-span-12 font-montserrat text-[1rem] font-bold leading-[1] text-black ${year == 2027 ? "md:col-span-2 lg:col-span-2":"md:col-span-3 lg:col-span-3"}`}>
                                                                {session.time}

                                                                {/* Company Logo */}
                                                                {session.company_logo?.url && (
                                                                    <div className="flex h-[114px] w-[192px] items-center justify-center">
                                                                        <img
                                                                            src={`/api/image/${session.company_logo.id}/`}
                                                                            alt={session.company_logo?.title || "Company"}
                                                                            className="h-full w-full object-contain"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {/* Session Content */}
                                                            <div className={`col-span-12 flex flex-col gap-[20px] ${year == 2027 ? " md:col-span-10 lg:col-span-10":" md:col-span-9 lg:col-span-9"}`}>

                                                                {/* Panel discussion */}
                                                                {session.panel_discussion_text && (
                                                                    <div className="w-fit rounded-[4px] bg-[var(--secondary-color)] px-[10px] text-[0.9rem] font-semibold uppercase text-black">
                                                                        {
                                                                            session.panel_discussion_text
                                                                        }
                                                                    </div>
                                                                )}

                                                                {/* Heading */}
                                                                <h3
                                                                    className="font-montserrat text-[1.2rem] font-bold leading-[1.4] text-black"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            session.heading ||
                                                                            "",
                                                                    }}
                                                                />

                                                                {/* Content */}
                                                                {session.content && (
                                                                    <div
                                                                        className="font-montserrat text-[0.9rem] text-[#0e0e0e] [&_li]:mb-[10px] [&_ul]:list-disc [&_ul]:pl-[20px]"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html:
                                                                                session.content,
                                                                        }}
                                                                    />
                                                                )}

                                                                {/* Speakers */}
                                                                {session.speakers &&
                                                                    Array.isArray(
                                                                        session.speakers
                                                                    ) && (
                                                                        <div className="flex flex-wrap items-end gap-[20px]">
                                                                            {session.speakers.map(
                                                                                (
                                                                                    speaker: any,
                                                                                    speakerIndex: number
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            speaker.ID ||
                                                                                            speakerIndex
                                                                                        }
                                                                                        id={String(
                                                                                            speaker.ID
                                                                                        )}
                                                                                        className={`relative flex w-full flex-col gap-[10px] sm:w-[45%] lg:w-[31%] ${year ==
                                                                                            2024
                                                                                            ? "min-h-[160px]"
                                                                                            : "min-h-[160px]"
                                                                                            } before:absolute before:top-[20%] before:z-1 before:h-[80%] before:w-full before:rounded-[10px] before:border before:border-[#0e0e0e29] before:content-['']`}
                                                                                    >
                                                                                        {/* Moderator */}
                                                                                        {speaker.ID ==
                                                                                            session
                                                                                                .moderator_speaker?.[0] && (
                                                                                                <div
                                                                                                    className={`absolute left-[90px] font-montserrat text-[0.9rem] font-bold uppercase text-[#e22013] ${year ==
                                                                                                        2024
                                                                                                        ? "top-[5px]"
                                                                                                        : "top-[5px]"
                                                                                                        }`}
                                                                                                >
                                                                                                    Moderator
                                                                                                </div>
                                                                                            )}

                                                                                        <SingleSpeakerAgenda
                                                                                            speaker_id={
                                                                                                speaker.ID
                                                                                            }
                                                                                            year={
                                                                                                year
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            )
                        )}
                    </>
                )}
            </div>

            {/* =========================
                BOTTOM TABS
            ========================= */}
            <div className="flex items-center justify-center">
                {renderTabs()}
            </div>
        </>
    );
};

export default Tabs;