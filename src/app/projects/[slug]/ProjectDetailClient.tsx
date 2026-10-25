"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Activity,
  Sliders,
  Database,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { ProjectItem } from "@/data/projects";
import BoundingBox from "@/components/hud/BoundingBox";

export default function ProjectDetailClient({ project }: { project: ProjectItem }) {
  return (
    <div className="min-h-screen bg-[#07090C] text-[#EDEFF2] relative selection:bg-[#C6FF3D]/20 selection:text-[#C6FF3D]">
      {/* Background HUD Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] bg-[radial-gradient(#C6FF3D_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Top Telemetry Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#07090C]/85 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between font-mono-hud text-xs">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-[#8A93A0] hover:text-[#C6FF3D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>// RETURN TO MISSION CONTROL</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#0E1218] border border-white/10 text-[10px] text-[#4DE1FF]">
              SYS_ID: {project.slug}
            </span>
            <span className="px-2 py-0.5 rounded bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 text-[10px] text-[#C6FF3D] font-bold">
              CONF: {project.confidence}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
        {/* Project Header Bounding Box */}
        <BoundingBox label="ARCHITECTURAL_BLUEPRINT" confidence={project.confidence} className="p-6 sm:p-10 bg-[#0E1218]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-2.5 py-1 rounded bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 text-xs font-mono-hud text-[#C6FF3D] font-semibold">
              {project.status}
            </span>
            <span className="font-mono-hud text-xs text-[#8A93A0]">
              TIMELINE: {project.period} · ROLE: {project.role}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2] mb-3">
            {project.title}
          </h1>

          <p className="font-mono-hud text-sm sm:text-base text-[#4DE1FF] mb-6">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#EDEFF2]/85 leading-relaxed font-sans max-w-3xl mb-8">
            {project.oneLiner}
          </p>

          {/* Impact Bullet Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {project.impactBullets.map((bullet, idx) => (
              <div
                key={idx}
                className="p-3 rounded bg-[#07090C] border border-white/5 font-mono-hud text-xs text-[#8A93A0] leading-relaxed flex items-start gap-2"
              >
                <span className="text-[#C6FF3D] font-bold mt-0.5">›</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 font-mono-hud text-xs">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#C6FF3D] text-[#07090C] font-semibold hover:bg-[#b5f02c] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Inspect Repository</span>
              </a>
            )}

            {project.links.live && (
              <span className="px-4 py-2.5 rounded bg-[#07090C] border border-white/10 text-[#8A93A0]">
                Live Deployment: {project.links.live}
              </span>
            )}
          </div>
        </BoundingBox>

        {/* Interactive Mini-Demo Section (If Applicable) */}
        {project.links.demoType && (
          <InteractiveMiniDemo demoType={project.links.demoType} projectTitle={project.title} />
        )}

        {/* Detailed Technical Blueprint Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono-hud">
          {/* Left Column: Problem, Approach, Result */}
          <div className="lg:col-span-7 space-y-8">
            {/* 01. Overview */}
            <BoundingBox label="SPEC_01 // OVERVIEW" confidence="0.99" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#C6FF3D] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>01. System Overview</span>
              </h2>
              <p className="text-xs text-[#EDEFF2]/85 leading-relaxed font-sans sm:text-sm">
                {project.overview}
              </p>
            </BoundingBox>

            {/* 02. Problem */}
            <BoundingBox label="SPEC_02 // THE_PROBLEM" confidence="0.98" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#FF4D4D] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>02. The Core Problem</span>
              </h2>
              <p className="text-xs text-[#8A93A0] leading-relaxed font-sans sm:text-sm">
                {project.problem}
              </p>
            </BoundingBox>

            {/* 03. Approach */}
            <BoundingBox label="SPEC_03 // TECHNICAL_APPROACH" confidence="0.99" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#4DE1FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>03. Engineering Approach</span>
              </h2>
              <p className="text-xs text-[#EDEFF2]/85 leading-relaxed font-sans sm:text-sm">
                {project.approach}
              </p>
            </BoundingBox>

            {/* 06. Verified Result */}
            <BoundingBox label="SPEC_06 // VERIFIED_RESULT" confidence="1.0" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#00E599] uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>06. Verified Outcome & Deliverable</span>
              </h2>
              <p className="text-xs text-[#00E599] leading-relaxed font-sans sm:text-sm">
                {project.result}
              </p>
            </BoundingBox>
          </div>

          {/* Right Column: Key Decisions, Challenges, Stack */}
          <div className="lg:col-span-5 space-y-8">
            {/* 04. Key Technical Decisions */}
            <BoundingBox label="SPEC_04 // DECISIONS" confidence="0.97" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#C6FF3D] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>04. Key Technical Decisions</span>
              </h2>
              <ul className="space-y-3">
                {project.technicalDecisions.map((dec, i) => (
                  <li key={i} className="p-3 rounded bg-[#07090C] border border-white/5 text-xs text-[#8A93A0] leading-relaxed flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D] shrink-0 mt-0.5" />
                    <span className="text-[#EDEFF2]/90">{dec}</span>
                  </li>
                ))}
              </ul>
            </BoundingBox>

            {/* 05. Challenges & Mitigations */}
            <BoundingBox label="SPEC_05 // CHALLENGES" confidence="0.96" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#EDEFF2] uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6FF3D]" />
                <span>05. Challenges & Mitigations</span>
              </h2>
              <p className="text-xs text-[#8A93A0] leading-relaxed font-sans sm:text-sm">
                {project.challenges}
              </p>
            </BoundingBox>

            {/* 07. Stack & Microservices */}
            <BoundingBox label="SPEC_07 // STACK_MANIFEST" confidence="0.99" className="p-6 bg-[#0E1218]">
              <h2 className="text-sm font-bold text-[#4DE1FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>07. Stack & Microservices</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-[#07090C] border border-white/10 text-xs text-[#4DE1FF] font-mono-hud"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </BoundingBox>
          </div>
        </div>

        {/* Bottom Navigation Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-hud text-xs">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-[#8A93A0] hover:text-[#C6FF3D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/#contact"
            className="flex items-center gap-2 px-4 py-2 rounded bg-[#C6FF3D] text-[#07090C] font-semibold hover:bg-[#b5f02c] transition-colors"
          >
            <span>Discuss This Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Mini-Demo Component
// -------------------------------------------------------------
function InteractiveMiniDemo({ demoType, projectTitle }: { demoType: string; projectTitle: string }) {
  // Demo 1: StartupMatch
  const [skillsMatch, setSkillsMatch] = useState(85);
  const [visionMatch, setVisionMatch] = useState(90);
  const [commitMatch, setCommitMatch] = useState(80);
  const computedScore = Math.round(skillsMatch * 0.4 + visionMatch * 0.35 + commitMatch * 0.25);

  // Demo 2: Smart Parking
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
      prev.map((b) => (b.id === id ? { ...b, status: b.status === "OCCUPIED" ? "AVAILABLE" : "OCCUPIED" } : b))
    );
  };

  // Demo 3: VERDIQ RAG
  const [query, setQuery] = useState("Section 65B electronic evidence requirements");
  const [retrievedPrecedent] = useState(
    "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) - 3-Judge Supreme Court Bench establishing mandatory certification protocol."
  );

  // Demo 4: Corn Pipeline Scrubber
  const [pipelineStage, setPipelineStage] = useState(0);
  const stages = [
    { name: "01 Raw Ingestion", detail: "Rotational turntable video frame sampling @ 60 FPS", tag: "OpenCV" },
    { name: "02 Preprocessing", detail: "BRISQUE blind image quality assessment & Laplacian blur filter", tag: "video_toolkit" },
    { name: "03 YOLOv8-seg", detail: "Instance segmentation masks separating cob vs individual kernels", tag: "PyTorch" },
    { name: "04 Phenotyping", detail: "Geometric feature extraction (kernel row counts, cob diameter)", tag: "OpenCV" },
    { name: "05 Cloud Dispatch", detail: "Payload containerized in Docker and dispatched to Azure AKS", tag: "Azure AKS" },
  ];

  return (
    <BoundingBox label="INTERACTIVE_SIMULATOR" confidence="0.99" className="p-6 sm:p-8 bg-[#0E1218]">
      <div className="flex items-center gap-2 text-xs font-mono-hud text-[#C6FF3D] mb-1">
        <Sparkles className="w-4 h-4" />
        <span>LIVE RUNTIME SIMULATOR // VERIFIED ARCHITECTURAL BEHAVIOR</span>
      </div>
      <h3 className="font-display text-lg sm:text-xl font-bold text-[#EDEFF2] mb-4">
        {projectTitle} — Operational Sandbox
      </h3>

      {demoType === "startupMatch" && (
        <div className="space-y-4 font-mono-hud text-xs bg-[#07090C] p-6 rounded-lg border border-white/5">
          <div className="text-[#8A93A0] text-[11px] mb-2">
            Adjust candidate profile vectors to evaluate real-time weighted matchmaking score (0–100 scale):
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[#EDEFF2]">Complementary Skillset (40% Weight):</span>
                <span className="text-[#C6FF3D] font-bold">{skillsMatch}%</span>
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
              <div className="flex justify-between mb-1">
                <span className="text-[#EDEFF2]">Founder Vision Alignment (35% Weight):</span>
                <span className="text-[#C6FF3D] font-bold">{visionMatch}%</span>
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
              <div className="flex justify-between mb-1">
                <span className="text-[#EDEFF2]">Time Commitment Compatibility (25% Weight):</span>
                <span className="text-[#C6FF3D] font-bold">{commitMatch}%</span>
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
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-white/60">ALGORITHM COMPATIBILITY RESULT:</span>
            <span className="text-2xl font-bold text-[#C6FF3D]">{computedScore} / 100</span>
          </div>
        </div>
      )}

      {demoType === "smartParking" && (
        <div className="space-y-4 font-mono-hud text-xs bg-[#07090C] p-6 rounded-lg border border-white/5">
          <div className="flex items-center justify-between text-[11px] text-[#8A93A0]">
            <span>CLICK BAY TO SIMULATE SENSOR STATE CHANGE:</span>
            <span className="text-[#00E599]">ATOMIC CONCURRENCY GUARANTEED</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {bays.map((bay) => (
              <button
                key={bay.id}
                onClick={() => toggleBay(bay.id)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  bay.status === "AVAILABLE"
                    ? "bg-[#00E599]/10 border-[#00E599]/40 text-[#00E599] hover:bg-[#00E599]/20"
                    : "bg-[#FF4D4D]/10 border-[#FF4D4D]/40 text-[#FF4D4D] hover:bg-[#FF4D4D]/20"
                }`}
              >
                <div className="text-xs font-bold">{bay.id}</div>
                <div className="text-[10px] mt-1 font-mono tracking-wider">{bay.status}</div>
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex justify-between text-[11px] text-white/50">
            <span>AVAILABLE BAYS: {bays.filter((b) => b.status === "AVAILABLE").length} / {bays.length}</span>
            <span>BACKEND: MERN + FindOneAndUpdate Locks</span>
          </div>
        </div>
      )}

      {demoType === "verdiq" && (
        <div className="space-y-4 font-mono-hud text-xs bg-[#07090C] p-6 rounded-lg border border-white/5">
          <div className="text-[#8A93A0] text-[11px]">
            Simulated Legal Precedent Semantic Search (MongoDB Vector Embeddings + LangChain):
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#0E1218] border border-white/10 text-[#EDEFF2] text-xs focus:outline-none focus:border-[#C6FF3D]"
            />
          </div>
          <div className="p-4 rounded bg-[#0E1218] border border-white/10 space-y-2">
            <div className="flex justify-between items-center text-[10px] text-white/50">
              <span>TOP RETRIEVED STATUTORY PRECEDENT</span>
              <span className="text-[#C6FF3D] font-bold">0.96 Cosine</span>
            </div>
            <p className="text-xs text-[#4DE1FF] leading-relaxed">{retrievedPrecedent}</p>
          </div>
        </div>
      )}

      {demoType === "pipeline" && (
        <div className="space-y-4 font-mono-hud text-xs bg-[#07090C] p-6 rounded-lg border border-white/5">
          <div className="flex flex-wrap gap-2 mb-2">
            {stages.map((st, i) => (
              <button
                key={i}
                onClick={() => setPipelineStage(i)}
                className={`px-3 py-1.5 rounded text-xs border transition-colors ${
                  pipelineStage === i
                    ? "bg-[#C6FF3D] text-[#07090C] font-bold border-[#C6FF3D]"
                    : "bg-[#0E1218] text-white/60 border-white/10 hover:text-white"
                }`}
              >
                {st.name}
              </button>
            ))}
          </div>

          <div className="p-4 rounded bg-[#0E1218] border border-white/10 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[#C6FF3D] font-bold uppercase text-xs">
                STAGE 0{pipelineStage + 1} ARCHITECTURAL EXECUTION
              </span>
              <span className="px-2 py-0.5 rounded bg-[#4DE1FF]/10 text-[#4DE1FF] text-[10px]">
                {stages[pipelineStage].tag}
              </span>
            </div>
            <p className="text-xs text-[#EDEFF2] leading-relaxed">
              {stages[pipelineStage].detail}
            </p>
          </div>
        </div>
      )}
    </BoundingBox>
  );
}
