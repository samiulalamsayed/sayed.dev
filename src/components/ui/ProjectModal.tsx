"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
    X,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import type { Project } from "@/data/projects";

type Props = {
    project: Project | null;
    onClose: () => void;
};

// GitHub Icon
function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 1.94 3.12 1.94.3-.47.58-.9.7-1.1-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.44 3.05-1.14 3.05-1.14.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.12 5.52.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
    );
}

export default function ProjectModal({ project, onClose }: Props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Ensure portal only renders on the client side
    useEffect(() => {
        setMounted(true);
    }, []);

    // Reset image when project changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    // Lock body scroll and handle Escape key
    useEffect(() => {
        if (!project) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    // Auto slide
    useEffect(() => {
        if (!project || project.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [project]);

    const prevImage = () => {
        if (!project) return;
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const nextImage = () => {
        if (!project) return;
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence>
            {project && (
                <motion.div
                    // Portal এর কারণে এটি এখন ন্যাভবার টপকে একদম ওপরে থাকবে
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#05070E]/85 p-4 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-title"
                        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700/50 bg-[#0A0D16] p-6 shadow-2xl md:p-10"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            aria-label="Close project details"
                            className="absolute right-4 top-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-700/50 bg-[#06070B] text-slate-400 transition-colors hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-400 sm:right-6 sm:top-6"
                        >
                            <X size={20} />
                        </button>

                        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                            {/* Left Side: Images & Links (Sticky on Desktop) */}
                            <div className="lg:col-span-7">
                                <div className="sticky top-0 pt-2 lg:pt-0">
                                    {/* Image Slider - object-contain করা হয়েছে */}
                                    <div className="group relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-700/30 bg-black/40">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                className="absolute inset-0 flex items-center justify-center"
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <Image
                                                    src={project.images[currentImageIndex]}
                                                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                                    className="object-contain" 
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Navigation Arrows */}
                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2.5 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-indigo-600 group-hover:opacity-100"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2.5 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-indigo-600 group-hover:opacity-100"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* Image Indicators */}
                                    {project.images.length > 1 && (
                                        <div className="mb-10 flex items-center justify-center gap-2.5">
                                            {project.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                                                        currentImageIndex === index
                                                            ? "w-8 bg-indigo-500"
                                                            : "w-2 bg-slate-700 hover:bg-slate-500"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Action Links */}
                                    <div className="flex flex-wrap gap-4">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/25 sm:flex-none"
                                            >
                                                Live Project
                                                <ExternalLink size={18} />
                                            </a>
                                        )}

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-slate-700/80 bg-slate-800/50 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white sm:flex-none"
                                            >
                                                Source Code
                                                <GithubIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Details & Information */}
                            <div className="lg:col-span-5">
                                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                                    {project.category}
                                </p>
                                <h2 id="project-title" className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
                                    {project.title}
                                </h2>
                                <p className="mb-8 text-sm font-medium text-slate-400 sm:text-base">
                                    {project.subtitle}
                                </p>

                                <div className="space-y-10">
                                    {/* Overview */}
                                    <div>
                                        <h3 className="mb-3 text-lg font-bold text-slate-200">Overview</h3>
                                        <p className="text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
                                            {project.overview}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="mb-4 text-lg font-bold text-slate-200">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2.5">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-lg border border-slate-700/50 bg-[#06070B] px-3.5 py-2 text-xs font-medium text-slate-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h3 className="mb-4 text-lg font-bold text-slate-200">Key Features</h3>
                                        <ul className="space-y-3">
                                            {project.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Challenges */}
                                    {project.challenges && project.challenges.length > 0 && (
                                        <div>
                                            <h3 className="mb-4 text-lg font-bold text-slate-200">Challenges & Solutions</h3>
                                            <ul className="space-y-3">
                                                {project.challenges.map((challenge) => (
                                                    <li key={challenge} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                                                        {challenge}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Future Plans */}
                                    {project.futurePlans && project.futurePlans.length > 0 && (
                                        <div>
                                            <h3 className="mb-4 text-lg font-bold text-slate-200">Future Plans</h3>
                                            <ul className="space-y-3">
                                                {project.futurePlans.map((plan) => (
                                                    <li key={plan} className="flex items-start gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                                                        {plan}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    // Render directly into the body document to override ANY layout stacking context
    return createPortal(modalContent, document.body);
}