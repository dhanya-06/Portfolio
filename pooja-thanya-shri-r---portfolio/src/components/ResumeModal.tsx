import { X, Mail, Phone, MapPin, Printer, Download, Sparkles, Award, GraduationCap, Briefcase } from "lucide-react";
import { PERSONAL_INFO, EDUCATION_TIMELINE, SKILL_CATEGORIES, EXPERIENCE_LIST, CERTIFICATIONS } from "../data";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl relative my-8 overflow-hidden flex flex-col max-h-[90vh]"
        id="resume-cv-frame"
      >
        {/* Modal Controls Toolbar (Hidden on Window Print!) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-white/5 flex-shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold">
              Interactive Resume CV
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label="Close CV View"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto flex-grow print:p-0 print:overflow-visible">
          {/* Header Block card */}
          <div className="border-b-2 border-purple-600 pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-950 leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-md sm:text-lg font-mono text-purple-700 font-bold mt-1.5 uppercase tracking-wide">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 max-w-md mt-2">
                Aspiring AI engineer with solid proficiency in Python scripting, front-end ecosystems, and local beauty trend predictive software architectures.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-1 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Two-Column split details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
            {/* Left side details: education & experience */}
            <div className="md:col-span-7 space-y-8">
              {/* Education block */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest text-purple-700 uppercase font-bold border-b border-slate-200 pb-1.5 flex items-center gap-2">
                  <GraduationCap className="w-4.5 h-4.5" /> Academic Education
                </h3>

                <div className="space-y-5">
                  {EDUCATION_TIMELINE.map((edu) => (
                    <div key={edu.id} className="space-y-1">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-md">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed pt-1">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience block */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest text-purple-700 uppercase font-bold border-b border-slate-200 pb-1.5 flex items-center gap-2">
                  <Briefcase className="w-4.5 h-4.5" /> Internships
                </h3>

                <div className="space-y-5">
                  {EXPERIENCE_LIST.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-md">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-none">
                        {exp.company}
                      </p>

                      <ul className="space-y-1.5 pt-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-[11px] sm:text-xs text-slate-500 list-disc list-inside leading-relaxed pl-1">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: skills & credentials */}
            <div className="md:col-span-5 space-y-8">
              {/* Technical skills block */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest text-purple-700 uppercase font-bold border-b border-slate-200 pb-1.5 flex items-center gap-2">
                  Skills Profile
                </h3>

                <div className="space-y-4">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.title} className="space-y-1.5">
                      <h4 className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {cat.title}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((s) => (
                          <span
                            key={s.name}
                            className="bg-slate-50 border border-slate-100 text-[11px] font-medium py-1 px-2.5 rounded-full text-slate-700"
                          >
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications block */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono tracking-widest text-purple-700 uppercase font-bold border-b border-slate-200 pb-1.5 flex items-center gap-2">
                  <Award className="w-4.5 h-4.5" /> Endorsements
                </h3>

                <div className="space-y-3.5">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {cert.issuer} {cert.date ? `(${cert.date})` : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Notice in Screen Frame */}
        <div className="p-4 bg-slate-50 flex items-center justify-center text-xs text-slate-500 font-mono border-t border-slate-100 print:hidden select-none">
          Preserve this resume offline or download directly from the save print options.
        </div>
      </div>
    </div>
  );
}
