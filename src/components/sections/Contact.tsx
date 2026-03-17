"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Linkedin, Github, CheckCircle } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: "", email: "", message: "" });
    };

    const socials = [
        { icon: <Mail size={20} />, label: "Email", value: "avinashkolipaka01@gmail.com", href: "mailto:avinashkolipaka01@gmail.com" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/avinash-kolipaka", href: "https://linkedin.com/in/avinash-kolipaka" },
        { icon: <Github size={20} />, label: "GitHub", value: "github.com/Kolipaka-Avinash", href: "https://github.com/Kolipaka-Avinash" },
    ];

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase">Let&apos;s Talk</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
                    <p className="text-foreground/50 mt-6 max-w-lg mx-auto">
                        I&apos;m open to internship opportunities and exciting collaborations. Let&apos;s build something great together!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold font-heading mb-6">Connect With Me</h3>
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 glass-card rounded-2xl group hover:border-primary/40 border border-white/10 transition-all duration-300 hover:-translate-x-1"
                            >
                                <span className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {s.icon}
                                </span>
                                <div>
                                    <p className="text-xs text-foreground/40">{s.label}</p>
                                    <p className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">{s.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {[
                                { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                                { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                            ].map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-sm text-foreground/60 mb-2">{field.label}</label>
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={form[field.id as keyof typeof form]}
                                        onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                                        onFocus={() => setFocused(field.id)}
                                        onBlur={() => setFocused(null)}
                                        required
                                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none transition-all duration-300 ${focused === field.id ? "border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10"}`}
                                    />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="message" className="block text-sm text-foreground/60 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="I'd love to work with you on..."
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    onFocus={() => setFocused("message")}
                                    onBlur={() => setFocused(null)}
                                    required
                                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/30 outline-none transition-all duration-300 resize-none ${focused === "message" ? "border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "border-white/10"}`}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
                            >
                                {submitted ? (
                                    <><CheckCircle size={18} /> Message Sent!</>
                                ) : (
                                    <><Send size={18} /> Send Message</>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
