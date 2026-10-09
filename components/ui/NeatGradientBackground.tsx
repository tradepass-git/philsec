"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const config = {
    colors: [
        { color: "#000000", enabled: true },
        { color: "#FF8F00", enabled: true },
        { color: "#1A001A", enabled: true },
        { color: "#14080A", enabled: true },
        { color: "#001129", enabled: true },
    ],
    speed: 5.5,
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
    highlights: 2,
    colorBrightness: 1,
    colorSaturation: -1,
    wireframe: false,
    antialias: false,
    colorBlending: 7,
    backgroundColor: "#010101",
    backgroundAlpha: 1,
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

export default function NeatGradientBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const gradient = new NeatGradient({
            ref: canvas,
            ...config,
        });

        const handleScroll = () => {
            gradient.yOffset = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            gradient.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        />
    );
}