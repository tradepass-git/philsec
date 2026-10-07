"use client";

import React from "react";
import HorizontalScroll from "@/components/ui/HorizontalScrollNew";

const Happenings = () => {
    return (
        <section className="relative w-full overflow-hidden">

            <div className="mx-auto w-full max-w-7xl">

                <div className="relative h-[700px] w-full">
                    <HorizontalScroll />
                </div>

            </div>

        </section>
    );
};

export default Happenings;