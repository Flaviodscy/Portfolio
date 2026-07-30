"use client";

import { useState } from "react";

interface ImageItem {
  file: string;
  alt: string;
}

// Brand accent colors for placeholder cards
const BRAND_COLORS: Record<string, string[]> = {
  SanGo: ["#4ade80", "#22c55e", "#16a34a"],
  LOWKEY: ["#f97316", "#ea580c", "#dc2626"],
  "Bonne Pooch": ["#a78bfa", "#8b5cf6", "#7c3aed"],
  "Laura Leone": ["#facc15", "#eab308", "#ca8a04"],
  "Leticia Barreto": ["#2dd4bf", "#14b8a6", "#0d9488"],
  "Fernanda Vasques": ["#fb7185", "#f43f5e", "#e11d48"],
  MehConnect: ["#38bdf8", "#0ea5e9", "#0284c7"],
  "Open Studios": ["#c084fc", "#a855f7", "#9333ea"],
};

function PlaceholderCard({ brand, index }: { brand: string; index: number }) {
  const colors = BRAND_COLORS[brand] || ["#6b7280", "#4b5563", "#374151"];
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${colors[0]}22, ${colors[1]}11)` }}>
      <div className="text-center">
        <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm`} style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}>
          {brand.slice(0, 2).toUpperCase()}
        </div>
        <p className="text-[10px] text-gray-600 leading-tight px-1 truncate">{brand}</p>
      </div>
    </div>
  );
}

export default function ImageGallery({ title, images }: { title: string; images: ImageItem[] }) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  // Extract brand name from first image filename
  const brand = images[0].file.split(" ")[0];

  return (
    <div className="space-y-3">
      <h4 className="text-lg font-bold text-white">{title}</h4>
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
    </div>
  );
}
