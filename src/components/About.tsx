import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden card-hover">
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="text-white/30">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest">About Me</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">
              Where creativity meets{" "}
              <span className="gradient-text">code</span>
            </h3>
            {personalInfo.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
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
