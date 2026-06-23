import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated professional portfolio loading transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Highlight navigation item based on scroll position
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "skills",
      "experience",
      "projects",
      "certifications",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset to trigger highlighting early
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection((prev) => (prev !== section ? section : prev));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div 
        id="loading-spinner"
        className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center gap-4 text-white"
      >
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-purple-500 animate-spin" />
          <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-cyan-500 animate-spin" style={{ animationDirection: "reverse" }} />
        </div>
        <div className="text-center space-y-1">
          <p className="font-display font-bold text-sm tracking-widest text-purple-400 uppercase">
            Pooja Thanya Shri R
          </p>
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">
            Initializing AI Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen relative selection:bg-purple-500/30 selection:text-white">
      {/* Scrollable Master Components */}
      <Header activeSection={activeSection} />
      
      <main>
        <Hero onShowResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Conditional Resume/CV Lightbox Overlay */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
