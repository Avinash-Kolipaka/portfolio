"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CrosshairCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isLocked, setIsLocked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isTargetInteractive = target?.closest(
        'button, a, input, textarea, select, [data-hud-target="true"]'
      );
      setIsLocked(!!isTargetInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0"
        animate={{
          x: mousePos.x - (isLocked ? 18 : 10),
          y: mousePos.y - (isLocked ? 18 : 10),
          width: isLocked ? 36 : 20,
          height: isLocked ? 36 : 20,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {/* Outer Ring */}
        <div
          className={`w-full h-full rounded-full border transition-all duration-200 ${
            isLocked
              ? "border-[#C6FF3D] scale-100 shadow-[0_0_12px_rgba(198,255,61,0.5)]"
              : "border-white/30 scale-90"
          }`}
        />

        {/* Center Crosshair Dot */}
        <div
          className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors ${
            isLocked ? "bg-[#C6FF3D]" : "bg-white/70"
          }`}
        />
      </motion.div>
    </div>
  );
}
