"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "experience", "work", "ip-vault", "skills", "proof", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Work", href: "#work", id: "work" },
    { label: "IP Vault", href: "#ip-vault", id: "ip-vault" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Proof", href: "#proof", id: "proof" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono-hud text-xs ${
          scrolled
            ? "bg-[#07090C]/85 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Monogram and Feed Status */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group"
            data-hud-target="true"
          >
            <span className="px-2.5 py-1 rounded bg-[#0E1218] border border-[#C6FF3D]/40 text-[#C6FF3D] font-bold text-xs tracking-wider group-hover:border-[#C6FF3D] transition-colors">
              {profile.identity.monogram}
            </span>
            <div className="hidden sm:flex flex-col text-[10px] leading-tight text-white/40">
              <span className="text-[#C6FF3D]">// DETECTION_FEED // STABLE</span>
              <span>// VISION_ENG</span>
            </div>
          </Link>

          {/* Right: Section Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#0E1218]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  activeSection === link.id
                    ? "bg-[#C6FF3D] text-[#07090C] font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
                data-hud-target="true"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions: Command Palette & CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E1218] border border-white/10 text-white/50 hover:text-[#C6FF3D] hover:border-[#C6FF3D]/40 text-xs transition-colors"
              title="Open Command Palette (⌘K or /)"
              data-hud-target="true"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="text-[11px]">⌘K</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#C6FF3D] hover:bg-[#b5f02c] text-[#07090C] font-semibold text-xs transition-colors shadow-[0_0_15px_rgba(198,255,61,0.25)]"
              data-hud-target="true"
            >
              <span>Let's Talk</span>
              <span>↗</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-[#0E1218] border border-white/10 text-white/70 hover:text-white"
              aria-label="Toggle Mobile Navigation"
              data-hud-target="true"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
