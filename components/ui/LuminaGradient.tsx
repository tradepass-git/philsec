"use client";

import Script from "next/script";

export default function LuminaGradient() {
    return (
        <>
            <Script
                src="https://makegradient.com/embed.js"
                strategy="beforeInteractive"
            />

            <div
                data-lumina-gradient
                data-colors='["#000000","#D4910F","#009615","#593B00","#000000","#F9D4A1"]'
                data-mode="mesh"
                data-noise="0"
                data-speed="2"
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    inset: 0,
                }}
            />
        </>
    );
}