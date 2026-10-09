"use client";

import { useEffect, useRef, useState } from "react";
import { NeatGradient, type NeatConfig } from "@firecms/neat";

const sectionThemes: Record<string, Partial<NeatConfig>> = {

    default: {
        colors: [
            { color: "#000000", enabled: true },
            { color: "#FF8F00", enabled: true },
            { color: "#1A001A", enabled: true },
            { color: "#14080A", enabled: true },
            { color: "#001129", enabled: true },
        ],
        backgroundColor: "#000000",
    },

    WhyPhilippines: {
        colors: [
            { color: "#000000", enabled: true },
            { color: "#FF8F00", enabled: true },
            { color: "#1A001A", enabled: true },
            { color: "#14080A", enabled: true },
            { color: "#001129", enabled: true },
        ],
        backgroundColor: "#181819",
    },

    
};

const defaultConfig: NeatConfig = {
    colors: sectionThemes.default.colors!,
    speed: 9.5,
    horizontalPressure: 4,
    verticalPressure: 4,
    waveFrequencyX: 0,
    waveFrequencyY: 0,
    waveAmplitude: 2,
    secondaryWaveEnabled: true,
    secondaryWaveFrequencyX: 6.2,
    secondaryWaveFrequencyY: 8.5,
    secondaryWaveAmplitude: 0,
    secondaryWaveSpeed: 1.35,
    secondaryWaveAngle: 0.65,
    shadows: 2,
    highlights: 3,
    colorBrightness: 0.5,
    colorSaturation: -2,
    wireframe: false,
    antialias: false,
    colorBlending: 7,
    backgroundColor: "#010101",
    backgroundAlpha: 0,
    grainScale: 2,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 1,
    resolution: 0.75,
    yOffset: -0.16668701171875,
    yOffsetWaveMultiplier: 2.2,
    yOffsetColorMultiplier: 2.5,
    yOffsetFlowMultiplier: 2.8,
    flowDistortionA: 3.7,
    flowDistortionB: 1.4,
    flowScale: 2.9,
    flowEase: 0.32,
    flowEnabled: false,
    enableProceduralTexture: false,
    transparentTextureVoid: false,
    textureMode: "bitmap" as const,
    bakeEdgeSoftness: 1,
    textureVoidLikelihood: 0.27,
    textureVoidWidthMin: 60,
    textureVoidWidthMax: 420,
    textureBandDensity: 1.2,
    textureColorBlending: 0.06,
    textureSeed: 333,
    textureEase: 0.68,
    proceduralBackgroundColor: "#0E0707",
    textureShapeTriangles: 20,
    textureShapeCircles: 15,
    textureShapeBars: 15,
    textureShapeSquiggles: 10,
    domainWarpEnabled: true,
    domainWarpIntensity: 0,
    domainWarpScale: 3.8,
    vignetteIntensity: 0,
    vignetteRadius: 0.8,
    fresnelEnabled: false,
    fresnelPower: 2,
    fresnelIntensity: 0.5,
    fresnelColor: "#FFFFFF",
    iridescenceEnabled: false,
    iridescenceIntensity: 0.5,
    iridescenceSpeed: 1,
    prismEdgeEnabled: false,
    prismEdgeIntensity: 0.5,
    prismEdgeThinness: 3,
    prismEdgeSpread: 1,
    prismEdgeSpeed: 0.5,
    prismEdgeRipple: 1,
    bloomIntensity: 0,
    bloomThreshold: 0.7,
    chromaticAberration: 0,
    shapeType: "plane" as const,
    shapeRotationX: 0,
    shapeRotationY: 0,
    shapeRotationZ: 0,
    shapeAutoRotateSpeedX: 0,
    shapeAutoRotateSpeedY: 0,
    sphereRadius: 15,
    torusRadius: 15,
    torusTube: 5,
    cylinderRadius: 10,
    cylinderHeight: 40,
    planeBend: 0,
    planeTwist: 0,
    silhouetteFade: 0.25,
    cylinderFade: 0.08,
    ribbonFade: 0.05,
    flatShading: true,
    cameraLock: false,
    cameraX: 0,
    cameraY: 0,
    cameraZ: 0,
    cameraRotationX: 0,
    cameraRotationY: 0,
    cameraRotationZ: 0,
    cameraZoom: 1.6,
};

export default function SectionGradients() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    const [gradientEnabled, setGradientEnabled] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gradient = new NeatGradient({
            ref: canvas,
            ...defaultConfig,
        });

        gradientRef.current = gradient;

        const sections = Array.from(
            document.querySelectorAll<HTMLElement>(
                "[data-gradient-section]"
            )
        );

        let activeTheme = "";

        const updateGradient = () => {
            const viewportCenter = window.innerHeight / 2;

            // Find the section containing the center of the viewport
            const activeSection = sections.find((section) => {
                const rect = section.getBoundingClientRect();

                return (
                    rect.top <= viewportCenter &&
                    rect.bottom > viewportCenter
                );
            });

            const themeName = activeSection?.dataset.gradientSection;
            const theme = themeName
                ? sectionThemes[themeName]
                : undefined;

            // Gradient stays hidden when no matching section is active
            if (!theme || !themeName) {
                activeTheme = "";
                setGradientEnabled(false);
                return;
            }

            setGradientEnabled(true);

            // Update only when the active section changes
            if (activeTheme !== themeName) {
                activeTheme = themeName;

                if (theme.colors) {
                    gradient.colors = theme.colors;
                }

                if (theme.backgroundColor) {
                    gradient.backgroundColor = theme.backgroundColor;
                }
            }

            gradient.yOffset = window.scrollY;
        };

        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            window.requestAnimationFrame(() => {
                updateGradient();
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        // Check the initial viewport
        updateGradient();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);

            gradient.destroy();
            gradientRef.current = null;
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={`pointer-events-none fixed inset-0 z-0 h-full w-full transition-opacity duration-500 ${gradientEnabled ? "opacity-100" : "opacity-0"
                }`}
        />
    );
}