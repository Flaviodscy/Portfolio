"use client";

import { useState } from "react";

interface ImageItem {
  file: string;
  alt: string;
}

// Brand accent colors for visual cards
const BRAND_COLORS: Record<string, [string, string]> = {
  SanGo: ["#4ade80", "#22c55e"],
  LOWKEY: ["#f97316", "#ea580c"],
  "Bonne Pooch": ["#a78bfa", "#8b5cf6"],
  "Laura Leone": ["#facc15", "#eab308"],
  "Leticia Barreto": ["#2dd4bf", "#14b8a6"],
  "Fernanda Vasques": ["#fb7185", "#f43f5e"],
  MehConnect: ["#38bdf8", "#0ea5e9"],
  "Open Studios": ["#c084fc", "#a855f7"],
};

function ImageCard({ brand, index }: { brand: string; index: number }) {
  const colors = BRAND_COLORS[brand] || ["#6b7280", "#4b5563"];
  // Fallback gradient background that matches the project card design
  return (
    <div className="w-full h-full overflow-hidden rounded-xl" style={{ background: `linear-gradient(135deg, ${colors[0]}20, ${colors[1]}10)` }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `linear-gradient(${colors[0]}33 1px, transparent 1px), linear-gradient(90deg, ${colors[0]}33 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
      {/* Decorative circles */}
      <div className="absolute top-2 right-4 w-10 h-10 rounded-full opacity-15" style={{ background: `radial-gradient(circle, ${colors[0]}, transparent)` }} />
      <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
        <span className="text-[9px] text-white/50 font-mono uppercase">mockup {index + 1}</span>
      </div>
    </div>
  );
}

export default function ImageGallery({ title, images, description }: { title: string; images: ImageItem[]; description?: string }) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  // Extract brand name from first image filename
  const brand = images[0].file.split(" ")[0];
  const colors = BRAND_COLORS[brand] || ["#6b7280", "#4b5563"];

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }} />
          {title}
        </h4>
        {description && (
          <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setModalIndex(i)}
            className="relative aspect-video rounded-xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] group cursor-pointer"
          >
            {/* Real image */}
            <img
              src={`/images/projects/branding-visual-experiments/${brand}/${img.file}`}
              alt={img.alt}
              className="w-full h-full object-cover opacity-100"
              onError={(e) => {
                // If real image fails, show branded placeholder card
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                if (!el.parentElement!.querySelector(".fallback-card")) {
                  const fb = document.createElement("div");
                  fb.className = "fallback-card absolute inset-0 rounded-xl";
                  fb.style.background = `linear-gradient(135deg, ${colors[0]}20, ${colors[1]}10)`;
                  fb.innerHTML = `<div class="absolute top-2 right-4 w-10 h-10 rounded-full opacity-15" style="background:radial-gradient(circle,${colors[0]},transparent)"></div><div class="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/40 backdrop-blur-sm"><span class="text-[9px] text-white/50 font-mono uppercase">drop ${img.file}</span></div>`;
                  el.parentElement!.appendChild(fb);
                }
              }}
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          onClick={() => setModalIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer p-2"
            onClick={() => setModalIndex(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {modalIndex > 0 && (
            <button
              className="absolute left-4 text-white/60 hover:text-white cursor-pointer p-2"
              onClick={(e) => { e.stopPropagation(); setModalIndex(modalIndex - 1); }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
          {modalIndex < images.length - 1 && (
            <button
              className="absolute right-4 text-white/60 hover:text-white cursor-pointer p-2"
              onClick={(e) => { e.stopPropagation(); setModalIndex(modalIndex + 1); }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
          <img
            src={`/images/projects/branding-visual-experiments/${brand}/${images[modalIndex].file}`}
            alt={images[modalIndex].alt}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
