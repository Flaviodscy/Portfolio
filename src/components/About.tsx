import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal grid md:grid-cols-2 gap-16 items-center">
          {/* Profile photo */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden card-hover border border-[var(--border-color)]">
              <img
                src="/images/profile.png"
                alt="Flávio Gorodscy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const fb = document.createElement("div");
                  fb.className = "absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center";
                  fb.innerHTML = `<svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" class="text-[var(--text-muted)]/30"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                  el.parentElement!.appendChild(fb);
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">About Me</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
              My work sits between <span className="gradient-text">visual communication</span> and technical implementation.
            </h3>
            {personalInfo.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-lg font-medium">
                {paragraph}
              </p>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full text-sm font-semibold hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
