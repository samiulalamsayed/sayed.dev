"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll detection for dynamic styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 z-[9000] w-full transition-all duration-300 ${
                scrolled
                    ? "border-b border-slate-700/50 bg-[#05070E]/80 py-3 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "border-transparent bg-transparent py-5"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
                
                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="group relative z-50 text-xl font-extrabold tracking-tight text-white transition-colors hover:text-indigo-100"
                >
                    Sayed
                    <span className="text-indigo-500 transition-colors group-hover:text-sky-400">
                        .dev
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="group relative text-sm font-semibold tracking-wide text-slate-300 transition-colors hover:text-white"
                            >
                                {link.name}
                                {/* Hover Animated Line */}
                                <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2.5 text-sm font-bold text-indigo-300 transition-all hover:border-indigo-500/60 hover:bg-indigo-500/20 hover:text-white"
                    >
                        Let's Talk
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-[#06070B] text-slate-300 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Navigation Menu (Animated Full Screen) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-0 top-full h-screen border-t border-slate-700/50 bg-[#05070E]/95 px-6 pt-8 pb-32 backdrop-blur-3xl md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl font-bold tracking-wide text-slate-200 transition-colors hover:text-indigo-400"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 pt-8 border-t border-slate-800"
                            >
                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                                    Say Hello
                                </p>
                                <a
                                    href="mailto:mdsasayed06@gmail.com"
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-indigo-400 underline decoration-indigo-500/30 underline-offset-4 transition-colors hover:text-indigo-300"
                                >
                                    mdsasayed06@gmail.com
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}