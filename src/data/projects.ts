export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Vision" | "Full-Stack" | "AI/RAG" | "IP";
  status: string;
  confidence: string;
  oneLiner: string;
  role: string;
  period: string;
  stack: string[];
  impactBullets: string[];
  links: {
    github?: string;
    live?: string;
    demoType?: "pipeline" | "startupMatch" | "smartParking" | "verdiq" | "patent";
  };
  overview: string;
  problem: string;
  approach: string;
  technicalDecisions: string[];
  challenges: string;
  result: string;
}

export const projects: ProjectItem[] = [
  {
    id: "corn-phenotyping",
    slug: "corn-phenotyping",
    title: "Corn Phenotyping Vision Pipeline",
    subtitle: "Enterprise Agritech Video Phenotyping System",
    category: "Vision",
    status: "PRODUCTION SYSTEM",
    confidence: "0.99",
    oneLiner:
      "Automated real-time phenotyping of corn ears and kernels using turntable video capture rigs, YOLOv8-seg instance segmentation, and Azure AKS microservices.",
    role: "AI/ML Backend Developer Intern (Corteva Agriscience)",
    period: "Apr 2026 – Jul 2026",
    stack: ["Python", "YOLOv8-seg", "OpenCV", "Docker", "Kubernetes", "Azure AKS", "SSIM", "BRISQUE"],
    impactBullets: [
      "Engineered an automated video-based corn ear and kernel phenotyping pipeline deployed on physical turntable video capture rigs.",
      "Built a Python video-processing toolkit ('video_toolkit') with 18+ modular functions across preprocessing and geometric postprocessing.",
      "Integrated BRISQUE, SSIM, and Laplacian variance metrics to filter out blurry and low-quality frames before segmentation, containerized on Azure AKS."
    ],
    links: {
      github: "[ADD: repository link]",
      live: "[ADD: live URL]",
      demoType: "pipeline"
    },
    overview:
      "An automated agritech computer vision pipeline built during my AI/ML Backend Developer internship at Corteva Agriscience. The system phenotypes physical corn ears and kernels rotating on turntable camera rigs, extracting phenotypic metrics at scale.",
    problem:
      "Manual phenotyping of corn specimens is labor-intensive, error-prone, and struggles with specular highlights, physical rotation blur, and background lighting variance in physical warehouse rigs.",
    approach:
      "Engineered a multi-stage streaming pipeline: raw frame ingestion -> optical quality gate (BRISQUE, SSIM, Laplacian variance) -> YOLOv8-seg neural instance segmentation -> geometric morphology extraction -> Azure AKS microservice dispatch.",
    technicalDecisions: [
      "Restructured raw experimental scripts into an importable, tested Python package ('video_toolkit') containing 18+ modular functions.",
      "Deployed BRISQUE blind image quality assessment to drop degraded rotational frames prior to GPU segmentation inference, preserving compute budget.",
      "Decoupled frame capture from neural inference via Docker microservices orchestrated across Azure AKS Kubernetes nodes."
    ],
    challenges:
      "Handling rotational blur and specular highlights on corn ear surfaces when physical rigs rotate at speed under warehouse lighting.",
    result:
      "Production-ready 'video_toolkit' package with 18+ functions; successfully automated turntable phenotyping workflows."
  },
  {
    id: "startup-match",
    slug: "startup-match",
    title: "StartupMatch",
    subtitle: "MERN Co-Founder Matching & Collaboration Platform",
    category: "Full-Stack",
    status: "SHIPPED · FEB 2026",
    confidence: "0.98",
    oneLiner:
      "Full-stack co-founder matchmaking platform featuring a weighted compatibility scoring algorithm (0–100), real-time Socket.io messaging, and admin analytics.",
    role: "Full-Stack Architect & Backend Lead",
    period: "Feb 2026",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "JWT"],
    impactBullets: [
      "Engineered weighted compatibility scoring algorithm (0–100) evaluating skill complementarity, vision alignment, and commitment vectors.",
      "Architected bidirectional real-time messaging infrastructure with Socket.io, JWT authentication, and MongoDB persistent chat history.",
      "Built role-based REST APIs, project marketplace listings, and an administrative telemetry analytics dashboard."
    ],
    links: {
      github: "https://github.com/Avinash-Kolipaka",
      live: "[ADD: live URL]",
      demoType: "startupMatch"
    },
    overview:
      "StartupMatch connects technical and commercial founders using an empirical compatibility algorithm, real-time communication channels, and structured venture listings.",
    problem:
      "Finding compatible co-founders typically relies on fragmented forums and superficial networking, resulting in misaligned vision and asymmetric commitment.",
    approach:
      "Designed a normalized schema in MongoDB representing founder vectors (skills, time commitment, domain, equity expectations) and calculated a weighted cosine similarity score.",
    technicalDecisions: [
      "Designed weighted matchmaking heuristic: 40% complementary skillset, 35% domain vision alignment, 25% weekly commitment compatibility.",
      "Implemented Socket.io rooms with JWT authentication handshakes, eliminating unauthorized WebSocket snooping.",
      "Role-based access control (RBAC) middleware in Express.js separating founder, project-owner, and administrator capabilities."
    ],
    challenges:
      "Preventing WebSocket disconnections and managing chat message ordering during network reconnects.",
    result:
      "Fully shipped platform with weighted scoring algorithm (0–100) and real-time chat infrastructure."
  },
  {
    id: "verdiq",
    slug: "verdiq",
    title: "VERDIQ",
    subtitle: "AI Legal Intelligence & Precedent Retrieval Platform",
    category: "AI/RAG",
    status: "RAG PLATFORM",
    confidence: "0.96",
    oneLiner:
      "AI legal intelligence platform utilizing LangChain, RAG architecture, MongoDB vector storage, and Socket.io to perform grounded statutory case law retrieval.",
    role: "AI/ML & Backend Developer",
    period: "2025 – 2026",
    stack: ["LangChain", "RAG", "Python", "MongoDB Vectors", "Socket.io", "React"],
    impactBullets: [
      "Engineered Retrieval-Augmented Generation (RAG) pipeline querying statutory precedent and court rulings without hallucination.",
      "Implemented LangChain recursive document chunkers tuned for multi-page legal filings and case citations.",
      "Streamed generation tokens in real time via Socket.io with grounded legal source attribution."
    ],
    links: {
      github: "https://github.com/Avinash-Kolipaka",
      live: "[ADD: live URL]",
      demoType: "verdiq"
    },
    overview:
      "VERDIQ is a specialized legal intelligence platform that unlocks complex case law and statutory jurisprudence through grounded semantic search.",
    problem:
      "Generic LLMs hallucinate case citations and statutory section numbers, making them dangerous for legal research without deterministic grounding.",
    approach:
      "Configured a strict RAG retrieval chain using LangChain, generating vector embeddings stored in MongoDB, with strict system prompt guardrails requiring verified case law citations.",
    technicalDecisions: [
      "Specialized legal document chunking with 512-token overlap around statutory section citations.",
      "Cosine distance ranking to ensure only high-confidence precedents reach the LLM context window.",
      "Socket.io token streaming providing immediate UI rendering while the model generates statutory analyses."
    ],
    challenges:
      "Preserving legal hierarchy and statutory amendments across multi-decade case law corpora.",
    result:
      "Functional RAG platform delivering grounded statutory retrieval and real-time citation streaming."
  },
  {
    id: "smart-parking",
    slug: "smart-parking",
    title: "Smart Parking Slot Reservation System",
    subtitle: "Real-Time Sensor & Slot Management Architecture",
    category: "Full-Stack",
    status: "OPEN SOURCE",
    confidence: "0.97",
    oneLiner:
      "MERN-based slot reservation platform with live bay telemetry, automated booking lifecycle, and parking analytics.",
    role: "Full-Stack Architect",
    period: "2025",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    impactBullets: [
      "Architected end-to-end slot reservation architecture with atomic MongoDB transactions to eliminate double-booking race conditions.",
      "Implemented interactive real-time visual parking bay map reflecting occupied, reserved, and available slots.",
      "Engineered automated session expiration workflows and role-based operator dashboards."
    ],
    links: {
      github: "https://github.com/Avinash-Kolipaka/Smart-Parking-Slot-Reservation-System",
      live: "[ADD: live URL]",
      demoType: "smartParking"
    },
    overview:
      "A modern urban parking management platform designed to eliminate congestion caused by circulating vehicles searching for parking spaces.",
    problem:
      "Urban parking inefficiencies result in wasted fuel, urban gridlock, and lack of real-time visibility for drivers and parking operators.",
    approach:
      "Constructed an atomic slot state engine where reservation requests trigger timed lock leases, preventing concurrent conflict reservations.",
    technicalDecisions: [
      "Atomic findOneAndUpdate lease mechanics in MongoDB with TTL auto-expiry for unpaid holds.",
      "Clean RESTful API contracts separated into authentication, slot allocation, and audit reporting services.",
      "Responsive grid visualizer providing immediate feedback on slot statuses."
    ],
    challenges:
      "Handling simultaneous peak reservation spikes while ensuring zero database deadlocks or slot collisions.",
    result:
      "Successfully open-sourced repository with modular client and server architecture."
  },
  {
    id: "soil-testing",
    slug: "soil-testing",
    title: "Soil Testing & Fertilizer Recommendation System",
    subtitle: "Agronomic Chemistry & Crop Advisory Engine",
    category: "AI/RAG",
    status: "COMPLETED",
    confidence: "0.94",
    oneLiner:
      "Decision-support system analyzing soil chemical composition (NPK, pH) to recommend optimal fertilizer strategies.",
    role: "Developer",
    period: "2025",
    stack: ["Python", "Flask", "Machine Learning", "Tailwind CSS"],
    impactBullets: [
      "Developed an algorithmic recommendation engine evaluating soil N-P-K ratios and pH levels to diagnose nutrient deficiencies.",
      "Provided actionable crop-specific fertilizer schedules to reduce chemical runoff and improve crop yields.",
      "Engineered a lightweight Flask API interface for rapid agronomic field queries."
    ],
    links: {
      github: "https://github.com/Avinash-Kolipaka",
      live: "[ADD: live URL]"
    },
    overview:
      "Built to empower agricultural stakeholders with immediate data-driven fertilizer schedules tailored to specific soil chemical inputs.",
    problem:
      "Excessive or inappropriate fertilizer usage degrades soil biodiversity, increases farmer overhead, and pollutes local water tables.",
    approach:
      "Mapped soil chemical profiles against agronomic crop requirements using rule engines and ML classifiers.",
    technicalDecisions: [
      "Built deterministic chemical fallback tables alongside statistical ML models to ensure 100% reliable advice.",
      "Lightweight backend footprint designed to run efficiently even on edge agricultural gateways."
    ],
    challenges:
      "Calibrating advice across diverse soil moisture bands and localized crop variants.",
    result:
      "Complete advisory application delivering instant fertilizer dosage schedules."
  },
  {
    id: "uniportal",
    slug: "uniportal",
    title: "UniPortal & Developer Utilities",
    subtitle: "Laravel Event Platform & Text Tooling Suite",
    category: "Full-Stack",
    status: "COMPLETED",
    confidence: "0.92",
    oneLiner:
      "Campus event management platform built with Laravel alongside modular text formatting developer utilities.",
    role: "Developer",
    period: "2024",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    impactBullets: [
      "Built a campus event coordination platform handling student registrations, ticketing, and event scheduling.",
      "Architected relational database schemas in MySQL with role-based access control for student organizers and administrators.",
      "Created an automated email text formatter utility to streamline technical communications."
    ],
    links: {
      github: "https://github.com/Avinash-Kolipaka",
      live: "[ADD: live URL]"
    },
    overview:
      "Enterprise campus coordination system developed with Laravel MVC architecture, complemented by specialized text formatting tools.",
    problem:
      "Fragmented university communications and disjointed event registration workflows across departmental silos.",
    approach:
      "Designed a consolidated relational data schema unifying authentication, venue scheduling, and attendee tracking.",
    technicalDecisions: [
      "Leveraged Laravel Eloquent ORM with eager loading to prevent N+1 query overhead.",
      "Strict relational foreign key constraints and automated transactional rollback on registration failures."
    ],
    challenges:
      "Managing high-volume concurrency during campus festival ticket drop events.",
    result:
      "Stable multi-departmental portal used for campus event tracking."
  }
];

export interface PatentItem {
  id: string;
  type: "GRANTED PATENT" | "PATENT DISCLOSURE";
  title: string;
  grantDate: string;
  applicationNumber: string;
  jurisdiction: string;
  status: string;
  abstract: string;
  keyInnovations: string[];
  techTags: string[];
}

export const patents: PatentItem[] = [
  {
    id: "motorcycle-safety-patent",
    type: "GRANTED PATENT",
    title: "AI-Based Motorcycle Rider Safety System",
    grantDate: "April 2025 (Granted)",
    applicationNumber: "Official Patent Reference # [ADD: Patent Number]",
    jurisdiction: "Intellectual Property Office of India",
    status: "OFFICIALLY GRANTED",
    abstract:
      "A novel real-time edge artificial intelligence system designed to continuously monitor motorcycle rider biomechanics, road hazards, and helmet compliance, triggering active preventative alerts to avoid collision events.",
    keyInnovations: [
      "Edge-optimized computer vision model detecting rider posture anomalies and distraction states.",
      "Real-time sensor fusion combining accelerometer data with optical hazard detection.",
      "Autonomous safety telemetry broadcasting emergency alerts upon anomalous deceleration signatures."
    ],
    techTags: ["Computer Vision", "Edge AI", "Safety Systems", "Sensor Fusion", "Granted IP"]
  },
  {
    id: "pharma-qr-disclosure",
    type: "PATENT DISCLOSURE",
    title: "Pharmaceutical Blister Packaging System Using Cryptographically Linked Micro-QR Codes",
    grantDate: "Filed / Disclosed",
    applicationNumber: "Patent Disclosure Reference # [ADD: Disclosure Number]",
    jurisdiction: "Intellectual Property Office of India",
    status: "DISCLOSED & FILED",
    abstract:
      "An anti-counterfeiting serialization architecture integrating microscopic cryptographically signed QR codes directly onto pharmaceutical blister foils, enabling unit-dose verification throughout cold-chain distribution.",
    keyInnovations: [
      "Micro-QR optical encoding resistant to physical packaging shear and foil deformation.",
      "Cryptographic signature linkage verifying unbroken provenance from manufacturing to patient dispensing.",
      "High-speed machine vision verification pipeline for automated packaging conveyor lines."
    ],
    techTags: ["Micro-QR", "Cryptography", "Machine Vision", "Anti-Counterfeit", "Pharmaceutical IP"]
  }
];
