"use client";

import React from "react";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import BoundingBox from "../hud/BoundingBox";
import { patents } from "@/data/projects";

export default function IPVault() {
  return (
    <section id="ip-vault" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// INTELLECTUAL PROPERTY VAULT // SECTION 04</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              Patents & Disclosures
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            GRANTED PATENTS · OFFICIAL DISCLOSURES · INDIAN PATENT OFFICE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {patents.map((item) => (
            <BoundingBox
              key={item.id}
              label={item.type === "GRANTED PATENT" ? "GRANTED PATENT 1.0" : "PATENT DISCLOSURE 1.0"}
              confidence="1.0"
              bracketColor={item.type === "GRANTED PATENT" ? "#C6FF3D" : "#4DE1FF"}
              className="p-6 sm:p-8 bg-[#0E1218] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 font-mono-hud text-xs">
                  <span
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold border ${
                      item.type === "GRANTED PATENT"
                        ? "bg-[#C6FF3D]/10 text-[#C6FF3D] border-[#C6FF3D]/30"
                        : "bg-[#4DE1FF]/10 text-[#4DE1FF] border-[#4DE1FF]/30"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-white/40">{item.grantDate}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#EDEFF2] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-[#8A93A0] leading-relaxed mb-6 font-mono-hud">
                  {item.abstract}
                </p>

                <div className="mb-6 space-y-2">
                  <span className="font-mono-hud text-[11px] text-[#C6FF3D] uppercase tracking-wider block mb-2">
                    Key Patent Claims:
                  </span>
                  {item.keyInnovations.map((claim, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded bg-[#07090C] border border-white/5 font-mono-hud text-xs text-[#EDEFF2]/80 flex items-start gap-2.5"
                    >
                      <span className="text-[#C6FF3D] mt-0.5">›</span>
                      <span>{claim}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono-hud text-xs text-white/50">
                <span>{item.applicationNumber}</span>
                <span className="text-[#4DE1FF]">{item.jurisdiction}</span>
              </div>
            </BoundingBox>
          ))}
        </div>
      </div>
    </section>
  );
}
