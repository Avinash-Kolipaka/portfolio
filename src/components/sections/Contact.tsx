"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, Github, Linkedin, ExternalLink, AlertCircle } from "lucide-react";
import BoundingBox from "../hud/BoundingBox";
import Toast from "../ui/Toast";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot honeypot
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [successNotice, setSuccessNotice] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setToastMessage("Email copied to clipboard: avinashkolipaka01@gmail.com");
    setToastVisible(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (silent discard for automated spam bots)
    if (honeypot) {
      console.warn("Honeypot triggered.");
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError("All telemetry fields are required to establish link.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Please provide a valid email coordinate.");
      return;
    }

    setFormError("");
    setFormStatus("submitting");

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    if (formspreeKey) {
      try {
        const response = await fetch("https://formspree.io/f/" + formspreeKey, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        if (response.ok) {
          setFormStatus("success");
          setSuccessNotice("Telemetry transmitted successfully to Kolipaka Avinash.");
          setToastMessage("Inquiry received! I will review and reply within 24 hours.");
          setToastVisible(true);
          setName("");
          setEmail("");
          setMessage("");
          return;
        }
      } catch (err) {
        console.warn("Backend transmission fallback triggered:", err);
      }
    }

    // Direct verified mailto fallback (zero fake success)
    setFormStatus("success");
    setSuccessNotice("Direct protocol activated. Launching your default email client...");
    setToastMessage("Inquiry formatted! Opening your default mail client...");
    setToastVisible(true);

    const mailtoUrl = "mailto:" + profile.contact.email + "?subject=Collaboration%20Inquiry%20from%20" + encodeURIComponent(name) + "&body=" + encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-[#07090C] hud-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono-hud text-xs text-[#C6FF3D] mb-2">
              <span className="w-2 h-2 bg-[#C6FF3D] rounded-full" />
              <span>// DIRECT TELEMETRY LINK // SECTION 08</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEFF2]">
              Got a hard problem? Let's build.
            </h2>
          </div>
          <div className="font-mono-hud text-xs text-[#8A93A0]">
            NO PHONE NUMBER DISPLAYED · EMAIL · GITHUB · LINKEDIN
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Email CTA & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <BoundingBox label="DIRECT_CHANNEL" confidence="0.99" className="p-6 bg-[#0E1218]">
              <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-2">
                Open to High-Impact Opportunities
              </h3>
              <p className="text-xs text-[#8A93A0] leading-relaxed mb-6 font-mono-hud">
                Available for full-time AI/ML Backend Developer, Computer Vision, and Full-Stack Engineering roles & internships starting 2026.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-lg bg-[#07090C] border border-white/10 font-mono-hud text-xs mb-6">
                <span className="text-[10px] text-white/40 block mb-1">VERIFIED EMAIL</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#C6FF3D] font-semibold text-xs sm:text-sm select-all">
                    {profile.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-[#0E1218] border border-white/15 text-[#EDEFF2] hover:text-[#C6FF3D] transition-colors"
                    title="Copy Email"
                    data-hud-target="true"
                    aria-label="Copy verified email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#C6FF3D]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Profiles */}
              <div className="space-y-2 font-mono-hud text-xs">
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded bg-[#07090C] border border-white/5 hover:border-[#C6FF3D]/40 text-[#EDEFF2] transition-colors"
                  data-hud-target="true"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#C6FF3D]" />
                    <span>GitHub: Avinash-Kolipaka</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/40" />
                </a>

                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded bg-[#07090C] border border-white/5 hover:border-[#4DE1FF]/40 text-[#EDEFF2] transition-colors"
                  data-hud-target="true"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#4DE1FF]" />
                    <span>LinkedIn: in/avinash-kolipaka</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/40" />
                </a>
              </div>
            </BoundingBox>
          </div>

          {/* Right Column: Validated Telemetry Transmission Form */}
          <div className="lg:col-span-7">
            <BoundingBox label="TRANSMISSION_FORM" confidence="0.98" className="p-6 sm:p-8 bg-[#0E1218]">
              <h3 className="font-display text-xl font-bold text-[#EDEFF2] mb-1">
                Transmit Engineering Inquiry
              </h3>
              <p className="text-xs font-mono-hud text-[#8A93A0] mb-6">
                Direct route to Kolipaka Avinash. Includes honeypot filter, serverless env var endpoint, and client mailto fallback.
              </p>

              {formError && (
                <div
                  role="alert"
                  className="mb-4 p-3 rounded bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 flex items-center gap-2 text-xs text-[#FF4D4D] font-mono-hud"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {formStatus === "success" && (
                <div
                  role="status"
                  className="mb-4 p-3 rounded bg-[#00E599]/10 border border-[#00E599]/30 flex items-center gap-2 text-xs text-[#00E599] font-mono-hud"
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{successNotice}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-mono-hud text-xs">
                {/* Honeypot field (hidden from real users, traps bots) */}
                <input
                  type="text"
                  name="user_role_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="contact-name" className="block text-[#8A93A0] text-[11px] mb-1">
                    YOUR NAME / IDENTIFIER:
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Vance or Engineering Recruiter"
                    className="w-full px-3.5 py-2.5 rounded bg-[#07090C] border border-white/10 focus:border-[#C6FF3D] text-[#EDEFF2] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[#8A93A0] text-[11px] mb-1">
                    RETURN EMAIL COORDINATE:
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#07090C] border border-white/10 focus:border-[#C6FF3D] text-[#EDEFF2] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[#8A93A0] text-[11px] mb-1">
                    PROJECT SCOPE / HARD PROBLEM:
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the computer vision pipeline, distributed backend, or engineering role..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#07090C] border border-white/10 focus:border-[#C6FF3D] text-[#EDEFF2] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-3.5 rounded bg-[#C6FF3D] hover:bg-[#b5f02c] disabled:opacity-50 text-[#07090C] font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,255,61,0.2)]"
                  data-hud-target="true"
                >
                  <Send className="w-4 h-4" />
                  <span>{formStatus === "submitting" ? "FORMATTING TELEMETRY..." : "TRANSMIT INQUIRY"}</span>
                </button>
              </form>
            </BoundingBox>
          </div>
        </div>
      </div>

      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </section>
  );
}
