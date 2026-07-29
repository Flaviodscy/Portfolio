import { experiences, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Work */}
        <div>
          <div className="reveal text-center mb-16">
            <h2 className="text-sm font-semibold text-green-400 uppercase tracking-widest mb-4">Career</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">
              Work <span className="gradient-text">experience</span>
            </h3>
          </div>

          <div className="reveal relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-emerald-500/50 to-transparent" />

            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-[#0a0f0d] z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-sm text-green-400 font-medium">{exp.dates}</span>
                    {exp.location && (
                      <span className="text-xs text-gray-500 ml-2">— {exp.location}</span>
                    )}
                    <h4 className="text-xl font-bold mt-1 leading-snug">{exp.role}</h4>
                    <p className="text-emerald-400 font-medium mt-1">{exp.company}</p>
                    <p className="text-gray-500 mt-3 leading-relaxed">{exp.description}</p>
                    {exp.responsibilities && (
                      <ul className={`mt-3 space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.responsibilities.slice(0, 5).map((r) => (
                          <li key={r} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 bg-green-400 rounded-full shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="reveal">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Education</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 card-hover">
                <span className="text-sm text-green-400 font-medium">{edu.dates}</span>
                <h4 className="text-lg font-bold mt-1 leading-snug">{edu.degree}</h4>
                <p className="text-emerald-400 text-sm mt-1">{edu.school}</p>
                <p className="text-gray-600 text-sm mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
