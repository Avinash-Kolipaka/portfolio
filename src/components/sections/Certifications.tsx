"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const certs = [
    {
        icon: "🧠",
        title: "160 Days of Problem Solving",
        issuer: "GeeksforGeeks (GFG)",
        date: "Aug 2025",
        color: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        link: "#",
    },
    {
        icon: "☕",
        title: "Java Programming Certification",
        issuer: "Naukri (LPU)",
        date: "May 2025",
        color: "from-orange-500/20 to-red-500/20",
        border: "border-orange-500/30",
        link: "#",
    },
    {
        icon: "💻",
        title: "Introduction to Hardware & Operating Systems",
        issuer: "Coursera",
        date: "Sep 2024",
        color: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/30",
        link: "#",
    },
    {
        icon: "🌐",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Nov 2023",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        link: "#",
    },
    {
        icon: "📊",
        title: "GenAI Powered Data Analytics Simulation",
        issuer: "Tata Group",
        date: "2024",
        color: "from-indigo-500/20 to-blue-500/20",
        border: "border-indigo-500/30",
        link: "#",
    },
    {
        icon: "📈",
        title: "Capital Markets — Young Industry Enthusiast",
        issuer: "Infosys Springboard",
        date: "2024",
        color: "from-cyan-500/20 to-teal-500/20",
        border: "border-cyan-500/30",
        link: "#",
    },
];

export default function Certifications() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Credentials</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        My <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${cert.color} border ${cert.border} group cursor-default`}
                        >
                            <span className="text-3xl mb-4 block">{cert.icon}</span>
                            <h3 className="font-semibold font-heading text-sm leading-snug mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                            <p className="text-xs text-foreground/50 mb-4">{cert.issuer} · {cert.date}</p>
                            <a
                                href={cert.link}
                                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                            >
                                View Certificate <ExternalLink size={11} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
