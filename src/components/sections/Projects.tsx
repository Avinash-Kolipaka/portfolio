"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Maximize2, X, ArrowRight } from "lucide-react";
import BoundingBox from "../hud/BoundingBox";
import { projects, ProjectItem } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Mini-demo 1: StartupMatch
  const [skillsMatch, setSkillsMatch] = useState(85);
  const [visionMatch, setVisionMatch] = useState(90);
  const [commitMatch, setCommitMatch] = useState(80);
  const computedScore = Math.round(skillsMatch * 0.4 + visionMatch * 0.35 + commitMatch * 0.25);

  // Mini-demo 2: Smart Parking
  const [bays, setBays] = useState([
    { id: "A-01", status: "OCCUPIED" },
    { id: "A-02", status: "AVAILABLE" },
    { id: "A-03", status: "OCCUPIED" },
    { id: "A-04", status: "AVAILABLE" },
    { id: "B-01", status: "AVAILABLE" },
    { id: "B-02", status: "OCCUPIED" },
  ]);
  const toggleBay = (id: string) => {
    setBays((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: b.status === "OCCUPIED" ? "AVAILABLE" : "OCCUPIED" } : b
      )
    );
  };

  const corn = projects.find((p) => p.id === "corn-phenotyping")!;
  const startupMatch = projects.find((p) => p.id === "startup-match")!;
  const smartParking = projects.find((p) => p.id === "smart-parking")!;
  const verdiq = projects.find((p) => p.id === "verdiq")!;

  return (
    <section id="work" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// DETECTION FEED // SELECTED WORK // SECTION 03</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              Engineered Systems
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            VISION PIPELINES · DISTRIBUTED BACKENDS · INTERACTIVE DEMOS
          </div>
        </div>

        {/* 1. Large Featured Case: Corn Phenotyping */}
        <BoundingBox label="FEATURED_CASE_STUDY 0.99" className="p-6 sm:p-10 bg-[#0E1218] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 font-mono-hud text-xs">
                <span className="px-2.5 py-0.5 rounded bg-[#C6FF3D]/10 text-[#C6FF3D] font-bold border border-[#C6FF3D]/30">
                  PRODUCTION SYSTEM
                </span>
                <span className="text-[#4DE1FF]">{corn.role}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#EDEFF2]">
                {corn.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8A93A0] leading-relaxed font-mono-hud">
                › {corn.oneLiner}
              </p>

              <div className="space-y-2 pt-2">
                {corn.impactBullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-[#07090C] border border-white/5 font-mono-hud text-xs text-[#EDEFF2]/80 flex items-start gap-2"
                  >
                    <span className="text-[#C6FF3D]">›</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {corn.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-[#07090C] border border-white/10 text-xs font-mono-hud text-[#4DE1FF]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 font-mono-hud text-xs">
                <button
                  onClick={() => setSelectedProject(corn)}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#C6FF3D] text-[#07090C] font-semibold hover:bg-[#b5f02c] transition-colors"
                  data-hud-target="true"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Architectural Blueprint</span>
                </button>

                <Link
                  href="/projects/corn-phenotyping"
                  className="flex items-center gap-1.5 px-4 py-2 rounded bg-[#07090C] border border-white/10 text-[#4DE1FF] hover:border-[#4DE1FF]/50 transition-colors"
                  data-hud-target="true"
                >
                  <span>Full Specification Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-white/40">Repo: {corn.links.github}</span>
              </div>
            </div>

            {/* Right Schematic Visualizer */}
            <div className="lg:col-span-5 bg-[#07090C] p-6 rounded-lg border border-white/10 font-mono-hud space-y-4">
              <div className="flex justify-between items-center text-xs border-b border-white/10 pb-3">
                <span className="text-white/40">SCHEMATIC: CORTEVA TURNTABLE RIG</span>
                <span className="text-[#C6FF3D] font-bold">AKS ACTIVE</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded bg-[#0E1218] border border-white/5">
                  <div className="text-[10px] text-[#4DE1FF] mb-1">STREAM INGESTION</div>
                  <div className="text-[#EDEFF2]">360° Rotational Frame Sampler @ 60 FPS</div>
                </div>

                <div className="p-3 rounded bg-[#0E1218] border border-white/5">
                  <div className="text-[10px] text-[#C6FF3D] mb-1">OPTICAL QUALITY GATE</div>
                  <div className="text-[#EDEFF2]">BRISQUE Blind Metric & Laplacian Variance Filter</div>
                </div>

                <div className="p-3 rounded bg-[#0E1218] border border-white/5">
                  <div className="text-[10px] text-[#4DE1FF] mb-1">NEURAL SEGMENTATION</div>
                  <div className="text-[#EDEFF2]">YOLOv8-seg Instance Mask (Cob + Kernels)</div>
                </div>

                <div className="p-3 rounded bg-[#0E1218] border border-white/5">
                  <div className="text-[10px] text-[#00E599] mb-1">MICROSERVICE PIPELINE</div>
                  <div className="text-[#EDEFF2]">Azure AKS Cluster Orchestration via Docker</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] text-white/40">
                <span>CONFIDENCE: 98.4%</span>
                <span className="text-[#C6FF3D]">18+ FUNCTIONS</span>
              </div>
            </div>
          </div>
        </BoundingBox>

        {/* 2. Grid Row: StartupMatch & Smart Parking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* StartupMatch */}
          <BoundingBox label="FULLSTACK_SYSTEM 0.98" className="p-6 sm:p-8 bg-[#0E1218] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-mono-hud text-white/50 mb-3">
                <span className="px-2 py-0.5 rounded bg-[#C6FF3D]/10 text-[#C6FF3D] font-semibold border border-[#C6FF3D]/30">
                  SHIPPED · FEB 2026
                </span>
                <span>MERN + Socket.io</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#EDEFF2] mb-1">
                {startupMatch.title}
              </h3>

              <p className="text-xs text-[#8A93A0] font-mono-hud leading-relaxed mb-4">
                › {startupMatch.oneLiner}
              </p>

              <div className="space-y-2 mb-6">
                {startupMatch.impactBullets.slice(0, 2).map((bullet, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#07090C] border border-white/5 text-xs font-mono-hud text-[#EDEFF2]/80 flex items-start gap-2">
                    <span className="text-[#C6FF3D]">›</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Live Algorithm Simulator */}
              <div className="p-4 rounded-lg bg-[#07090C] border border-white/10 font-mono-hud text-xs mb-6 space-y-3">
                <div className="flex justify-between items-center text-[11px] border-b border-white/10 pb-2">
                  <span className="text-[#C6FF3D] font-bold">⚡ LIVE ALGORITHM SIMULATOR</span>
                  <span className="text-white/40">WEIGHTED SCORER</span>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/70">Complementary Skills (40%)</span>
                    <span className="text-[#C6FF3D]">{skillsMatch}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skillsMatch}
                    onChange={(e) => setSkillsMatch(Number(e.target.value))}
                    className="w-full accent-[#C6FF3D] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/70">Vision Alignment (35%)</span>
                    <span className="text-[#C6FF3D]">{visionMatch}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={visionMatch}
                    onChange={(e) => setVisionMatch(Number(e.target.value))}
                    className="w-full accent-[#C6FF3D] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-white/70">Commitment Match (25%)</span>
                    <span className="text-[#C6FF3D]">{commitMatch}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={commitMatch}
                    onChange={(e) => setCommitMatch(Number(e.target.value))}
                    className="w-full accent-[#C6FF3D] cursor-pointer"
                  />
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-white/40">MATCH COMPATIBILITY:</span>
                  <span className="font-display text-xl font-bold text-[#C6FF3D]">{computedScore} / 100</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-hud">
              <Link
                href="/projects/startup-match"
                className="flex items-center gap-1.5 text-[#C6FF3D] hover:underline"
                data-hud-target="true"
              >
                <span>Deep Dive Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-white/40">Repo: github.com/Avinash-Kolipaka</span>
            </div>
          </BoundingBox>

          {/* Smart Parking System */}
          <BoundingBox label="IOT_BACKEND 0.97" className="p-6 sm:p-8 bg-[#0E1218] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-mono-hud text-white/50 mb-3">
                <span className="px-2 py-0.5 rounded bg-[#4DE1FF]/10 text-[#4DE1FF] font-semibold border border-[#4DE1FF]/30">
                  OPEN SOURCE MERN
                </span>
                <span>Atomic MongoDB</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#EDEFF2] mb-1">
                {smartParking.title}
              </h3>

              <p className="text-xs text-[#8A93A0] font-mono-hud leading-relaxed mb-4">
                › {smartParking.oneLiner}
              </p>

              <div className="space-y-2 mb-6">
                {smartParking.impactBullets.slice(0, 2).map((bullet, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#07090C] border border-white/5 text-xs font-mono-hud text-[#EDEFF2]/80 flex items-start gap-2">
                    <span className="text-[#4DE1FF]">›</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Live Sensor Bay Matrix */}
              <div className="p-4 rounded-lg bg-[#07090C] border border-white/10 font-mono-hud text-xs mb-6 space-y-3">
                <div className="flex justify-between items-center text-[11px] border-b border-white/10 pb-2">
                  <span className="text-[#4DE1FF] font-bold">☁ LIVE SENSOR BAY MATRIX</span>
                  <span className="text-white/40">CLICK SLOT TO TOGGLE</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {bays.map((bay) => (
                    <button
                      key={bay.id}
                      onClick={() => toggleBay(bay.id)}
                      className={`p-2.5 rounded border text-left transition-all ${
                        bay.status === "AVAILABLE"
                          ? "bg-[#00E599]/10 border-[#00E599]/40 text-[#00E599]"
                          : "bg-[#FF4D4D]/10 border-[#FF4D4D]/40 text-[#FF4D4D]"
                      }`}
                      data-hud-target="true"
                    >
                      <div className="text-[11px] font-bold flex items-center justify-between">
                        <span>{bay.id}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${bay.status === "AVAILABLE" ? "bg-[#00E599]" : "bg-[#FF4D4D]"}`} />
                      </div>
                      <div className="text-[9px] tracking-wider mt-0.5">{bay.status}</div>
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-white/40">
                  <span>STATUS: {bays.filter((b) => b.status === "AVAILABLE").length} BAYS AVAILABLE</span>
                  <span className="text-[#00E599]">ATOMIC CONCURRENCY OK</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-hud">
              <Link
                href="/projects/smart-parking"
                className="flex items-center gap-1.5 text-[#4DE1FF] hover:underline"
                data-hud-target="true"
              >
                <span>Deep Dive Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={smartParking.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/50 hover:text-white"
                data-hud-target="true"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </BoundingBox>
        </div>

        {/* 3. VERDIQ Legal Intelligence */}
        <BoundingBox label="AI_RAG_PLATFORM 0.96" className="p-6 sm:p-8 bg-[#0E1218] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3 font-mono-hud">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#4DE1FF]">LANGCHAIN & VECTOR SEARCH</span>
                <span className="text-white/30">|</span>
                <span className="text-white/50">MongoDB Vectors + Socket.io</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#EDEFF2]">
                {verdiq.title}: Legal Intelligence & Precedent Retrieval
              </h3>
              <p className="text-xs text-[#8A93A0] leading-relaxed">
                › {verdiq.oneLiner}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {verdiq.stack.map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded bg-[#07090C] border border-white/10 text-[11px] text-[#4DE1FF]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#07090C] p-4 rounded-lg border border-white/10 font-mono-hud text-xs space-y-2">
              <div className="flex justify-between items-center text-[10px] text-white/40 pb-1 border-b border-white/10">
                <span>ILLUSTRATIVE RAG RETRIEVER</span>
                <span className="text-[#C6FF3D]">SEMANTIC MATCH</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded bg-[#0E1218] border border-white/5 flex justify-between">
                  <span className="text-white/80">Section 65B Electronic Evidence Precedents</span>
                  <span className="text-[#C6FF3D]">0.96 Cosine</span>
                </div>
                <div className="p-2 rounded bg-[#0E1218] border border-white/5 flex justify-between">
                  <span className="text-white/80">Supreme Court Bench on Certificate Validity</span>
                  <span className="text-[#C6FF3D]">0.94 Cosine</span>
                </div>
              </div>
              <div className="pt-2 text-right">
                <Link
                  href="/projects/verdiq"
                  className="inline-flex items-center gap-1 text-[11px] text-[#4DE1FF] hover:underline"
                >
                  <span>Inspect Blueprint →</span>
                </Link>
              </div>
            </div>
          </div>
        </BoundingBox>

        {/* 4. Secondary Projects: Soil Testing & UniPortal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono-hud">
          <BoundingBox label="AGRI_CHEMISTRY 0.94" className="p-6 bg-[#0E1218]">
            <h4 className="font-display text-lg font-bold text-[#EDEFF2] mb-1">
              Soil Testing & Fertilizer Recommendation
            </h4>
            <div className="text-xs text-[#4DE1FF] mb-3">
              Python · Flask · ML Classifiers
            </div>
            <p className="text-xs text-[#8A93A0] leading-relaxed mb-4">
              Analyzes soil chemical profiles (NPK, pH) to recommend optimized fertilizer schedules, reducing environmental runoff and maximizing crop yields.
            </p>
            <div className="flex justify-between items-center text-[11px] text-white/40 pt-2 border-t border-white/10">
              <Link href="/projects/soil-testing" className="text-[#C6FF3D] hover:underline">
                View Blueprint →
              </Link>
              <span>Live link: [ADD: live URL]</span>
            </div>
          </BoundingBox>

          <BoundingBox label="CAMPUS_PORTAL 0.92" className="p-6 bg-[#0E1218]">
            <h4 className="font-display text-lg font-bold text-[#EDEFF2] mb-1">
              UniPortal & Developer Text Formatter
            </h4>
            <div className="text-xs text-[#4DE1FF] mb-3">
              Laravel · PHP · MySQL · Tooling
            </div>
            <p className="text-xs text-[#8A93A0] leading-relaxed mb-4">
              Event coordination platform for university festivals and technical ticketing, paired with an automated developer text formatting utility suite.
            </p>
            <div className="flex justify-between items-center text-[11px] text-white/40 pt-2 border-t border-white/10">
              <Link href="/projects/uniportal" className="text-[#C6FF3D] hover:underline">
                View Blueprint →
              </Link>
              <span>Live link: [ADD: live URL]</span>
            </div>
          </BoundingBox>
        </div>
      </div>

      {/* Quick Modal Blueprint View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-3xl rounded-xl bg-[#0E1218] border border-white/20 shadow-2xl p-6 sm:p-8 font-mono-hud max-h-[90vh] overflow-y-auto z-10">
            <span className="corner-bracket-tl !w-3 !h-3" />
            <span className="corner-bracket-tr !w-3 !h-3" />
            <span className="corner-bracket-bl !w-3 !h-3" />
            <span className="corner-bracket-br !w-3 !h-3" />

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded bg-[#07090C] border border-white/10 text-white/60 hover:text-white"
              data-hud-target="true"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 border-b border-white/10 pb-4 pr-12">
              <div className="flex items-center gap-2 text-xs text-[#C6FF3D] mb-1">
                <span>// ARCHITECTURAL BLUEPRINT</span>
                <span className="text-white/30">|</span>
                <span>CONFIDENCE: {selectedProject.confidence}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#EDEFF2]">
                {selectedProject.title}
              </h3>
              <div className="text-xs text-[#4DE1FF] mt-1">
                {selectedProject.subtitle}
              </div>
            </div>

            <div className="space-y-6 text-xs text-[#EDEFF2]/90 font-mono-hud">
              <div>
                <h4 className="text-[11px] text-[#C6FF3D] font-bold uppercase mb-1">01. Overview</h4>
                <p className="leading-relaxed text-[#8A93A0]">{selectedProject.overview}</p>
              </div>

              <div>
                <h4 className="text-[11px] text-[#FF4D4D] font-bold uppercase mb-1">02. The Problem</h4>
                <p className="leading-relaxed text-[#8A93A0]">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-[11px] text-[#4DE1FF] font-bold uppercase mb-1">03. Technical Approach</h4>
                <p className="leading-relaxed text-[#8A93A0]">{selectedProject.approach}</p>
              </div>

              <div>
                <h4 className="text-[11px] text-[#C6FF3D] font-bold uppercase mb-2">04. Key Technical Decisions</h4>
                <ul className="space-y-2">
                  {selectedProject.technicalDecisions.map((dec, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#07090C] p-2.5 rounded border border-white/5">
                      <span className="text-[#C6FF3D] font-bold">›</span>
                      <span className="text-[#EDEFF2]/90">{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] text-[#EDEFF2] font-bold uppercase mb-1">05. Challenges & Mitigations</h4>
                <p className="leading-relaxed text-[#8A93A0]">{selectedProject.challenges}</p>
              </div>

              <div>
                <h4 className="text-[11px] text-[#00E599] font-bold uppercase mb-1">06. Verified Result</h4>
                <p className="leading-relaxed text-[#00E599]">{selectedProject.result}</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-hud">
              <Link
                href={`/projects/${selectedProject.slug}`}
                className="px-4 py-2 rounded bg-[#4DE1FF]/10 border border-[#4DE1FF]/30 text-[#4DE1FF] hover:bg-[#4DE1FF]/20 font-semibold"
              >
                Open Dedicated Full Page →
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded bg-[#C6FF3D] text-[#07090C] font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
