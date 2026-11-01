"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Download,
    Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import NeuralNetworkBackground from "../3d/NeuralNetworkBackground";

const words = [
    "Solutions",
    "Systems",
    "Ideas",
    "Experiences",
    "Products",
    "Possibilities",
];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter Effect
    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && displayText === currentWord) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText((prev) =>
                        isDeleting
                            ? prev.slice(0, -1)
                            : currentWord.slice(0, prev.length + 1)
                    );
                },
                isDeleting ? 45 : 95
            );
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, wordIndex]);

    return (
        <section
            id="home"
            className="
            relative isolate min-h-screen
            overflow-hidden
            bg-[#05070E] text-white
        "
        >
            {/* 1. AMBIENT BACKGROUND GLOW */}

            <div
                className="
                    pointer-events-none absolute
                    -left-32 -top-32 z-[1]
                    h-[420px] w-[420px]
                    rounded-full bg-indigo-600/10
                    blur-[140px]
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    bottom-10 right-[6%] z-[1]
                    h-[480px] w-[480px]
                    rounded-full
                    bg-gradient-to-tr
                    from-violet-600/20
                    via-indigo-500/15
                    to-sky-400/10
                    blur-[130px]
                "
            />

            {/* 2. NETWORK BACKGROUND */}

            <div
                className="
                    pointer-events-none
                    absolute inset-0 z-[2]
                "
            >
                <NeuralNetworkBackground />
            </div>

            {/* 3. PORTRAIT */}

            <div
                className="
                    hidden lg:block
                    pointer-events-none relative z-[1]
                    mx-auto mt-8
                    h-[42vh] min-h-[280px]
                    w-full max-w-[480px]

                    sm:h-[50vh]

                    lg:absolute lg:bottom-0 lg:right-0
                    lg:mt-0 lg:h-[88vh]
                    lg:w-[48vw] lg:max-w-[760px]
                "
            >
                <Image
                    src="/images/hero-profile.png"
                    alt="Portrait"
                    fill
                    priority
                    unoptimized
                    sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 65vw,
                        48vw
                    "
                    className="
                        object-contain
                        object-bottom
                        lg:object-right-bottom
                        drop-shadow-[0_0_45px_rgba(79,70,229,0.18)]
                    "
                />
            </div>

            {/* 4. BOTTOM VIGNETTE */}

            <div
                className="
                    pointer-events-none absolute
                    inset-x-0 bottom-0 z-[3]
                    h-24
                    bg-gradient-to-t
                    from-[#05070E]
                    via-[#05070E]/50
                    to-transparent
                "
            />

            {/* 5. HERO CONTENT */}

            <div
                className="
                    relative z-10
                    mx-auto flex
                    min-h-[55vh] w-full max-w-7xl
                    items-center justify-center
                    px-6 pt-24

                    sm:px-10

                    lg:min-h-screen
                    lg:justify-start
                    lg:px-12 lg:pt-16
                "
            >
                <div
                    className="
                        w-full max-w-xl
                        text-center
                        lg:text-left
                    "
                >
                    {/* Eyebrow */}

                    <div
                        className="
                            mb-6 sm:mb-7 inline-flex
                            items-center gap-1.5 sm:gap-2.5
                            rounded-full
                            border border-indigo-400/25
                            bg-indigo-950/30
                            px-3 py-1 sm:px-4 sm:py-1.5
                            backdrop-blur-md
                        "
                    >
                        <Sparkles
                            size={13}
                            className="text-sky-400 h-3 w-3 sm:h-[13px] sm:w-[13px]"
                        />

                        <p
                            className="
                                text-[7.5px] sm:text-[10px]
                                font-semibold
                                tracking-[0.12em] sm:tracking-[0.16em]
                                text-indigo-200/90
                            "
                        >
                            DEVELOPER · EDTECH ENTREPRENEUR · PROBLEM SOLVER
                        </p>
                    </div>

                    {/* Heading */}

                    <h1
                        className="
                            text-5xl font-extrabold
                            leading-[1.05] tracking-tight
                            text-white
                            sm:text-6xl
                            md:text-7xl
                            xl:text-[5.25rem]
                        "
                    >
                        Connecting
                        <br />

                        <span
                            className="
                                bg-gradient-to-r
                                from-sky-400
                                via-indigo-400
                                to-violet-400
                                bg-clip-text
                                text-transparent
                            "
                        >
                            the Dots.
                        </span>
                    </h1>

                    {/* Typewriter */}

                    <div
                        className="
                            mt-6 flex flex-wrap
                            items-center justify-center
                            gap-2.5 text-xl
                            font-semibold text-slate-100
                            sm:text-2xl
                            lg:justify-start
                        "
                    >
                        <span className="text-slate-300">
                            Build
                        </span>

                        <span
                            className="
                                min-w-[150px]
                                text-left
                                bg-gradient-to-r
                                from-sky-400
                                via-indigo-400
                                to-violet-400
                                bg-clip-text
                                font-bold text-transparent
                            "
                        >
                            {displayText}

                            <span
                                className="
                                    ml-1 inline-block
                                    h-6 w-[2px]
                                    animate-pulse
                                    bg-sky-400
                                    align-middle
                                "
                            />
                        </span>
                    </div>

                    {/* Description - মোবাইলের জন্য max-w-[260px] দেওয়া হয়েছে যাতে হেডিংয়ের সমান থাকে */}

                    <p
                        className="
                            mx-auto mt-4 sm:mt-5
                            max-w-[260px] sm:max-w-md
                            text-xs sm:text-sm leading-relaxed sm:leading-7
                            text-slate-400
                            lg:mx-0
                        "
                    >
                        Great ideas rarely exist in isolation;
                        they emerge where different perspectives,
                        disciplines, and systems meet.
                    </p>

                    {/* Buttons - মোবাইলের জন্য প্যাডিং এবং গ্যাপ কমানো হয়েছে */}

                    <div
                        className="
                            mt-8 sm:mt-9 flex flex-wrap
                            items-center justify-center
                            gap-3 sm:gap-4
                            lg:justify-start
                        "
                    >
                        <Link
                            href="#projects"
                            className="
                                group inline-flex
                                items-center gap-2 sm:gap-3
                                rounded-xl
                                bg-gradient-to-r
                                from-indigo-600
                                via-violet-600
                                to-indigo-600
                                bg-[length:200%_auto]
                                px-5 py-3 sm:px-7 sm:py-3.5
                                text-xs sm:text-sm font-semibold
                                text-white
                                shadow-[0_0_25px_rgba(99,102,241,0.35)]
                                ring-1 ring-white/15
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:bg-right
                                hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]
                            "
                        >
                            Explore My Work

                            <ArrowRight
                                size={18}
                                className="
                                    h-4 w-4 sm:h-[18px] sm:w-[18px]
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="
                                inline-flex items-center
                                gap-2 sm:gap-2.5 rounded-xl
                                border border-slate-700/80
                                bg-slate-900/60
                                px-5 py-3 sm:px-7 sm:py-3.5
                                text-xs sm:text-sm font-semibold
                                text-slate-200
                                backdrop-blur-md
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:border-indigo-400/60
                                hover:bg-slate-800/70
                                hover:text-white
                            "
                        >
                            <Download
                                size={17}
                                className="h-4 w-4 sm:h-[17px] sm:w-[17px] text-indigo-400"
                            />

                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}