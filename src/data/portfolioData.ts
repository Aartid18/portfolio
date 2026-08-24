export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full Stack" | "AI / ML" | "Data Science";
  techStack: string[];
  description: string;
  features: string[];
  liveUrl?: string;
  githubUrl: string;
  isFeatured: boolean;
  gradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Aarti Dinkar",
  headline: "Full Stack Developer | AI/ML Enthusiast",
  subHeadline: "Building modern web applications, scalable APIs, and data-driven AI solutions using React, Next.js, Node.js, Python, SQL, and Machine Learning.",
  aboutText: "I am a Full Stack Developer and AI/ML Enthusiast with a degree in Information Technology (BE) and an Honours specialization in Data Science. I bridge the gap between robust web software development and cutting-edge machine learning. From architecting scalable backend APIs and reactive user interfaces to engineering ML models for fraud detection and AI recommendations, I turn complex problems into performant, intuitive digital solutions.",
  education: [
    {
      degree: "BE in Information Technology",
      institution: "Bachelor of Engineering",
      badge: "Degree",
      description: "Core computer science fundamentals, data structures, algorithms, database management, web engineering, and software design."
    },
    {
      degree: "Honours in Data Science",
      institution: "Specialized Certification / Honours",
      badge: "Honours",
      description: "Advanced machine learning, statistical data modeling, deep learning basics, data visualization, and predictive analytics."
    }
  ],
  stats: [
    { label: "Full Stack & AI Projects", value: "5+" },
    { label: "Core Technologies", value: "15+" },
    { label: "Live Vercel Apps", value: "4" },
    { label: "Degree & Specialization", value: "BE IT + DS" }
  ],
  socials: {
    github: "https://github.com/Aartid18",
    linkedin: "https://www.linkedin.com/in/aarti-dinkar-534b93312",
    email: "aartidinkar.dev@gmail.com",
    location: "India"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    iconName: "Code",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Engineering",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"]
  },
  {
    title: "Database Management",
    iconName: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"]
  },
  {
    title: "AI & Machine Learning",
    iconName: "BrainCircuit",
    skills: ["Scikit-learn", "Pandas", "XGBoost", "NumPy", "Plotly", "Streamlit"]
  },
  {
    title: "Tools & Platforms",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Vercel", "Firebase", "Tableau", "Power BI"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-job-platform",
    title: "AI Job & Resume Platform",
    subtitle: "Full-Stack Job Portal with AI Parsing & Matching",
    category: "Full Stack",
    techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Java", "Spring Boot", "AI"],
    description: "An end-to-end job portal and applicant tracking platform powered by AI match algorithms to connect recruiters with qualified talent efficiently.",
    features: [
      "AI-driven resume parsing and skill match scoring",
      "Role-based authentication & recruiter analytics portal",
      "Interactive job postings and application tracking workflow",
      "Robust RESTful API microservices architecture"
    ],
    liveUrl: "https://java-job-portal.vercel.app/",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: true,
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20"
  },
  {
    id: "cinemind-movie-rec",
    title: "CineMind – AI Movie Recommendation",
    subtitle: "Personalized Content Filtering & ML Engine",
    category: "AI / ML",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Python", "Flask", "Scikit-learn"],
    description: "Intelligent movie discovery platform using machine learning algorithms to compute content similarity and deliver tailored movie suggestions in real-time.",
    features: [
      "Machine learning content-based & collaborative filtering",
      "Python Flask microservice for real-time recommendation inference",
      "Type-safe PostgreSQL data management via Prisma ORM",
      "Sleek movie metadata browsing and user taste customization"
    ],
    liveUrl: "https://movie-recommendation01-green.vercel.app/",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: true,
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20"
  },
  {
    id: "ai-ecommerce",
    title: "AI E-Commerce Platform",
    subtitle: "Smart Customer Marketplace & Product Portal",
    category: "Full Stack",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "AI Engine"],
    description: "Modern customer-centric e-commerce engine equipped with AI product recommendations, dynamic category filters, and seamless cart state management.",
    features: [
      "Dynamic AI-powered related product recommendations",
      "Customer catalog browsing with live multi-filter search",
      "Responsive customer cart management & checkout UI",
      "Optimized MongoDB data schemas for high throughput"
    ],
    liveUrl: "https://ai-ecommerce-hazel.vercel.app/customer/products",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection Dashboard",
    subtitle: "Financial Transaction ML Risk Analytics",
    category: "Data Science",
    techStack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "Plotly"],
    description: "Data science and machine learning dashboard designed to analyze financial transactions, detect anomalies, and flag high-risk fraudulent operations.",
    features: [
      "High-accuracy XGBoost ML classification model for fraud scoring",
      "Real-time transaction risk scoring and anomaly probability",
      "Interactive KPI metric cards & dynamic Plotly visualizations",
      "Instant CSV dataset upload and evaluation interface"
    ],
    liveUrl: "https://fraud-detection-dashboard-ten.vercel.app/",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: true,
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20"
  },
  {
    id: "secure-print-link",
    title: "Secure Print Link Platform",
    subtitle: "Encrypted Document Share & Security API",
    category: "Full Stack",
    techStack: ["React", "Node.js", "Express", "Firebase", "AES-256"],
    description: "Security-focused document payload protection platform that generates encrypted print-ready links with temporal expiration and access control.",
    features: [
      "AES-256 bit document content payload encryption",
      "Time-limited link generation for secure printing",
      "Backend REST API validation & Firebase asset storage",
      "Protection against unauthorized document duplication"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/Aartid18",
    isFeatured: false,
    gradient: "from-indigo-500/20 via-blue-500/10 to-violet-500/20"
  }
];
