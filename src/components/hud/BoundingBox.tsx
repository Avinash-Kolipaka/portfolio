"use client";

import React from "react";

export interface BoundingBoxProps {
  label?: string;
  confidence?: number | string;
  bracketColor?: string;
  className?: string;
  children: React.ReactNode;
}

export function BoundingBox({
  label = "SPECIMEN // DETECTED",
  confidence = 0.98,
  bracketColor,
  className = "",
  children,
}: BoundingBoxProps) {
  const formatConfidence = (c: number | string | undefined) => {
    if (c === undefined || c === null || c === "") return null;
    if (typeof c === "number") return `${(c * 100).toFixed(0)}%`;
    if (typeof c === "string" && !isNaN(Number(c)) && Number(c) <= 1 && Number(c) > 0) {
      return `${(Number(c) * 100).toFixed(0)}%`;
    }
    return c;
  };

  const bracketStyle = bracketColor ? { borderColor: bracketColor } : undefined;

  return (
    <div className={`relative group ${className}`}>
      {/* Precision Hairline Swiss Corner Brackets */}
      <div 
        className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" 
        style={bracketStyle}
      />
      <div 
        className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" 
        style={bracketStyle}
      />
      <div 
        className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" 
        style={bracketStyle}
      />
      <div 
        className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" 
        style={bracketStyle}
      />

      {/* Top Swiss Telemetry Tag */}
      {label && (
        <div 
          className="absolute -top-3 left-3 bg-[#0A0D14] border border-cyan-500/40 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 tracking-wider flex items-center gap-1.5 z-10"
          style={bracketColor ? { borderColor: bracketColor, color: bracketColor } : undefined}
        >
          <span 
            className="w-1.5 h-1.5 rounded-full bg-cyan-400" 
            style={bracketColor ? { backgroundColor: bracketColor } : undefined}
          />
          <span>{label}</span>
          {confidence !== undefined && confidence !== "" && (
            <span className="text-slate-400">({formatConfidence(confidence)})</span>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

export default BoundingBox;
