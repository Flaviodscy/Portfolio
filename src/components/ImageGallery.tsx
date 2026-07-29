"use client";

import { useState } from "react";

interface ImageItem {
  file: string;
  alt: string;
}

export default function ImageGallery({ title, images }: { title: string; images: ImageItem[] }) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

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
            <img
              src={`/images/projects/branding-visual-experiments/${img.file}`}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.parentElement!.innerHTML = `
                  <div class="absolute inset-0 flex items-center justify-center text-gray-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>`;
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
            src={`/images/projects/branding-visual-experiments/${images[modalIndex].file}`}
            alt={images[modalIndex].alt}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
