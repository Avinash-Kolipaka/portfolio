export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "INDUSTRY" | "TEACHING" | "ACADEMICS";
  summary: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "corteva",
    role: "AI/ML Backend Developer Intern",
    organization: "Corteva Agriscience",
    period: "Apr 2026 – Jul 2026",
    location: "Agritech Vision R&D",
    type: "INDUSTRY",
    summary:
      "Architected computer-vision pipelines and modularized Python video-processing microservices for automated agricultural phenotyping at enterprise scale.",
    highlights: [
      "Built a Python video-processing toolkit featuring 18+ modular functions across preprocessing and postprocessing, restructured into a production-ready importable package ('video_toolkit').",
      "Engineered an automated video-based corn ear and kernel phenotyping pipeline using YOLOv8-seg deployed on turntable video capture rigs.",
      "Integrated rigorous image-quality metrics including BRISQUE, SSIM, and Laplacian variance to filter out blurry and low-fidelity frames before segmentation.",
      "Packaged workloads into lightweight Docker containers orchestrated with Kubernetes on Azure AKS microservice clusters for distributed agritech data processing."
    ],
    skills: ["Python", "OpenCV", "YOLOv8-seg", "Docker", "Kubernetes", "Azure AKS", "BRISQUE", "SSIM", "video_toolkit"]
  },
  {
    id: "teaching",
    role: "Technical Instructor & Mentor",
    organization: "STEM Pedagogy & Problem Solving",
    period: "Ongoing",
    location: "Telangana & Punjab",
    type: "TEACHING",
    summary:
      "Instructs JEE, NEET, and B.Tech engineering students in foundational physics, mathematics, and algorithmic computer science decomposition.",
    highlights: [
      "Mentored university and pre-engineering aspirants through rigorous algorithmic decomposition and structured problem solving.",
      "Delivered focused coursework on dynamic programming, pointer mechanics, and recursive paradigms."
    ],
    skills: ["Algorithms", "DP Patterns", "Pedagogy", "Mathematics"]
  },
  {
    id: "lpu",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Lovely Professional University",
    period: "Aug 2023 – Present (Final-Year)",
    location: "Punjab, India",
    type: "ACADEMICS",
    summary:
      "Pursuing computer science specialization with rigorous focus on high-performance backends, computer vision, and distributed systems design.",
    highlights: [
      "Engineered full-stack capstone architectures and production-tested vision microservices.",
      "Solved 160+ DSA problems across GeeksforGeeks and LeetCode with emphasis on dynamic programming and graph traversals.",
      "Authored 1 granted patent and 1 patent disclosure filed with the Intellectual Property Office of India."
    ],
    skills: ["DSA", "Operating Systems", "Distributed Systems", "Computer Networks"]
  }
];
