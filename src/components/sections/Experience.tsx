"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "education",
        icon: <GraduationCap size={18} />,
        role: "B.Tech — Computer Science & Engineering",
        company: "Lovely Professional University",
        location: "Phagwara, Punjab, India",
        period: "Aug 2023 – Jun 2027",
        color: "border-secondary/50 bg-secondary/10",
        iconColor: "text-secondary",
        achievements: [
            "Pursuing B.Tech in Computer Science with strong interest in AI, web development, and software engineering.",
            "Actively involved in tech communities, simulations, and internship preparation programs.",
            "Completed GenAI-powered Data Analytics simulation from Tata.",
            "Engaged in real-time coding, problem-solving, and open-source learning.",
        ],
    },
    {
        type: "education",
        icon: <GraduationCap size={18} />,
        role: "Intermediate",
        company: "Alphores Junior College",
        location: "Karimnagar, Telangana, India",
        period: "Jun 2022 – Apr 2023",
        color: "border-primary/50 bg-primary/10",
        iconColor: "text-primary",
        achievements: [
            "Completed higher secondary education focusing on technical problem-solving and fundamental mathematics.",
            "Developed a robust academic background driving the ambition for engineering studies."
        ],
    },
    {
        type: "education",
        icon: <GraduationCap size={18} />,
        role: "Matriculation",
        company: "Telangana State Model School",
        location: "Gangadhara, Telangana, India",
        period: "Jun 2020 – Apr 2021",
        color: "border-secondary/50 bg-secondary/10",
        iconColor: "text-secondary",
        achievements: [
            "Completed foundational education demonstrating consistent academic performance.",
            "Actively participated in school programs to build a comprehensive foundational knowledge base."
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="max-w-4xl mx-auto" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">My Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />

                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role}
                                initial={{ opacity: 0, x: -40 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: i * 0.2 }}
                                className="flex gap-6"
                            >
                                {/* Timeline Dot */}
                                <div className={`hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border-2 ${exp.color} items-center justify-center ${exp.iconColor} z-10`}>
                                    {exp.icon}
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                                        <div>
                                            <h3 className="font-bold text-lg font-heading">{exp.role}</h3>
                                            <p className={`text-sm font-semibold ${exp.iconColor}`}>{exp.company}</p>
                                            <p className="text-xs text-foreground/40">{exp.location}</p>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/50">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((ach, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-foreground/60">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
