"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Selected Work", href: "#work" },
    { label: "Patents (IP Vault)", href: "#ip-vault" },
    { label: "Skills", href: "#skills" },
    { label: "Proof of Work", href: "#proof" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#07090C]/98 backdrop-blur-xl p-6 flex flex-col justify-between font-mono-hud"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D]" />
              <span className="font-bold text-[#EDEFF2] text-sm">AK // TELEMETRY MENU</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded bg-[#0E1218] border border-white/10 text-white/60 hover:text-white"
              aria-label="Close Mobile Navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="space-y-4 my-auto py-6">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full flex items-center justify-between text-left py-2 text-lg text-[#EDEFF2] hover:text-[#C6FF3D] border-b border-white/5 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
              </button>
            ))}
          </div>

          {/* Bottom Socials */}
          <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-[#8A93A0]">
            <div className="flex items-center justify-between">
              <span>{profile.contact.email}</span>
              <span className="text-[#C6FF3D]">AVAILABLE 2026</span>
            </div>
            <div className="flex gap-4">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#C6FF3D] transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#4DE1FF] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
