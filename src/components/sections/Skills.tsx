"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Languages",
        icon: "🖥️",
        skills: [
            { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
            { name: "Python", level: 80, color: "from-blue-400 to-blue-600" },
            { name: "HTML & CSS", level: 90, color: "from-orange-400 to-red-500" },
            { name: "Java", level: 70, color: "from-red-400 to-red-600" },
            { name: "C++", level: 65, color: "from-indigo-400 to-indigo-600" },
            { name: "SQL", level: 75, color: "from-cyan-400 to-cyan-600" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        icon: "⚙️",
        skills: [
            { name: "React.js", level: 85, color: "from-cyan-400 to-blue-500" },
            { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
            { name: "Express.js", level: 78, color: "from-gray-400 to-gray-600" },
            { name: "Next.js", level: 70, color: "from-white to-gray-300" },
        ],
    },
    {
        title: "Tools & Platforms",
        icon: "🛠️",
        skills: [
            { name: "Git & GitHub", level: 85, color: "from-orange-400 to-orange-600" },
            { name: "MongoDB", level: 75, color: "from-green-400 to-green-700" },
            { name: "VS Code", level: 90, color: "from-blue-400 to-blue-700" },
            { name: "Postman", level: 80, color: "from-orange-500 to-red-500" },
        ],
    },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-foreground/80">{name}</span>
                <span className="text-xs text-foreground/50">{level}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">What I Know</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: ci * 0.2 }}
                            className="glass-card rounded-2xl p-7"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{cat.icon}</span>
                                <h3 className="font-semibold text-lg font-heading">{cat.title}</h3>
                            </div>
                            {cat.skills.map((skill, si) => (
                                <SkillBar key={skill.name} {...skill} index={si} />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Tech Orbit Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-wrap justify-center gap-4"
                >
                    {["⚛️ React", "🟩 Node", "🐍 Python", "🍃 MongoDB", "☕ Java", "🐙 Git", "🔷 TypeScript", "🌐 HTML/CSS"].map((tech) => (
                        <motion.span
                            key={tech}
                            whileHover={{ scale: 1.15, y: -4 }}
                            className="px-4 py-2 glass rounded-full text-sm text-foreground/70 hover:text-primary hover:border-primary/40 border border-white/10 transition-colors cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
