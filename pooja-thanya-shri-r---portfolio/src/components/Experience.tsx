import { Briefcase, Calendar, CheckCircle2, Award } from "lucide-react";
import { EXPERIENCE_LIST } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> Industry Exposure
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Practical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Experience</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCE_LIST.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Corner abstract shape */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/5 pb-6">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
                    <Award className="w-3.5 h-3.5 animate-pulse" /> Intern Opportunity
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-white tracking-tight pt-1">
                    {exp.role}
                  </h3>

                  <h4 className="text-base text-gray-300 font-medium">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs font-mono bg-white/5 border border-white/5 px-3.5 py-2 rounded-full self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="py-6 space-y-4">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  Core Responsibilities
                </h4>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Appended skills acquired */}
              {exp.skillsLearned && (
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-500 font-mono mr-2">
                    Skills:
                  </span>
                  {exp.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-900 border border-white/10 text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
