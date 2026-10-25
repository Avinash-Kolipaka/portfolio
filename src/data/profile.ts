export const profile = {
  identity: {
    name: "Kolipaka Avinash",
    monogram: "AK",
    title: "The Vision Engineer",
    roleLine: "AI/ML Backend Developer · Computer Vision · Full-Stack",
    statusPill: "Open to full-time roles & internships, 2026",
    location: "Punjab, India (Base) / Telangana, India (Origin)",
    affiliation: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    period: "Aug 2023 – Present (Final-Year)",
    languages: ["Telugu (Native)", "English", "Hindi"],
  },
  contact: {
    email: "avinashkolipaka01@gmail.com",
    github: "https://github.com/Avinash-Kolipaka",
    linkedin: "https://linkedin.com/in/avinash-kolipaka",
    cvUrl: "/resume.pdf", // [ADD: CV PDF]
  },
  editorial: {
    heroLead: "I build systems that see, think, and ship.",
    aboutIntro:
      "I am a final-year Computer Science engineer at Lovely Professional University who treats software as a physical measurement instrument.",
    aboutParagraphs: [
      "At Corteva Agriscience, I engineered an automated video-based corn ear and kernel phenotyping pipeline. Deploying physical turntable camera rigs meant dealing with rotational blur, uneven specular highlights, and real-world variance. To solve this, I authored a modular video_toolkit package containing 18+ preprocessing and geometric extraction functions, backed by quantitative filters (BRISQUE, SSIM, and Laplacian variance) and containerized microservices on Azure AKS.",
      "I bridge the gap between deep machine learning kernels and scalable web backends. Whether training YOLOv8-seg models for microscopic seed segmentation or engineering atomic database transactions in MERN platforms, I own the entire lifecycle from raw video frames to Kubernetes clusters.",
      "Outside engineering builds, I teach JEE, NEET, and B.Tech engineering students. Teaching forces absolute clarity: you cannot explain an algorithmic optimization or dynamic programming recurrence unless you truly understand every moving part."
    ],
    principles: [
      {
        id: "01",
        label: "Ship > Talk",
        detail: "Production code in containers beats theoretical whiteboards every time."
      },
      {
        id: "02",
        label: "Measure Everything",
        detail: "Computer vision and backends must be quantified: BRISQUE, SSIM, latency, and throughput."
      },
      {
        id: "03",
        label: "Own The Whole Stack",
        detail: "From YOLO segmentation models and OpenCV kernels to Azure AKS and MERN interfaces."
      },
      {
        id: "04",
        label: "Learn In Public",
        detail: "Solidify mastery by teaching JEE/NEET/B.Tech students and solving rigorous DSA."
      }
    ],
    stats: [
      {
        value: "160+",
        label: "DSA Problems Solved",
        sub: "GeeksforGeeks, DP & LeetCode Hards"
      },
      {
        value: "1",
        label: "Granted Patent",
        sub: "AI Motorcycle Rider Safety (April 2025)"
      },
      {
        value: "18+",
        label: "CV Toolkit Functions",
        sub: "Modular video_toolkit package at Corteva"
      },
      {
        value: "2",
        label: "Flagship Full-Stack Systems",
        sub: "StartupMatch & Smart Parking"
      }
    ]
  }
};
