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
  architectureNodes?: { label: string; subLabel: string; type: "frontend" | "api" | "backend" | "db" | "ai" | "result" }[];
  engineeringHighlights?: string[];
  caseStudy?: {
    overview: string;
    problem: string;
    solution: string;
    architectureDescription: string;
    keyDecisions: string[];
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const PORTFOLIO_METRICS = {
  totalProjects: 5,
  liveDeployments: 5,
  coreTechnologies: 15,
  cgpa: "8.4 CGPA",
} as const;

export const PERSONAL_INFO = {
  name: "Aarti Dinkar",
  headline: "Full Stack Engineer | Applied AI & Data Science",
  subHeadline: "Building modern full-stack web applications, scalable APIs, and applied AI/ML systems using React, Next.js, Node.js, Python, SQL, and Machine Learning.",
  aboutText: "I am a Full Stack Engineer and Data Science Specialist with a degree in Information Technology (BE) and an Honours specialization in Data Science (CGPA: 8.4). I specialize in bridging robust web software development with applied machine learning. From architecting scalable REST APIs and reactive user interfaces to engineering ML models for financial risk detection and intelligent movie recommendation engines, I build intuitive, high-performance software systems.",
  education: [
    {
      degree: "BE in Information Technology",
      institution: "Bachelor of Engineering",
      badge: "Degree",
      cgpa: "CGPA: 8.4",
      description: "Core computer science fundamentals, data structures, algorithms, database management systems, web engineering lifecycle, and object-oriented design."
    },
    {
      degree: "Honours in Data Science",
      institution: "Specialized Academic Program",
      badge: "Honours",
      cgpa: "Specialization",
      description: "Advanced machine learning pipelines, predictive statistical modeling, XGBoost classification, data analytics with Pandas, and interactive dashboards."
    }
  ],
  stats: [
    { label: "Full Stack & AI Projects", value: `${PORTFOLIO_METRICS.totalProjects}+` },
    { label: "Core Technologies", value: `${PORTFOLIO_METRICS.coreTechnologies}+` },
    { label: "Live Production Deployments", value: `${PORTFOLIO_METRICS.liveDeployments}` },
    { label: "BE IT + DS Honours", value: PORTFOLIO_METRICS.cgpa }
  ],
  socials: {
    github: "https://github.com/Aartid18",
    linkedin: "https://www.linkedin.com/in/aarti-dinkar-534b93312",
    email: "aartidinkar6@gmail.com",
    location: "India"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Languages",
    iconName: "Code",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Full Stack Web",
    iconName: "Layout",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Engineering",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"]
  },
  {
    title: "Databases & ORM",
    iconName: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"]
  },
  {
    title: "AI & Data Science",
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
    subtitle: "Full-Stack Job Portal with AI Parsing & Candidate Matching",
    category: "Full Stack",
    techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Java", "Spring Boot", "AI Parsing"],
    description: "An end-to-end job portal and applicant tracking platform powered by AI resume match algorithms to connect recruiters with qualified talent efficiently.",
    features: [
      "AI-driven resume parsing and skill match scoring",
      "Role-based authentication & recruiter analytics portal",
      "Interactive job postings and application tracking workflow",
      "Robust RESTful API microservices architecture"
    ],
    liveUrl: "https://java-job-portal.vercel.app/",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: true,
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    architectureNodes: [
      { label: "Recruiter / Candidate UI", subLabel: "React / Next.js", type: "frontend" },
      { label: "API Gateway", subLabel: "Node.js / Express", type: "api" },
      { label: "Parsing Microservice", subLabel: "Java / Spring Boot", type: "backend" },
      { label: "Data Store", subLabel: "MongoDB Atlas", type: "db" },
      { label: "Score Engine", subLabel: "Skill Match AI", type: "ai" },
      { label: "Dashboard", subLabel: "Analytics Portal", type: "result" }
    ],
    engineeringHighlights: [
      "Implemented modular microservice separation between Node.js API layer and Java Spring Boot parsing engine.",
      "Optimized MongoDB indexing for high throughput candidate keyword matching.",
      "Designed role-based access control (RBAC) supporting candidate profiles and employer job posting workflows."
    ],
    caseStudy: {
      overview: "An enterprise-grade job portal designed to solve manual resume screening bottlenecks for recruiters using automated match scoring.",
      problem: "Traditional job portals force recruiters to manually skim hundreds of static resumes, creating severe hiring latency and poor candidate visibility.",
      solution: "Engineered an AI-assisted parsing and matching portal that parses uploaded candidate resumes, compares extracted skill sets against job descriptions, and computes match relevance scores.",
      architectureDescription: "The frontend is built on Next.js communicating via REST APIs with a Node.js Express gateway. Heavy document extraction logic runs on a dedicated Java Spring Boot microservice connected to MongoDB Atlas.",
      keyDecisions: [
        "Separated PDF parsing microservice into Java Spring Boot for high concurrency document processing.",
        "Implemented MongoDB text indices for millisecond skill taxonomy queries.",
        "Utilized JWT role-based security guardrails for applicant vs. recruiter data privacy."
      ]
    }
  },
  {
    id: "cinemind-movie-rec",
    title: "CineMind – AI Movie Recommendation",
    subtitle: "Personalized Content Filtering & Flask ML Microservice",
    category: "AI / ML",
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Python", "Flask", "Scikit-learn"],
    description: "Intelligent movie discovery platform using machine learning content filtering to compute feature vector similarity and deliver tailored suggestions in real-time.",
    features: [
      "Machine learning content-based similarity filtering engine",
      "Python Flask microservice for real-time recommendation inference",
      "Type-safe PostgreSQL data management via Prisma ORM",
      "Sleek movie metadata browsing and user taste customization"
    ],
    liveUrl: "https://movie-recommendation01-green.vercel.app/",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: true,
    gradient: "from-purple-500/20 via-pink-500/10 to-rose-500/20",
    architectureNodes: [
      { label: "Movie Client", subLabel: "Next.js / TypeScript", type: "frontend" },
      { label: "Prisma ORM", subLabel: "PostgreSQL Data Layer", type: "db" },
      { label: "Inference API", subLabel: "Python / Flask", type: "backend" },
      { label: "Feature Matrix", subLabel: "Scikit-Learn TF-IDF", type: "ai" },
      { label: "Similarity Vector", subLabel: "Cosine Distance Engine", type: "result" }
    ],
    engineeringHighlights: [
      "Engineered Python Flask microservice performing TF-IDF matrix vectorization and Cosine Similarity scoring.",
      "Decoupled ML inference endpoint from Next.js web framework for independent deployment scaling.",
      "Integrated PostgreSQL database with Prisma ORM for type-safe movie item metadata storage."
    ],
    caseStudy: {
      overview: "A machine-learning powered content recommendation web app delivering real-time personalized movie suggestions based on genre features and user preferences.",
      problem: "Generic movie platforms present static top-ten lists without contextual feature alignment to individual user tastes.",
      solution: "Built a hybrid web application pairing a Next.js user interface with a Python Flask machine learning microservice that vectorizes movie descriptions and genres to rank similar films.",
      architectureDescription: "The Next.js client renders responsive UI components and queries a Python Flask API. Flask executes Scikit-learn TF-IDF matrix similarity transformations against movie metadata stored in PostgreSQL via Prisma.",
      keyDecisions: [
        "Utilized Scikit-learn TF-IDF Vectorizer and Cosine Similarity for instantaneous content-based recommendations.",
        "Engineered REST contract between TypeScript frontend and Flask backend with cached inference payloads.",
        "Structured PostgreSQL schema in Prisma for clean normalized metadata relations."
      ]
    }
  },
  {
    id: "fraud-detection",
    title: "FraudShield – ML Risk Dashboard",
    subtitle: "Financial Transaction ML Classification Analytics",
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
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    architectureNodes: [
      { label: "Transaction Data", subLabel: "CSV Payload / Streamlit UI", type: "frontend" },
      { label: "Preprocessing Pipeline", subLabel: "Pandas / NumPy", type: "backend" },
      { label: "Classification Model", subLabel: "XGBoost Classifier", type: "ai" },
      { label: "Risk Probabilities", subLabel: "Scikit-Learn Evaluation", type: "result" },
      { label: "Analytics Board", subLabel: "Plotly Interactive Charts", type: "result" }
    ],
    engineeringHighlights: [
      "Trained gradient-boosted XGBoost classification model to evaluate transaction risk probability score.",
      "Constructed Streamlit analytics dashboard with dynamic Plotly visualizations for transaction breakdown.",
      "Implemented dataset preprocessing pipeline utilizing Pandas for missing value imputation and feature scaling."
    ],
    caseStudy: {
      overview: "An interactive machine learning analytics dashboard engineered to flag fraudulent financial transactions and visualize anomaly risk distributions.",
      problem: "Financial risk teams struggle to identify suspicious transaction patterns within massive tabular data streams without automated classification models.",
      solution: "Developed an XGBoost machine learning model integrated into a Streamlit dashboard that processes transaction batches and outputs real-time risk scores and Plotly visual telemetry.",
      architectureDescription: "User uploads transaction batches via Streamlit. Python backend runs Pandas data transformations, feeds scaled features into trained XGBoost estimators, and renders probability metrics via Plotly.",
      keyDecisions: [
        "Selected XGBoost classifier for superior tabular data fraud detection precision and ROC-AUC performance.",
        "Built instant file upload processing pipeline handling CSV batch evaluation without server restart.",
        "Rendered interactive risk heatmap distributions using Plotly graphics."
      ]
    }
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
    isFeatured: false,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    caseStudy: {
      overview: "A customer-centric e-commerce application featuring dynamic AI product recommendation widgets and instant cart state synchronization.",
      problem: "Traditional online stores display generic product carousels without personalized item relevance matching customer browsing history.",
      solution: "Engineered a responsive Next.js marketplace backed by Node.js and MongoDB Atlas, utilizing intelligent item category mapping for automated related product suggestions.",
      architectureDescription: "Next.js client interface communicates with Express REST endpoints. Product catalog schemas and customer orders are stored in indexed MongoDB document collections.",
      keyDecisions: [
        "Structured modular client cart hooks for instant UI updates.",
        "Implemented indexed MongoDB text search for rapid product catalog filtering.",
        "Engineered recommendation payload caching to minimize database query latency."
      ]
    }
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
    liveUrl: "https://secure-print-link.vercel.app/",
    githubUrl: "https://github.com/Aartid18",
    isFeatured: false,
    gradient: "from-indigo-500/20 via-blue-500/10 to-violet-500/20",
    caseStudy: {
      overview: "An encrypted document protection application engineered to prevent unauthorized printing and link leakage for sensitive files.",
      problem: "Sharing sensitive print payloads over standard URLs exposes documents to unauthorized saving, forwarding, and indefinite access.",
      solution: "Developed an AES-256 encryption API service that converts document payloads into time-restricted, single-use secure print links.",
      architectureDescription: "React frontend interacts with a Node.js Express encryption API. Files are stored in Firebase with temporal token validation rules.",
      keyDecisions: [
        "Utilized client-side and server-side AES-256 payload encryption.",
        "Enforced self-destructing time-to-live (TTL) expiration timestamps on print links.",
        "Designed anti-duplication print view styles preventing browser asset download."
      ]
    }
  }
];
