"use client";

import { useEffect, useRef } from "react";
import { NeatGradient as NeatGradientRenderer } from "@firecms/neat";

export default function NeatGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<NeatGradientRenderer | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradientRenderer({
      ref: canvasRef.current,

      colors: [
        { color: "#FE7061", enabled: true },
        { color: "#E3FF65", enabled: true },
        { color: "#2472FC", enabled: true },
        { color: "#9500FF", enabled: true },
      ],

      speed: 3,
      waveAmplitude: 5,
      waveFrequencyX: 4,
      waveFrequencyY: 4,
      colorBlending: 5,
      colorBrightness: 1,
      backgroundColor: "#181819",
      backgroundAlpha: 1,
      resolution: 0.75,
      renderScale: 0.75,
    });

    return () => {
      gradientRef.current?.destroy();
      gradientRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 -z-10 h-full w-full"
    />
  );
}