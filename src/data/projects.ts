export type Project = {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    images: string[];
    technologies: string[];
    overview: string;
    features: string[];
    challenges: string[];
    futurePlans: string[];
    github: string;
    live: string;
};

export const projects: Project[] = [
    // ==========================================
    // 01. BAZAR DOR
    // ==========================================

    {
        id: "01",
        title: "Bazar Dor",
        subtitle: "Smart Market Exploration",
        category: "Web Application",

        description:
            "A market browsing platform designed to help users explore everyday products and their categories through a clean and user-friendly interface.",

        images: [
            "/images/projects/bazar-dor.png",
            // Add more images here
            // "/images/projects/bazar-dor-2.png",
            // "/images/projects/bazar-dor-3.png",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HeroUI",
            "MongoDB",
            "Mongoose",
            "Better Auth",
            "REST API",
        ],

        overview:
            "Bazar Dor is a web application focused on browsing everyday market products. It provides category-based navigation and product exploration through an API-driven interface.",

        features: [
            "Product browsing",
            "Category-based filtering",
            "Individual product details",
            "Responsive user interface",
            "User authentication",
            "Database integration",
        ],

        challenges: [
            "Integrating frontend components with backend APIs.",
            "Managing product data and category-based filtering.",
            "Implementing authentication using Better Auth and MongoDB.",
            "Handling data fetching and application states.",
        ],

        futurePlans: [
            "Improve product discovery and search functionality.",
            "Introduce advanced filtering options.",
            "Improve the overall user experience.",
            "Explore additional features for market price tracking.",
        ],

        github: "https://github.com/samiulalamsayed/bazar-dor",
        live: "https://bazar-dor-qip8.vercel.app/",
    },

    // ==========================================
    // 02. FITLOG
    // ==========================================

    {
        id: "02",
        title: "FitLog",
        subtitle: "Fitness & Workout Management",
        category: "Web Application",

        description:
            "A fitness application that helps users explore workouts, manage workout plans, and organize their fitness activities.",

        images: [
            "/images/projects/fitlog.png",
            // Add more images here
            // "/images/projects/fitlog-2.png",
            // "/images/projects/fitlog-3.png",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React",
            "REST API",
        ],

        overview:
            "FitLog is a fitness-focused web application built around workout discovery and workout plan management. It provides an organized way to explore exercises and manage personal workout plans.",

        features: [
            "Workout library",
            "Workout details",
            "Workout plan management",
            "Plan persistence",
            "Responsive design",
        ],

        challenges: [
            "Integrating external APIs to retrieve workout data.",
            "Managing workout plans using React Context.",
            "Implementing localStorage persistence.",
            "Handling loading states and API errors.",
            "Managing application state and user interactions.",
        ],

        futurePlans: [
            "Introduce user authentication and personal accounts.",
            "Add workout progress tracking.",
            "Improve workout filtering and search.",
            "Introduce personalized fitness recommendations.",
        ],

        github: "https://github.com/samiulalamsayed/Fit-log",
        live: "https://fit-log-amber-delta.vercel.app/",
    },

    // ==========================================
    // 03. DEV STACK
    // ==========================================

    {
        id: "03",
        title: "Dev Stack",
        subtitle: "Interactive Development Stack Builder",
        category: "Web Application",

        description:
            "An interactive platform that helps developers explore different technologies, compare their options, and build a development stack that fits their project needs.",

        images: [
            "/images/projects/dev-stack.png",
            "/images/projects/dev-stack-2.png",

            // Add more images here
            // "/images/projects/dev-stack-3.png",
            // "/images/projects/dev-stack-4.png",
        ],

        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
        ],

        overview:
            "Dev Stack is an interactive Development Stack Builder designed to help developers explore frontend, backend, database, and tooling technologies. Users can select technologies from different categories, compare their options, and put together their ideal development stack.",

        features: [
            "Explore different technologies",
            "Technology categories",
            "Technology comparison",
            "Interactive stack selection",
            "Build a personalized tech stack",
            "Responsive user interface",
        ],

        challenges: [
            "Organizing technologies into meaningful categories.",
            "Implementing interactive technology selection.",
            "Managing selected technologies dynamically.",
            "Designing a user-friendly technology exploration interface.",
        ],

        futurePlans: [
            "Add more technologies and categories.",
            "Introduce advanced technology comparisons.",
            "Allow users to save and share custom stacks.",
            "Add personalized stack recommendations.",
        ],

        github: "https://github.com/samiulalamsayed/dev-stack",
        live: "https://devstack-2026-app.netlify.app/",
    },
];