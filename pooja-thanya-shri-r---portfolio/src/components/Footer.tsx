import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 position-relative z-10">
        {/* Profile branding info */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-white font-display font-medium text-sm shadow-md">
              P
            </div>
            <span className="font-display font-bold text-white text-base tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-gray-500 font-mono">
            {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Copy labels */}
        <div className="text-center md:text-right space-y-2">
          <div className="flex justify-center md:justify-end gap-3.5">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Send Direct Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Embedded arrow back-to-top button */}
      <div className="absolute right-6 bottom-12 md:right-12">
        <button
          onClick={handleScrollTop}
          className="p-3 bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/20 rounded-full active:scale-95 transition-all shadow-lg"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
