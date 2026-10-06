"use client";
import CustomClass from "@/public/css/CustomClass.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import BackToTop from "./ui/BackToTop";
import Link from "next/link";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useRouter, usePathname } from "next/navigation";
gsap.registerPlugin(ScrollToPlugin);

/* =========================================================
   MENU TYPES
========================================================= */

type MenuItem = {
    name: string;
    href?: string;
    items?: MenuItem[];
};

type MenuGroup = {
    category: string;
    href?: string;
    items: MenuItem[];
};

/* =========================================================
   MENU DATA
========================================================= */

const menu: MenuGroup[] = [
    {
        category: "Home",
        href: "/",
        items: [],
    },
    {
        category: "Speakers",
        href: "/#speakers",
        items: [],
    },
    {
        category: "Happenings",
        href: "/#happenings",
        items: [],
    },

    {
        category: "Awards",
        href: "/awards/",
        items: [],
    },

    {
        category: "Gallery",
        href: "/gallery/",
        items: [],
    },

    {
        category: "Floor Plan",
        href: "/floor-plan/",
        items: [],
    },

    {
        category: "Past Edition",
        items: [

            {
                name: "2026",
                items: [
                    {
                        name: "Agenda",
                        href: "/agenda-2026/",
                    },
                    {
                        name: "Speakers",
                        href: "/2026-speakers/",
                    },
                    {
                        name: "Sponsors",
                        href: "/2026-sponsors/",
                    },
                    {
                        name: "Awards",
                        href: "/awards-2026/",
                    },
                ],
            },


            {
                name: "2025",
                items: [
                    {
                        name: "Agenda",
                        href: "/agenda-2025/",
                    },
                    {
                        name: "Speakers",
                        href: "/2025-speakers/",
                    },
                    {
                        name: "Sponsors",
                        href: "/2025-sponsors/",
                    },
                ],
            },

            {
                name: "2024",
                items: [
                    {
                        name: "Agenda",
                        href: "/agenda-2024/",
                    },
                    {
                        name: "Speakers",
                        href: "/2024-speakers/",
                    },
                    {
                        name: "Sponsors",
                        href: "/2024-sponsors/",
                    },
                ],
            },


            {
                name: "2023",
                items: [

                    {
                        name: "Speakers",
                        href: "/2023-speakers",
                    },
                    {
                        name: "Sponsors",
                        href: "/2023-sponsors",
                    },
                ],
            },


        ],
    },
];

/* =========================================================
   HEADER
========================================================= */

const Header = () => {

    const router = useRouter();
    const pathname = usePathname();
    /* =====================================================
       MODAL
    ===================================================== */

    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [hubspotId, setHubspotId] = useState("");

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const [menuOpen, setMenuOpen] = useState(false);

    /*
     * Main mobile dropdown
     *
     * Example:
     * Past Edition = 5
     */
    const [activeDropdown, setActiveDropdown] =
        useState<number | null>(null);

    /*
     * Nested mobile dropdown
     *
     * Example:
     * 5-0 = Past Edition -> 2026
     * 5-1 = Past Edition -> 2025
     * 5-2 = Past Edition -> 2024
     */
    const [activeSubDropdown, setActiveSubDropdown] =
        useState<string | null>(null);

    /* =====================================================
       MAIN DROPDOWN TOGGLE
    ===================================================== */

    const toggleDropdown = (index: number) => {
        setActiveDropdown((current) =>
            current === index ? null : index
        );

        // Close nested submenu when changing main menu
        setActiveSubDropdown(null);
    };

    /* =====================================================
       NESTED DROPDOWN TOGGLE
    ===================================================== */

    const toggleSubDropdown = (key: string) => {
        setActiveSubDropdown((current) =>
            current === key ? null : key
        );
    };

    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    const closeMenu = () => {
        setMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
    };

    /* =====================================================
       OPEN MOBILE MENU
    ===================================================== */

    const toggleMobileMenu = () => {
        setMenuOpen((current) => !current);

        setActiveDropdown(null);
        setActiveSubDropdown(null);
    };

    /* =====================================================
       HUBSPOT MODAL
    ===================================================== */

    const openEnquiryModal = (
        title: string,
        formId: string
    ) => {
        setModalTitle(title);
        setHubspotId(formId);
        setOpen(true);
    };


    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();

        if (pathname !== "/") {
            // Navigate to homepage with hash
            router.push(`/#${id}`);
            return;
        }

        // Already on homepage
        const element = document.getElementById(id);

        if (!element) return;

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: element,
                offsetY: 120,
            },
            ease: "power2.out",
        });
    };

    useEffect(() => {
        if (pathname !== "/") return;

        const hash = window.location.hash;

        if (!hash) return;

        const id = hash.substring(1);

        // Wait for the homepage/section to render
        const timer = setTimeout(() => {
            const element = document.getElementById(id);

            if (!element) return;

            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: element,
                    offsetY: 120,
                },
                ease: "power2.out",
            });
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    /* =====================================================
       RETURN
    ===================================================== */

    return (
        <>
            <div className="tp-concluded">
                <div className="marquee">
                    <span>2026 Edition Has Been Concluded Successfully! See You All In 2027!</span>
                    <span>2026 Edition Has Been Concluded Successfully! See You All In 2027!</span>
                    <span>2026 Edition Has Been Concluded Successfully! See You All In 2027!</span>
                    <span>2026 Edition Has Been Concluded Successfully! See You All In 2027!</span>
                </div>
            </div>
            <header>
                {/* =================================================
                    HEADER BAR
                ================================================= */}

                <div
                    className={`relative pt-[15px] pb-[10px] px-[7.5px] min-[1400px]:py-[16px]  min-[1400px]:px-[31px] flex justify-between  border-b border-[rgba(25,25,26,0.3)] backdrop-blur-[4px] fixed-top ${menuOpen ? "bg-[rgb(0,0,0)]" : "bg-[rgba(0,0,0)]"}`}
                >
                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <div className="flex gap-[30px] items-center">
                        <a
                            href="/"
                            id="malaysia-home-nav"
                            className="relative z-[1000]"
                        >
                            <Image
                                priority
                                width={162}
                                height={41}
                                src="/images/tradepass-white.webp"
                                alt="tradepassglobal"
                            />
                        </a>
                    </div>

                    {/* =================================================
                        RIGHT SIDE
                    ================================================= */}

                    <div className="flex gap-[30px] items-center">
                        <nav>
                            <div className="flex items-center justify-between">
                                {/* =================================================
                                    DESKTOP MENU
                                ================================================= */}

                                <ul className="hidden md:flex items-center gap-6">
                                    {menu.map((group, index) => {
                                        const hasItems =
                                            group.items.length > 0;

                                        return (
                                            <li
                                                key={`${group.category}-${index}`}
                                                className="relative group py-3"
                                            >
                                                {/* =====================================
                                                    NORMAL MENU ITEM
                                                ===================================== */}

                                                {!hasItems ? (
                                                    <a
                                                        href={
                                                            group.href || "#"
                                                        }
                                                        onClick={(e) => {
                                                            if (group.href?.includes("#")) {
                                                                const id = group.href.split("#")[1];

                                                                if (id) {
                                                                    handleScroll(e, id);
                                                                }
                                                            } else {
                                                                closeMenu?.();
                                                            }
                                                        }}
                                                        className="text-[12px] min-[1600px]:text-[16px] font-bold uppercase hover:text-[var(--secondary-color)] transition-colors"


                                                    >
                                                        {group.category}
                                                    </a>
                                                ) : (
                                                    <>
                                                        {/* =================================
                                                            DROPDOWN BUTTON
                                                        ================================= */}

                                                        <button
                                                            type="button"
                                                            className="flex items-center gap-1 text-[12px] min-[1600px]:text-[16px] font-bold uppercase hover:text-[var(--secondary-color)] transition-colors"
                                                        >
                                                            {group.category}

                                                            <svg
                                                                className="
                                                                    w-4
                                                                    h-4
                                                                    transition-transform
                                                                    duration-200
                                                                    group-hover:rotate-180
                                                                "
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M19 9l-7 7-7-7"
                                                                />
                                                            </svg>
                                                        </button>

                                                        {/* =================================
                                                            DESKTOP DROPDOWN
                                                        ================================= */}

                                                        <div
                                                            className={`absolute top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white text-black min-w-[250px] rounded-lg shadow-lg p-3 z-50 ${index === menu.length - 1 ? "right-0" : "left-0"}`}
                                                        >
                                                            {/* Arrow */}

                                                            <div
                                                                className={`absolute -top-2 w-4 h-4 bg-white rotate-45 ${index === menu.length - 1 ? "right-5" : "left-5"}`}
                                                            />

                                                            <ul className="space-y-2 relative z-10">
                                                                {group.items.map(
                                                                    (
                                                                        item,
                                                                        itemIndex
                                                                    ) => {
                                                                        const hasSubmenu =
                                                                            !!item
                                                                                .items
                                                                                ?.length;

                                                                        return (
                                                                            <li
                                                                                key={`${group.category}-${item.name}-${itemIndex}`}
                                                                                className="relative group/submenu"
                                                                            >
                                                                                {/* Parent */}

                                                                                {item.href ? (
                                                                                    <Link
                                                                                        href={
                                                                                            item.href
                                                                                        }
                                                                                        className="flex items-center justify-between gap-4 text-[12px] min-[1600px]:text-[16px] font-bold uppercase hover:text-[var(--secondary-color)] transition-colors"
                                                                                    >
                                                                                        {
                                                                                            item.name
                                                                                        }

                                                                                        {hasSubmenu && (
                                                                                            <span className="text-lg leading-none">
                                                                                                ›
                                                                                            </span>
                                                                                        )}
                                                                                    </Link>
                                                                                ) : (
                                                                                    <button
                                                                                        type="button"
                                                                                        className="w-full flex items-center justify-between gap-4 text-left text-[12px] min-[1600px]:text-[16px] font-bold uppercase hover:text-[var(--secondary-color)] transition-colors"
                                                                                    >
                                                                                        {
                                                                                            item.name
                                                                                        }

                                                                                        {hasSubmenu && (
                                                                                            <span className="text-lg leading-none">
                                                                                                ›
                                                                                            </span>
                                                                                        )}
                                                                                    </button>
                                                                                )}

                                                                                {/* =================================
                                                                                    DESKTOP NESTED SUBMENU
                                                                                ================================= */}

                                                                                {hasSubmenu && (
                                                                                    <div
                                                                                        className="absolute left-full top-0 ml-2 min-w-[220px] bg-white text-black rounded-lg shadow-lg p-3 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 z-[60]"
                                                                                    >
                                                                                        <ul className="space-y-2">
                                                                                            {item.items!.map(
                                                                                                (
                                                                                                    subItem,
                                                                                                    subIndex
                                                                                                ) => (
                                                                                                    <li
                                                                                                        key={`${group.category}-${item.name}-${subItem.name}-${subIndex}`}
                                                                                                    >
                                                                                                        {subItem.href ? (
                                                                                                            <a
                                                                                                                href={
                                                                                                                    subItem.href
                                                                                                                }
                                                                                                                className="block text-[12px] min-[1600px]:text-[16px] font-bold uppercase hover:text-[var(--secondary-color)] transition-colors"
                                                                                                            >
                                                                                                                {
                                                                                                                    subItem.name
                                                                                                                }
                                                                                                            </a>
                                                                                                        ) : (
                                                                                                            <span
                                                                                                                className="
                                                                                                                    block
                                                                                                                    text-[12px]
                                                                                                                    min-[1600px]:text-[16px]
                                                                                                                    font-bold
                                                                                                                    uppercase
                                                                                                                "
                                                                                                            >
                                                                                                                {
                                                                                                                    subItem.name
                                                                                                                }
                                                                                                            </span>
                                                                                                        )}
                                                                                                    </li>
                                                                                                )
                                                                                            )}
                                                                                        </ul>
                                                                                    </div>
                                                                                )}
                                                                            </li>
                                                                        );
                                                                    }
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* =================================================
                                    MOBILE TOGGLE
                                ================================================= */}

                                <button
                                    type="button"
                                    aria-label={
                                        menuOpen
                                            ? "Close menu"
                                            : "Open menu"
                                    }
                                    aria-expanded={menuOpen}
                                    onClick={toggleMobileMenu}
                                    className="md:hidden text-2xl w-10 h-10 flex items-center justify-center cursor-pointer"
                                >
                                    {menuOpen ? "✕" : "☰"}
                                </button>
                            </div>
                        </nav>

                        {/* =================================================
                            DESKTOP ENQUIRY BUTTONS
                        ================================================= */}


                    </div>
                    <div className="hidden min-[1200px]:flex items-center gap-2.5">
                        <a
                            href="javascript:void(0)"
                            id="malaysia-sponsor-nav"
                            onClick={() =>
                                openEnquiryModal(
                                    "Sponsor Enquiry",
                                    "3656a56e-729c-4535-a064-83d26f8f18e2"
                                )
                            }
                            className={`${CustomClass.ctaButton}`}
                        >
                           {/* <svg><use href="/images/icons.svg#plus"></use></svg> */} 
                            <span><span>Sponsor Enquiry</span><span>Sponsor Enquiry</span></span>
                        </a>

                        <a
                            href="javascript:void(0)"
                            id="malaysia-delegate-nav"
                            onClick={() =>
                                openEnquiryModal(
                                    "Delegate Enquiry",
                                    "ee57b649-7128-43b1-81d2-85bb7d01e490"
                                )
                            }
                            className={`${CustomClass.ctaButton}`}
                        >
                             {/* <svg><use href="/images/icons.svg#plus"></use></svg> */} 
                            <span><span>Delegate Enquiry</span><span>Delegate Enquiry</span></span>

                        </a>
                    </div>
                </div>

                {/* =========================================================
                    MOBILE MENU
                ========================================================= */}

                <div className={`md:hidden fixed w-full top-[60px] left-0 z-[99] overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="bg-black">
                        {menu.map((group, index) => {
                            const hasItems =
                                group.items.length > 0;

                            return (
                                <div
                                    key={`${group.category}-${index}`}
                                    className="border-b border-gray-700"
                                >
                                    {/* =====================================
                                        NORMAL MOBILE MENU ITEM
                                    ===================================== */}

                                    {!hasItems ? (
                                        <a
                                            href={
                                                group.href || "#"
                                            }
                                            onClick={closeMenu}
                                            className="
                                                block
                                                px-4
                                                py-4
                                                hover:bg-gray-900
                                                transition-colors
                                            "
                                        >
                                            {group.category}
                                        </a>
                                    ) : (
                                        <>
                                            {/* =================================
                                                MAIN DROPDOWN BUTTON
                                            ================================= */}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    toggleDropdown(
                                                        index
                                                    )
                                                }
                                                className="w-full flex justify-between items-center px-4 py-4 text-left hover:bg-gray-900 transition-colors"
                                            >
                                                <span>
                                                    {
                                                        group.category
                                                    }
                                                </span>

                                                <span className="text-xl">
                                                    {activeDropdown ===
                                                        index
                                                        ? "−"
                                                        : "+"
                                                    }
                                                </span>
                                            </button>

                                            {/* =================================
                                                MAIN DROPDOWN
                                            ================================= */}

                                            <div
                                                className={`
                                                    overflow-hidden
                                                    transition-all
                                                    duration-300
                                                    ${activeDropdown ===
                                                        index
                                                        ? "max-h-[800px] opacity-100"
                                                        : "max-h-0 opacity-0"
                                                    }
                                                `}
                                            >
                                                <ul className="bg-gray-900">
                                                    {group.items.map(
                                                        (
                                                            item,
                                                            itemIndex
                                                        ) => {
                                                            const hasSubmenu =
                                                                !!item
                                                                    .items
                                                                    ?.length;

                                                            const submenuKey = `${index}-${itemIndex}`;

                                                            return (
                                                                <li
                                                                    key={`${group.category}-${item.name}-${itemIndex}`}
                                                                    className="border-t border-gray-800"
                                                                >
                                                                    {/* =================================
                                                                        ITEM WITH SUBMENU
                                                                    ================================= */}

                                                                    {hasSubmenu ? (
                                                                        <>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    toggleSubDropdown(
                                                                                        submenuKey
                                                                                    )
                                                                                }
                                                                                className="w-full flex justify-between items-center px-6 py-3 text-left hover:bg-gray-800 transition-colors"
                                                                            >
                                                                                <span>
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </span>

                                                                                <span className="text-lg">
                                                                                    {activeSubDropdown ===
                                                                                        submenuKey
                                                                                        ? "−"
                                                                                        : "+"
                                                                                    }
                                                                                </span>
                                                                            </button>

                                                                            {/* =================================
                                                                                NESTED SUBMENU
                                                                            ================================= */}

                                                                            <div
                                                                                className={`
                                                                                    overflow-hidden
                                                                                    transition-all
                                                                                    duration-300
                                                                                    ${activeSubDropdown ===
                                                                                        submenuKey
                                                                                        ? "max-h-[500px] opacity-100"
                                                                                        : "max-h-0 opacity-0"
                                                                                    }
                                                                                `}
                                                                            >
                                                                                <ul className="bg-gray-950">
                                                                                    {item.items!.map(
                                                                                        (
                                                                                            subItem,
                                                                                            subIndex
                                                                                        ) => (
                                                                                            <li
                                                                                                key={`${group.category}-${item.name}-${subItem.name}-${subIndex}`}
                                                                                                className="border-t border-gray-800"
                                                                                            >
                                                                                                {subItem.href ? (
                                                                                                    <a
                                                                                                        href={
                                                                                                            subItem.href
                                                                                                        }
                                                                                                        onClick={
                                                                                                            closeMenu
                                                                                                        }
                                                                                                        className="block pl-10 pr-6 py-3 text-sm hover:bg-gray-800 hover:text-[var(--secondary-color)] transition-colors"
                                                                                                    >
                                                                                                        {
                                                                                                            subItem.name
                                                                                                        }
                                                                                                    </a>
                                                                                                ) : (
                                                                                                    <span
                                                                                                        className="
                                                                                                            block
                                                                                                            pl-10
                                                                                                            pr-6
                                                                                                            py-3
                                                                                                            text-sm
                                                                                                        "
                                                                                                    >
                                                                                                        {
                                                                                                            subItem.name
                                                                                                        }
                                                                                                    </span>
                                                                                                )}
                                                                                            </li>
                                                                                        )
                                                                                    )}
                                                                                </ul>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        /* =================================
                                                                            NORMAL SUBMENU ITEM
                                                                        ================================= */

                                                                        <a
                                                                            href={
                                                                                item.href ||
                                                                                "#"
                                                                            }
                                                                            onClick={
                                                                                closeMenu
                                                                            }
                                                                            className="
                                                                                block
                                                                                px-6
                                                                                py-3
                                                                                hover:bg-gray-800
                                                                                transition-colors
                                                                            "
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </a>
                                                                    )}
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </header>

            {/* =========================================================
                BACK TO TOP
            ========================================================= */}

            <BackToTop />

            {/* =========================================================
                HUBSPOT MODAL
            ========================================================= */}

            <Modal
                isOpen={open}
                title={modalTitle}
                formId={hubspotId}
                onClose={() => {
                    setOpen(false);
                }}
            />
        </>
    );
};

export default Header;