"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, FileText, Send } from "lucide-react";
import BoundingBox from "../hud/BoundingBox";
import HeroPointCloud from "../visual/HeroPointCloud";
import { profile } from "@/data/profile";

export default function Hero() {
  const chips = [
    { label: "AI/CV", value: "YOLOv8-seg", conf: "0.98" },
    { label: "DevOps", value: "Azure AKS", conf: "0.96" },
    { label: "Full-Stack", value: "MERN Stack", conf: "0.98" },
    { label: "GenAI", value: "LangChain / RAG", conf: "0.96" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090C]"
    >
      {/* 3D Lightweight Particle Point Cloud */}
      <HeroPointCloud />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Availability Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1218] border border-[#00E599]/30 text-[11px] font-mono-hud text-[#00E599] mb-8 shadow-[0_0_15px_rgba(0,229,153,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          <span>{profile.identity.statusPill}</span>
        </div>

        {/* Central Detection Bounding Box on Identity */}
        <BoundingBox
          label="ENGINEER_ID 0.99"
          confidence=""
          className="p-8 sm:p-12 bg-[#0E1218]/70 backdrop-blur-md max-w-4xl w-full mb-8"
        >
          <div className="text-xs font-mono-hud text-[#4DE1FF] mb-2 uppercase tracking-widest">
            // {profile.identity.name}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDEFF2] mb-4">
            {profile.identity.title}
          </h1>

          <p className="font-display text-xl sm:text-2xl md:text-3xl text-[#EDEFF2]/90 font-medium mb-4 max-w-2xl mx-auto">
            "{profile.editorial.heroLead}"
          </p>

          <p className="font-mono-hud text-xs sm:text-sm text-[#8A93A0] max-w-xl mx-auto">
            › {profile.identity.roleLine}
          </p>
        </BoundingBox>

        {/* Floating Telemetry Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 font-mono-hud text-xs">
          {chips.map((chip, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E1218] border border-white/10 text-[#EDEFF2]/80 hover:border-[#C6FF3D]/40 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
              <span className="text-white/40">{chip.label}:</span>
              <span className="font-semibold text-white">{chip.value}</span>
              <span className="text-[10px] text-[#C6FF3D]">{chip.conf}</span>
            </div>
          ))}
        </div>

        {/* Primary Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono-hud text-xs">
          <a
            href="#work"
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#C6FF3D] hover:bg-[#b5f02c] text-[#07090C] font-semibold transition-all shadow-[0_0_20px_rgba(198,255,61,0.3)]"
            data-hud-target="true"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={profile.contact.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#0E1218] border border-white/10 hover:border-white/25 text-[#EDEFF2] transition-colors"
            data-hud-target="true"
          >
            <FileText className="w-4 h-4 text-[#4DE1FF]" />
            <span>Download CV [PDF]</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#0E1218] border border-white/10 hover:border-[#C6FF3D]/40 text-[#EDEFF2] transition-colors"
            data-hud-target="true"
          >
            <Send className="w-4 h-4 text-[#C6FF3D]" />
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}
