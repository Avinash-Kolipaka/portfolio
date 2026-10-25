"use client";

import React, { useState, useEffect } from "react";

export default function HUDOverlay() {
  const [time, setTime] = useState("");
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };

    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    let animationFrameId: number;
    const updateFrame = () => {
      setFrame((f) => (f + 1) % 1000000);
      animationFrameId = requestAnimationFrame(updateFrame);
    };
    animationFrameId = requestAnimationFrame(updateFrame);

    return () => {
      clearInterval(clockInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Subtle Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-30 opacity-[0.015] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

      {/* Telemetry Bottom Bar */}
      <aside aria-label="HUD Telemetry Bar" className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 hidden md:flex items-center justify-between px-6 py-2 bg-[#07090C]/80 backdrop-blur-sm border-t border-white/5 font-mono-hud text-[10px] text-white/40 select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#C6FF3D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
            <span className="tracking-widest">FEED: SECURE // ONLINE</span>
          </div>
          <span>LOC: 31.25°N, 75.70°E [PUNJAB / LPU]</span>
        </div>

        <div className="flex items-center gap-4">
          <span>IST CLOCK: {time}</span>
          <span className="text-[#4DE1FF]">FRM: {String(frame).padStart(6, "0")}</span>
        </div>
      </aside>
    </>
  );
}
