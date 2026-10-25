"use client";

import React from "react";

interface BoundingBoxProps {
  label?: string;
  confidence?: string;
  children: React.ReactNode;
  className?: string;
  bracketColor?: string;
}

export default function BoundingBox({
  label,
  confidence,
  children,
  className = "",
  bracketColor = "#C6FF3D"
}: BoundingBoxProps) {
  return (
    <div
      className={`relative rounded-lg border border-white/[0.08] transition-all duration-300 hover:border-white/[0.18] group ${className}`}
    >
      {/* HUD Corner Brackets */}
      <span
        className="corner-bracket-tl group-hover:scale-110 transition-transform"
        style={{ borderColor: bracketColor }}
      />
      <span
        className="corner-bracket-tr group-hover:scale-110 transition-transform"
        style={{ borderColor: bracketColor }}
      />
      <span
        className="corner-bracket-bl group-hover:scale-110 transition-transform"
        style={{ borderColor: bracketColor }}
      />
      <span
        className="corner-bracket-br group-hover:scale-110 transition-transform"
        style={{ borderColor: bracketColor }}
      />

      {/* Top Left Monospace Detection Label */}
      {(label || confidence) && (
        <div className="absolute -top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#07090C] border border-white/10 text-[10px] font-mono-hud text-[#C6FF3D] pointer-events-none select-none shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
          {label && <span className="uppercase tracking-wider">{label}</span>}
          {confidence && <span className="text-white/40">{confidence}</span>}
        </div>
      )}

      {children}
    </div>
  );
}
