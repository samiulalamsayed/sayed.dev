"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#05070E] border-t border-slate-800/60 px-6 py-8 md:py-10">

            {/* Subtle Gradient Line at the top for premium look */}
            <div className="absolute left-1/2 top-0 h-[1px] w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">

                {/* Logo (Matched with Navbar design) */}
                <a
                    href="#home"
                    className="group text-xl font-extrabold tracking-tight text-slate-100 transition-colors hover:text-white"
                >
                    Sayed
                    <span className="text-indigo-500 transition-colors group-hover:text-sky-400">
                        .
                    </span>
                </a>

                {/* Copyright Text */}
                <p className="text-center text-sm font-medium text-slate-500">
                    © 2026 Samiul Alam Sayed. All rights reserved.
                </p>

                {/* Back to Top Button */}
                <a
                    href="#home"
                    aria-label="Back to top"
                    className="group flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-5 py-2.5 text-sm font-medium text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                    Back to top
                    <ArrowUp
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-indigo-400"
                    />
                </a>

            </div>
        </footer>
    );
}