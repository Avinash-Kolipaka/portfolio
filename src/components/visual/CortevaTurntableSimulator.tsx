"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scan, 
  RotateCw, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Eye, 
  Cloud, 
  Database, 
  Compass, 
  Sliders,
  ChevronRight,
  Code2,
  Terminal,
  Zap
} from "lucide-react";

type PipelineStage = "raw" | "quality" | "yolov8" | "morphometrics" | "cloud";

interface ToolkitFunction {
  name: string;
  category: "Quality Gate" | "Preprocessing" | "Segmentation" | "Cloud Pipeline";
  description: string;
  signature: string;
  latency: string;
  status: "Production" | "Optimized";
}

const TOOLKIT_FUNCTIONS: ToolkitFunction[] = [
  {
    name: "gate_laplacian_blur()",
    category: "Quality Gate",
    description: "Computes variance of the Laplacian across 360° video frames; rejects motion-blurred turntable frames before neural ingestion.",
    signature: "def gate_laplacian_blur(frame: np.ndarray, thresh: float = 120.0) -> Tuple[bool, float]",
    latency: "1.4 ms",
    status: "Production"
  },
  {
    name: "score_brisque_quality()",
    category: "Quality Gate",
    description: "Evaluates no-reference spatial quality score using natural scene statistics; enforces minimum perceptual fidelity on specimens.",
    signature: "def score_brisque_quality(frame: np.ndarray) -> float",
    latency: "4.8 ms",
    status: "Production"
  },
  {
    name: "filter_ssim_duplicates()",
    category: "Quality Gate",
    description: "Structural Similarity Index metric filter to eliminate redundant turntable steps and stabilize temporal consistency.",
    signature: "def filter_ssim_duplicates(prev: np.ndarray, curr: np.ndarray, ssim_thresh: float = 0.96) -> bool",
    latency: "2.1 ms",
    status: "Optimized"
  },
  {
    name: "normalize_turntable_illumination()",
    category: "Preprocessing",
    description: "Adaptive CLAHE and gamma curve adjustment to cancel specular highlights on damp green leaf cuticles under high-CRI LEDs.",
    signature: "def normalize_turntable_illumination(bgr: np.ndarray, clip_limit: float = 2.0) -> np.ndarray",
    latency: "3.2 ms",
    status: "Production"
  },
  {
    name: "isolate_specimen_background()",
    category: "Preprocessing",
    description: "Dual-stage Otsu thresholding + MOG2 kinematic background subtraction tailored to the turntable anti-reflective black stage.",
    signature: "def isolate_specimen_background(frame: np.ndarray, mask_stage: bool = True) -> np.ndarray",
    latency: "2.8 ms",
    status: "Production"
  },
  {
    name: "infer_yolov8_segmentation()",
    category: "Segmentation",
    description: "Executes quantized TensorRT/ONNX YOLOv8-seg inference returning polygon contours for ear, stalk, tassel, and nodal roots.",
    signature: "def infer_yolov8_segmentation(img: np.ndarray, conf: float = 0.55) -> List[PhenotypeMask]",
    latency: "11.2 ms",
    status: "Optimized"
  },
  {
    name: "measure_stem_caliper()",
    category: "Segmentation",
    description: "Calculates sub-millimeter stalk thickness via perpendicular Euclidean distance transform along the central stalk spline.",
    signature: "def measure_stem_caliper(stalk_mask: np.ndarray, mm_per_px: float) -> CaliperResult",
    latency: "1.6 ms",
    status: "Production"
  },
  {
    name: "compute_leaf_insertion_angle()",
    category: "Segmentation",
    description: "Extracts leaf rachis angle relative to vertical stalk vector using PCA eigenvector decomposition of segmented leaf masks.",
    signature: "def compute_leaf_insertion_angle(leaf_mask: np.ndarray, stalk_vector: np.ndarray) -> float",
    latency: "2.3 ms",
    status: "Production"
  },
  {
    name: "publish_aks_phenotype_stream()",
    category: "Cloud Pipeline",
    description: "Asynchronous zero-copy stream of serialized morphometric vectors and compressed masks to Azure Kubernetes Service microservices.",
    signature: "async def publish_aks_phenotype_stream(specimen_id: str, payload: PhenotypePayload) -> Response",
    latency: "8.5 ms",
    status: "Production"
  }
];

export function CortevaTurntableSimulator() {
  const [activeStage, setActiveStage] = useState<PipelineStage>("yolov8");
  const [rotationAngle, setRotationAngle] = useState<number>(45);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [selectedFunc, setSelectedFunc] = useState<ToolkitFunction>(TOOLKIT_FUNCTIONS[0]);
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);

  // Auto rotation
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + rotationSpeed) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isRotating, rotationSpeed]);

  const stages: { id: PipelineStage; label: string; tag: string; icon: any }[] = [
    { id: "raw", label: "01. Optical Stream", tag: "4K Raw", icon: Eye },
    { id: "quality", label: "02. BRISQUE / Blur Gate", tag: "Quality Filter", icon: CheckCircle2 },
    { id: "yolov8", label: "03. YOLOv8-seg Masks", tag: "Neural Inference", icon: Scan },
    { id: "morphometrics", label: "04. 3D Morphometrics", tag: "Phenotyping", icon: Sliders },
    { id: "cloud", label: "05. Azure AKS Deploy", tag: "Microservices", icon: Cloud },
  ];

  return (
    <div className="w-full bg-[#0D121D] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Telemetry Header */}
      <div className="bg-[#0A0E17] border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                CORTEVA AGRISCIENCE // VISION LAB
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ACTIVE LAB TELEMETRY
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              360° Automated Turntable Phenotyping Rig &bull; Video_Toolkit v2.4
            </p>
          </div>
        </div>

        {/* Live Rig Readouts */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-slate-500 text-[10px]">TURNTABLE AZIMUTH</span>
            <span className="text-cyan-400 font-semibold">{rotationAngle.toFixed(1)}°</span>
          </div>
          <div className="hidden md:flex flex-col text-right">
            <span className="text-slate-500 text-[10px]">INSPECTION FPS</span>
            <span className="text-emerald-400 font-semibold">60.0 FPS</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1.5">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`px-2.5 py-1 text-[11px] rounded transition-all flex items-center gap-1.5 ${
                isRotating ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "text-slate-400 hover:text-white"
              }`}
            >
              <RotateCw className={`w-3 h-3 ${isRotating ? "animate-spin" : ""}`} />
              <span>{isRotating ? "ROTATING" : "PAUSED"}</span>
            </button>
            <div className="flex items-center gap-1 text-[11px] px-2 text-slate-400">
              <span>{rotationSpeed}x</span>
              <button 
                onClick={() => setRotationSpeed((s) => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
                className="hover:text-cyan-400 ml-1 text-[10px] underline"
              >
                SPEED
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Vision Interface Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left / Center: Interactive 3D Turntable Specimen Viewport */}
        <div className="lg:col-span-7 bg-[#070A10] p-6 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10 min-h-[460px]">
          {/* Stage Selector Pills */}
          <div className="flex flex-wrap gap-2 mb-4 z-10">
            {stages.map((st) => {
              const Icon = st.icon;
              const isActive = activeStage === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(st.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all ${
                    isActive
                      ? "bg-white text-slate-950 font-bold shadow-lg shadow-white/10"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Turntable Graphical Canvas */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden rounded-xl bg-gradient-to-b from-[#0B0F19] to-[#04070D] border border-white/5">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0f_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0f_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Concentric Turntable Angle Ring */}
            <div className="absolute w-72 h-72 rounded-full border border-dashed border-cyan-500/20 flex items-center justify-center animate-spin-slow pointer-events-none">
              <div className="absolute -top-3 text-[9px] font-mono text-cyan-500/60 bg-[#070A10] px-1">000°</div>
              <div className="absolute -bottom-3 text-[9px] font-mono text-cyan-500/60 bg-[#070A10] px-1">180°</div>
              <div className="absolute -left-3 text-[9px] font-mono text-cyan-500/60 bg-[#070A10] px-1">270°</div>
              <div className="absolute -right-3 text-[9px] font-mono text-cyan-500/60 bg-[#070A10] px-1">090°</div>
            </div>

            {/* Turntable Platter Base 3D Illusion */}
            <div className="absolute bottom-6 w-64 h-16 rounded-[100%] bg-gradient-to-t from-slate-900 to-slate-800 border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex items-center justify-center">
              <div className="w-48 h-10 rounded-[100%] border border-cyan-400/40 flex items-center justify-center">
                <span className="text-[9px] font-mono text-cyan-400/80 tracking-widest">
                  PRECISION STEPPER MOTOR &bull; {rotationAngle.toFixed(0)}°
                </span>
              </div>
            </div>

            {/* Dynamic Specimen Hologram & Phenotyping Visualization */}
            <div 
              className="relative z-10 w-44 h-80 flex flex-col items-center justify-center transition-transform duration-75"
              style={{
                transform: `rotateY(${rotationAngle}deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Central Stalk Representation */}
              <div className={`w-3.5 h-64 rounded-full transition-colors duration-300 ${
                activeStage === "raw" ? "bg-emerald-600/90" :
                activeStage === "quality" ? "bg-slate-400" :
                activeStage === "yolov8" ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]" :
                activeStage === "morphometrics" ? "bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]" :
                "bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]"
              }`} />

              {/* Corn Ear Node */}
              <div 
                className={`absolute top-28 w-10 h-28 rounded-full border transition-all duration-300 flex items-center justify-center ${
                  activeStage === "raw" ? "bg-amber-500/70 border-amber-400/80" :
                  activeStage === "quality" ? "bg-slate-300/60 border-slate-400" :
                  activeStage === "yolov8" ? "bg-amber-400/40 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)]" :
                  activeStage === "morphometrics" ? "bg-cyan-500/30 border-dashed border-cyan-300" :
                  "bg-indigo-500/40 border-indigo-300"
                }`}
                style={{ transform: "rotate(-12deg) translateX(14px)" }}
              >
                {activeStage === "morphometrics" && (
                  <div className="absolute -right-20 top-2 bg-black/80 border border-cyan-400/60 text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded shadow">
                    L: 19.4cm &bull; D: 4.8cm
                  </div>
                )}
              </div>

              {/* Foliage Leaf Arcs */}
              <div 
                className={`absolute top-16 -left-12 w-20 h-16 rounded-tl-[60px] border-t-4 transition-all duration-300 ${
                  activeStage === "yolov8" ? "border-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "border-emerald-600/80"
                }`}
                style={{ transform: "rotate(-30deg)" }}
              />
              <div 
                className={`absolute top-24 -right-12 w-24 h-16 rounded-tr-[70px] border-t-4 transition-all duration-300 ${
                  activeStage === "yolov8" ? "border-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "border-emerald-600/80"
                }`}
                style={{ transform: "rotate(25deg)" }}
              />
              <div 
                className={`absolute top-44 -left-16 w-24 h-20 rounded-tl-[80px] border-t-4 transition-all duration-300 ${
                  activeStage === "yolov8" ? "border-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "border-emerald-600/80"
                }`}
                style={{ transform: "rotate(-40deg)" }}
              />

              {/* Tassel Header */}
              <div className="absolute top-2 flex flex-col items-center">
                <div className="w-1 h-8 bg-amber-300/80" />
                <div className="w-6 h-0.5 bg-amber-400/60" />
              </div>
            </div>

            {/* Neural Segmentation Overlay Bounding Boxes */}
            {activeStage === "yolov8" && (
              <div className="absolute inset-x-12 inset-y-10 pointer-events-none border border-emerald-500/40 rounded-lg">
                <div className="absolute top-2 left-2 bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
                  YOLOv8-seg &bull; corn_specimen: 0.98
                </div>
                <div className="absolute bottom-16 right-4 bg-amber-500 text-slate-950 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
                  ear_primary: 0.95
                </div>
                <div className="absolute top-14 right-8 bg-cyan-500 text-slate-950 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
                  leaf_node_03: 0.93
                </div>
              </div>
            )}

            {/* Morphometrics Dimension Caliper Lines */}
            {activeStage === "morphometrics" && (
              <div className="absolute inset-x-8 inset-y-8 pointer-events-none flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 border-b border-cyan-500/40 pb-1">
                  <span>PLANT HEIGHT (STEM APEX)</span>
                  <span className="font-bold text-white">186.2 cm &plusmn; 0.4mm</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 border-b border-cyan-500/40 pb-1">
                  <span>STEM CALIPER (BASAL INTERNODE)</span>
                  <span className="font-bold text-white">26.4 mm</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 border-b border-cyan-500/40 pb-1">
                  <span>LEAF INSERTION ANGLE (MEAN)</span>
                  <span className="font-bold text-white">38.6°</span>
                </div>
              </div>
            )}

            {/* Quality Blur Gate Readout */}
            {activeStage === "quality" && (
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-white/10 rounded-lg p-3 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    LAPLACIAN VARIANCE SCORE
                  </span>
                  <span className="font-bold text-white">384.2 (PASS &gt; 120.0)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    BRISQUE PERCEPTUAL QUALITY
                  </span>
                  <span className="font-bold text-white">22.8 (EXCELLENT &lt; 35.0)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-4 h-4" />
                    FRAME DECIMATION FILTER
                  </span>
                  <span className="font-bold text-white">360 frames &rarr; 72 key steps (5° step)</span>
                </div>
              </div>
            )}

            {/* Cloud Microservice Deployment Diagram */}
            {activeStage === "cloud" && (
              <div className="absolute inset-4 bg-slate-950/95 border border-cyan-500/30 rounded-xl p-4 flex flex-col justify-between text-xs font-mono">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-cyan-400 font-bold flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    AZURE KUBERNETES SERVICE (AKS) CLOUD PIPELINE
                  </span>
                  <span className="text-slate-400 text-[10px]">CLUSTER: corteva-pheno-prod</span>
                </div>

                <div className="grid grid-cols-4 gap-2 my-2 text-center">
                  <div className="bg-white/5 border border-white/10 p-2 rounded">
                    <span className="text-[10px] text-slate-400 block">EDGE RIG</span>
                    <span className="text-white font-bold">Turntable 4K</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-2 rounded">
                    <span className="text-[10px] text-cyan-400 block">INGESTION</span>
                    <span className="text-white font-bold">FastAPI Stream</span>
                  </div>
                  <div className="bg-white/5 border border-cyan-500/40 p-2 rounded bg-cyan-950/20">
                    <span className="text-[10px] text-emerald-400 block">INFERENCE</span>
                    <span className="text-white font-bold">YOLOv8 ONNX</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-2 rounded">
                    <span className="text-[10px] text-indigo-400 block">STORAGE</span>
                    <span className="text-white font-bold">Azure Blob SQL</span>
                  </div>
                </div>

                <div className="bg-black/60 p-2.5 rounded border border-white/5 text-[11px] text-slate-300 space-y-1">
                  <div className="text-emerald-400">&bull; Microservice: video_toolkit_worker (Pods: 4 Active)</div>
                  <div className="text-cyan-400">&bull; Latency: 18.2ms end-to-end / frame</div>
                  <div className="text-slate-400">&bull; Storage: azure-blob://phenotypes/2025/specimen_c9021.json</div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Viewport Status Line */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>FOV: 68.4° &bull; ILLUMINATION: 1850 LUX</span>
            </div>
            <div className="text-slate-500">
              SPECIMEN: Zea mays B73-INBRED
            </div>
          </div>
        </div>

        {/* Right: video_toolkit 18+ Functions Production Explorer */}
        <div className="lg:col-span-5 bg-[#0A0D15] p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <div>
                <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  video_toolkit PYTHON LIBRARY
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">
                  18+ specialized computer vision & quality gate utilities
                </p>
              </div>
              <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded">
                18 MODULES
              </span>
            </div>

            {/* Function Category Picker & Selector */}
            <div className="space-y-2 mb-4 max-h-[260px] overflow-y-auto pr-1">
              {TOOLKIT_FUNCTIONS.map((fn, idx) => (
                <button
                  key={fn.name}
                  onClick={() => setSelectedFunc(fn)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs font-mono flex items-center justify-between ${
                    selectedFunc.name === fn.name
                      ? "bg-white/10 border-cyan-500/50 text-white shadow"
                      : "bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-cyan-400 text-[11px] font-bold">0{idx + 1}</span>
                    <span className="truncate font-semibold text-slate-200">{fn.name}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] text-slate-500">{fn.latency}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </button>
              ))}
            </div>

            {/* Active Function Inspector Card */}
            <div className="bg-[#05070B] border border-white/10 rounded-xl p-4 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold">{selectedFunc.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {selectedFunc.category} &bull; {selectedFunc.latency}
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {selectedFunc.description}
              </p>
              <div className="bg-black/80 p-2.5 rounded border border-white/5 overflow-x-auto text-[10px] text-slate-300 font-mono">
                <code>{selectedFunc.signature}</code>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500 text-[11px]">
              Engineered at Corteva Agriscience
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                AKS Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CortevaTurntableSimulator;
