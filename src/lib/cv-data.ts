export type Link = { label: string; href: string };

export type Entry = {
  title: string;
  meta?: string; // right-aligned date/place
  subtitle?: string;
  subtitleRight?: string;
  links?: Link[];
  bullets: string[];
};

export const person = {
  name: "Janith Chathuranga Mahanama",
  tagline: "Computer Science & Engineering, University of Moratuwa",
  phone: "+94 76 706 0599",
  email: "janithm.23@cse.mrt.ac.lk",
  links: [
    { label: "GitHub", href: "https://github.com/Jaybro-git" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/janith-mahanama-5b01aa315",
    },
  ] as Link[],
};

export const about =
  "3rd-year Computer Science and Engineering undergraduate at the University of Moratuwa, specializing in Data Science and Engineering. Focused on forecasting, explainable AI, and full-stack systems, with research accepted at MERCon 2026 and hands-on work spanning machine learning, infrastructure, and product engineering.";

export const education: Entry[] = [
  {
    title: "University of Moratuwa",
    meta: "2024 – Present",
    subtitle: "B.Sc Engineering (Hons), Computer Science and Engineering",
    subtitleRight: "Moratuwa, Sri Lanka",
    bullets: [
      "CGPA: 3.95 / 4.00",
      "Stream: Data Science and Engineering",
      "Dean's List, SGPA Sem 1: 4.00 · Sem 2: 4.00 · Sem 3: 3.92 · Sem 4: 3.91",
    ],
  },
  {
    title: "Trinity College Kandy",
    meta: "2009 – 2023",
    subtitle: "Primary and Secondary Education",
    subtitleRight: "Kandy, Sri Lanka",
    bullets: [
      "GCE Advanced Level (Physical Science) 2022/23, Z-Score 2.6570 · District Rank 10 · Island Rank 106",
      "GCE Ordinary Level 2019, 8 A's, 1 B",
    ],
  },
];

export const research: Entry[] = [
  {
    title: "Predicting Post-Crisis Daily Tourist Arrivals",
    meta: "Accepted, MERCon 2026",
    links: [
      {
        label: "Paper",
        href: "https://cdn.jsdelivr.net/gh/Jaybro-git/Research-Papers@main/Search_Intent_Effect_on_Post_Crisis_Daily_Tourist_Arrival_Prediction_for_Sri_Lanka.pdf",
      },
    ],
    bullets: [
      'Researched "The Effect of Search Intent Data on Predicting Post-Crisis Daily Tourist Arrivals in Sri Lanka," building a multi-model forecasting framework (SARIMA, SARIMAX, XGBoost, Random Forest, LSTM, SVR, Sequential Hybrid) integrating official arrivals with Yandex search queries, Google Trends, exchange rates, and weather data.',
      "Benchmarked forecasting architectures and conducted feature engineering and explainability analysis, achieving a rolling MAPE of 8.94% with an RBF-SVM model.",
    ],
  },
  {
    title: "Feature Selection Research (NIPS 2003)",
    meta: "Not Published",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jaybro-git/Feature-Selection-Research-NIPS-2003",
      },
      {
        label: "Paper",
        href: "https://cdn.jsdelivr.net/gh/Jaybro-git/Research-Papers@main/Feature_Selection_for_High_Dimensional_Noisy_Data_Research_Paper.pdf",
      },
    ],
    bullets: [
      "Compared filter, wrapper, embedded, and hybrid feature selection methods on the high-dimensional Madelon dataset from the NIPS 2003 Feature Selection Challenge.",
      "Implemented and benchmarked selection pipelines that improved balanced accuracy from 0.58 (baseline, all features) to 0.89 using a hybrid approach.",
    ],
  },
];

export const projects: Entry[] = [
  {
    title: "AudioLens, Explainable AI Research Workbench for Speech Models",
    meta: "Ongoing",
    links: [{ label: "GitHub", href: "https://github.com/ECHO-Lit/ECHO-LIT" }],
    bullets: [
      "Tech: Next.js, FastAPI, Celery, Redis, Docker, PyTorch, Hugging Face Transformers.",
      "A research workbench for explainable AI in speech recognition (Whisper, Wav2Vec2): saliency and attention-based attribution, perturbation-driven robustness testing, layer-wise representation probing, internal activation and Jacobian-based sensitivity analysis, Whisper hallucination detection, and linguistic-vs-acoustic influence and accent/language fairness analysis, all served through an asynchronous, containerized Celery/Redis job architecture.",
      "Researchers can upload custom speech models and datasets to inspect the blackbox end-to-end: tracing a bad prediction back to the exact audio evidence or acoustic condition that caused it.",
    ],
  },
  {
    title: "Smart Waste Management System",
    meta: "2026",
    links: [
      { label: "GitHub", href: "https://github.com/UOM-CSE-Sem4-GroupF" },
    ],
    bullets: [
      "Tech: GitOps via ArgoCD, Kafka/EMQX event streaming, Kong API gateway, Keycloak/Vault identity & secrets, Prometheus/Grafana monitoring, Hyperledger Fabric ledger for tamper-proof records.",
      "An IoT-integrated platform to monitor real-time waste levels and optimize collection routes across edge, IoT, mobile, and analytics components.",
      "Worked in the DevOps and Platform Infrastructure team.",
    ],
  },
  {
    title: "Pharma Availability Control Tower",
    meta: "2026",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/JPabasara/pharma-availability-control-tower",
      },
    ],
    bullets: [
      "Tech: FastAPI, Next.js, SQLAlchemy, MySQL, XGBoost, OR-Tools, LangGraph, LangSmith, Chroma, Gemini, Sentence-Transformers.",
      "A pharmaceutical distribution planning platform consolidating shortage forecasting, shipment prioritization, dispatch planning, and execution tracking into a single planner workflow.",
      "Built the ML module: priority-scoring for inbound manifest clearance, an XGBoost 48-hour shortage forecasting model, and an OR-Tools dispatch optimizer, plus a multi-agent RAG chatbot (LangGraph supervisor routing to knowledge, operations, and analytics agents over Chroma) for conversational querying of policies, stock, forecasts, and dispatch plans.",
    ],
  },
  {
    title: "RPAL Interpreter",
    meta: "2026",
    links: [{ label: "GitHub", href: "https://github.com/Jaybro-git/RPAL" }],
    bullets: [
      "Tech: Java.",
      "Built a complete interpreter for RPAL, a functional programming language: lexing, recursive-descent parsing, AST standardization, and evaluation via a Control/Stack/Environment (CSE) machine, without external lexer/parser generators, supporting closures, recursion, tuples, and built-in operators.",
    ],
  },
  {
    title: "Banking Management System",
    meta: "2025",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jaybro-git/Banking-Management-System.git",
      },
    ],
    bullets: [
      "Tech: Next.js, Express.js, Neon Postgres, Docker.",
      "A digital banking platform for a microfinance institution: savings accounts, fixed deposits, automated interest accrual, and real-time transaction processing across multiple account tiers.",
      "Contributed to full-stack development and a CI/CD workflow automating build verification and unit testing.",
    ],
  },
  {
    title: "12-bit Nanoprocessor",
    meta: "2025",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Jaybro-git/Nanoprocessor.git",
      },
    ],
    bullets: [
      "Tech: VHDL, Xilinx Vivado, FPGA.",
      "Designed a custom 12-bit nanoprocessor: ALU, register bank, instruction decoder, verifying functionality through simulation and hardware synthesis.",
    ],
  },
];

export const competitions: Entry[] = [
  {
    title: "AITHON 2026 by Hemas Holdings PLC",
    meta: "2026",
    bullets: ["Top 10 Finalist."],
  },
  {
    title: "IEEEXtreme 19.0 Programming Competition",
    meta: "2025",
    bullets: ["Global Rank 51."],
  },
  {
    title: "Coderally 6.0, Hackathon by IEEE Computer Society of IIT",
    meta: "2025",
    bullets: ["4th Place (Advanced Tier)."],
  },
  {
    title: "CodeArena, Coding Competition by IET on Campus KDU",
    meta: "2025",
    bullets: ["4th Place (Finalist)."],
  },
  {
    title: "Devthon 2.0, Web App Development Competition",
    meta: "2025",
    bullets: ['Semi-Finalist with "Safe Steps: Women Safety Website."'],
  },
];

export const certifications: string[] = [
  "AWS Academy Graduate, Cloud Foundations",
  "AWS Academy Graduate, Microservices and CI/CD Pipeline Builder",
  "Machine Learning Specialization, Coursera (Ongoing)",
  "Python Programming Online Course, University of Moratuwa",
  "Web Development Online Course, University of Moratuwa",
  "Level 3 Certificate in Information Technology, School of Computing, Esoft Metro Campus",
];

export const experience: Entry[] = [
  {
    title: "University of Moratuwa",
    meta: "2024 – Present",
    bullets: [
      "Member of IEEE Student Branch and IESL.",
      "Member, Strategic Events Committee, Computer Science & Engineering Student Society.",
      "Member, Publicity Committee for SLIoT 2026.",
    ],
  },
  {
    title: "Trinity College Kandy",
    meta: "2009 – 2023",
    bullets: [
      "Teaching Assistant, Advanced Level Section (2023).",
      "Committee Member, Social Service Union (2019), Science Society (2015, 2017).",
      "Member, Astronomical Society, Automotive Club, Design Club.",
      "School Hockey Team (2013–2014, 2016–2017).",
    ],
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "competitions", label: "Competitions" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
] as const;
