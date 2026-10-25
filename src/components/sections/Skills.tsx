"use client";

import React, { useState } from "react";
import BoundingBox from "../hud/BoundingBox";
import { skills, SkillItem } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & Vision", "Cloud & DevOps", "Full-Stack", "Fundamentals"];

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// DETECTION MATRIX // SKILLS // SECTION 05</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              Detected Competencies
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            NO PROGRESS BARS · NO INVENTED PROFICIENCIES · PRODUCTION VERIFIED
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono-hud text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                activeCategory === cat
                  ? "bg-[#C6FF3D] text-[#07090C] font-semibold border-[#C6FF3D] shadow-[0_0_15px_rgba(198,255,61,0.2)]"
                  : "bg-[#0E1218] text-[#8A93A0] border-white/10 hover:text-white hover:border-white/20"
              }`}
              data-hud-target="true"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono-hud">
          {filtered.map((skill) => (
            <BoundingBox
              key={skill.id}
              label={`SKILL_DETECTED ${skill.confidence}`}
              className="p-5 bg-[#0E1218] flex flex-col justify-between hover:bg-[#111720] transition-colors"
            >
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-[#4DE1FF] font-semibold">{skill.category}</span>
                  <span className="text-[10px] text-white/40 px-2 py-0.5 rounded bg-[#07090C] border border-white/5">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-3">
                  {skill.name}
                </h3>

                <div className="space-y-1">
                  <span className="text-[10px] text-white/40 block">WHERE I USED IT:</span>
                  <p className="text-xs text-[#8A93A0] leading-relaxed">
                    {skill.whereUsed}
                  </p>
                </div>
              </div>
            </BoundingBox>
          ))}
        </div>
      </div>
    </section>
  );
}
