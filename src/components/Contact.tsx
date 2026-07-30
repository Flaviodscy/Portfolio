import { personalInfo, socialLinks, philosophy } from "@/lib/data";

const SocialIcon: Record<string, React.ReactNode> = {
  github: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
  ),
  linkedin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ),
  behance: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.482.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.21 1.36-.627 1.86-.42.5-1.01.86-1.77 1.08.92.23 1.6.67 2.05 1.32.45.65.67 1.45.67 2.4 0 .72-.12 1.36-.37 1.93-.25.57-.6 1.05-1.06 1.43-.45.38-1.0.67-1.64.87-.64.2-1.33.3-2.07.3H0V4.51h6.938v-.007zM6.545 10.85c.6 0 1.07-.16 1.42-.48.35-.32.53-.77.53-1.36 0-.36-.07-.66-.2-.89-.14-.24-.33-.43-.57-.56-.24-.13-.53-.22-.86-.27-.33-.05-.68-.08-1.07-.08H3.27v3.65h3.275zm.18 6.73c.39 0 .76-.04 1.1-.14.33-.09.62-.24.85-.43.24-.2.43-.45.56-.76.14-.31.2-.69.2-1.14 0-.92-.24-1.58-.73-1.96-.49-.39-1.15-.58-1.97-.58H3.27v5.01h3.455zm10.8-12.48c.72 0 1.36.04 1.93.13.56.09 1.04.24 1.46.44.41.2.74.46.99.78.25.32.37.7.37 1.14v.72h-6.42c.04.64.26 1.12.66 1.45.4.33.93.5 1.58.5.52 0 .97-.12 1.34-.37.38-.25.64-.51.8-.79l1.26 1.06c-.48.67-1.07 1.15-1.76 1.45-.69.3-1.47.44-2.33.44-.8 0-1.52-.13-2.15-.38-.64-.26-1.18-.62-1.63-1.09-.45-.46-.8-1.03-1.04-1.7-.25-.67-.37-1.42-.37-2.24 0-.77.14-1.47.41-2.1.28-.64.67-1.18 1.18-1.63.5-.45 1.11-.79 1.83-1.03.71-.24 1.5-.36 2.36-.36zm.3 4.8c.57 0 1.05-.07 1.45-.2.4-.14.72-.32.96-.55.25-.23.42-.5.53-.82.1-.33.15-.68.15-1.06v-.34c-.06-.28-.2-.52-.43-.72-.23-.2-.54-.35-.92-.45-.39-.1-.85-.15-1.39-.15h-2.98c-.06.6-.08 1.17-.07 1.72l.01.27c.03.41.12.77.29 1.07.17.3.38.55.64.74.27.2.58.34.94.43.37.09.77.13 1.21.13l.24-.05z" /></svg>
  ),
};

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Philosophy */}
        <div className="reveal">
          <h2 className="text-center text-sm font-semibold text-green-400 uppercase tracking-widest mb-12">Design Philosophy</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {philosophy.map((p, i) => (
              <div key={i} className="text-center p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl">
                <h4 className="text-lg font-bold mb-2 text-[var(--text-primary)]">{p.title}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="reveal text-center">
          <h2 className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">Get in Touch</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mb-6">
            Let's create something that deserves the <span className="gradient-text">screen.</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg mb-12 max-w-xl mx-auto">
            Available for motion design, digital-signage projects, interface design and creative-technology collaborations.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity cursor-pointer mb-12"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {personalInfo.email}
          </a>

          {/* Contact details */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {personalInfo.phone}
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-green-400 transition-colors p-2 cursor-pointer"
                aria-label={link.label}
              >
                {SocialIcon[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
