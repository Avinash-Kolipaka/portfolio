"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-heading text-gradient mb-2">
                {count}{suffix}
            </div>
            <div className="text-foreground/50 text-sm">{label}</div>
        </div>
    );
}

const stats = [
    { target: 5, label: "Projects Built", suffix: "+" },
    { target: 6, label: "Certifications", suffix: "+" },
    { target: 15, label: "Technologies", suffix: "+" },
    { target: 160, label: "Problems Solved", suffix: "+" },
];

const highlights = [
    { icon: "💻", title: "Full Stack Development", desc: "MERN Stack — building end-to-end web applications from idea to deployment." },
    { icon: "🤖", title: "AI & GenAI Applications", desc: "Integrating modern AI models into real-world products and tools." },
    { icon: "🧩", title: "Problem Solving", desc: "160+ DSA problems solved with strong analytical and logical thinking." },
    { icon: "🚀", title: "Startup Innovation", desc: "Co-founder mindset — building products that solve real pain points." },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Who I Am</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                            I&apos;m <span className="text-foreground font-semibold">Avinash Kolipaka</span>, a B.Tech Computer Science student at{" "}
                            <span className="text-primary">Lovely Professional University</span>, passionate about building real-world technology solutions.
                        </p>
                        <p className="text-foreground/60 leading-relaxed mb-6">
                            With hands-on experience in Python, MERN Stack, and GenAI-powered analytics, I&apos;m constantly exploring the boundaries of AI, data science, and software engineering. As an Internshala Student Partner, I&apos;ve guided peers, promoted internship culture, and driven student engagement initiatives.
                        </p>
                        <p className="text-foreground/60 leading-relaxed">
                            I am a quick learner who thrives in collaborative environments, actively seeking internship opportunities to sharpen my development, problem-solving, and innovation skills. Holder of a patent for an AI-Based Motorcycle Rider Safety System.
                        </p>
                    </motion.div>

                    {/* Highlight Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="glass-card p-5 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-foreground/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="glass rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat) => (
                        <AnimatedCounter key={stat.label} {...stat} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
