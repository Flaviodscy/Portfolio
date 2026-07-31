"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import ImageGallery from "@/components/ImageGallery";

// Contextual images for each project banner
const BANNER_IMAGES: Record<string, string> = {
  autovisiontv: "/images/projects/autovisiontv/cover-thumbnail.png",            // AutoVisionTV cover
  "motion-for-screens": "/images/projects/motion-for-screens/cover-thumbnail.png",     // Motion for screens cover
  "dickson-engraving": "/images/projects/dickson-engraving/cover-thumbnail.png",      // Dickson engraving cover
  "digital-signage-systems": "/images/projects/digital-signage-systems/cover-thumbnail.png", // Digital signage cover
  "branding-visual-experiments": "/images/projects/branding-visual-experiments/cover-thumbnail.png", // Branding cover
  "experimental-interfaces": "/images/projects/experimental-interfaces/cover-thumbnail.png",       // Experimental cover
};

function ProjectBanner({ title, slug }: { title: string; slug: string }) {
  const bannerImage = BANNER_IMAGES[slug];
  // Descriptions for each project
  const descriptions: Record<string, string> = {
    autovisiontv: "Custom web-based digital-signage platform organizing displays, content and remote operations.",
    "motion-for-screens": "Animated campaigns for automotive showrooms, waiting areas and commercial-screen environments.",
    "dickson-engraving": "Retail design and laser-engraving production in a high-volume customer environment.",
    "digital-signage-systems": "Technical support across the full path from creative content to physical screen deployment.",
    "branding-visual-experiments": "Identity systems, apparel graphics, editorial layouts and social campaigns.",
    "experimental-interfaces": "Independent exploration of interface ideas, responsive design and emerging technologies.",
  };
  const desc = descriptions[slug];

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[var(--card-border)]">
      {/* Banner photo only */}
      {bannerImage ? (
        <img src={bannerImage} alt={`${title} banner`} className="w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
      )}
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
        <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
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
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 mb-6">
            Branding & Visual Identity
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-6">{cs.title}</h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">
            {cs.summary}
          </p>
        </div>

        {/* Banner with brand grid pattern */}
        <div className="max-w-5xl mx-auto px-6 pb-24">
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[var(--card-border)]" style={{ background: "linear-gradient(135deg, #a78bfa15, #8b5cf608)" }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#8b5cf633 1px, transparent 1px), linear-gradient(90deg, #8b5cf633 1px, transparent 1px)", backgroundSize: '32px 32px' }} />
            <div className="absolute top-4 right-6 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }} />
            <div className="absolute bottom-6 left-8 w-48 h-48 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/[0.06] font-bold text-4xl sm:text-5xl uppercase tracking-wider select-none">Brand Identities</span>
            </div>
          </div>
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
            brand="SanGo"
            title="SanGo — Full Brand Identity"
            description="Eco-conscious food brand built on sustainable ingredients and minimalist packaging design."
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
            brand="LOWKEY"
            title="LOWKEY — Skate & Surf Brand"
            description="Eco-conscious skate and surf clothing label that exceeded sales projections in its first week."
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
            brand="Bonne Pooch"
            title="Bonne Pooch — Pet Brand Identity"
            description="Pet products brand with custom packaging, signboard and digital assets."
            images={[
              { file: "Dark.png", alt: "Bonne Pooch dark logo" },
              { file: "saco.png", alt: "Bonne Pooch bag design" },
              { file: "Free Office Vertical Signboard Mockup3.png", alt: "Bonne Pooch signboard mockup" },
              { file: "Prancheta 6 cópia 7.png", alt: "Bonne Pooch presentation sheet" },
            ]}
          />

          {/* ---- Laura Leone ---- */}
          <ImageGallery
            brand="Laura Leone"
            title="Laura Leone — Photographer Identity"
            description="Photographer's visual identity with multiple logo variants for different backgrounds."
            images={[
              { file: "branco_branco.png", alt: "Laura Leone white logo" },
              { file: "branco.png", alt: "Laura Leone primary white" },
              { file: "logo dome_branco.png", alt: "Laura Leone dome variant" },
              { file: "logo done_Prancheta 1.png", alt: "Laura Leone final layout" },
            ]}
          />

          {/* ---- Leticia Barreto (VET) ---- */}
          <ImageGallery
            brand="Leticia Barreto"
            title="Leticia Barreto — Veterinary Identity System"
            description="Complete visual identity for a veterinary practice: logo, business cards, badges and presentation materials."
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
            brand="Fernanda Vasques"
            title="Fernanda Vasques — HandCraft Branding"
            description="Brand presentation, business cards and identity system for a handmade crafts brand."
            images={[
              { file: "20989381.png", alt: "Fernanda Vasques identity" },
              { file: "5988027 - Copy.png", alt: "Fernanda Vasques mockup" },
              { file: "6601232.png", alt: "Fernanda Vasques brand mark" },
              { file: "jumbo-paper-gift-bag-with-rope-handle-mockup-perspective.png", alt: "Fernanda Vasques gift bag mockup" },
            ]}
          />

          {/* ---- MehConnect ---- */}
          <ImageGallery
            brand="MehConnect"
            title="MehConnect — Tech Branding"
            description="Brand assets for a tech startup including jar label, bag identity and presentation deck."
            images={[
              { file: "2@3x-100.jpg", alt: "MehConnect brand presentation" },
              { file: "bag.png", alt: "MehConnect bag identity" },
              { file: "BK - RED DOT@3x-8.png", alt: "MehConnect logo detail" },
              { file: "jar-15.png", alt: "MehConnect jar label design" },
            ]}
          />

          {/* ---- Open Studios ---- */}
          <ImageGallery
            brand="Open Studios"
            title="Open Studios — Studio Identity"
            description="Studio branding with logo grid system, product mockups and animated social media content."
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
      <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
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
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 ${isMotion ? "bg-green-500/10 text-green-400" : "bg-emerald-500/10 text-emerald-400"}`}>
          {project.category === "motion" ? "Motion & Design" : "Development & Ops"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-6">{cs.title}</h1>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{cs.summary}</p>
      </div>

      {/* AutovisionTV mockup showcase */}
      {slug === "autovisiontv" ? (
        <div className="space-y-4 max-w-5xl mx-auto px-6 pb-24">
          <h4 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r from-green-400 to-emerald-400" />
            Remote Control for Digital Signage — Product Mockups
          </h4>
          <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
            Mobile app and web dashboard mockups showing the remote-control interface for managing digital-signage displays across dealership networks.
          </p>
          {/* Main showcase — full width */}
          <div className="rounded-2xl overflow-hidden border border-[var(--card-border)] bg-white">
            <img src="/images/projects/autovisiontv/control-platform.png" alt="AutoVisionTV Remote Control mockup" className="w-full h-auto object-cover" />
          </div>
          {/* Supporting renders */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { src: "/images/projects/autovisiontv/square.png", alt: "AutoVisionTV square mockup" },
              { src: "/images/projects/autovisiontv/Banner.png", alt: "AutoVisionTV banner showcase" },
              { src: "/images/projects/autovisiontv/3d-render.png", alt: "AutoVisionTV 3D render" },
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-6 pb-24">
          <ProjectBanner title={cs.title} slug={slug} />
        </div>
      )}

      {/* Dickson Engraving gallery (work photos + videos + catalog) */}
      {slug === "dickson-engraving" && (
        <div className="space-y-12 max-w-5xl mx-auto px-6 pb-24">
          {/* Photo grid — real work from the shop */}
          <div>
            <h4 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r from-yellow-400 to-amber-400" />
              From the Shop — Engraving Work
            </h4>
            <p className="text-sm text-[var(--text-muted)] mt-1 mb-6 leading-relaxed">
              Finished engravings on customer products: Yeti tumblers, custom pieces, and event-ready artwork. Full days of in-shop engraving for our annual pre-set design catalog.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { src: "/images/projects/dickson-engraving/mother-day-yeti.png", alt: "Mother's Day engraved Yeti wine tumbler" },
              ].map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]">
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>

            {/* Videos — full width */}
            <div className="space-y-6">
              {[
                { mp4: "/images/projects/dickson-engraving/workday-video.mp4", webm: "/images/projects/dickson-engraving/workday-video.webm", alt: "Sneak peek into a day at Dickson Engraving" },
                { mp4: "/images/projects/dickson-engraving/design-video.mp4", webm: "/images/projects/dickson-engraving/design-video.webm", alt: "Design and engraving process showcase" },
              ].map((vid, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)]">
                  <video controls playsInline preload="auto" className="w-full h-auto object-cover">
                    <source src={vid.webm} type="video/webm" />
                    <source src={vid.mp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>

            {/* PDF catalog download */}
            <a href="/downloads/pre-set-designs-2023.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 mt-8 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Pre-Set Designs Catalog (PDF)
            </a>
          </div>
        </div>
      )}

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
