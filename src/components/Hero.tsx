"use client";

import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
            top: "10%",
            left: "15%",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 animate-float"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            bottom: "15%",
            right: "10%",
            animationDuration: "10s",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Status badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          {personalInfo.name.split(" ")[0]}
          <br />
          <span className="gradient-text">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Titles with typing effect */}
        <div className="animate-fade-in-up h-8 mb-8 flex items-center justify-center gap-3">
          {personalInfo.titles.map((title, i) => (
            <span
              key={title}
              className="text-lg sm:text-xl text-gray-400"
              style={{ animation: "fadeInUp 0.6s ease-out both", animationDelay: `${0.4 + i * 0.15}s` }}
            >
              {title}
              {i < personalInfo.titles.length - 1 && (
                <span className="text-purple-400 mx-2">&</span>
              )}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-in-up text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-12"
          style={{ animationDelay: "0.8s" }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up flex items-center justify-center gap-4"
          style={{ animationDelay: "1s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer animate-pulse-glow"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
