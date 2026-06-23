import { Award, ShieldCheck, CheckSquare, Sparkles } from "lucide-react";
import { CERTIFICATIONS } from "../data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative gradient glowing orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-glow-pulse" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" /> Industry Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Licenses & <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Certifications</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/5 flex gap-5 items-start group relative overflow-hidden"
            >
              {/* Vertical side banner for tickets style */}
              <div className="absolute top-0 right-0 h-full w-2.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="p-3.5 rounded-2xl bg-purple-500/15 text-purple-400 group-hover:bg-purple-500/25 group-hover:text-cyan-400 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>

              {/* Card Meta Content */}
              <div className="space-y-2 flex-grow pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest uppercase py-1 px-2.5 rounded bg-cyan-500/10 inline-block border border-cyan-500/10">
                    Verified Credential
                  </span>
                  {cert.date && (
                    <span className="text-xs text-gray-500 font-mono font-medium">
                      Issued {cert.date}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-100 tracking-tight leading-snug group-hover:text-white transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                  Authoritative Issuer: <span className="text-purple-400/90 font-semibold">{cert.issuer}</span>
                </p>

                {/* Simulated Certificate ID / Check */}
                <div className="pt-3 flex items-center gap-1.5 text-xs text-gray-500 font-mono hover:text-gray-400 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  <span>Interactive credential check active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
