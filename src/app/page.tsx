"use client";

import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      {/* Footer */}
      <footer className="py-8 text-center text-[var(--text-muted)] text-sm border-t border-[var(--border-color)]">
        Flávio Gorodscy — Motion Designer & Creative Technologist — Toronto, Canada
      </footer>
    </>
  );
}
