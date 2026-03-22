"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/ui/Navbar";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Training from "@/components/sections/Training";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
    >
      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-heading text-gradient mb-4">A.K.</h1>
        <p className="text-foreground/50 text-sm tracking-widest uppercase mb-10">Avinash Kolipaka</p>

        {/* Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        <p className="text-foreground/30 text-xs mt-3">{progress}%</p>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen">
          <ScrollProgressBar />
          <CustomCursor />
          <ParticleBackground />
          <Navbar />

          <Hero />

          {/* Divider gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-8" />

          <About />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Skills />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Projects />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Achievements />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Experience />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Certifications />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Training />
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-8" />

          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
