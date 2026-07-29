"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";

const backArrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project?.caseStudy) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Project not found</h2>
          <Link href="/#projects" onClick={() => router.push("/")}>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 cursor-pointer">
              {backArrow} Back to Projects
            </button>
          </Link>
        </div>
      </section>
    );
  }

  const cs = project.caseStudy;
  const isMotion = project.category === "motion";

  return (
    <section className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f0d]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/#projects" onClick={() => router.push("/")}>
            <button className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <span className="group-hover:-translate-x-0.5 transition-transform">{backArrow}</span>
              Back to Projects
            </button>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-sm text-gray-500 truncate max-w-[300px]">{cs.title}</span>
        </div>
      </header>

      {/* Hero */}
      <div className={`max-w-5xl mx-auto px-6 pt-16 pb-24 ${isMotion ? "bg-gradient-to-br from-green-500/[0.08] to-transparent" : "bg-gradient-to-br from-cyan-500/[0.08] to-transparent"}`}>
        <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 ${isMotion ? "bg-green-500/10 text-green-400" : "bg-emerald-500/10 text-emerald-400"}`}>
          {project.category === "motion" ? "Motion & Design" : "Development & Ops"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">{cs.title}</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">{cs.summary}</p>
      </div>

      {/* Image placeholder area */}
      <div className={`max-w-5xl mx-auto px-6 pb-24`}>
        <div className={`w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${isMotion ? "from-green-500/15 to-emerald-600/15" : "from-cyan-500/15 to-emerald-500/15"} border border-white/[0.06]`}>
          {/* Drop image here: public/images/projects/{slug}/hero.jpg */}
        </div>
      </div>

      {/* Content sections - render conditionally based on which data exists */}
      <div className="max-w-5xl mx-auto px-6 space-y-24 pb-32">
        {/* Role */}
        {cs.role && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Role</h3>
            <p className="text-gray-400 leading-relaxed">{cs.role}</p>
          </div>
        )}

        {/* Category */}
        {cs.category && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Category</h3>
            <p className="text-gray-400">{cs.category}</p>
          </div>
        )}

        {/* Dates */}
        {cs.dates && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Timeline</h3>
            <p className="text-gray-400">{cs.dates}</p>
          </div>
        )}

        {/* Process */}
        {cs.process && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Process</h3>
            <ol className="space-y-2">
              {cs.process.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-green-400 font-mono text-sm pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Work done */}
        {cs.work && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">What I worked on</h3>
            <ul className="space-y-2">
              {cs.work.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Systems */}
        {cs.systems && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Systems & Technologies</h3>
            <ul className="space-y-2">
              {cs.systems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Work types (branding) */}
        {cs.works && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Included Work</h3>
            <ul className="space-y-2">
              {cs.works.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lessons */}
        {cs.lessons && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">What it taught me</h3>
            <ul className="space-y-2">
              {cs.lessons.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Formats */}
        {cs.formats && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Formats</h3>
            <ul className="space-y-2">
              {cs.formats.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech */}
        {cs.tech && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Technology</h3>
            <p className="text-gray-400 leading-relaxed">{cs.tech}</p>
          </div>
        )}

        {/* Outcomes */}
        {cs.outcome && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Outcome</h3>
            <p className="text-gray-400 leading-relaxed">{cs.outcome}</p>
          </div>
        )}

        {/* Blockquotes */}
        {cs.quote1 && (
          <div className="border-l-2 border-green-500/30 pl-6 py-2">
            <p className="text-gray-400 text-lg leading-relaxed italic">{cs.quote1}</p>
          </div>
        )}
        {cs.quote2 && (
          <div className="border-l-2 border-emerald-500/30 pl-6 py-2">
            <p className="text-gray-400 text-lg leading-relaxed italic">{cs.quote2}</p>
          </div>
        )}
        {cs.quote && !cs.quote1 && (
          <div className="border-l-2 border-green-500/30 pl-6 py-2">
            <p className="text-gray-400 text-lg leading-relaxed italic">{cs.quote}</p>
          </div>
        )}

        {/* Next project navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-white/5">
          {(() => {
            const prevIndex = (projects.findIndex((p) => p.slug === slug) - 1 + projects.length) % projects.length;
            const nextIndex = (projects.findIndex((p) => p.slug === slug) + 1) % projects.length;
            return (
              <>
                <Link href={`/projects/${projects[prevIndex].slug}`}>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors cursor-pointer group">
                    <span className="group-hover:-translate-x-1 transition-transform">{backArrow}</span>
                    {projects[prevIndex].title}
                  </button>
                </Link>
                <Link href={`/projects/${projects[nextIndex].slug}`}>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors cursor-pointer group">
                    {projects[nextIndex].title}
                    <span className="group-hover:translate-x-1 transition-transform">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </>
            );
          })()}
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="py-20 text-center border-t border-white/5">
        <h3 className="text-2xl sm:text-4xl font-bold mb-4">
          Interested in <span className="gradient-text">working together?</span>
        </h3>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Let's create something that deserves the screen.
        </p>
        <a
          href="mailto:gorodscyflavio@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer"
        >
          Get in Touch
        </a>
      </footer>
    </section>
  );
}
