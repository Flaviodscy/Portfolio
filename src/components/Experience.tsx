import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-4">Career</h2>
          <h3 className="text-3xl sm:text-4xl font-bold">
            Work <span className="gradient-text">experience</span>
          </h3>
        </div>

        <div className="reveal relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-[#0a0a0f] z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-sm text-purple-400 font-medium">{exp.dates}</span>
                  <h4 className="text-xl font-bold mt-1">{exp.role}</h4>
                  <p className="text-cyan-400 font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-500 mt-3 leading-relaxed">{exp.description}</p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
