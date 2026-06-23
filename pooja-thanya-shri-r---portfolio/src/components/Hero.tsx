import { useState, useEffect } from "react";
import { ArrowDown, Mail, Briefcase, FileText, Download, Check } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onShowResume: () => void;
}

export default function Hero({ onShowResume }: HeroProps) {
  const titles = [
    "AI & Data Science Student",
    "Python Enthusiast",
    "Responsive Web Developer",
    "Problem Solver"
  ];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const word = titles[currentWordIdx];

    const tick = () => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length + 1 === word.length) {
          // Pause at peak
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % titles.length);
          setTypingSpeed(100);
          return;
        }
      }

      setTypingSpeed(isDeleting ? 50 : 120);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-950 pb-16"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-0 inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.15)_0%,rgba(15,23,42,0)_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "3s" }} />

      {/* Decorative Network Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] -z-10 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Section */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Empowering AI & Modern Data Architectures
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white leading-tight tracking-tight">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Typing Effect */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300 min-h-[36px] flex items-center justify-center lg:justify-start">
              <span>{currentText}</span>
              <span className="w-1.5 h-6 ml-1.5 bg-cyan-400 cursor-blink inline-block" />
            </h2>
          </div>

          <p className="text-gray-400 max-w-lg leading-relaxed text-sm sm:text-base font-sans">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action Callouts */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-purple-600/20 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200"
              id="hero-view-projects"
            >
              <Briefcase className="w-4 h-4" />
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 active:scale-95 transition-all duration-200"
              id="hero-contact-me"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>

            <button
              onClick={onShowResume}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-cyan-400 hover:text-cyan-300 font-semibold text-sm px-6 py-3.5 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 active:scale-95 transition-all duration-200"
              id="hero-view-resume"
            >
              <FileText className="w-4 h-4" />
              Resume CV
            </button>
          </div>
        </div>

        {/* Profile Image Canvas */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Outer Glowing Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-45 transition-opacity duration-500" />
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500 rounded-[2.6rem] opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Image Container */}
            <div className="absolute inset-0 w-full h-full bg-slate-900 border border-white/15 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center relative">
              <img
                src="/src/assets/images/regenerated_image_1782230749986.png"
                alt="Pooja Thanya Shri R Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                id="hero-profile-avatar"
              />

              {/* Status Overlay */}
              <div className="absolute bottom-5 left-5 right-5 glass-panel py-2 px-3.5 rounded-xl border border-white/10 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-gray-300">
                  Open for Internships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bounce Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Scroll Down</span>
        <button
          onClick={() => scrollToSection("#about")}
          className="p-1.5 bg-white/5 border border-white/5 rounded-full text-purple-400 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
