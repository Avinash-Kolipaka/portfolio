"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();

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
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#07090C] font-mono-hud text-xs text-[#8A93A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#0E1218] border border-[#C6FF3D]/40 text-[#C6FF3D] font-bold text-xs">
              {profile.identity.monogram}
            </span>
            <div>
              <span className="text-[#EDEFF2] font-semibold block">{profile.identity.name}</span>
              <span className="text-[10px] text-white/40">{profile.identity.title} // {currentYear}</span>
            </div>
          </div>

          {/* Telemetry info */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>FEED: SECURE</span>
            </div>
            <span>IST CLOCK: <span className="text-[#C6FF3D]">{time}</span></span>
            <span>LPU / PUNJAB</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0E1218] border border-white/10 hover:border-[#C6FF3D]/40 text-[#EDEFF2] transition-colors w-fit"
            data-hud-target="true"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] text-white/30">
          <div>
            © {currentYear} Kolipaka Avinash. All verified metrics grounded in active production.
          </div>
          <div>
            BUILT WITH NEXT.JS 16 · TAILWIND · FRAMER MOTION · THREE
          </div>
        </div>
      </div>
    </footer>
  );
}
