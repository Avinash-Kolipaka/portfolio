"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Brain, Cpu } from "lucide-react";

export default function Achievements() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="achievements" className="py-24 px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Recognition</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        Key <span className="text-gradient">Achievements</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Patent Highlight Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-primary/30 via-secondary/30 to-emerald-500/20 mb-8"
                >
                    <div className="relative glass rounded-[22px] p-8 md:p-12">
                        {/* Corner badge */}
                        <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-semibold">
                            <Award size={14} />
                            PATENT GRANTED
                        </div>

                        <div className="flex flex-col md:flex-row items-start gap-8">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                                🏍️
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <p className="text-xs text-primary mb-2 font-semibold tracking-widest uppercase">Apr 2025</p>
                                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                                    AI-Based Motorcycle Rider Safety Patent
                                </h3>
                                <p className="text-foreground/70 leading-relaxed mb-6">
                                    Developed an AI-powered smartwatch system enabling helmet compliance detection, rider health monitoring, and real-time accident prevention through biometric sensor fusion, computer vision, and ECU integration.
                                    Reduces accident risk by an estimated 90%.
                                </p>

                                {/* Feature bullets */}
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {[
                                        { icon: <Shield size={18} />, text: "Helmet Compliance Detection" },
                                        { icon: <Brain size={18} />, text: "Computer Vision Integration" },
                                        { icon: <Cpu size={18} />, text: "ECU & Sensor Fusion" },
                                    ].map((f) => (
                                        <div key={f.text} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                                            <span className="text-primary">{f.icon}</span>
                                            <span className="text-sm text-foreground/70">{f.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
