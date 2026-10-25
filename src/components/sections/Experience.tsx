"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Cpu, 
  ExternalLink, 
  Code2, 
  Activity,
  Layers,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { experiences } from "@/data/experience";
import { CortevaTurntableSimulator } from "@/components/visual/CortevaTurntableSimulator";

export function Experience() {
  const cortevaExp = experiences.find(e => e.id === "corteva") || experiences[0];
  const otherExps = experiences.filter(e => e.id !== "corteva");

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A0D14]">
      {/* Swiss Editorial Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
                [02 // INDUSTRIAL TRACK RECORD]
              </span>
              <span className="h-px w-12 bg-cyan-500/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">Real-World Vision</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Rigorous hands-on deployment of production computer vision pipelines, hardware turntable sync, and cloud microservices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CORTEVA AGRISCIENCE FLAGSHIP SHOWCASE */}
        <div className="mb-20">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-emerald-500/20 to-white/5 border border-white/10 shadow-2xl">
            <div className="bg-[#0B0F18] rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
              {/* Subtle Prismatic Ambient Glow */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Company & Role Header */}
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      FLAGSHIP AI/ML ROLE
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {cortevaExp.period} &bull; {cortevaExp.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                    {cortevaExp.role}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                      @ {cortevaExp.organization}
                    </span>
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                    {cortevaExp.summary}
                  </p>
                </div>

                {/* Quantitative Impact Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-white font-mono block">18+</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Functions in video_toolkit</span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono block">360°</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Multi-view Vision Rig</span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                    <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono block">AKS</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Azure Cloud Pipeline</span>
                  </div>
                </div>
              </div>

              {/* Interactive Turntable Vision Rig Console */}
              <div className="mt-8 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    INTERACTIVE SYSTEM SIMULATOR // ROTATE RIG & TEST PIPELINE
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                    Simulated hardware azimuth & live video_toolkit gates
                  </span>
                </div>

                <CortevaTurntableSimulator />
              </div>

              {/* Technical Bullet Highlights */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {cortevaExp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {h}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Deployed at Corteva */}
              <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-slate-400 mr-2">TECH STACK:</span>
                {cortevaExp.skills.map((t) => (
                  <span 
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OTHER EXPERIENCES */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              [ADDITIONAL INDUSTRY & RESEARCH ROLES]
            </span>
            <span className="h-px w-12 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherExps.map((exp) => (
              <div 
                key={exp.id}
                className="bg-[#0D121D] border border-white/10 hover:border-cyan-500/30 transition-all rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h4>
                  <div className="text-cyan-400 font-mono text-sm mb-4">
                    @{exp.organization}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
