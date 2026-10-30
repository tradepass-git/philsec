"use client";

import { useState } from "react";
import Gallary2025 from "@/components/ui/Galley-2025";
import Gallary2026 from "@/components/ui/Galley-2026";

const Gallery = () => {
    const [activeTab, setActiveTab] = useState<number>(2026);

    return (
        <>
            {/* Gallery Tabs */}
            <section className="flex items-center justify-center bg-white">
                <div className="w-fit flex items-center justify-center rounded-[10px] border border-black p-[5px]">
                    {/* 2026 */}
                    <button
                        type="button"
                        onClick={() => setActiveTab(2026)}
                        className={`cursor-pointer rounded-[10px] px-[20px] py-[7px] font-bold uppercase transition-all duration-300 ${activeTab === 2026
                            ? "bg-[var(--secondary-color)] text-black"
                            : "text-black"
                            }`}
                    >
                        2026
                    </button>

                    {/* 2025 */}
                    <button
                        type="button"
                        onClick={() => setActiveTab(2025)}
                        className={`hidden cursor-pointer rounded-[10px] px-[20px] py-[7px] font-bold uppercase transition-all duration-300 ${activeTab === 2025
                            ? "bg-[var(--secondary-color)] text-black"
                            : "text-black"
                            }`}
                    >
                        2025
                    </button>
                </div>
            </section>

            {/* Gallery Content */}

            {activeTab === 2026 && <Gallary2026 />}
            {activeTab === 2025 && <Gallary2025 />}
        </>
    );
};

export default Gallery;