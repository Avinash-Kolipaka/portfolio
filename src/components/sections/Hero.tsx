"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPos({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
        >
            {/* Animated background blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[128px] animate-blob [animation-delay:2s]" />
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-emerald-600/15 rounded-full blur-[128px] animate-blob [animation-delay:4s]" />
            </div>

            <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative flex-shrink-0"
                >
                    {/* Rotating gradient ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-80 blur-sm"
                    />
                    {/* Pulsing glow */}
                    <motion.div
                        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -inset-4 rounded-full bg-blue-500/20 blur-xl"
                    />
                    {/* Photo */}
                    <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/10">
                        <Image
                            src="/profile.jpg"
                            alt="Avinash Kolipaka"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                    {/* Floating status badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-emerald-500/30 text-xs font-medium text-emerald-400"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Hire
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <div className="text-center lg:text-left flex-1">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Open to Internship Opportunities
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-gradient">Avinash Kolipaka</span>
                    </motion.h1>

                    {/* Typing Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl sm:text-2xl text-foreground/60 mb-4 font-heading h-10"
                    >
                        <TypeAnimation
                            sequence={[
                                "MERN Stack Developer",
                                2000,
                                "AI & GenAI Builder",
                                2000,
                                "Problem Solver",
                                2000,
                                "Startup Innovator",
                                2000,
                                "Future Software Engineer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-primary"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-foreground/50 text-base max-w-xl mb-10"
                    >
                        B.Tech CSE @ Lovely Professional University · Building real-world tech solutions with AI, full-stack development, and startup thinking.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start"
                    >
                        <MagneticButton>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95"
                            >
                                View Projects
                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </MagneticButton>

                        <MagneticButton>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/20 font-semibold hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-105 active:scale-95"
                            >
                                View CV
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/20 font-semibold hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all hover:scale-105 active:scale-95"
                            >
                                Contact Me
                                <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => scrollToSection("about")}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center gap-2 text-foreground/30 hover:text-primary transition-colors"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
