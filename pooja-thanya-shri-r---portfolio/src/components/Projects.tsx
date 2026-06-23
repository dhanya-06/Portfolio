import { useState } from "react";
import { Briefcase, Key, Calendar, User, ExternalLink, ArrowRight, X, Sparkles, AlertCircle } from "lucide-react";
import { PROJECTS_LIST } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Return a beautiful dynamic graphic/css layout representing the project category
  const renderProjectMockupGlow = (imgName: string, title: string) => {
    switch (imgName) {
      case "restaurant":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-rose-600/30 flex items-center justify-center p-6 border-b border-white/5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto text-2xl font-bold font-display">
                🍽️
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight">{title}</h4>
              <p className="text-xs text-gray-400">Gourmet Culinary UI Layout</p>
            </div>
          </div>
        );
      case "portfolio":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 flex items-center justify-center p-6 border-b border-white/5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/25 flex items-center justify-center mx-auto text-2xl font-bold font-display">
                ✨
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight">{title}</h4>
              <p className="text-xs text-gray-400">Premium Digital Showcase</p>
            </div>
          </div>
        );
      case "beauty_system":
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 to-cyan-600/30 flex items-center justify-center p-6 border-b border-white/5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/25 flex items-center justify-center mx-auto text-2xl font-bold font-display animate-pulse">
                🔮
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight">{title}</h4>
              <p className="text-xs text-emerald-300 font-mono flex items-center gap-1 justify-center">
                <Sparkles className="w-3 h-3 text-emerald-400" /> Salon Prediction Engine
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 border-b border-white/5" />
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-3xl -z-10 animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-3xl -z-10 animate-glow-pulse" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> Innovation Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Projects <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Showcase</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_LIST.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col h-full group border border-white/5"
            >
              {/* Mockup visual area */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900 flex-shrink-0">
                {renderProjectMockupGlow(project.image, project.title)}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Explore Case Study
                  </button>
                </div>
              </div>

              {/* Card content text */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-mono leading-none py-1.5 px-2.5 rounded-md bg-white/5 border border-white/5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono leading-none py-1.5 px-2.5 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/10">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Explore Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="pt-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 group/btn border-t border-white/5 w-full text-left self-end"
                >
                  View Details & Challenges
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl relative my-8"
            id="project-case-modal"
          >
            {/* Header / Accent Top */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500" />

            <div className="p-6 sm:p-8 space-y-6">
              {/* Toolbar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <span className="text-xs text-purple-400 font-mono tracking-widest uppercase block">
                    Case Study Exploration
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid content split details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left pane: Description & list */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Detailed summary */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      Full Narrative & Objectives
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  {selectedProject.keyFeatures && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                        Key Features & Milestones
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {selectedProject.keyFeatures.map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5"
                          >
                            <Key className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-200">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right metadata pane */}
                <div className="lg:col-span-4 space-y-5">
                  {/* Technical specifics block */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">
                      Technical Specs
                    </h4>

                    {selectedProject.role && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-medium">My Role:</span>
                        <span className="text-cyan-300 font-semibold">{selectedProject.role}</span>
                      </div>
                    )}

                    {selectedProject.duration && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-medium">Timeline:</span>
                        <span className="text-purple-300 font-mono">{selectedProject.duration}</span>
                      </div>
                    )}

                    <div className="space-y-2">
                      <span className="text-[10px] text-gray-500 font-medium uppercase font-mono tracking-widest block">
                        Technologies Leveraged:
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono leading-none py-1 px-2 rounded bg-purple-500/10 text-purple-400 border border-purple-500/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Informational warning */}
                  <div className="p-4 rounded-xl bg-cyan-500/5 text-cyan-400/90 border border-cyan-500/20 flex gap-2.5 items-start text-xs leading-relaxed">
                    <AlertCircle className="w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                    <span>
                      Prototype deployment is undergoing server consolidation. Source assets are securely retained in local college vaults.
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer action trigger */}
              <div className="border-t border-white/5 pt-5 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-4.5 py-2.5 rounded-full border border-white/10 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
