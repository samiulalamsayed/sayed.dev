"use client";

import { useState } from "react";
import {
    Mail,
    Copy,
    Check,
    ArrowUpRight,
    Send,
    Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const EMAIL = "mdsasayed06@gmail.com";

// GitHub Icon
function GithubIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 1.94 3.12 1.94.3-.47.58-.9.7-1.1-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.44 3.05-1.14 3.05-1.14.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.12 5.52.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
    );
}

// LinkedIn Icon
function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-[#05070E] px-6 py-20 md:px-12 lg:px-20 lg:py-32"
        >
            {/* 1. Subtle Tech Grid Background (Premium Developer Look) */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* Section Heading (Centered) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:mb-20"
                >
                    <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md">
                        <Sparkles size={14} className="text-indigo-400" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
                            Get In Touch
                        </p>
                    </div>

                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Let's build something{" "}
                        <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent pb-2 mt-2">
                            extraordinary.
                        </span>
                    </h2>
                </motion.div>

                {/* The "Master Card" Unified Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-900/40 shadow-2xl backdrop-blur-xl lg:flex lg:rounded-[3rem]"
                >
                    {/* Left Side: Information & Pitch */}
                    <div className="relative flex-1 border-b border-slate-700/50 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
                        
                        {/* Soft Inner Glow */}
                        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-indigo-500/5 to-transparent" />

                        <div className="relative z-10 flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-400">
                                    <Mail size={26} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-3xl font-extrabold leading-tight text-slate-100 sm:text-4xl">
                                    Have a project in mind?
                                </h3>
                                
                                <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
                                    I'm always open to discussing new projects, creative ideas, opportunities, and meaningful collaborations. Whether you have a question or just want to say hi, my inbox is always open.
                                </p>
                            </div>

                            {/* Status Pill */}
                            <div className="mt-12 sm:mt-16 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2.5 transition-colors hover:bg-emerald-500/20">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                </span>
                                <span className="text-xs font-semibold tracking-wide text-emerald-400 sm:text-sm">
                                    Available for new opportunities
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Interactive Action Area */}
                    <div className="flex-1 bg-[#06070B]/50 p-8 sm:p-12 lg:p-16">
                        
                        {/* Custom Email Terminal/Card */}
                        <div className="mb-10 rounded-2xl border border-slate-700/50 bg-[#0A0D16] p-6 shadow-inner transition-colors hover:border-indigo-500/30">
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Direct Email
                            </p>
                            
                            <div className="flex items-center justify-between gap-4">
                                <p className="truncate text-sm font-semibold text-slate-200 sm:text-base">
                                    {EMAIL}
                                </p>

                                <button
                                    onClick={copyEmail}
                                    aria-label="Copy email address"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/50 text-slate-400 transition-all hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:text-indigo-300"
                                >
                                    {copied ? (
                                        <Check size={18} className="text-emerald-400" />
                                    ) : (
                                        <Copy size={16} className="transition-transform group-hover:scale-110" />
                                    )}
                                </button>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-slate-800">
                                <p className="text-xs font-medium text-slate-500">
                                    {copied ? <span className="text-emerald-400">Copied to clipboard!</span> : "Click the icon to copy"}
                                </p>
                            </div>
                        </div>

                        {/* Send Email Button */}
                        <a
                            href={`mailto:${EMAIL}`}
                            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-indigo-500/25"
                        >
                            <Send size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            Send an Email
                        </a>

                        {/* Social Links Mini-Cards */}
                        <div className="mt-10">
                            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                Or connect via
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://github.com/samiulalamsayed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-2xl border border-slate-700/50 bg-[#0A0D16] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-800/40"
                                >
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-300 group-hover:text-sky-300">
                                        <GithubIcon />
                                        GitHub
                                    </div>
                                    <ArrowUpRight size={16} className="text-slate-600 opacity-0 transition-all duration-300 group-hover:text-sky-400 group-hover:opacity-100" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/samiulalamsayed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-2xl border border-slate-700/50 bg-[#0A0D16] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-800/40"
                                >
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-300 group-hover:text-indigo-300">
                                        <LinkedinIcon />
                                        LinkedIn
                                    </div>
                                    <ArrowUpRight size={16} className="text-slate-600 opacity-0 transition-all duration-300 group-hover:text-indigo-400 group-hover:opacity-100" />
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}