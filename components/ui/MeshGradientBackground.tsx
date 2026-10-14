"use client";

import "@/public/css/MeshGradientBackground.css";

type MeshGradientBackgroundProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function MeshGradientBackground({
    children,
    className = "",
}: MeshGradientBackgroundProps) {
    return (
        <div
            className={`mesh-gradient-wrapper relative isolate min-h-screen w-full overflow-hidden ${className}`}
        >
            {/* Animated mesh gradient background */}
            <div
                className="mesh-gradient-background pointer-events-none absolute inset-0 -z-10"
                aria-hidden="true"
            />

            {/* Page content */}
            {children && (
                <div className="relative z-10">
                    {children}
                </div>
            )}
        </div>
    );
}