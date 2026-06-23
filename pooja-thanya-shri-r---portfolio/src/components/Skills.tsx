import { useState } from "react";
import {
  Cpu,
  Terminal,
  Coffee,
  Code2,
  Layout,
  GitBranch,
  GitCommit,
  UploadCloud,
  Layers,
  Sparkles,
  Bot,
  MessageSquareCode,
  CheckSquare,
  Mail,
  Users,
  Shuffle,
  ChevronRight
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

// Type-safe icon mapper to prevent string eval errors
const iconMap: Record<string, any> = {
  Terminal: Terminal,
  Coffee: Coffee,
  Code2: Code2,
  Cpu: Cpu,
  Layout: Layout,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  UploadCloud: UploadCloud,
  Layers: Layers,
  Sparkles: Sparkles,
  Bot: Bot,
  MessageSquareCode: MessageSquareCode,
  CheckSquare: CheckSquare,
  Mail: Mail,
  Users: Users,
  Shuffle: Shuffle,
};

export default function Skills() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> Capabilities & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Professional <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Tab & Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tab Selection Navigation */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest px-3 mb-3">
              Skill Categories
            </h3>
            {SKILL_CATEGORIES.map((category, idx) => {
              const isActive = activeCategoryIdx === idx;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveCategoryIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-gradient-to-r from-purple-950/40 to-slate-900 border-purple-500/30 text-white shadow-xl shadow-purple-950/10"
                      : "bg-slate-900/40 border-white/5 text-gray-400 hover:text-gray-200 hover:bg-slate-900/70 hover:border-white/10"
                  }`}
                >
                  <span className="font-display font-medium text-sm sm:text-base">
                    {category.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "text-purple-400 translate-x-1" : "text-gray-600 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Targeted Skills Display Cards */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl" />

              <div>
                <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase mb-1 block">
                  Category Selected
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-8">
                  {SKILL_CATEGORIES[activeCategoryIdx].title}
                </h3>

                {/* Grid of skills in the Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SKILL_CATEGORIES[activeCategoryIdx].skills.map((skill, index) => {
                    const IconComponent = skill.icon ? iconMap[skill.icon] : Cpu;
                    return (
                      <div
                        key={skill.name}
                        className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/20 hover:bg-white/10 transition-all duration-300 relative group"
                      >
                        <div className="flex items-center gap-3.5 mb-3.5">
                          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-cyan-400 transition-all duration-300">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-sm sm:text-base text-gray-100 group-hover:text-white transition-colors">
                              {skill.name}
                            </h4>
                          </div>
                          <span className="ml-auto font-mono text-xs text-cyan-400 font-bold group-hover:scale-105 transition-transform">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Visual Progress bar container */}
                        <div className="h-2 w-full bg-slate-950/50 rounded-full overflow-hidden border border-white/5">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Information Footnote */}
              <div className="border-t border-white/5 pt-6 mt-8 flex items-center gap-2.5 text-xs text-gray-500 font-mono">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>
                  Self-assessment figures updated for current academic cycle.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
