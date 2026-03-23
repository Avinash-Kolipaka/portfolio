"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <p className="font-heading font-bold text-lg text-gradient">Avinash Kolipaka</p>
                    <p className="text-xs text-foreground/40">Future Software Engineer · GenAI Enthusiast</p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-5">
                    {[
                        { href: "https://github.com/Avinash-Kolipaka", icon: <Github size={18} /> },
                        { href: "https://linkedin.com/in/avinash-kolipaka", icon: <Linkedin size={18} /> },
                        { href: "mailto:avinashkolipaka01@gmail.com", icon: <Mail size={18} /> },
                    ].map(({ href, icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-foreground/50 hover:text-primary hover:border-primary/40 hover:scale-110 transition-all duration-200"
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-xs text-foreground/40 flex items-center gap-1">
                    Made with <Heart size={12} className="text-red-400 animate-pulse" /> by Avinash · © 2026
                </p>
            </div>
        </footer>
    );
}
