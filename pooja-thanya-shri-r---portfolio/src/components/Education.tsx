import { School, Calendar, GraduationCap, Archive } from "lucide-react";
import { EDUCATION_TIMELINE } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <School className="w-3.5 h-3.5" /> My Academic Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white animate-fade-in">
            Education <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Timeline</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Timeline Path Structure */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-12 pl-8 md:pl-12 space-y-12">
          {EDUCATION_TIMELINE.map((item, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={item.id} className="relative group">
                {/* Visual Timeline Node */}
                <div
                  className={`absolute -left-[50px] md:-left-[66px] top-1.5 w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-300 ${
                    isFirst
                      ? "bg-purple-950 border-purple-500 text-purple-400 shadow-lg shadow-purple-500/20 group-hover:scale-110"
                      : "bg-slate-900 border-white/20 text-gray-400 group-hover:border-cyan-500 group-hover:text-cyan-400"
                  }`}
                >
                  <GraduationCap className="w-5 h-5 animate-pulse" />
                </div>

                {/* Main Card Content */}
                <div className="glass-panel glass-panel-hover p-6 rounded-3xl relative overflow-hidden">
                  {/* Subtle top indicator border */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                      isFirst ? "from-purple-500 to-pink-500" : "from-cyan-500 to-blue-500"
                    }`}
                  />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-semibold font-mono uppercase tracking-wider ${
                            isFirst
                              ? "bg-purple-500/10 text-purple-400 border border-purple-500/25"
                              : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/25"
                          }`}
                        >
                          {item.grade}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          {item.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-display font-semibold text-white tracking-tight pt-1">
                        {item.degree}
                      </h3>

                      <h4 className="text-md font-sans text-gray-300 font-medium flex items-center gap-1.5">
                        <School className="w-4 h-4 text-purple-400/80" />
                        {item.institution}
                      </h4>
                    </div>
                  </div>

                  {item.description && (
                    <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
