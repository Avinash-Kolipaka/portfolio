"use client";

import React from "react";
import { Terminal, Award, CheckCircle2, GitBranch } from "lucide-react";
import BoundingBox from "../hud/BoundingBox";

export default function ProofOfWork() {
  // Static GitHub representation fallback
  const mockHeatmapWeeks = Array.from({ length: 24 }, (_, weekIdx) =>
    Array.from({ length: 7 }, (_, dayIdx) => {
      const active = (weekIdx * 7 + dayIdx) % 3 === 0 || (weekIdx * 7 + dayIdx) % 5 === 0;
      return active ? ((weekIdx + dayIdx) % 3) + 1 : 0;
    })
  );

  return (
    <section id="proof" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// REPOSITORY & EFFORT LOGS // SECTION 06</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              The Work Behind the Work
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            CONSISTENCY METRICS · GEEKSFORGEEKS · GEEKSTREAK60 · HACKATHONS
          </div>
        </div>

        {/* GitHub Heatmap Representation */}
        <BoundingBox label="CONTRIBUTION_STREAM" confidence="0.99" className="p-6 bg-[#0E1218] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 font-mono-hud text-xs gap-2">
            <div className="flex items-center gap-2 text-[#EDEFF2]">
              <GitBranch className="w-4 h-4 text-[#C6FF3D]" />
              <span>GitHub Activity Stream (github.com/Avinash-Kolipaka)</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-white/40">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#07090C] border border-white/10" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3D]/40" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#C6FF3D]" />
              <span>More</span>
            </div>
          </div>

          <div className="overflow-x-auto py-2">
            <div className="flex gap-1.5 min-w-[560px]">
              {mockHeatmapWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                        level === 0
                          ? "bg-[#07090C] border border-white/5"
                          : level === 1
                          ? "bg-[#C6FF3D]/30 border border-[#C6FF3D]/40"
                          : level === 2
                          ? "bg-[#C6FF3D]/60"
                          : "bg-[#C6FF3D] shadow-[0_0_6px_rgba(198,255,61,0.6)]"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono-hud text-[11px] text-white/40">
            <span>ACTIVE REPOS: Smart-Parking, portfolio, video_toolkit</span>
            <span className="text-[#C6FF3D]">COMMITS & PIPELINE BUILDS</span>
          </div>
        </BoundingBox>

        {/* 3 Metric Cards: GeekStreak60, 160+ Problems, Hackathons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-hud">
          <BoundingBox label="CONSISTENCY_CHALLENGE" confidence="1.0" className="p-6 bg-[#0E1218]">
            <div className="flex items-center justify-between text-xs text-[#4DE1FF] mb-2">
              <Award className="w-4 h-4 text-[#C6FF3D]" />
              <span>GFG × NPCI</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-2">
              GeekStreak60 Participant
            </h3>
            <p className="text-xs text-[#8A93A0] leading-relaxed mb-4">
              Demonstrated uninterrupted 60-day algorithmic consistency solving complex data structures and algorithmic optimization problems.
            </p>
            <div className="text-[11px] text-[#C6FF3D] font-bold">
              VERIFIED: GeeksforGeeks streak badge
            </div>
          </BoundingBox>

          <BoundingBox label="PROBLEM_SOLVING" confidence="1.0" className="p-6 bg-[#0E1218]">
            <div className="flex items-center justify-between text-xs text-[#4DE1FF] mb-2">
              <Terminal className="w-4 h-4 text-[#C6FF3D]" />
              <span>ALGORITHMS</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-2">
              160+ Problems Solved
            </h3>
            <p className="text-xs text-[#8A93A0] leading-relaxed mb-4">
              GeeksforGeeks & LeetCode Hards focusing on Dynamic Programming memoization, Tree traversals, Graph BFS/DFS, and system design primitives.
            </p>
            <div className="text-[11px] text-white/40">
              CORE: C++ & Python implementations
            </div>
          </BoundingBox>

          <BoundingBox label="HACKATHON_APPLICANT" confidence="0.95" className="p-6 bg-[#0E1218]">
            <div className="flex items-center justify-between text-xs text-[#4DE1FF] mb-2">
              <Award className="w-4 h-4 text-[#C6FF3D]" />
              <span>2026 EVENT</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-2">
              Ksolves Gen AI Hackathon 2026
            </h3>
            <p className="text-xs text-[#8A93A0] leading-relaxed mb-4">
              Applied participant in the 2026 Generative AI Hackathon evaluating enterprise RAG agents and multi-modal vision intelligence.
            </p>
            <div className="text-[11px] text-white/40">
              [ADD: certificates]
            </div>
          </BoundingBox>
        </div>
      </div>
    </section>
  );
}
