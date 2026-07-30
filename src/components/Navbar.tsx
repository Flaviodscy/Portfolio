"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const bgClass = scrolled
    ? "bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-b border-[var(--border-color)]"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-xl font-bold gradient-text cursor-pointer"
        >
          Flavio Gorodscy
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              {s.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="ml-4 flex items-center gap-2 text-sm"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <span className="text-lg">{theme === "light" ? "☀️" : "🌙"}</span>
            <div className={`w-10 h-6 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] relative cursor-pointer transition-colors`}>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-green-400 transition-transform" style={{ transform: theme === "dark" ? "translateX(18px)" : "translateX(0)" }} />
            </div>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-secondary)] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-b border-[var(--border-color)]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer py-2"
              >
                {s.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-color)]">
              <span className="text-sm text-[var(--text-muted)]">{theme === "light" ? "Light" : "Dark"}</span>
              <button
                onClick={toggle}
                className={`w-10 h-6 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] relative cursor-pointer`}
              >
                <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-green-400 transition-transform" style={{ transform: theme === "dark" ? "translateX(18px)" : "translateX(0)" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
