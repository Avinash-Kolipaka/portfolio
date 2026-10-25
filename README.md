# The Vision Engineer // Kolipaka Avinash
> **World-Class Personal Portfolio & Engineering Telemetry Dashboard**
> *AI/ML Backend Developer · Computer Vision · Full-Stack*

Designed and engineered at an Awwwards / FWA level. The portfolio is themed as an empirical **live computer-vision detection feed** that scans, bounds, and verifies real-world systems, pipelines, and engineering accomplishments.

---

## ⚡ Architectural Highlights
- **Framework**: Next.js 16 (App Router) with Strict TypeScript
- **Rendering**: 100% Pre-rendered Static HTML (SSG) with `generateStaticParams`
- **HUD & Detection Motifs**:
  - Thin electric-lime (`#C6FF3D`) corner brackets snapping onto interactive targets
  - Real-time confidence score pills (`CONF: 0.99`) and classification labels
  - Snapping crosshair cursor with lock-on mechanics (desktop only)
  - Continuous telemetry frame counter and live IST clock
  - Bootloader terminal initialization sequence (≤ 1.5s, skippable)
  - ⌘K / `/` Command Palette for rapid section navigation
- **Interactive Sandboxes & Architectural Blueprints**:
  - **Corteva Phenotyping Pipeline**: Scrubbed multi-stage computer vision workflow
  - **StartupMatch**: Interactive 0–100 compatibility algorithm slider
  - **Smart Parking**: Real-time bay occupancy toggle with atomic lease simulation
  - **VERDIQ**: Grounded legal precedent retrieval simulation with cosine ranking
  - Dedicated specification pages at `/projects/[slug]`
- **Zero Fabrication**: All metrics (160+ DSA problems, 1 granted patent, Corteva agritech microservices, MERN systems) strictly grounded in verified facts.

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- Node.js `>= 18.17.0`
- npm `>= 9.0.0`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Avinash-Kolipaka/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Environment Setup (Optional)
```bash
cp .env.example .env.local
```
*Note: If no Formspree key is provided, the contact form seamlessly and reliably falls back to a pre-filled client mailto transmission protocol. It never displays fake success.*

### 4. Running the Dev Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the live detection feed.

### 5. Production Build & Static Validation
```bash
npm run build
npm run start
```

---

## 🗂️ Content Customization Guide

All personal text, credentials, metrics, and project data are decoupled from components into typed data files under `src/data/`:

| File | Purpose |
|---|---|
| `src/data/profile.ts` | Identity, editorial narrative, operating principles, core metrics, contact links |
| `src/data/projects.ts` | 6 verified projects (overview, problem, approach, technical decisions, result, stack) & IP Vault patents |
| `src/data/experience.ts` | Corteva Agriscience internship, STEM teaching role, LPU degree timeline |
| `src/data/skills.ts` | Categorized detected competencies with exact "where I used it" verifications |

---

## 📋 Verified Placeholders Checklist
Whenever new assets or live deployments become available, update the following clearly marked placeholders:

- [ ] `[ADD: CV PDF]`: Place your updated resume PDF at `public/resume.pdf`.
- [ ] `[ADD: Patent Number]`: Replace with official Indian Patent reference number in `src/data/projects.ts` (`motorcycle-safety-patent`).
- [ ] `[ADD: Disclosure Number]`: Replace with official patent disclosure reference in `src/data/projects.ts` (`pharma-qr-disclosure`).
- [ ] `[ADD: live URLs]`: Add live deployment URLs for StartupMatch, VERDIQ, Smart Parking, and Soil Testing in `src/data/projects.ts`.
- [ ] `[ADD: certificates]`: Add hackathon & certification verification credentials in `src/data/projects.ts` and `src/components/sections/ProofOfWork.tsx`.

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`
5. (Optional) Add `NEXT_PUBLIC_FORMSPREE_KEY` under Environment Variables.
6. Click **Deploy**. Vercel will automatically run `next build` and generate all static pages and OG tags.

---

## 📄 License & Attribution
Designed & Engineered by **Kolipaka Avinash** (2026).
All rights reserved. Built with Next.js, Tailwind CSS, and Framer Motion.
