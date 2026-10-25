"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootLoader() {
  const [visible, setVisible] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Check if bootloader was already shown in this session
    const hasLoaded = sessionStorage.getItem("ak_vision_booted");
    if (hasLoaded) return;

    setVisible(true);

    const logSequence = [
      "INITIALIZING SENSOR ARRAYS...",
      "LOADING YOLOV8-SEG WEIGHTS: 100% OK",
      "CALIBRATING STEREO TURNTABLE CAMERAS...",
      "STARTING AZURE AKS TELEMETRY LINK...",
      "OPTICAL FEED ONLINE // LOCK ACQUIRED"
    ];

    let timerId: NodeJS.Timeout;
    logSequence.forEach((log, index) => {
      timerId = setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === logSequence.length - 1) {
          setTimeout(() => {
            sessionStorage.setItem("ak_vision_booted", "true");
            setVisible(false);
          }, 400);
        }
      }, (index + 1) * 220);
    });

    return () => clearTimeout(timerId);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("ak_vision_booted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#07090C] p-6 font-mono-hud text-xs text-[#EDEFF2] select-none"
      >
        <div className="relative w-full max-w-lg p-6 rounded-lg bg-[#0E1218] border border-white/10 shadow-2xl">
          <span className="corner-bracket-tl" />
          <span className="corner-bracket-tr" />
          <span className="corner-bracket-bl" />
          <span className="corner-bracket-br" />

          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2 text-[#C6FF3D]">
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping" />
              <span className="font-bold tracking-widest text-[11px]">// VISION_FEED_BOOTLOADER</span>
            </div>
            <button
              onClick={handleSkip}
              className="text-[10px] text-white/40 hover:text-[#C6FF3D] transition-colors underline"
            >
              [ SKIP INTRO ]
            </button>
          </div>

          <div className="space-y-2 min-h-[120px] text-[11px]">
            {logs.map((log, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#4DE1FF]">›</span>
                <span className={i === logs.length - 1 ? "text-[#C6FF3D] font-bold" : "text-[#8A93A0]"}>
                  {log}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30">
            <span>KOLIPAKA AVINASH // SYSTEM INIT</span>
            <span>≤ 1.5S LATENCY BOUND</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
