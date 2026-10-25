"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "PATENTS", href: "#patents" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Swiss Monogram Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-emerald-400 to-indigo-500 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#0A0D14] rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-white group-hover:text-cyan-400 transition-colors">
                AK
              </div>
            </div>
            <div>
              <span className="font-mono font-bold text-sm text-white tracking-wider block">
                KOLIPAKA AVINASH
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 block -mt-1">
                AI/ML @ CORTEVA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono text-slate-300 hover:text-white transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#0F1420] border border-white/10 space-y-3 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
              >
                CONNECT
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
