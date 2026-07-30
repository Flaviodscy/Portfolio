import { designSkills, devSkills, tools } from "@/lib/data";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors">{name}</span>
        <span className="text-sm font-semibold text-[var(--text-muted)]">{level}%</span>
      </div>
      <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ToolChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full text-sm font-medium text-[var(--text-primary)] hover:text-[var(--text-primary)] hover:border-green-500/30 transition-all cursor-default">
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[var(--bg-tertiary)]">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Skill bars */}
        <div>
          <div className="reveal text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4">Core Capabilities</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              What I <span className="gradient-text">do</span>
            </h3>
          </div>

          <div className="reveal grid md:grid-cols-2 gap-16">
            {/* Motion & Visual Design */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth={2}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <h4 className="text-xl font-extrabold text-[var(--text-primary)]">Motion & Visual Design</h4>
              </div>
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            {/* Development & Tech Ops */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth={2}>
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h4 className="text-xl font-extrabold text-[var(--text-primary)]">Development & Technical Ops</h4>
              </div>
              {devSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="reveal">
          <h3 className="text-2xl font-extrabold mb-8 text-center gradient-text">Software & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <ToolChip key={tool} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
