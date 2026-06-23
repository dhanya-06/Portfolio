import { useState, FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, Check, Copy, Send, Sparkles, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/[0.02]"
    >
      {/* Decorative side blurs */}
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" /> Reach Out Anytime
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white">
            Contact <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>

        {/* Content Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Info & coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-panel relative overflow-hidden">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Let's Build Something Great Together
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                I am interested in learning about internship program scopes, student sponsorships, and collaborative web prototyping assignments. Drop me a note and I will return the message within 24 hours.
              </p>

              {/* Direct Coordinate Buttons */}
              <div className="space-y-4">
                {/* Email Copyable Anchor */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3 group hover:border-purple-500/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-115 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Email Coordinates</h4>
                      <p className="text-xs sm:text-sm font-semibold text-white break-all">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/15 text-gray-300 hover:text-purple-400 active:scale-95 transition-all"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Copyable Anchor */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-115 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Mobile / WhatsApp</h4>
                      <p className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/15 text-gray-300 hover:text-cyan-400 active:scale-95 transition-all"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location coordinates */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mb-1">Mailing Address</h4>
                    <p className="text-xs sm:text-sm font-semibold text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick social hubs */}
            <div className="p-6 rounded-3xl glass-panel flex flex-col sm:flex-row items-center gap-4 justify-between">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Social Channels:</span>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-xs px-4.5 py-2.5 rounded-full shadow-lg shadow-purple-600/10 transition-all active:scale-95"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Modern Form layout */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden">
              <h3 className="text-xl font-display font-semibold text-white mb-6">
                Transmit a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="e.g. Anand"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Subject / Matter</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="General consultation or specific opportunity"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Message Body *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    placeholder="Describe your design goals, schedule parameters, or collaboration brief..."
                  />
                </div>

                {isSent && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm flex gap-2 items-center animate-fade-in">
                    <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                    <span>Your communication was dispatched successfully! Pooja will review and reach back.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-sm py-3.5 px-6 rounded-2xl shadow-lg shadow-purple-600/10 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching Bytes...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Secure Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
