"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal, 
  Cpu, 
  Scan, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  FileText,
  Activity
} from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0D14]">
      {/* Swiss Editorial Precision Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      
      {/* Holographic Prismatic Background Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Operational Status Pill */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#121722] border border-white/10 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-slate-300">
              CORTEVA AGRISCIENCE &bull; AI/ML VISION INTERN
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-[11px] font-mono text-cyan-400 font-semibold">
              AVAILABLE MAY 2025
            </span>
          </div>
        </div>

        {/* Central Swiss Editorial Headline */}
        <div className="text-center space-y-6">
          <div className="inline-block">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2 block">
              [01 // COMPUTER VISION & FULL-STACK SYSTEMS ENGINEER]
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-sans leading-[1.05]">
            Architecting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              High-Precision Vision
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">
              & Distributed Systems.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            I build production multi-view computer vision rigs, train quantized edge models (YOLOv8-seg, BRISQUE), and engineer resilient full-stack cloud microservices.
          </p>

          {/* Core Verified Fact Metric Strips */}
          <div className="pt-6 pb-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-left">
            <div className="flex items-center gap-3 bg-[#111622]/80 border border-white/10 px-4 py-2.5 rounded-xl">
              <div className="w-2 h-8 bg-cyan-400 rounded-full" />
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block">PATENT PENDING</span>
                <span className="text-sm font-mono font-bold text-white">Smart IoT Parking &bull; 2024</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#111622]/80 border border-white/10 px-4 py-2.5 rounded-xl">
              <div className="w-2 h-8 bg-emerald-400 rounded-full" />
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block">ALGORITHMS / DSA</span>
                <span className="text-sm font-mono font-bold text-white">800+ LeetCode &bull; 1731 Rating</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#111622]/80 border border-white/10 px-4 py-2.5 rounded-xl">
              <div className="w-2 h-8 bg-indigo-400 rounded-full" />
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block">CORTEVA PIPELINE</span>
                <span className="text-sm font-mono font-bold text-white">18+ video_toolkit functions</span>
              </div>
            </div>
          </div>

          {/* Primary Call to Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#experience"
              className="px-6 py-3.5 rounded-xl bg-white text-slate-950 font-semibold font-mono text-xs sm:text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl shadow-white/10 hover:scale-[1.02]"
            >
              <Cpu className="w-4 h-4 text-slate-950" />
              <span>EXPLORE CORTEVA VISION LAB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-[#121722] hover:bg-[#182030] text-white font-mono text-xs sm:text-sm border border-white/15 transition-all flex items-center gap-2 hover:border-cyan-500/50"
            >
              <Scan className="w-4 h-4 text-cyan-400" />
              <span>VIEW 6 PRODUCTION PROJECTS</span>
            </a>

            <a
              href={PROFILE.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs sm:text-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>RESUME</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
