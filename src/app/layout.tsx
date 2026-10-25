import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#07090C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kolipaka Avinash | AI/ML & Full-Stack Engineer",
  description:
    "AI/ML Backend Developer · Computer Vision · Full-Stack Engineer. Building computer-vision pipelines (YOLOv8-seg, OpenCV) and scalable distributed systems (Docker, Kubernetes, Azure AKS, MERN).",
  keywords: [
    "Kolipaka Avinash",
    "Avinash Kolipaka",
    "Computer Vision Engineer",
    "AI ML Backend Developer",
    "YOLOv8-seg",
    "Corteva Agriscience",
    "Azure AKS",
    "MERN Stack Developer",
    "Lovely Professional University"
  ],
  authors: [{ name: "Kolipaka Avinash", url: "https://github.com/Avinash-Kolipaka" }],
  creator: "Kolipaka Avinash",
  metadataBase: new URL("https://avinash-kolipaka.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avinash-kolipaka.vercel.app",
    title: "Kolipaka Avinash | AI/ML & Full-Stack Engineer",
    description:
      "I build systems that see, think, and ship. Computer Vision pipelines, Azure AKS microservices, and high-performance full-stack architectures.",
    siteName: "The Vision Engineer - Kolipaka Avinash",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolipaka Avinash | AI/ML & Full-Stack Engineer",
    description: "I build systems that see, think, and ship. AI/ML Backend Developer · Computer Vision · Full-Stack.",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kolipaka Avinash",
    alternateName: "Avinash Kolipaka",
    jobTitle: "AI/ML Backend Developer & Full-Stack Engineer",
    url: "https://avinash-kolipaka.vercel.app",
    sameAs: [
      "https://github.com/Avinash-Kolipaka",
      "https://linkedin.com/in/avinash-kolipaka"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lovely Professional University"
    },
    knowsAbout: [
      "Computer Vision",
      "YOLOv8",
      "OpenCV",
      "Python",
      "Azure AKS",
      "Kubernetes",
      "Docker",
      "MERN Stack",
      "LangChain",
      "RAG"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#07090C] text-[#EDEFF2] selection:bg-[#C6FF3D]/20 selection:text-[#C6FF3D] min-h-screen relative`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C6FF3D] focus:text-[#07090C] focus:font-mono focus:text-sm font-semibold rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
