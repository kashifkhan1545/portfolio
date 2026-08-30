export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'mobile' | 'web' | 'ai';
  categoryBadge: string;
  tags: string[];
  liveUrl: string;
  buttonLabel: string;
  highlights: string[];
  gradient: string;
  iconName: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Kashif Shabeer",
  title: "Full-Stack Software Engineer",
  subtitle: "Web & Mobile Specialist | React Native | Flutter | Next.js | Vue.js | MEAN & MERN | Node.js | Python/FastAPI",
  email: "kashifkhan26262@gmail.com",
  phone: "+92 340 4931051",
  location: "Multan, Punjab, Pakistan",
  linkedin: "https://linkedin.com/in/muhammad-kashif-shabeer",
  github: "https://github.com",
  bio: "Full-Stack Software Engineer with 4+ years of experience designing, building, and shipping production web and mobile applications end-to-end — from React/Next.js and Vue.js web dashboards to MEAN/MERN architectures and cross-platform React Native and Flutter apps on iOS and Android, backed by Node.js, Express.js, and Python/FastAPI services.",
  education: {
    degree: "Bachelor of Science in Information Technology (BS IT)",
    institution: "Ghazi University, Dera Ghazi Khan",
    period: "September 2019 – September 2023"
  },
  stats: [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Production Apps Shipped", value: 10, suffix: "+" },
    { label: "App Store & Web Deployments", value: 100, suffix: "%" },
    { label: "Client & User Satisfaction", value: 99, suffix: "%" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web & Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Vue.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS", highlight: true },
      { name: "Redux / Pinia / Vuex" },
      { name: "React Query" },
      { name: "Electron (Desktop Apps)" },
      { name: "HTML5 / CSS3" }
    ]
  },
  {
    title: "Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "React Native", highlight: true },
      { name: "Flutter", highlight: true },
      { name: "iOS (Swift / Objective-C integration)" },
      { name: "Android (Java/Kotlin)" },
      { name: "Expo CLI & EAS Build", highlight: true },
      { name: "App Store & Google Play Publishing", highlight: true }
    ]
  },
  {
    title: "Backend & Full-Stack (MEAN / MERN)",
    icon: "Server",
    skills: [
      { name: "MEAN Stack (MongoDB, Express, Angular, Node)", highlight: true },
      { name: "MERN Stack (MongoDB, Express, React, Node)", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "REST APIs" },
      { name: "GraphQL (AWS AppSync)", highlight: true },
      { name: "WebSockets / Socket.io", highlight: true }
    ]
  },
  {
    title: "Databases & Vector DB",
    icon: "Database",
    skills: [
      { name: "MongoDB", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Supabase" },
      { name: "Firebase Firestore" },
      { name: "Pinecone (Vector DB)", highlight: true }
    ]
  },
  {
    title: "Real-Time, Payments & Cloud",
    icon: "Cloud",
    skills: [
      { name: "Agora SDK (Audio/Video/Live Streaming)", highlight: true },
      { name: "Stripe (Subscriptions & Checkout)", highlight: true },
      { name: "RevenueCat (IAP Entitlements)", highlight: true },
      { name: "AWS Amplify (Cognito, S3, AppSync)", highlight: true },
      { name: "Vercel Deployments" },
      { name: "Docker & CI/CD" }
    ]
  },
  {
    title: "AI / LLMs & AI-Assisted Dev",
    icon: "Sparkles",
    skills: [
      { name: "LangChain", highlight: true },
      { name: "Prompt Engineering" },
      { name: "Vector Search & Retrieval" },
      { name: "Cursor & Claude Code", highlight: true },
      { name: "GitHub Copilot & ChatGPT" }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  // Mobile Apps (App Store)
  {
    id: "nutriwork",
    title: "Nutriwork",
    subtitle: "AI Nutrition & Workout Suggestion App",
    description: "Built the mobile app end-to-end, delivering AI-driven nutrition tracking, intelligent meal recommendations, and personalized workout routines directly on iOS.",
    type: "mobile",
    categoryBadge: "App Store Live",
    tags: ["React Native", "AI Nutrition", "iOS App Store", "REST APIs", "RevenueCat"],
    liveUrl: "https://apps.apple.com/pk/app/nutriwork/id6738423604",
    buttonLabel: "View on App Store",
    highlights: [
      "AI-driven macro and micronutrient meal calculation",
      "Personalized daily workout scheduling and progress tracking",
      "Subscription and paywall flows managed via RevenueCat"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconName: "Apple"
  },
  {
    id: "lure",
    title: "Lure",
    subtitle: "AI Facial Analysis & Self-Improvement App",
    description: "Developed core app functionality integrating advanced AI facial analysis with personalized, task-based daily self-improvement and grooming plans.",
    type: "mobile",
    categoryBadge: "App Store Live",
    tags: ["React Native", "AI Computer Vision", "iOS", "In-App Purchases", "TypeScript"],
    liveUrl: "https://apps.apple.com/us/app/lure-get-hot-on-purpose/id6758293200",
    buttonLabel: "View on App Store",
    highlights: [
      "Real-time facial scanning and AI metric evaluation",
      "Personalized task regimens and progress streak tracking",
      "Highly interactive custom UI with seamless animations"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconName: "Sparkles"
  },
  {
    id: "anaesthesia-companion",
    title: "Anaesthesia Companion",
    subtitle: "Clinical Medical Educational Reference App",
    description: "Specialized educational reference mobile app for anaesthesia professionals, structuring complex clinical guidelines and dosages for fast, reliable point-of-care access.",
    type: "mobile",
    categoryBadge: "App Store Live",
    tags: ["React Native", "Healthcare / MedTech", "iOS App Store", "Offline Caching"],
    liveUrl: "https://apps.apple.com/us/app/anaesthesia-companion-app/id6761999497",
    buttonLabel: "View on App Store",
    highlights: [
      "Structured clinical drug calculators and quick reference cards",
      "Offline-first architecture for critical operating room scenarios",
      "Strict data integrity and swift search indexing"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconName: "Activity"
  },
  {
    id: "maxremind-charts",
    title: "MaxRemind Charts",
    subtitle: "Healthcare Charge Capture & Medical Billing",
    description: "Developed medical billing app streamlining charge capture, appointment charting, and billing workflows for healthcare providers and clinics.",
    type: "mobile",
    categoryBadge: "App Store Live",
    tags: ["React Native", "Medical Billing", "iOS / Android", "Agora SDK", "Stripe"],
    liveUrl: "https://apps.apple.com/pk/app/maxremind-charts/id6479510772",
    buttonLabel: "View on App Store",
    highlights: [
      "Real-time patient charge capture and ICD-10 code lookup",
      "Integrated audio/video telemedicine calling via Agora SDK",
      "HIPAA-compliant data handling with encrypted sync"
    ],
    gradient: "from-sky-500/20 to-indigo-500/20",
    iconName: "FileSpreadsheet"
  },
  {
    id: "scoolus",
    title: "Scoolus",
    subtitle: "Multilingual Gamified Vocabulary Learning",
    description: "Built a gamified vocabulary-learning app with interactive lessons, pronunciation feedback, and milestone progress tracking to help learners master multiple languages.",
    type: "mobile",
    categoryBadge: "App Store Live",
    tags: ["React Native", "EdTech / Gamification", "iOS App Store", "Audio Sync"],
    liveUrl: "https://apps.apple.com/us/app/scoolus/id6737978125",
    buttonLabel: "View on App Store",
    highlights: [
      "Interactive flashcards, audio quizzes, and streak rewards",
      "Multi-language phonetic audio synchronization",
      "Dynamic difficulty adjustment engine"
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconName: "GraduationCap"
  },
  // Web & Full-Stack Projects
  {
    id: "hi-bots",
    title: "Hi-Bots",
    subtitle: "Cross-Platform AI Coaching Web & Desktop Platform",
    description: "Full-stack AI coaching platform built with Next.js, Electron, LangChain, and MongoDB, featuring conversational German-language coaching bots and RevenueCat subscription tiers.",
    type: "web",
    categoryBadge: "Web & Electron Desktop",
    tags: ["Next.js", "Electron", "LangChain", "MongoDB", "RevenueCat", "AI Coaching"],
    liveUrl: "https://www.hunziker-inspirationen.app/",
    buttonLabel: "Visit Hi-Bots Live",
    highlights: [
      "LangChain-powered contextual AI conversational memory",
      "Cross-platform desktop distribution with code-signed Electron releases",
      "RevenueCat paywall integration across web and desktop"
    ],
    gradient: "from-violet-500/20 to-indigo-500/20",
    iconName: "Bot"
  },
  {
    id: "construction-mgmt",
    title: "Construction Management System",
    subtitle: "Enterprise Workflow & Project Record Platform",
    description: "Comprehensive web platform for managing construction site projects, contractor workflows, blueprint records, and material inventories in real-time.",
    type: "web",
    categoryBadge: "Vercel Production",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "REST APIs"],
    liveUrl: "https://construction-system-sage.vercel.app/",
    buttonLabel: "View Live Demo",
    highlights: [
      "Dynamic site milestone timeline and task assignment board",
      "Automated PDF report generation and document storage",
      "Responsive field-ready mobile and tablet interface"
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconName: "Building2"
  },
  {
    id: "transporter",
    title: "Transporter",
    subtitle: "Real-Time Fleet & Logistics Management App",
    description: "Fleet management web app for tracking drivers, freight orders, customer dispatches, and vehicle fleet statuses with live updates.",
    type: "web",
    categoryBadge: "Vercel Production",
    tags: ["Next.js", "Socket.io", "Real-Time Tracking", "Vercel", "Tailwind CSS"],
    liveUrl: "https://transporter-new.vercel.app/",
    buttonLabel: "View Live Demo",
    highlights: [
      "Live vehicle status updates and driver dispatching dashboard",
      "Real-time routing and order fulfillment monitoring",
      "Optimized query performance for high-frequency location data"
    ],
    gradient: "from-blue-500/20 to-teal-500/20",
    iconName: "Truck"
  },
  {
    id: "naqvid",
    title: "Naqvid Corporate Platform",
    subtitle: "Official IT Services & Digital Agency Website",
    description: "Designed and built the official corporate website for Naqvid, presenting the company's enterprise services, tech stack, and portfolio showcase.",
    type: "web",
    categoryBadge: "Live Production",
    tags: ["Next.js", "Modern UI/UX", "SEO Optimized", "Tailwind CSS", "Corporate"],
    liveUrl: "https://www.naqvid.com/",
    buttonLabel: "Visit Naqvid.com",
    highlights: [
      "Modern high-conversion landing page with smooth scroll animations",
      "Optimized Lighthouse performance (98+ Score) and SEO schema",
      "Modular CMS-ready architecture for continuous case study additions"
    ],
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    iconName: "Globe"
  },
  {
    id: "property-inspection",
    title: "Property Inspection System",
    subtitle: "Property Management & Inspection Workflow",
    description: "Specialized web application for property managers and inspectors to conduct digital inspections, capture photo evidence, and automate compliance audits.",
    type: "web",
    categoryBadge: "Vercel Production",
    tags: ["Next.js", "Node.js", "Vercel", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://project-inspection-one.vercel.app/",
    buttonLabel: "View Live Demo",
    highlights: [
      "Custom multi-step audit checklists with instant media uploads",
      "Automated compliance PDF report export for property owners",
      "Role-based permission matrix for inspectors, managers, and tenants"
    ],
    gradient: "from-emerald-500/20 to-cyan-500/20",
    iconName: "CheckCircle2"
  }
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack Developer — Web, Mobile & Backend",
    company: "Naqvid",
    location: "Multan, Punjab, Pakistan",
    period: "September 2025 – Present",
    type: "Full-Time",
    highlights: [
      "Lead end-to-end product development across web, mobile, and backend, building React.js/Next.js web applications and dashboards alongside cross-platform React Native apps for a growing web, Android, and iOS user base.",
      "Designed and built the company's own corporate website (naqvid.com) and multiple client web platforms, including a construction management system and property inspection system on Vercel.",
      "Design and maintain backend services and REST APIs using Node.js, Express.js, and Python/FastAPI, with MongoDB for data modeling and query optimization.",
      "Architect real-time chat, live notifications, and event broadcasting features using Socket.io, supporting low-latency communication at scale.",
      "Integrate RevenueCat for full subscription lifecycle management, including free trials, upgrades, renewals, and cancellation flows, boosting subscription conversion.",
      "Build and maintain a shared UI component library across web and mobile, significantly cutting new-feature development turnaround time."
    ],
    skillsUsed: ["Next.js", "React Native", "Node.js", "Python/FastAPI", "MongoDB", "Socket.io", "RevenueCat", "Vercel"]
  },
  {
    role: "Full-Stack Developer — Mobile, Web & Backend",
    company: "RayTech Labs Inc.",
    location: "Canada (Remote)",
    period: "April 2026 – August 2026",
    type: "Remote Contract",
    highlights: [
      "Built cross-platform mobile applications with React Native and TypeScript alongside web-facing features and backend microservices.",
      "Designed and maintained backend services and GraphQL APIs using Node.js and AWS AppSync, applying reusable component architecture and centralized state management.",
      "Integrated Agora SDK for real-time audio/video calling — including group calls, host/audience modes, mute controls, and screen sharing with low latency.",
      "Implemented Stripe payment gateway for secure checkout, recurring billing, and transaction management; configured RevenueCat for in-app purchases.",
      "Utilized AWS Amplify for cloud infrastructure including Cognito authentication, S3 storage, and AppSync GraphQL API integration.",
      "Leveraged AI-assisted development tools (Cursor, GitHub Copilot, Claude Code) to accelerate prototyping, boilerplate generation, and refactoring."
    ],
    skillsUsed: ["React Native", "TypeScript", "Node.js", "AWS AppSync (GraphQL)", "Agora SDK", "Stripe", "RevenueCat", "AWS Amplify"]
  },
  {
    role: "React Native Developer",
    company: "MaxRemind Inc.",
    location: "Pakistan (Remote)",
    period: "October 2023 – September 2025",
    type: "Full-Time",
    highlights: [
      "Developed and shipped multiple production React Native apps to the App Store and Google Play, owning the full release cycle from build to store review.",
      "Integrated Stripe for one-time payments, recurring subscriptions, and card tokenization; implemented Agora SDK for in-app voice and video calling.",
      "Built real-time notifications and live data sync features using Socket.io, improving user engagement and app responsiveness.",
      "Optimized React Native performance via lazy loading, FlatList virtualization, memoization, and image caching, noticeably reducing app launch and render times.",
      "Wrote Jest unit tests and participated in agile sprints to maintain zero-regression release cycles."
    ],
    skillsUsed: ["React Native", "Agora SDK", "Stripe", "Socket.io", "Jest", "App Store Publishing", "Performance Tuning"]
  },
  {
    role: "React Native Developer",
    company: "Triotech Systems",
    location: "Pakistan",
    period: "June 2024 – February 2025",
    type: "Contract",
    highlights: [
      "Built cross-platform React Native mobile apps for multiple clients, translating Figma requirements and design mockups into pixel-perfect software.",
      "Implemented navigation, form validation, and state management using React Navigation and Redux Toolkit / Context API.",
      "Integrated REST APIs, Firebase push notifications, and social logins (Google, Apple, Facebook) across client projects.",
      "Refactored legacy codebases, fixed critical performance bottlenecks, and minimized technical debt."
    ],
    skillsUsed: ["React Native", "Redux Toolkit", "Firebase", "Social Auth", "REST APIs", "React Navigation"]
  }
];

