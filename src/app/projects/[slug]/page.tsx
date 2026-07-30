"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import ImageGallery from "@/components/ImageGallery";

const PROJECT_COLORS: Record<string, [string, string]> = {
  autovisiontv: ["#4ade80", "#22c55e"],
  "motion-for-screens": ["#f97316", "#ea580c"],
  "digital-signage-systems": ["#2dd4bf", "#14b8a6"],
  "dickson-engraving": ["#facc15", "#eab308"],
  "branding-visual-experiments": ["#a78bfa", "#8b5cf6"],
  "experimental-interfaces": ["#38bdf8", "#0ea5e9"],
};

function ProjectBanner({ title, slug }: { title: string; slug: string }) {
  const colors = PROJECT_COLORS[slug] || ["#4ade80", "#22c55e"];
  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[var(--card-border)]">
      {/* Real hero image */}
      <img
        src={`/images/projects/${slug}/hero.jpg`}
        alt={`${title} — Hero`}
        className="w-full h-full object-cover"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
          // Fallback to gradient if no hero image exists
          const fallback = document.createElement("div");
          fallback.className = "absolute inset-0 flex items-center justify-center rounded-2xl";
          fallback.style.background = `linear-gradient(135deg, ${colors[0]}20, ${colors[1]}08)`;
          el.parentElement!.appendChild(fallback);
        }}
      />
      {/* Overlay gradient on image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </div>
  );
}

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
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">Project not found</h2>
          <Link href="/#projects" onClick={() => router.push("/")}>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full text-sm hover:bg-[var(--bg-tertiary)] cursor-pointer">
              {backArrow} Back to Projects
            </button>
          </Link>
        </div>
      </section>
    );
  }

  const cs = project.caseStudy;
  const isMotion = project.category === "motion";

  // Branding-specific image galleries for each sub-project
  if (slug === "branding-visual-experiments") {
    return (
      <section className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-b border-[var(--border-color)]">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
            <Link href="/#projects" onClick={() => router.push("/")}>
              <button className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer group">
                <span className="group-hover:-translate-x-0.5 transition-transform">{backArrow}</span>
                Back to Projects
              </button>
            </Link>
            <div className="h-4 w-px bg-[var(--border-color)]" />
            <span className="text-sm text-[var(--text-muted)] truncate max-w-[300px]">Brand Identities</span>
          </div>
        </header>

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-24 bg-gradient-to-br from-green-500/[0.08] to-transparent">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-400 mb-6">
            Branding & Visual Identity
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-6">{cs.title}</h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">
            {cs.summary}
          </p>
        </div>

        {/* Full-width banner image */}
        <div className="max-w-5xl mx-auto px-6 pb-24">
          <ProjectBanner title={cs.title} slug="branding-visual-experiments" />
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 space-y-32 pb-32">
          {/* Category & Role */}
          {cs.category && (
            <div className="grid sm:grid-cols-[200px_1fr] gap-4">
              <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Category</h3>
              <p className="text-[var(--text-secondary)]">{cs.category}</p>
            </div>
          )}

          {/* ---- SanGo ---- */}
          <ImageGallery
            title="SanGo — Full Brand Identity"
            images={[
              { file: "Prancheta 1@3x-100.jpg", alt: "SanGo brand mockup 1" },
              { file: "Prancheta 2@3x-100.jpg", alt: "SanGo brand mockup 2" },
              { file: "Prancheta 3@3x-100.jpg", alt: "SanGo brand mockup 3" },
              { file: "Prancheta 4@3x-100.jpg", alt: "SanGo brand mockup 4" },
              { file: "Prancheta 5@3x-100.jpg", alt: "SanGo brand mockup 5" },
              { file: "Prancheta 7@3x-100.jpg", alt: "SanGo brand mockup 6" },
              { file: "BAG.png white.png", alt: "SanGo bag branding" },
              { file: "High Desert Clay - 16oz Stackable Pint EMBfinal2.png", alt: "SanGo product application" },
            ]}
          />

          {/* ---- LOWKEY ---- */}
          <ImageGallery
            title="LOWKEY — Skate & Surf Brand"
            images={[
              { file: "logo .png", alt: "LOWKEY logo primary" },
              { file: "logo g.png", alt: "LOWKEY logo green version" },
              { file: "simbolo 1.png", alt: "LOWKEY symbol mark" },
              { file: "Cap-Logo-Mockup.png", alt: "LOWKEY cap mockup" },
              { file: "Illustration Skateboard LOWKEY.png", alt: "LOWKEY skateboard illustration" },
              { file: "blank-black-t-shirt-hanger-isolated-white-space.png", alt: "LOWKEY apparel graphic" },
            ]}
          />

          {/* ---- Bonne Pooch ---- */}
          <ImageGallery
            title="Bonne Pooch — Pet Brand Identity"
            images={[
              { file: "Dark.png", alt: "Bonne Pooch dark logo" },
              { file: "saco.png", alt: "Bonne Pooch bag design" },
              { file: "Free Office Vertical Signboard Mockup3.png", alt: "Bonne Pooch signboard mockup" },
              { file: "Prancheta 6 cópia 7.png", alt: "Bonne Pooch presentation sheet" },
            ]}
          />

          {/* ---- Laura Leone ---- */}
          <ImageGallery
            title="Laura Leone — Photographer Identity"
            images={[
              { file: "branco_branco.png", alt: "Laura Leone white logo" },
              { file: "branco.png", alt: "Laura Leone primary white" },
              { file: "logo dome_branco.png", alt: "Laura Leone dome variant" },
              { file: "logo done_Prancheta 1.png", alt: "Laura Leone final layout" },
            ]}
          />

          {/* ---- Leticia Barreto (VET) ---- */}
          <ImageGallery
            title="Leticia Barreto — Veterinary Identity System"
            images={[
              { file: "2.png", alt: "Leticia Barreto presentation 1" },
              { file: "Branco sem fundo.png", alt: "Leticia Barreto white version" },
              { file: "Verde sem fundo.png", alt: "Leticia Barreto green version" },
              { file: "Fundo branco .png", alt: "Leticia Barreto white background" },
              { file: "Prancheta 3.png", alt: "Leticia Barreto presentation sheet" },
              { file: "Carteirinha_Brochure 1.png", alt: "Leticia Barreto pet carrier card 1" },
              { file: "Carteirinha_Brochure 2.png", alt: "Leticia Barreto pet carrier card 2" },
              { file: "Fundo verde.png", alt: "Leticia Barreto green background" },
              { file: "mockup.svg", alt: "Leticia Barreto mockup frame" },
            ]}
          />

          {/* ---- Fernanda Vasques (HandCraft) ---- */}
          <ImageGallery
            title="Fernanda Vasques — HandCraft Branding"
            images={[
              { file: "20989381.png", alt: "Fernanda Vasques identity" },
              { file: "5988027 - Copy.png", alt: "Fernanda Vasques mockup" },
              { file: "6601232.png", alt: "Fernanda Vasques brand mark" },
              { file: "jumbo-paper-gift-bag-with-rope-handle-mockup-perspective.png", alt: "Fernanda Vasques gift bag mockup" },
            ]}
          />

          {/* ---- MehConnect ---- */}
          <ImageGallery
            title="MehConnect — Tech Branding"
            images={[
              { file: "2@3x-100.jpg", alt: "MehConnect brand presentation" },
              { file: "bag.png", alt: "MehConnect bag identity" },
              { file: "BK - RED DOT@3x-8.png", alt: "MehConnect logo detail" },
              { file: "jar-15.png", alt: "MehConnect jar label design" },
            ]}
          />

          {/* ---- Open Studios ---- */}
          <ImageGallery
            title="Open Studios — Studio Identity"
            images={[
              { file: "cartao.png", alt: "Open Studios card layout" },
              { file: "Free_iPhone_11_Pro_Mockup_4 - Copy.png", alt: "Open Studios phone mockup" },
              { file: "gif- inicio.gif", alt: "Open Studios animated intro" },
              { file: "Logos-01.png", alt: "Open Studios logo grid" },
              { file: "Montagem produtos sem fundo.png", alt: "Open Studios product montage" },
            ]}
          />

          {/* Navigation */}
          <div className="flex items-center justify-between pt-12 border-t border-[var(--border-color)]">
            {(() => {
              const prevIndex = (projects.findIndex((p) => p.slug === slug) - 1 + projects.length) % projects.length;
              const nextIndex = (projects.findIndex((p) => p.slug === slug) + 1) % projects.length;
              return (
                <>
                  <Link href={`/projects/${projects[prevIndex].slug}`}>
                    <button className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-green-400 transition-colors cursor-pointer group">
                      <span className="group-hover:-translate-x-1 transition-transform">{backArrow}</span>
                      {projects[prevIndex].title}
                    </button>
                  </Link>
                  <Link href={`/projects/${projects[nextIndex].slug}`}>
                    <button className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-green-400 transition-colors cursor-pointer group">
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
        <footer className="py-20 text-center border-t border-[var(--border-color)]">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Interested in <span className="gradient-text">working together?</span>
          </h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
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

  // ---- Generic case-study template (non-branding projects) ---- */
  return (
    <section className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-b border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/#projects" onClick={() => router.push("/")}>
            <button className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer group">
              <span className="group-hover:-translate-x-0.5 transition-transform">{backArrow}</span>
              Back to Projects
            </button>
          </Link>
          <div className="h-4 w-px bg-[var(--border-color)]" />
          <span className="text-sm text-[var(--text-muted)] truncate max-w-[300px]">{cs.title}</span>
        </div>
      </header>

      {/* Hero */}
      <div className={`max-w-5xl mx-auto px-6 pt-16 pb-24 ${isMotion ? "bg-gradient-to-br from-green-500/[0.08] to-transparent" : "bg-gradient-to-br from-cyan-500/[0.08] to-transparent"}`}>
        <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 ${isMotion ? "bg-green-500/10 text-green-400" : "bg-emerald-500/10 text-emerald-400"}`}>
          {project.category === "motion" ? "Motion & Design" : "Development & Ops"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-6">{cs.title}</h1>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{cs.summary}</p>
      </div>

      {/* Image placeholder area */}
      <div className={`max-w-5xl mx-auto px-6 pb-24`}>
        <ProjectBanner title={cs.title} slug={slug} />
      </div>

      {/* Content sections */}
      <div className="max-w-5xl mx-auto px-6 space-y-24 pb-32">
        {cs.role && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Role</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{cs.role}</p>
          </div>
        )}
        {cs.category && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Category</h3>
            <p className="text-[var(--text-secondary)]">{cs.category}</p>
          </div>
        )}
        {cs.dates && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Timeline</h3>
            <p className="text-[var(--text-secondary)]">{cs.dates}</p>
          </div>
        )}
        {cs.process && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Process</h3>
            <ol className="space-y-2">
              {cs.process.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="text-green-400 font-mono text-sm pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}
        {cs.work && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">What I worked on</h3>
            <ul className="space-y-2">
              {cs.work.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {cs.systems && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Systems & Technologies</h3>
            <ul className="space-y-2">
              {cs.systems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {cs.works && Array.isArray(cs.works) && cs.works.length > 0 && "name" in cs.works[0] && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Included Work</h3>
            <ul className="space-y-6">
              {cs.works.map((item: { name: string; description: string }, i: number) => (
                <li key={i} className="text-[var(--text-secondary)]">
                  <span className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                    <div>
                      <span className="font-medium text-[var(--text-primary)]">{item.name}</span>
                      <p className="mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {cs.lessons && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">What it taught me</h3>
            <ul className="space-y-2">
              {cs.lessons.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {cs.formats && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Formats</h3>
            <ul className="space-y-2">
              {cs.formats.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {cs.tech && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Technology</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{cs.tech}</p>
          </div>
        )}
        {cs.outcome && (
          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <h3 className="text-sm font-semibold text-green-400 uppercase tracking-widest text-left">Outcome</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">{cs.outcome}</p>
          </div>
        )}
        {cs.quote1 && (
          <div className="border-l-2 border-green-500/30 pl-6 py-2">
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed italic">{cs.quote1}</p>
          </div>
        )}
        {cs.quote2 && (
          <div className="border-l-2 border-emerald-500/30 pl-6 py-2">
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed italic">{cs.quote2}</p>
          </div>
        )}
        {cs.quote && !cs.quote1 && (
          <div className="border-l-2 border-green-500/30 pl-6 py-2">
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed italic">{cs.quote}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-[var(--border-color)]">
          {(() => {
            const prevIndex = (projects.findIndex((p) => p.slug === slug) - 1 + projects.length) % projects.length;
            const nextIndex = (projects.findIndex((p) => p.slug === slug) + 1) % projects.length;
            return (
              <>
                <Link href={`/projects/${projects[prevIndex].slug}`}>
                  <button className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-green-400 transition-colors cursor-pointer group">
                    <span className="group-hover:-translate-x-1 transition-transform">{backArrow}</span>
                    {projects[prevIndex].title}
                  </button>
                </Link>
                <Link href={`/projects/${projects[nextIndex].slug}`}>
                  <button className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-green-400 transition-colors cursor-pointer group">
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
      <footer className="py-20 text-center border-t border-[var(--border-color)]">
        <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-[var(--text-primary)]">
          Interested in <span className="gradient-text">working together?</span>
        </h3>
        <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
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
