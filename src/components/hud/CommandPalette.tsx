"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Compass, FileCode, Award, Terminal, Mail, FileText } from "lucide-react";
import { profile } from "@/data/profile";

interface CommandItem {
  id: string;
  title: string;
  sectionId: string;
  category: string;
  icon: React.ReactNode;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const commands: CommandItem[] = [
    { id: "hero", title: "Overview / Mission Control", sectionId: "hero", category: "Navigation", icon: <Compass className="w-4 h-4" /> },
    { id: "about", title: "About: Mindset · Craft · Ambition", sectionId: "about", category: "Navigation", icon: <FileText className="w-4 h-4" /> },
    { id: "experience", title: "Experience: Corteva Agriscience & Timeline", sectionId: "experience", category: "Navigation", icon: <Terminal className="w-4 h-4" /> },
    { id: "work", title: "Selected Work: Corn Phenotyping & Full-Stack", sectionId: "work", category: "Navigation", icon: <FileCode className="w-4 h-4" /> },
    { id: "ip-vault", title: "Intellectual Property: Granted Patents", sectionId: "ip-vault", category: "Navigation", icon: <Award className="w-4 h-4" /> },
    { id: "skills", title: "Skills: Detected Competencies & Toolkit", sectionId: "skills", category: "Navigation", icon: <Terminal className="w-4 h-4" /> },
    { id: "proof", title: "Proof of Work: DSA, GeekStreak & Hackathons", sectionId: "proof", category: "Navigation", icon: <Compass className="w-4 h-4" /> },
    { id: "contact", title: "Contact: Got a hard problem? Let's build", sectionId: "contact", category: "Navigation", icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (sectionId: string) => {
    setIsOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-xl bg-[#0E1218] border border-white/20 shadow-2xl p-4 font-mono-hud text-xs z-10 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10 pb-3 mb-2">
              <Search className="w-4 h-4 text-[#C6FF3D]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                autoFocus
                className="w-full bg-transparent text-[#EDEFF2] placeholder-white/40 focus:outline-none text-xs"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-1 py-1">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.sectionId)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-[#C6FF3D]/10 hover:text-[#C6FF3D] text-[#EDEFF2] transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 group-hover:text-[#C6FF3D]">{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[10px] text-white/30">{item.category}</span>
                </button>
              ))}

              {filtered.length === 0 && (
                <div className="py-6 text-center text-white/40">
                  No matching telemetry points found.
                </div>
              )}
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/30">
              <span>[↑↓] Navigate   [↵] Select   [ESC] Close</span>
              <span className="text-[#C6FF3D]">TELEMETRY PALETTE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
