"use client";

import React from "react";
import { Radar } from "lucide-react";

export default function CurrentlyExploring() {
  const topics = [
    {
      title: "Computer Vision in Production",
      detail:
        "Optimizing YOLOv8-seg inference on distributed turntable video rigs with frame-dropping mitigations.",
      tag: "Active Pipeline",
      color: "border-[#C6FF3D]/30 text-[#C6FF3D]"
    },
    {
      title: "Azure AKS Microservices",
      detail:
        "Containerizing image processing workloads with Docker and Kubernetes for scalable agritech pipelines.",
      tag: "Deployed",
      color: "border-[#00E599]/30 text-[#00E599]"
    },
    {
      title: "RAG & Legal Intelligence",
      detail:
        "Evaluating vector chunking and document retrieval latency in LangChain with MongoDB vector storage.",
      tag: "Experimentation",
      color: "border-[#4DE1FF]/30 text-[#4DE1FF]"
    }
  ];

  return (
    <section className="py-12 border-t border-white/5 bg-[#07090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 font-mono-hud text-xs">
          <div className="flex items-center gap-2 text-[#4DE1FF]">
            <Radar className="w-4 h-4 animate-spin [animation-duration:8s]" />
            <span>// RADAR // CURRENTLY EXPLORING</span>
          </div>
          <span className="text-white/40">Q4 2026 HORIZON</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-hud text-xs">
          {topics.map((t, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#0E1218] border border-white/10 space-y-2 relative"
            >
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-[10px] uppercase tracking-wider">
                  {idx === 0 ? "Vision Infrastructure" : idx === 1 ? "Cloud DevOps" : "Generative AI"}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] border ${t.color}`}>
                  {t.tag}
                </span>
              </div>
              <h3 className="font-display text-sm font-bold text-[#EDEFF2]">{t.title}</h3>
              <p className="text-xs text-[#8A93A0] leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
