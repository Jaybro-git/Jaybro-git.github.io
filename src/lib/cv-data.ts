export type Link = { label: string; href: string };

export type BulletItem =
  | string
  | { text: string; emphasis?: boolean; items?: string[] };

export type Entry = {
  title: string;
  meta?: string; // right-aligned date/place
  subtitle?: string;
  subtitleRight?: string;
  links?: Link[];
  bullets: BulletItem[];
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
  "I am a third-year Computer Science and Engineering honors student at the University of Moratuwa, specializing in Data Science and Engineering. Driven by a profound interest in academic research and intelligent system design, I have maintained a rigorous academic record and am a consistent high-achiever on the Dean's List. My practical experience bridges the gap between theoretical research and scalable enterprise solutions by integrating machine learning architectures and explainable artificial intelligence with full-stack development and DevOps practices. Whether I am building robust digital platforms, advancing transparent AI methodologies, or navigating high-stakes global programming competitions, I am passionate about engineering end-to-end solutions for complex real-world challenges."
export const education: Entry[] = [
  {
    title: "University of Moratuwa",
    meta: "2024 – Present",
    subtitle: "B.Sc Engineering (Hons), Computer Science and Engineering",
    subtitleRight: "Moratuwa, Sri Lanka",
    bullets: [
      { text: "CGPA: 3.95 / 4.00", emphasis: true },
      "Stream: Data Science and Engineering",
      {
        text: "Dean's List (SGPA)",
        items: [
          "Semester 1 - 4.00",
          "Semester 2 - 4.00",
          "Semester 3 - 3.92",
          "Semester 4 - 3.91",
        ],
      },
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
      "Sri Lanka's tourism sector has had to rebuild forecasting trust after repeated shocks (the Easter Sunday attacks, COVID-19); this work asks whether real-time search behavior can shorten that recovery gap. Built a multi-model framework (SARIMA, SARIMAX, XGBoost, Random Forest, LSTM, SVR, and a sequential hybrid) fusing official daily arrivals with Yandex search queries, Google Trends interest, exchange rates, and weather data.",
      "Benchmarked all seven architectures with dedicated feature engineering and explainability analysis to see which signals actually drove predictions, not just which model scored best. The RBF-SVM configuration led, reaching a rolling MAPE of 8.94%.",
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
      "Ran a controlled comparison of filter (ANOVA), wrapper (recursive feature elimination), embedded (Random Forest / XGBoost importance), and hybrid selection pipelines on Madelon, a dataset purpose-built for the NIPS 2003 challenge to punish methods that can't separate 5 informative features from 15 redundant and 480 pure-noise ones.",
      "Held the downstream evaluator (RBF-SVM) constant across all four families for a fair comparison. Selection quality followed a clear hierarchy, hybrid > embedded > wrapper > filter > no selection, with the best hybrid pipeline lifting balanced accuracy from 0.58 (all 500 features) to 0.89 and reaching 0.97 AUC-ROC.",
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
      "An interpretability workbench for speech models (Whisper, Wav2Vec2) that fills a gap general tools like Google's Learning Interpretability Tool leave for audio: saliency and attention-based attribution, layer-wise representation probing, Jacobian-based sensitivity analysis, perturbation-driven robustness testing, Whisper hallucination detection, and accent/language fairness analysis.",
      "Researchers upload their own models and datasets and trace a bad prediction back to the exact audio evidence or acoustic condition behind it. Heavy analysis jobs run asynchronously through a Celery/Redis queue behind a FastAPI control plane, decoupled from the Next.js frontend so long-running inference never blocks the UI, with multi-GPU support (CUDA, ROCm, Metal) across whatever hardware a researcher has.",
    ],
  },
  {
    title: "Physics-Informed GNNs for Multi-Horizon Disease Forecasting",
    meta: "Ongoing",
    links: [{ label: "GitHub", href: "https://github.com/rathishTharusha/dengue-forecasting-gnn" }],
    bullets: [
      "Tech: PyTorch Geometric, Spatio-Temporal GNNs (GCN/GAT), GANs.",
      "Building a spatio-temporal Graph Neural Network baseline to forecast weekly, district-level dengue incidence across Sri Lanka.",
      "Enhancing the baseline model by integrating an epidemic-mechanistic (SEIR-SEI) physics-informed loss function, conditional GAN-based data augmentation to counter scarcity, and a learned adaptive graph to capture unobserved inter-district transmission dynamics.",
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
      "An IoT-to-insight pipeline for municipal waste collection: bin-level sensors feed an edge layer for local processing, sensor data streams through Kafka/EMQX into a GitOps-deployed platform, and a Hyperledger Fabric ledger keeps collection records tamper-proof for audit, across four repos spanning edge, IoT firmware, mobile, and a routing simulator.",
      "Worked in the DevOps and Platform Infrastructure team, standing up the deployment and monitoring backbone (ArgoCD, Kong, Keycloak/Vault, Prometheus/Grafana) the rest of the system runs on.",
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
      "Planners previously tracked pharmaceutical distribution across spreadsheets, juggling DC replenishment speed, simultaneous vessel manifests, cold-chain constraints, lorry capacity, and day-level availability by hand. This platform folds shortage forecasting, shipment prioritization, dispatch planning, and execution tracking into one console.",
      "The core design choice: planning state never directly mutates physical stock. Approvals create scoped reservations and in-transit transfers, and real inventory only changes through explicit business events, keeping the system auditable end-to-end.",
      "Implemented the Machine Learning module (priority-scoring manifest clearance, XGBoost-based 48-hour shortage forecasting, OR-Tools dispatch optimization) and a multi-agent RAG chatbot (LangGraph supervisor routing to knowledge, operations, analytics, and human-in-the-loop recommendation agents over a Chroma vector store, fully traced with LangSmith), with a CI-gated LLM-as-judge evaluation harness and a self-correction node verifying answer groundedness before response."
    ],
  },
  {
    title: "RPAL Interpreter",
    meta: "2026",
    links: [{ label: "GitHub", href: "https://github.com/Jaybro-git/RPAL" }],
    bullets: [
      "Tech: Java.",
      "A from-scratch interpreter for RPAL, a lazy functional language, built without lex/yacc or any parser generator: a hand-written lexer, a recursive-descent parser producing an AST, a standardizer that rewrites language constructs down to lambda-calculus primitives, and a Control/Stack/Environment machine that evaluates the result.",
      "Recursion is call-by-value through a Y*-style fixed-point combinator that wraps functions in eta closures so they can reference themselves. The runtime handles closures, tuples, and 14 built-in operators end-to-end, verified against 17 test programs from Fibonacci to simultaneous bindings.",
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
      "A digital core-banking platform modeled on a Sri Lankan microfinance bank serving rural communities: customer onboarding and agent assignment across branches, tiered-interest savings accounts, fixed deposits across 6-month, 1-year, and 3-year terms, joint accounts, and monthly interest auto-crediting with full transaction audit trails.",
      "Enforces real banking constraints rather than happy-path CRUD: minimum balances, no overdrafts, one fixed deposit per savings account, and role-based access separating customers, agents, and branch managers. Contributed to the full-stack build and a CI/CD pipeline automating build verification and unit testing.",
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
      "Designed a processor from the gate level up in VHDL, an ALU, register bank, and instruction decoder, iterated across three passes: a basic 4-bit build, an optimized revision, then an extended 12-bit version, rather than a single one-shot design.",
      "Verified functionality through simulation and synthesis in Xilinx Vivado, targeting integration into larger FPGA projects.",
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
