"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const certs = [
    {
        icon: "☁️",
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        date: "Mar 2026",
        color: "from-red-500/20 to-orange-500/20",
        border: "border-red-500/30",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CE7E4E2ADCBAA4C29A97C01C49D3DCFF38BC9C4E9CA07DCB17F76DDEABD96BC9",
    },
    {
        icon: "🗄️",
        title: "Oracle Certified Foundations Associate — Data Platform 2025",
        issuer: "Oracle University",
        date: "Mar 2026",
        color: "from-orange-500/20 to-yellow-500/20",
        border: "border-orange-500/30",
        link: "#",
    },
    {
        icon: "📊",
        title: "GenAI Powered Data Analytics Job Simulation",
        issuer: "Tata Group (Forage)",
        date: "Jul 2025",
        color: "from-indigo-500/20 to-blue-500/20",
        border: "border-indigo-500/30",
        link: "#",
    },
    {
        icon: "🧠",
        title: "160 Days of Problem Solving",
        issuer: "GeeksforGeeks",
        date: "Aug 2025",
        color: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        link: "https://www.geeksforgeeks.org/certificate/be123dd516d1279779e4c38cb31a296d?utm_source=socials&utm_medium=cc_link",
    },
    {
        icon: "💼",
        title: "Introduction to Career Skills in Software Development",
        issuer: "LinkedIn",
        date: "Mar 2025",
        color: "from-blue-500/20 to-sky-500/20",
        border: "border-blue-500/30",
        link: "#",
    },
    {
        icon: "💻",
        title: "Introduction to Hardware & Operating Systems",
        issuer: "IBM",
        date: "Sep 2024",
        color: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/30",
        link: "https://www.coursera.org/account/accomplishments/verify/6GN92RSJ9H76",
    },
    {
        icon: "🌐",
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        date: "Sep 2024",
        color: "from-yellow-500/20 to-green-500/20",
        border: "border-yellow-500/30",
        link: "https://www.coursera.org/account/accomplishments/verify/R7BB8PIJHQAX",
    },
    {
        icon: "📈",
        title: "Wall Street Equity Research Challenge '24",
        issuer: "Unstop",
        date: "May 2024",
        color: "from-teal-500/20 to-cyan-500/20",
        border: "border-teal-500/30",
        link: "#",
    },
    {
        icon: "📣",
        title: "Digital Marketing",
        issuer: "HubSpot Academy",
        date: "Jun 2024",
        color: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/30",
        link: "#",
    },
    {
        icon: "📉",
        title: "Capital Markets — Young Industry Enthusiast",
        issuer: "Infosys Springboard",
        date: "Oct 2023",
        color: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-500/30",
        link: "#",
    },
    {
        icon: "🌐",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Sep 2023",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        link: "https://www.freecodecamp.org/certification/fcc9400e952-ecf0-452e-8694-e5f3102a5a88/responsive-web-design",
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
                        Industry <span className="text-gradient">Certificates</span>
                    </h2>
                    <p className="text-foreground/50 mt-3 text-sm max-w-xl mx-auto">
                        Verified credentials from globally recognized organizations and platforms.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                </motion.div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.07 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${cert.color} border ${cert.border} group cursor-default`}
                        >
                            <span className="text-3xl mb-4 block">{cert.icon}</span>
                            <h3 className="font-semibold font-heading text-sm leading-snug mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                            <p className="text-xs text-foreground/50 mb-4">{cert.issuer} · {cert.date}</p>
                            {cert.link !== "#" ? (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                                >
                                    View Certificate <ExternalLink size={11} />
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 text-xs text-foreground/30">
                                    Certificate Earned
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
