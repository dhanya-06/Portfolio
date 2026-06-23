import { Award, Code, Globe, GraduationCap, MapPin, Heart } from "lucide-react";
import { PERSONAL_INFO, LANGUAGES } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Visual background decor */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Heart className="w-3.5 h-3.5 fill-cyan-400/20" /> Let me introduce myself
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white/90">
              Innovative Thinker & Aspiring AI Engineer
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.aboutDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Location</h4>
                  <p className="text-sm font-semibold text-white mt-1">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">Education</h4>
                  <p className="text-sm font-semibold text-white mt-1">B.Tech AI & Data Science</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats & Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Values / Passions */}
            <div className="p-6 rounded-3xl glass-panel relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                My Focus Areas
              </h3>

              <ul className="space-y-3.5">
                {[
                  "Predictive AI Models and System Design",
                  "Front-End Engineering (HTML5, CSS3, ES6)",
                  "Data Analysis & Visualization algorithms",
                  "Structured Database Systems (MongoDB, etc.)",
                  "Modern Dev workflows (Git-based, Vercel Deployments)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Fluency Section */}
            <div className="p-6 rounded-3xl glass-panel relative overflow-hidden">
              <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Language Fluency
              </h3>

              <div className="space-y-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-cyan-400 font-mono text-xs">{lang.level}</span>
                    </div>
                    {/* Visual Progress gauge */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
