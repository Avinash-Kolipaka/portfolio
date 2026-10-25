"use client";

import React from "react";
import BootLoader from "@/components/hud/BootLoader";
import CrosshairCursor from "@/components/hud/CrosshairCursor";
import HUDOverlay from "@/components/hud/HUDOverlay";
import CommandPalette from "@/components/hud/CommandPalette";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import IPVault from "@/components/sections/IPVault";
import Skills from "@/components/sections/Skills";
import ProofOfWork from "@/components/sections/ProofOfWork";
import Approach from "@/components/sections/Approach";
import CurrentlyExploring from "@/components/sections/CurrentlyExploring";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Terminal Boot Loader (≤1.5s, skippable) */}
      <BootLoader />

      {/* 2. Snapping HUD Crosshair Cursor (Desktop only) */}
      <CrosshairCursor />

      {/* 3. Global HUD Telemetry Overlay (Live IST Clock, Frame Counter) */}
      <HUDOverlay />

      {/* 4. Command Palette (⌘K or /) */}
      <CommandPalette />

      {/* 5. Monogram Navigation Bar */}
      <Navbar />

      {/* 6. Main Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <IPVault />
        <Skills />
        <ProofOfWork />
        <Approach />
        <CurrentlyExploring />
        <Contact />
      </main>

      {/* 7. HUD Footer */}
      <Footer />
    </>
  );
}
