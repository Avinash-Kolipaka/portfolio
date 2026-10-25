"use client";

import React, { useState } from "react";
import BoundingBox from "../hud/BoundingBox";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [activeStage, setActiveStage] = useState(0);

  const pipelineStages = [
    {
      num: "01",
      name: "Raw Frame Ingestion",
      tag: "Stage 01: Capture",
      rate: "60 FPS Stream",
      detail:
        "Captures 360-degree rotational turntable video streams of corn ears under calibrated lighting conditions.",
      engine: "Turntable Video Rig",
      code: "cap = cv2.VideoCapture(rig_stream_source)\nret, frame = cap.read()",
    },
    {
      num: "02",
      name: "Quality Assessment Gate",
      tag: "Stage 02: Preprocessing",
      rate: "SSIM & BRISQUE",
      detail:
        "Calculates Laplacian variance and BRISQUE scores to reject rotational blur and specular glare before heavy segmentation.",
      engine: "video_toolkit / OpenCV",
      code: "brisque_score = compute_brisque(frame)\nif brisque_score > THRESHOLD: drop_frame(frame)",
    },
    {
      num: "03",
      name: "YOLOv8-seg Inference",
      tag: "Stage 03: Neural Mask",
      rate: "PyTorch Inference",
      detail:
        "Runs instance segmentation separating cob boundary masks and individual kernel bounding boxes in physical space.",
      engine: "YOLOv8-seg TensorRT",
      code: "results = yolo_seg_model(frame, conf=0.85)\ncob_mask = results[0].masks.data",
    },
    {
      num: "04",
      name: "Kernel & Ear Morphology",
      tag: "Stage 04: Phenotyping",
      rate: "Sub-pixel Accuracy",
      detail:
        "Extracts quantitative phenotypic metrics: kernel row counts, ear length, diameter, and spatial defect maps.",
      engine: "video_toolkit / Math",
      code: "metrics = extract_cob_phenotypes(cob_mask, kernel_contours)\nlog_agritech_metrics(metrics)",
    },
    {
      num: "05",
      name: "Azure AKS Microservices",
      tag: "Stage 05: Cloud Ingestion",
      rate: "Decoupled Queue",
      detail:
        "Containerizes phenotype telemetry into JSON payloads orchestrated across Kubernetes worker nodes in Azure AKS.",
      engine: "Docker / Kubernetes AKS",
      code: "aks_client.dispatch_telemetry(payload, namespace='phenotyping')",
    },
  ];

  const corteva = experiences.find((e) => e.id === "corteva")!;
  const teaching = experiences.find((e) => e.id === "teaching")!;
  const lpu = experiences.find((e) => e.id === "lpu")!;

  return (
    <section id="experience" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// WORK HISTORY & PIPELINE EXECUTION // SECTION 02</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              Engineering Experience
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            CORTEVA AGRISCIENCE · TEACHING · ACADEMICS
          </div>
        </div>

        {/* Flagship: Corteva Agriscience */}
        <BoundingBox label="FLAGSHIP_EXPERIENCE 0.99" className="p-6 sm:p-10 bg-[#0E1218] mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C6FF3D]/10 text-[#C6FF3D] font-mono-hud text-xs font-semibold border border-[#C6FF3D]/30 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D]" />
              Flagship Industry Experience
            </span>
            <span className="font-mono-hud text-xs text-white/50">
              {corteva.period} · {corteva.location}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#EDEFF2] mb-1">
            {corteva.role}
          </h3>
          <div className="font-display text-lg sm:text-xl text-[#C6FF3D] mb-6">
            {corteva.organization}
          </div>

          <p className="text-xs sm:text-sm text-[#8A93A0] leading-relaxed mb-8 max-w-3xl">
            {corteva.summary}
          </p>

          {/* 4 Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {corteva.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded bg-[#07090C] border border-white/5 font-mono-hud text-xs text-[#EDEFF2]/80 leading-relaxed flex items-start gap-2.5"
              >
                <span className="text-[#C6FF3D] font-bold mt-0.5">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {corteva.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded bg-[#07090C] border border-white/10 text-xs font-mono-hud text-[#4DE1FF]"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Pinned Scrubbed Pipeline Architecture Simulator */}
          <div className="p-5 sm:p-6 rounded-lg bg-[#07090C] border border-white/10 font-mono-hud">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 border-b border-white/10 pb-3 text-xs">
              <span className="text-[#C6FF3D] font-bold flex items-center gap-2">
                <span>›_</span>
                <span>INTERACTIVE PIPELINE SCRUBBER // CORTEVA VISION ENGINE</span>
              </span>
              <span className="text-white/40 text-[10px]">SELECT STAGE [01 – 05]</span>
            </div>

            {/* Stage Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
              {pipelineStages.map((st, i) => (
                <button
                  key={st.num}
                  onClick={() => setActiveStage(i)}
                  className={`p-2.5 rounded border text-left transition-all ${
                    activeStage === i
                      ? "bg-[#C6FF3D] text-[#07090C] font-bold border-[#C6FF3D]"
                      : "bg-[#0E1218] text-white/60 border-white/10 hover:border-white/30"
                  }`}
                  data-hud-target="true"
                >
                  <div className="text-[10px] opacity-75">{st.num}</div>
                  <div className="text-xs truncate">{st.name}</div>
                </button>
              ))}
            </div>

            {/* Active Stage Details */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0E1218] p-5 rounded border border-white/5">
              <div className="md:col-span-7 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#C6FF3D]/10 text-[#C6FF3D] font-bold text-[10px]">
                    {pipelineStages[activeStage].tag}
                  </span>
                  <span className="text-[#4DE1FF] text-[10px]">
                    {pipelineStages[activeStage].rate}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-[#EDEFF2]">
                  {pipelineStages[activeStage].name}
                </h4>
                <p className="text-xs text-[#8A93A0] leading-relaxed">
                  {pipelineStages[activeStage].detail}
                </p>
                <div className="text-[11px] text-white/40 pt-2">
                  ENGINE: <span className="text-[#EDEFF2]">{pipelineStages[activeStage].engine}</span>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#07090C] p-3.5 rounded border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[10px] text-white/40 mb-2">
                    <span>PYTHON KERNEL SNIPPET</span>
                    <span className="text-[#00E599]">SYNTAX OK</span>
                  </div>
                  <pre className="text-[11px] text-[#C6FF3D] overflow-x-auto whitespace-pre font-mono">
                    {pipelineStages[activeStage].code}
                  </pre>
                </div>
                <div className="text-[10px] text-white/30 pt-2 border-t border-white/5 mt-3">
                  MODULARIZED IN 'video_toolkit'
                </div>
              </div>
            </div>
          </div>
        </BoundingBox>

        {/* Secondary Rows: Teaching & Academics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BoundingBox label="MENTORSHIP_ROLE 0.97" className="p-6 bg-[#0E1218]">
            <div className="flex justify-between items-center text-xs font-mono-hud text-white/50 mb-2">
              <span className="text-[#4DE1FF]">STEM Pedagogy & Problem Solving</span>
              <span>{teaching.period}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-1">
              {teaching.role}
            </h3>
            <p className="text-xs text-[#C6FF3D] font-mono-hud mb-4">
              JEE, NEET & B.Tech Engineering Students
            </p>
            <ul className="space-y-2 text-xs text-[#8A93A0] font-mono-hud mb-6">
              {teaching.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C6FF3D]">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {teaching.skills.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-[#07090C] border border-white/10 text-[10px] font-mono-hud text-white/60">
                  {s}
                </span>
              ))}
            </div>
          </BoundingBox>

          <BoundingBox label="ACADEMIC_RECORD 0.99" className="p-6 bg-[#0E1218]">
            <div className="flex justify-between items-center text-xs font-mono-hud text-white/50 mb-2">
              <span className="text-[#4DE1FF]">Undergraduate Degree</span>
              <span>{lpu.period}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-1">
              {lpu.role}
            </h3>
            <p className="text-xs text-[#C6FF3D] font-mono-hud mb-4">
              {lpu.organization}
            </p>
            <ul className="space-y-2 text-xs text-[#8A93A0] font-mono-hud mb-6">
              {lpu.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C6FF3D]">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {lpu.skills.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded bg-[#07090C] border border-white/10 text-[10px] font-mono-hud text-white/60">
                  {s}
                </span>
              ))}
            </div>
          </BoundingBox>
        </div>
      </div>
    </section>
  );
}
