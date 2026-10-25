"use client";

import React from "react";
import BoundingBox from "../hud/BoundingBox";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// SYSTEM PROFILE // SECTION 01</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              Mindset · Craft · Ambition
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            B.TECH CSE · LPU (2023–PRESENT) <br className="hidden sm:inline" />
            ORIGIN: TELANGANA · BASE: PUNJAB
          </div>
        </div>

        {/* Narrative & Profile Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: First-Person Authentic Copy */}
          <div className="lg:col-span-7 space-y-6 text-[#EDEFF2]/85 text-base sm:text-lg leading-relaxed font-sans">
            <p className="font-semibold text-xl sm:text-2xl text-[#EDEFF2]">
              {profile.editorial.aboutIntro}
            </p>

            {profile.editorial.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-[#8A93A0] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Right Column: Verified Profile Telemetry */}
          <div className="lg:col-span-5">
            <BoundingBox label="ENGINEER_FACTS 0.99" confidence="" className="p-6 sm:p-8 bg-[#0E1218]">
              <span className="text-xs font-mono-hud text-white/40 block mb-4 uppercase tracking-wider">
                Verified Profile Telemetry
              </span>

              <div className="space-y-4 font-mono-hud text-xs">
                <div>
                  <span className="text-[#C6FF3D] block mb-0.5">› CURRENT AFFILIATION</span>
                  <p className="text-white/80 font-bold">
                    {profile.identity.degree}, {profile.identity.affiliation}
                  </p>
                </div>

                <div>
                  <span className="text-[#C6FF3D] block mb-0.5">› INDUSTRY TRACK</span>
                  <p className="text-white/80 font-bold">
                    AI/ML Backend Developer Intern, Corteva Agriscience
                  </p>
                </div>

                <div>
                  <span className="text-[#C6FF3D] block mb-0.5">› INTELLECTUAL PROPERTY</span>
                  <p className="text-white/80 font-bold">
                    1 Granted Patent (April 2025) + 1 Patent Disclosure
                  </p>
                </div>

                <div>
                  <span className="text-[#C6FF3D] block mb-0.5">› LANGUAGE PROFICIENCY</span>
                  <p className="text-white/80 font-bold">
                    {profile.identity.languages.join(", ")}
                  </p>
                </div>

                <div>
                  <span className="text-[#C6FF3D] block mb-0.5">› PROBLEM SOLVING</span>
                  <p className="text-white/80 font-bold">
                    160+ Problems on GFG, GeekStreak60, DP & LeetCode Hards
                  </p>
                </div>
              </div>
            </BoundingBox>
          </div>
        </div>

        {/* Operating Principles Strip */}
        <div className="mb-16">
          <div className="font-mono-hud text-xs text-white/40 mb-4">// OPERATING PRINCIPLES</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.editorial.principles.map((pr) => (
              <div
                key={pr.id}
                className="p-5 rounded-lg bg-[#0E1218] border border-white/5 space-y-2 hover:border-[#C6FF3D]/30 transition-colors"
              >
                <div className="font-mono-hud text-xs text-[#C6FF3D] font-bold">
                  {pr.id} // {pr.label}
                </div>
                <p className="text-xs text-[#8A93A0] leading-relaxed">
                  {pr.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Engineering Metrics */}
        <div>
          <div className="font-mono-hud text-xs text-white/40 mb-4">// VERIFIED ENGINEERING METRICS</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.editorial.stats.map((st, idx) => (
              <BoundingBox
                key={idx}
                label="VERIFIED_STAT 1.0"
                className="p-6 bg-[#0E1218] text-center flex flex-col items-center justify-center"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-[#C6FF3D] mb-1">
                  {st.value}
                </div>
                <div className="font-mono-hud text-xs text-[#EDEFF2] font-semibold mb-1">
                  {st.label}
                </div>
                <div className="font-mono-hud text-[10px] text-[#8A93A0]">
                  {st.sub}
                </div>
              </BoundingBox>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
