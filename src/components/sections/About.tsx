"use client";

import Image from "next/image";
import { Compass, Lightbulb } from "lucide-react";

const About = () => {
    return (
        <section
            id="about"
            className="relative isolate overflow-hidden bg-[#05070E] px-6 py-20 md:px-12 lg:px-20 lg:py-32"
        >
            {/* Ambient Background Elements for Seamless Transition */}
            <div className="pointer-events-none absolute -left-20 top-20 z-0 h-[300px] w-[300px] rounded-full bg-indigo-900/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-10 right-10 z-0 h-[400px] w-[400px] rounded-full bg-violet-900/10 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section Heading (সবার ওপরে থাকবে) */}
                <div className="mb-10 flex items-center gap-4 lg:mb-20">
                    <span className="h-[2px] w-12 rounded-full bg-indigo-500/50" />
                    <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        About{" "}
                        <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                </div>

                {/* Grid Layout - মোবাইলে গ্যাপ একটু কমানো হয়েছে (gap-12) */}
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
                    
                    {/* Left Content (Text & Cards) 
                        - order-2: মোবাইলে এটি ছবির নিচে (২য় স্থানে) চলে যাবে
                        - lg:order-1: ডেক্সটপে এটি বামে (১ম স্থানে) থাকবে
                    */}
                    <div className="order-2 space-y-8 lg:order-1 lg:col-span-7">
                        {/* Intro */}
                        <div>
                            <h3 className="text-3xl font-bold text-slate-100 md:text-4xl">
                                Hi, I'm Sayed.
                            </h3>
                            <p className="mt-3 text-lg font-semibold text-indigo-300 md:text-xl">
                                I'm a Full-Stack Developer & Problem Solver.
                            </p>
                        </div>

                        {/* Description */}
                        <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:leading-8">
                            <p>
                                I'm passionate about technology, building
                                digital experiences, and turning ideas into
                                practical solutions.
                            </p>
                            <p>
                                My interests extend beyond code into history,
                                philosophy, psychology, economics, and business.
                                I enjoy connecting ideas across these
                                disciplines and understanding how different
                                perspectives shape the way we think, create, and
                                solve problems.
                            </p>
                            <p>
                                Currently, I'm focused on building real-world
                                projects, expanding my technical knowledge, and
                                exploring new possibilities through technology.
                            </p>
                        </div>

                        {/* Info Cards Grid */}
                        <div className="grid gap-5 pt-4 sm:grid-cols-2">
                            {/* Beyond Code Card */}
                            <div className="group rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 transition-colors hover:border-indigo-500/30 hover:bg-slate-800/50">
                                <div className="mb-4 inline-flex rounded-lg bg-indigo-500/10 p-3 text-indigo-400 transition-colors group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
                                    <Compass size={24} />
                                </div>
                                <h4 className="mb-2 text-lg font-semibold text-slate-200">
                                    Beyond Code
                                </h4>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    I enjoy understanding human behavior and
                                    finding connections between seemingly
                                    unrelated ideas.
                                </p>
                            </div>

                            {/* My Vision Card */}
                            <div className="group rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 transition-colors hover:border-sky-500/30 hover:bg-slate-800/50">
                                <div className="mb-4 inline-flex rounded-lg bg-sky-500/10 p-3 text-sky-400 transition-colors group-hover:bg-sky-500/20 group-hover:text-sky-300">
                                    <Lightbulb size={24} />
                                </div>
                                <h4 className="mb-2 text-lg font-semibold text-slate-200">
                                    My Vision
                                </h4>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    To build impactful digital products and
                                    technology-driven ventures that solve
                                    real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image 
                        - order-1: মোবাইলে এটি সবার ওপরে (১ম স্থানে) চলে যাবে
                        - lg:order-2: ডেক্সটপে এটি ডানে (২য় স্থানে) থাকবে
                    */}
                    <div className="order-1 relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none">
                        {/* Soft Backdrop Glow matching the image */}
                        <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/20 via-sky-400/10 to-transparent blur-2xl" />

                        <div className="group relative z-10 aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-700/50 bg-[#0A0D16] shadow-2xl">
                            <Image
                                src="/images/about-profile.png"
                                alt="Sayed - Full-Stack Developer"
                                fill
                                priority
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            
                            {/* Inner Shadow overlay to blend edges */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;