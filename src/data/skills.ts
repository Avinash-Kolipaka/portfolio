export interface SkillItem {
  id: string;
  name: string;
  category: "AI & Vision" | "Cloud & DevOps" | "Full-Stack" | "Fundamentals";
  confidence: string;
  whereUsed: string;
  level: string;
}

export const skills: SkillItem[] = [
  {
    id: "python",
    name: "Python",
    category: "AI & Vision",
    confidence: "0.99",
    whereUsed: "Corteva Agriscience, video_toolkit, VERDIQ, DSA",
    level: "Production Tested"
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "AI & Vision",
    confidence: "0.98",
    whereUsed: "video_toolkit: 18+ functions, turntable preprocessing",
    level: "Production Tested"
  },
  {
    id: "yolov8",
    name: "YOLOv8 & YOLOv8-seg",
    category: "AI & Vision",
    confidence: "0.98",
    whereUsed: "Corteva corn ear & kernel instance segmentation",
    level: "Production Tested"
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "AI & Vision",
    confidence: "0.96",
    whereUsed: "VERDIQ: Semantic legal document retrieval & RAG",
    level: "Production Tested"
  },
  {
    id: "rag",
    name: "RAG & Vector Embeddings",
    category: "AI & Vision",
    confidence: "0.95",
    whereUsed: "VERDIQ: Case law chunking & MongoDB vector search",
    level: "Production Tested"
  },
  {
    id: "quality-metrics",
    name: "Image Quality Metrics",
    category: "AI & Vision",
    confidence: "0.97",
    whereUsed: "BRISQUE, SSIM, Laplacian variance in video_toolkit",
    level: "Production Tested"
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    confidence: "0.98",
    whereUsed: "Containerizing video_toolkit microservices at Corteva",
    level: "Production Tested"
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Cloud & DevOps",
    confidence: "0.96",
    whereUsed: "Orchestrating agritech processing workloads on AKS",
    level: "Production Tested"
  },
  {
    id: "azure-aks",
    name: "Azure AKS",
    category: "Cloud & DevOps",
    confidence: "0.96",
    whereUsed: "Corteva cloud microservice clusters for phenotyping",
    level: "Production Tested"
  },
  {
    id: "react",
    name: "React.js",
    category: "Full-Stack",
    confidence: "0.98",
    whereUsed: "StartupMatch, Smart Parking System, VERDIQ client",
    level: "Production Tested"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Full-Stack",
    confidence: "0.98",
    whereUsed: "StartupMatch backend, Smart Parking REST APIs",
    level: "Production Tested"
  },
  {
    id: "express",
    name: "Express.js",
    category: "Full-Stack",
    confidence: "0.97",
    whereUsed: "Role-based REST APIs, authentication middleware",
    level: "Production Tested"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Full-Stack",
    confidence: "0.97",
    whereUsed: "MERN stack persistence, atomic slot leases, vector storage",
    level: "Production Tested"
  },
  {
    id: "socketio",
    name: "Socket.io",
    category: "Full-Stack",
    confidence: "0.97",
    whereUsed: "StartupMatch real-time messaging, VERDIQ token stream",
    level: "Production Tested"
  },
  {
    id: "jwt",
    name: "JWT Authentication",
    category: "Full-Stack",
    confidence: "0.97",
    whereUsed: "Secure stateless auth across StartupMatch & Smart Parking",
    level: "Production Tested"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Full-Stack",
    confidence: "0.99",
    whereUsed: "The Vision Engineer, StartupMatch, Smart Parking",
    level: "Production Tested"
  },
  {
    id: "flask",
    name: "Flask",
    category: "Full-Stack",
    confidence: "0.94",
    whereUsed: "Soil Testing advisory API, lightweight ML serving",
    level: "Production Tested"
  },
  {
    id: "sql",
    name: "SQL & Relational DBs",
    category: "Full-Stack",
    confidence: "0.95",
    whereUsed: "UniPortal MySQL schemas, relational normalization",
    level: "Production Tested"
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    category: "Fundamentals",
    confidence: "0.99",
    whereUsed: "160+ GFG problems, DP patterns, LeetCode Hards",
    level: "Core Competency"
  },
  {
    id: "hld",
    name: "High-Level System Design (HLD)",
    category: "Fundamentals",
    confidence: "0.96",
    whereUsed: "Microservice decoupling, distributed stream pipelines",
    level: "Core Competency"
  },
  {
    id: "dp",
    name: "Dynamic Programming (DP)",
    category: "Fundamentals",
    confidence: "0.98",
    whereUsed: "Optimal substructure & memoization algorithms",
    level: "Core Competency"
  },
  {
    id: "geekstreak",
    name: "GeekStreak60 (GFG × NPCI)",
    category: "Fundamentals",
    confidence: "0.97",
    whereUsed: "Rigorous 60-day algorithmic consistency challenge",
    level: "Core Competency"
  }
];
