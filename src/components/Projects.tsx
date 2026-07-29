"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const goNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((prev) => (prev + 1) % total);
  };
  const goPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const project = projects[index];
  const isMotion = project.category === "motion";

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">
            Selected <span className="gradient-text">work</span>
          </h3>
        </div>

        {/* Arrow carousel */}
        <div className="reveal relative select-none">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/15 bg-[#0a0f0d]/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-green-500/20 hover:border-green-400/30 transition-all cursor-pointer group"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="group-hover:-translate-x-0.5 transition-transform">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/15 bg-[#0a0f0d]/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-green-500/20 hover:border-green-400/30 transition-all cursor-pointer group"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Card */}
          <div key={index} className="text-center space-y-8">
            {/* Image / thumbnail area */}
            <div className={`mx-auto w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${isMotion ? "from-green-500/15 to-emerald-600/15" : "from-cyan-500/15 to-emerald-500/15"} border border-white/[0.06] relative`}>
              {project.slug === "branding-visual-experiments" && (
                <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-4">
                  {["SanGo", "bonne pooch", "Laura leone"].map((name, i) => (
                    <div key={name} className="rounded-lg bg-white/[0.03] flex items-center justify-center text-xs text-gray-600 border border-white/[0.04]">
                      {name}
                    </div>
                  ))}
                </div>
              )}
              {project.slug === "dickson-engraving" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5} className="text-green-300/20">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
              )}
              {project.slug === "autovisiontv" && (
                <div className="absolute inset-0 flex items-center justify-center gap-8">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-16 h-24 rounded-lg bg-white/[0.03] border border-white/[0.06]" />
                  ))}
                </div>
              )}
              {project.slug === "motion-for-screens" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5} className="text-green-300/20">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              )}
              {project.slug === "digital-signage-systems" && (
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="w-20 h-14 rounded bg-white/[0.03] border border-white/[0.06]" />
                  ))}
                </div>
              )}
              {project.slug === "experimental-interfaces" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5} className="text-emerald-300/20">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
              )}
            </div>

            {/* Project info */}
            <div className="space-y-3">
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${isMotion ? "bg-green-500/10 text-green-400" : "bg-emerald-500/10 text-emerald-400"}`}>
                {isMotion ? "Motion & Design" : "Development & Ops"}
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold leading-tight">
                {project.title}
              </h4>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/5 px-2.5 py-1 rounded text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Case Study button */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white/5 border border-white/[0.08] rounded-full text-sm font-medium hover:bg-green-500/10 hover:border-green-400/30 text-green-300 transition-all group cursor-pointer"
              >
                View Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Counter + dots */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <span className="text-sm text-gray-500 font-mono tabular-nums">
                {String(index + 1).padStart(2, "0")}
                <span className="mx-1 text-white/20">/</span>
                {String(total).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-green-400" : "w-4 bg-white/20 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
