"use client";

import { useState } from "react";

interface ImageItem {
  file: string;
  alt: string;
}

// Brand accent colors for placeholder cards
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

function PlaceholderCard({ brand, index }: { brand: string; index: number }) {
  const colors = BRAND_COLORS[brand] || ["#6b7280", "#4b5563"];
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl" style={{ background: `linear-gradient(135deg, ${colors[0]}20, ${colors[1]}10)` }}>
      {/* Decorative elements */}
      <div className="absolute top-2 right-4 w-12 h-12 rounded-full opacity-15" style={{ background: `radial-gradient(circle, ${colors[0]}, transparent)` }} />
      <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
        <span className="text-[9px] text-white/50 font-mono uppercase">mockup {index + 1}</span>
      </div>
      {/* Center icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border border-white/[0.08]`} style={{ background: `${colors[0]}12` }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors[0]} strokeWidth={1.5} className="opacity-50">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    </div>
  );
}

export default function ImageGallery({ title, images }: { title: string; images: ImageItem[] }) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  // Extract brand name from first image filename
  const brand = images[0].file.split(" ")[0];
  const colors = BRAND_COLORS[brand] || ["#6b7280", "#4b5563"];

  return (
    <div className="space-y-3">
      <h4 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }} />
        {title}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setModalIndex(i)}
            className="relative aspect-video rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06] group cursor-pointer"
          >
            <PlaceholderCard brand={brand} index={i} />
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
          <PlaceholderCard brand={brand} index={modalIndex} />
        </div>
      )}

      {/* Replace instruction */}
      <p className="text-xs text-gray-600 mt-2">
        Drop mockup images into: <code className="bg-white/5 px-1 py-0.5 rounded">public/images/projects/branding-visual-experiments/{brand}/</code>
      </p>
    </div>
  );
}
