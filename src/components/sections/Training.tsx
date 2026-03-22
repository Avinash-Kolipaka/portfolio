"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen } from "lucide-react";

const trainings = [
    {
        icon: "🗣️",
        title: "Interpersonal Communication for Engineering Leaders",
        provider: "Rice University",
        platform: "Coursera",
        category: "Leadership",
        color: "from-blue-500/20 to-indigo-500/20",
        border: "border-blue-500/30",
        tag: "bg-blue-500/20 text-blue-300",
        link: "#",
    },
    {
        icon: "☁️",
        title: "AWS Solutions Architecture Job Simulation",
        provider: "Amazon Web Services",
        platform: "Forage",
        category: "Cloud Computing",
        color: "from-orange-500/20 to-yellow-500/20",
        border: "border-orange-500/30",
        tag: "bg-orange-500/20 text-orange-300",
        link: "#",
    },
    {
        icon: "🧩",
        title: "GfG 160 — 160 Days of Problem Solving",
        provider: "GeeksForGeeks",
        platform: "GeeksForGeeks",
        category: "Data Structures & Algorithms",
        color: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        tag: "bg-green-500/20 text-green-300",
        link: "#",
    },
    {
        icon: "🤖",
        title: "Advanced RAG Applications with Vector Databases",
        provider: "Self-directed",
        platform: "Online",
        category: "Generative AI",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        tag: "bg-purple-500/20 text-purple-300",
        link: "#",
    },
    {
        icon: "🧬",
        title: "LLM Foundations: Vector Databases for Caching and RAG",
        provider: "Self-directed",
        platform: "Online",
        category: "Generative AI",
        color: "from-violet-500/20 to-indigo-500/20",
        border: "border-violet-500/30",
        tag: "bg-violet-500/20 text-violet-300",
        link: "#",
    },
    {
        icon: "☕",
        title: "Java Programming",
        provider: "Naukri (LPU)",
        platform: "LPU",
        category: "Programming",
        color: "from-red-500/20 to-orange-500/20",
        border: "border-red-500/30",
        tag: "bg-red-500/20 text-red-300",
        link: "#",
    },
];

export default function Training() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="training" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Learning Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        Training & <span className="text-gradient">Courses</span>
                    </h2>
                    <p className="text-foreground/50 mt-3 text-sm max-w-xl mx-auto">
                        Hands-on simulations, structured courses, and self-directed learning across AI, cloud, and engineering.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trainings.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${item.color} border ${item.border} group flex flex-col gap-3`}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <span className="text-3xl">{item.icon}</span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.tag}`}>
                                    {item.category}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold font-heading text-sm leading-snug group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-foreground/50 mt-1">
                                    {item.provider} · <span className="italic">{item.platform}</span>
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-1.5 text-xs text-foreground/40">
                                <BookOpen size={11} />
                                Completed
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
