"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

type Category = "all" | "motion" | "dev";

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "Selected Work" },
  { id: "motion", label: "Motion & Design" },
  { id: "dev", label: "Development & Ops" },
];

const PROJECT_COLORS: Record<number, [string, string]> = {
  1: ["#4ade80", "#22c55e"],       // AutoVisionTV — green
  2: ["#f97316", "#ea580c"],       // Motion for screens — orange
  3: ["#2dd4bf", "#14b8a6"],       // Digital signage — teal
  4: ["#facc15", "#eab308"],       // Dickson — yellow
  5: ["#a78bfa", "#8b5cf6"],       // Branding identity — purple
  6: ["#38bdf8", "#0ea5e9"],       // Experimental — sky blue
};

function ProjectPlaceholder({ color1, color2 }: { color1: string; color2: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color1}25, ${color2}10)` }} />

      {/* Decorative circles */}
      <div className="absolute top-4 right-8 w-20 h-20 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${color1}, transparent)` }} />
      <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full opacity-15" style={{ background: `radial-gradient(circle, ${color2}, transparent)` }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `linear-gradient(${color1}33 1px, transparent 1px), linear-gradient(90deg, ${color1}33 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 ${color1 === "#4ade80" || color1 === "#a78bfa" ? "border-white/10" : "border-white/15"}`} style={{ background: `${color1}15` }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color1} strokeWidth={1.5} className="opacity-60">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm">
        <span className="text-[10px] text-white/60 font-mono">drop mockup here</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const [visible, setVisible] = useState<typeof projects>(projects);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);
    setVisible(filtered);
  }, [active]);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">
            Selected <span className="gradient-text">work</span>
          </h3>

          {/* Filter tabs */}
          <div className="inline-flex gap-1 bg-white/5 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === tab.id
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6 stagger-children">
          {visible.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden card-hover"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image area */}
              <div className="relative h-48 overflow-hidden">
                <ProjectPlaceholder color1={PROJECT_COLORS[project.id]?.[0] || "#4ade80"} color2={PROJECT_COLORS[project.id]?.[1] || "#22c55e"} />
                {/* Overlay on hover */}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 animate-fade-in">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    project.category === "motion" ? "bg-green-500/10 text-green-400" : "bg-emerald-500/10 text-emerald-400"
                  }`}>
                    {project.category === "motion" ? "Design" : "Dev"}
                  </span>
                </div>
                <h4 className="text-lg font-bold leading-snug group-hover:text-green-300 transition-colors">{project.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder file reference */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Place card image at: <code className="bg-white/5 px-1.5 py-0.5 rounded text-gray-500">public/images/projects/{projects[0]?.slug}/card.jpg</code>
          </p>
        </div>
      </div>
    </section>
  );
}
