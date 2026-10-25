"use client";

import React from "react";
import BoundingBox from "../hud/BoundingBox";

export default function Approach() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Bounds & Failure Modes",
      label: "ANALYSIS",
      confidence: "0.99",
      description:
        "Deconstruct the physical and algorithmic problem. Measure frame blur, latency bottlenecks, and edge cases before writing a line of code."
    },
    {
      num: "02",
      title: "Explore",
      subtitle: "Architecture & Tradeoffs",
      label: "PROTOTYPING",
      confidence: "0.99",
      description:
        "Evaluate model architectures (YOLOv8-seg vs standard detectors), quantify memory overhead, and architect decoupled microservice interfaces."
    },
    {
      num: "03",
      title: "Build",
      subtitle: "Production Modularization",
      label: "SYSTEMS",
      confidence: "0.99",
      description:
        "Write clean, importable packages (like 'video_toolkit' with 18+ functions). Containerize in Docker and orchestrate on Kubernetes / Azure AKS."
    },
    {
      num: "04",
      title: "Refine",
      subtitle: "Rigorous Measurement",
      label: "VALIDATION",
      confidence: "0.99",
      description:
        "Apply empirical quality gates (BRISQUE, SSIM, Laplacian variance). Benchmark latency under load and enforce atomic database transactions."
    }
  ];

  return (
    <section id="approach" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// ENGINEERING METHODOLOGY // SECTION 07</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              How I Engineer
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            UNDERSTAND → EXPLORE → BUILD → REFINE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <BoundingBox
              key={step.num}
              label={`${step.label} ${step.confidence}`}
              className="p-6 bg-[#0E1218] flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl font-bold text-[#C6FF3D] block mb-2">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-bold text-[#EDEFF2] mb-1">
                  {step.title}
                </h3>
                <h4 className="font-mono-hud text-xs text-[#4DE1FF] mb-4">
                  {step.subtitle}
                </h4>
                <p className="text-xs text-[#8A93A0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </BoundingBox>
          ))}
        </div>
      </div>
    </section>
  );
}
