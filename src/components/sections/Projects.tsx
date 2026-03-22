"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(nx);
        y.set(ny);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group"
        >
            {children}
        </motion.div>
    );
}

const projects = [
    {
        title: "StartupMatch",
        emoji: "🤝",
        description:
            "AI-powered co-founder matching platform with a weighted compatibility algorithm (0–100). Built a full-stack MERN platform with real-time chat using Socket.io, JWT authentication, and MongoDB persistence.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
        github: "https://github.com/avinashkolipaka",
        demo: "https://startup-match-ai.vercel.app",
        gradient: "from-blue-500/20 to-purple-500/20",
        border: "border-blue-500/30",
        glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
        date: "Feb 2026",
    },
    {
        title: "Soil Testing & Fertilizer Recommendation",
        emoji: "🌾",
        description:
            "Smart agriculture solution that analyzes soil parameters (pH, N, P, K) using real-time data to generate data-driven fertilizer recommendations and improve decision accuracy for crop planning.",
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        github: "https://github.com/avinashkolipaka",
        demo: "#",
        gradient: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
        date: "May 2025",
    },
    {
        title: "Text-Based Email Formatter",
        emoji: "📧",
        description:
            "Flask-based tool that formats professional emails automatically using Python. Implements text processing, formatting logic, and data-handling techniques to optimize processing efficiency.",
        tech: ["Python", "Flask", "HTML", "CSS"],
        github: "https://github.com/avinashkolipaka",
        demo: "https://email-based-text-formatter.vercel.app",
        gradient: "from-orange-500/20 to-red-500/20",
        border: "border-orange-500/30",
        glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]",
        date: "Jun 2025",
    },
];

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">What I&apos;ve Built</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                        >
                            <TiltCard>
                                <div
                                    className={`relative h-full glass-card rounded-2xl p-6 border ${project.border} bg-gradient-to-br ${project.gradient} transition-all duration-300 ${project.glow} hover:-translate-y-1`}
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    {/* Emoji Icon */}
                                    <div className="text-4xl mb-4">{project.emoji}</div>

                                    {/* Title & Date */}
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-bold text-lg font-heading leading-snug">{project.title}</h3>
                                        <span className="text-xs text-foreground/40 whitespace-nowrap ml-2">{project.date}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-foreground/60 leading-relaxed mb-5">{project.description}</p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/60">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-sm hover:border-white/30 transition-all hover:scale-105"
                                        >
                                            <Github size={14} /> GitHub
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 border border-primary/30 text-sm text-primary hover:bg-primary/30 transition-all hover:scale-105"
                                        >
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
