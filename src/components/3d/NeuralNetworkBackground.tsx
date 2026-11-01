"use client";

import { useEffect, useRef } from "react";
import {
    Brain,
    BookOpen,
    Landmark,
    ChartNoAxesCombined,
    BriefcaseBusiness,
    FlaskConical,
    Cpu,
    Megaphone,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    knowledgeIndex: number | null;
    anchorX: number;
    anchorY: number;
    phase: number;
};

type Signal = {
    x: number;
    y: number;
    vx: number;
    vy: number;
};

// সিলভার ও ইন্ডিগো থিমের ৮টি নলেজ ডোমেইন পজিশন (ডেক্সটপের জন্য অরিজিনাল)
const knowledgeDomains: {
    name: string;
    Icon: LucideIcon;
    rx: number;
    ry: number;
}[] = [
    { name: "Philosophy", Icon: BookOpen, rx: 0.45, ry: 0.16 },
    { name: "History", Icon: Landmark, rx: 0.62, ry: 0.18 },
    { name: "Psychology", Icon: Brain, rx: 0.53, ry: 0.32 },
    { name: "Science", Icon: FlaskConical, rx: 0.65, ry: 0.38 },
    { name: "Economics", Icon: ChartNoAxesCombined, rx: 0.46, ry: 0.50 },
    { name: "Technology", Icon: Cpu, rx: 0.58, ry: 0.58 },
    { name: "Business", Icon: BriefcaseBusiness, rx: 0.45, ry: 0.74 },
    { name: "Marketing", Icon: Megaphone, rx: 0.60, ry: 0.80 },
];

export default function NeuralNetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const knowledgeRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d", { alpha: true });

        if (!canvas || !ctx) return;

        let width = 0;
        let height = 0;
        let animationId = 0;
        let isRunning = false;
        let time = 0;

        const CONFIG = {
            desktopNodes: 135,
            mobileNodes: 70,
            maxDistance: 150,
            dotSpeed: 0.4,
            floatRadius: 10,
            floatSpeed: 0.01,
            nodeColor: "160, 170, 195",
            signalColor: "255, 255, 255",
            lineOpacity: 0.15,
            signalCount: 7,
            dpr: Math.min(window.devicePixelRatio || 1, 1.5),
        };

        let particles: Particle[] = [];
        let signals: Signal[] = [];

        // ৩টি স্তরে নোডগুলোর পজিশন নিয়ন্ত্রণ (Mobile, Tablet, Desktop)
        const getDomainAnchor = (index: number, w: number, h: number) => {
            if (w < 640) {
                // ১. মোবাইল ভিউ: নোডগুলো একদম স্ক্রিনের দুই প্রান্তে (extreme edges) থাকবে
                const mobilePos = [
                    { rx: 0.10, ry: 0.28 }, // Left 1
                    { rx: 0.90, ry: 0.32 }, // Right 1
                    { rx: 0.08, ry: 0.46 }, // Left 2
                    { rx: 0.92, ry: 0.48 }, // Right 2
                    { rx: 0.10, ry: 0.64 }, // Left 3
                    { rx: 0.90, ry: 0.68 }, // Right 3
                    { rx: 0.12, ry: 0.82 }, // Left 4
                    { rx: 0.88, ry: 0.84 }, // Right 4
                ];
                return { x: w * mobilePos[index].rx, y: h * mobilePos[index].ry };
            } else if (w < 1024) {
                // ২. ট্যাবলেট ভিউ: ওপরের নোডগুলোকে নিচে নামিয়ে আনা হয়েছে
                const tabletPos = [
                    { rx: 0.12, ry: 0.28 }, // Left 1 
                    { rx: 0.88, ry: 0.30 }, // Right 1
                    { rx: 0.10, ry: 0.46 }, // Left 2
                    { rx: 0.90, ry: 0.48 }, // Right 2
                    { rx: 0.12, ry: 0.64 }, // Left 3
                    { rx: 0.88, ry: 0.66 }, // Right 3
                    { rx: 0.15, ry: 0.82 }, // Left 4
                    { rx: 0.85, ry: 0.84 }, // Right 4
                ];
                return { x: w * tabletPos[index].rx, y: h * tabletPos[index].ry };
            } else {
                // ৩. ডেক্সটপ ভিউ: আপনার দেওয়া অরিজিনাল পজিশন
                return { x: w * knowledgeDomains[index].rx, y: h * knowledgeDomains[index].ry };
            }
        };

        const assignKnowledgeParticles = () => {
            if (particles.length < knowledgeDomains.length) return;

            knowledgeDomains.forEach((_, index) => {
                const p = particles[index];
                const anchor = getDomainAnchor(index, width, height);

                p.knowledgeIndex = index;
                p.anchorX = anchor.x;
                p.anchorY = anchor.y;
                p.phase = index * 0.9;
                
                // শুধুমাত্র প্রথমবার সেট করার জন্য
                if (p.x === 0 && p.y === 0) {
                    p.x = anchor.x;
                    p.y = anchor.y;
                }
            });
        };

        const createParticles = () => {
            const isMobile = width < 768;
            const count = isMobile ? CONFIG.mobileNodes : CONFIG.desktopNodes;

            // এখানে রেন্ডম x, y দিয়ে ডট তৈরি করা হচ্ছে
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * CONFIG.dotSpeed,
                vy: (Math.random() - 0.5) * CONFIG.dotSpeed,
                radius: Math.random() * 1.1 + 1.2,
                knowledgeIndex: null,
                anchorX: 0,
                anchorY: 0,
                phase: 0,
            }));

            // ভুল লাইনটি (p.x = 0; p.y = 0;) চিরতরে মুছে দেওয়া হয়েছে!
            assignKnowledgeParticles();
        };

        const createSignals = () => {
            signals = Array.from({ length: CONFIG.signalCount }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.7,
                vy: (Math.random() - 0.5) * 0.7,
            }));
        };

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            canvas.width = Math.round(width * CONFIG.dpr);
            canvas.height = Math.round(height * CONFIG.dpr);

            ctx.setTransform(CONFIG.dpr, 0, 0, CONFIG.dpr, 0, 0);

            createParticles();
            createSignals();
            updateParticles();
            draw();
            updateKnowledgePositions();
        };

        const drawConnections = () => {
            ctx.lineWidth = 0.8;
            const maxDistanceSquared = CONFIG.maxDistance * CONFIG.maxDistance;

            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];

                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distanceSquared = dx * dx + dy * dy;

                    if (distanceSquared < maxDistanceSquared) {
                        const distance = Math.sqrt(distanceSquared);
                        const isConnectedToKnowledge =
                            a.knowledgeIndex !== null ||
                            b.knowledgeIndex !== null;

                        const baseOpacity = isConnectedToKnowledge
                            ? CONFIG.lineOpacity * 1.3
                            : CONFIG.lineOpacity;

                        const opacity =
                            (1 - distance / CONFIG.maxDistance) * baseOpacity;

                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = isConnectedToKnowledge
                            ? `rgba(180, 195, 235, ${opacity})`
                            : `rgba(${CONFIG.nodeColor}, ${opacity})`;
                        ctx.stroke();
                    }
                }
            }
        };

        const drawParticles = () => {
            particles.forEach((particle) => {
                if (particle.knowledgeIndex !== null) return;

                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = `rgba(${CONFIG.nodeColor}, 0.85)`;
                ctx.fill();
            });
        };

        const drawSignals = () => {
            signals.forEach((signal) => {
                ctx.beginPath();
                ctx.arc(signal.x, signal.y, 1.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${CONFIG.signalColor}, 0.9)`;
                ctx.fill();
            });
        };

        const updateParticles = () => {
            time += CONFIG.floatSpeed;

            if (particles.length > 0 && particles[0].knowledgeIndex !== null) {
                assignKnowledgeParticles();
            }

            particles.forEach((particle) => {
                if (particle.knowledgeIndex !== null) {
                    particle.x =
                        particle.anchorX +
                        Math.cos(time + particle.phase) * CONFIG.floatRadius;
                    particle.y =
                        particle.anchorY +
                        Math.sin(time * 0.8 + particle.phase) *
                            CONFIG.floatRadius;
                } else {
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
                    if (particle.y < 0 || particle.y > height) particle.vy *= -1;
                }
            });
        };

        const updateSignals = () => {
            signals.forEach((signal) => {
                signal.x += signal.vx;
                signal.y += signal.vy;

                if (signal.x < 0 || signal.x > width) signal.vx *= -1;
                if (signal.y < 0 || signal.y > height) signal.vy *= -1;
            });
        };

        const updateKnowledgePositions = () => {
            particles.forEach((particle) => {
                if (particle.knowledgeIndex === null) return;

                const element = knowledgeRefs.current[particle.knowledgeIndex];
                if (!element) return;

                element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) rotate(0.01deg)`;
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            drawConnections();
            drawParticles();
            drawSignals();
        };

        const animate = () => {
            if (!isRunning) return;

            updateParticles();
            updateSignals();
            draw();
            updateKnowledgePositions();

            animationId = requestAnimationFrame(animate);
        };

        const startAnimation = () => {
            if (isRunning) return;
            isRunning = true;
            animationId = requestAnimationFrame(animate);
        };

        const stopAnimation = () => {
            isRunning = false;
            cancelAnimationFrame(animationId);
        };

        const motionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const handleMotionChange = () => {
            stopAnimation();
            if (!motionQuery.matches && !document.hidden) {
                startAnimation();
            } else {
                draw();
                updateKnowledgePositions();
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAnimation();
            } else if (!motionQuery.matches) {
                startAnimation();
            }
        };

        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);

        motionQuery.addEventListener("change", handleMotionChange);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        resizeCanvas();

        if (!motionQuery.matches) {
            startAnimation();
        }

        return () => {
            stopAnimation();
            resizeObserver.disconnect();
            motionQuery.removeEventListener("change", handleMotionChange);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 h-full w-full"
                aria-hidden="true"
            />

            <div className="pointer-events-none absolute inset-0 z-10">
                {knowledgeDomains.map(({ name, Icon }, index) => (
                    <div
                        key={name}
                        ref={(element) => {
                            knowledgeRefs.current[index] = element;
                        }}
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0,
                            backfaceVisibility: "hidden",
                            transformStyle: "preserve-3d",
                        }}
                        className="will-change-transform"
                    >
                        <div
                            className="
                                -translate-x-1/2 -translate-y-1/2
                                flex h-8 w-8 sm:h-10 sm:w-10
                                items-center justify-center
                                rounded-full
                                border border-slate-700/60
                                bg-[#06070B]
                                text-slate-200
                                shadow-[0_0_15px_rgba(120,130,160,0.15)]
                            "
                        >
                            <Icon size={18} className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.7} />
                        </div>

                        <span
                            className="
                                absolute left-0 top-5 sm:top-6
                                -translate-x-1/2
                                whitespace-nowrap
                                rounded-full
                                border border-slate-700/50
                                bg-[#06070B]
                                px-2 py-0.5 sm:px-2.5
                                text-[9px] sm:text-[10px]
                                font-medium
                                tracking-wide
                                text-slate-300
                                shadow-md
                            "
                        >
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}