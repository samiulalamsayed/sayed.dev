"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Layers3 } from "lucide-react";
import { motion } from "motion/react";

import { projects, type Project } from "@/data/projects";
import ProjectModal from "../ui/ProjectModal";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Open Project Modal
    const openProject = (project: Project) => {
        setSelectedProject(project);
    };

    // Close Project Modal
    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <section
            id="projects"
            className="relative isolate overflow-hidden bg-[#05070E] px-6 py-20 md:px-12 lg:px-20 lg:py-32"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-40 top-10 z-0 h-[400px] w-[400px] rounded-full bg-violet-900/10 blur-[150px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[500px] w-[500px] rounded-full bg-sky-900/10 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-14 lg:mb-20">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-indigo-400">
                        Selected Works
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="h-[2px] w-12 rounded-full bg-sky-500/50" />
                        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                            My{" "}
                            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                    </div>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:leading-8">
                        A collection of things I've built while learning,
                        experimenting, and turning ideas into reality.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
                    {projects.map((project) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
                        >
                            {/* Project Card Image - object-contain দেওয়া হয়েছে যাতে ছবি না কাটে */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D16]">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* ডার্ক গ্রেডিয়েন্ট কিছুটা কমানো হয়েছে যাতে ব্লিংক না করে */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-transparent to-transparent opacity-80" />

                                <span className="absolute left-5 top-5 rounded-full border border-slate-600/50 bg-black/40 px-4 py-1.5 text-[11px] font-medium tracking-wide text-slate-200 backdrop-blur-md">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Information */}
                            <div className="relative p-6 sm:p-8">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-indigo-400">
                                            PROJECT {project.id}
                                        </p>
                                        <h3 className="text-2xl font-bold text-slate-100 sm:text-3xl">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-sm font-medium text-slate-400">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    {/* Action Icon - cursor-pointer দেওয়া হয়েছে */}
                                    <button
                                        onClick={() => openProject(project)}
                                        aria-label={`View details of ${project.title}`}
                                        className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-800/50 text-slate-400 transition-all duration-300 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 group-hover:text-indigo-400"
                                    >
                                        <ArrowUpRight size={22} strokeWidth={1.5} />
                                    </button>
                                </div>

                                <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-slate-400 sm:text-base sm:leading-7">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-lg border border-slate-700/50 bg-[#06070B] px-3.5 py-2 text-[11px] font-medium text-slate-300 transition-colors hover:border-sky-500/40 hover:text-sky-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="flex items-center justify-center rounded-lg border border-slate-700/50 bg-[#06070B] px-3.5 py-2 text-[11px] font-medium text-slate-400">
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Details Button - cursor-pointer দেওয়া হয়েছে */}
                                <button
                                    onClick={() => openProject(project)}
                                    className="group/btn cursor-pointer inline-flex items-center gap-2 text-sm font-bold tracking-wide text-indigo-400 transition-colors hover:text-indigo-300"
                                >
                                    View Full Case Study
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                    />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Project Count */}
                <div className="mt-16 flex items-center justify-center gap-3 text-sm font-medium text-slate-400 lg:justify-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50">
                        <Layers3 size={18} className="text-indigo-400" />
                    </div>
                    <span>Currently showcasing {projects.length} curated projects.</span>
                </div>
            </div>

            {/* Project Details Modal */}
            <ProjectModal project={selectedProject} onClose={closeProject} />
        </section>
    );
};

export default Projects;