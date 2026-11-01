"use client";

import {
    Code2,
    Server,
    Database,
    Workflow,
    Wrench,
    ArrowUpRight,
} from "lucide-react";

const skillCategories = [
    {
        number: "01",
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces.",
        icon: Code2,
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
        ],
    },
    {
        number: "02",
        title: "Backend Development",
        description: "Developing server-side applications and APIs.",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST API"],
    },
    {
        number: "03",
        title: "Database & Authentication",
        description: "Managing data and implementing authentication systems.",
        icon: Database,
        skills: ["MongoDB", "Mongoose", "Better Auth"],
    },
    {
        number: "04",
        title: "AI & Workflow Automation",
        description: "Connecting tools, APIs, and AI-powered workflows.",
        icon: Workflow,
        skills: [
            "n8n",
            "Workflow Automation",
            "AI Integration",
            "API Integration",
        ],
    },
    {
        number: "05",
        title: "Tools & Development",
        description: "Tools and environments I use in my development workflow.",
        icon: Wrench,
        skills: ["Git", "GitHub", "VS Code", "Vite", "npm"],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative isolate overflow-hidden bg-[#05070E] px-6 py-20 md:px-12 lg:px-20 lg:py-32"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute right-0 top-40 z-0 h-[300px] w-[300px] rounded-full bg-sky-900/10 blur-[130px]" />
            <div className="pointer-events-none absolute -left-20 bottom-10 z-0 h-[400px] w-[400px] rounded-full bg-indigo-900/10 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                
                {/* Section Heading (Matched with About section) */}
                <div className="mb-14 lg:mb-20">
                    <div className="flex items-center gap-4">
                        <span className="h-[2px] w-12 rounded-full bg-indigo-500/50" />
                        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                            My{" "}
                            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                                Skills
                            </span>
                        </h2>
                    </div>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:leading-8">
                        Technologies and tools I use to build digital products,
                        solve problems, and turn ideas into reality.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {skillCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <div
                                key={category.number}
                                className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-800/50 hover:shadow-[0_10px_40px_-15px_rgba(99,102,241,0.2)]"
                            >
                                {/* Card Header */}
                                <div className="mb-8 flex items-start justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
                                        <Icon size={26} strokeWidth={1.7} />
                                    </div>
                                    <span className="text-sm font-bold tracking-widest text-slate-600 transition-colors duration-300 group-hover:text-indigo-500/50">
                                        {category.number}
                                    </span>
                                </div>

                                {/* Category Info */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-100">
                                        {category.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-slate-700/50 bg-[#06070B] px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-sky-500/40 hover:text-sky-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Decoration Gradient Line */}
                                <div className="absolute bottom-0 left-8 right-8 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <div className="mt-16 flex items-center gap-3 text-sm font-medium text-slate-400">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/50">
                        <ArrowUpRight size={16} className="text-indigo-400" />
                    </div>
                    <p>Always learning, experimenting, and building something new.</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;