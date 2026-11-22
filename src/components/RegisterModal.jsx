import { useState } from "react";
import { X, CheckCircle, Copy, Check, Download, Calendar, Users, User, ArrowRight, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const RegisterModal = ({ isOpen, onClose, initialTier = "solo" }) => {
  const [tier, setTier] = useState(initialTier);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    track: "AI / ML & Agentic Systems",
    github: "",
    teamName: "",
    member2Name: "",
    member2Email: "",
    member3Name: "",
    member3Email: "",
    member4Name: "",
    member4Email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentPrice = tier === "solo" ? HACKATHON_DETAILS.pricing.solo.price : HACKATHON_DETAILS.pricing.team.price;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `HWM4-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketData({
        ticketId: generatedId,
        tier: tier === "solo" ? "SOLO DEV PASS" : "TEAM SQUAD PASS",
        amountPaid: `₹${currentPrice}`,
        name: formData.name || "Pioneer Hacker",
        teamName: tier === "team" ? (formData.teamName || "Multiverse Syndicate") : "Solo Renegade",
        track: formData.track,
        college: formData.college || "National Tech Institute",
        date: "24-25 September 2026",
        issuedAt: new Date().toLocaleDateString(),
      });
      setIsSubmitting(false);
    }, 900);
  };

  const handleCopyTicket = () => {
    if (!ticketData) return;
    const text = `🎟️ HACK WITH MUMBAI 4.O OFFICIAL TICKET\nID: ${ticketData.ticketId}\nPass: ${ticketData.tier}\nName: ${ticketData.name}\nTeam: ${ticketData.teamName}\nTrack: ${ticketData.track}\nAmount: ${ticketData.amountPaid}\nOrganised by: HACK WITH MUMBAI`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAndClose = () => {
    setTicketData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#121118] border-3 border-black comic-box text-white rounded-xl overflow-hidden my-auto max-h-[92vh] flex flex-col shadow-[10px_10px_0px_#e63946]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#fff9cb] text-black px-6 py-4 flex items-center justify-between border-b-3 border-black">
          <div className="flex items-center gap-2">
            <span className="bg-[#e63946] text-white px-2 py-0.5 text-xs font-black uppercase tracking-wider rounded-sm">
              LIVE REGISTRATION
            </span>
            <h3 className="font-round-bold text-lg md:text-xl font-black uppercase tracking-tight">
              Hack With Mumbai 4.O
            </h3>
          </div>
          <button 
            onClick={resetAndClose}
            className="p-1.5 hover:bg-black hover:text-white rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-5 md:p-7 overflow-y-auto flex-1">
          {!ticketData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pass Tier Toggle */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTier("solo")}
                  className={`p-3.5 rounded-lg border-2 border-black flex flex-col items-center text-center transition-all ${
                    tier === "solo"
                      ? "bg-[#fff9cb] text-black comic-box-sm scale-[1.02]"
                      : "bg-[#1d1b26] text-gray-300 hover:bg-[#252233]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-black text-sm md:text-base">
                    <User className="w-4 h-4" />
                    SOLO DEV
                  </div>
                  <div className="text-xl md:text-2xl font-round-bold font-black text-[#e63946] mt-1">
                    ₹100
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">Per Participant</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTier("team")}
                  className={`p-3.5 rounded-lg border-2 border-black flex flex-col items-center text-center transition-all ${
                    tier === "team"
                      ? "bg-[#fff9cb] text-black comic-box-sm scale-[1.02]"
                      : "bg-[#1d1b26] text-gray-300 hover:bg-[#252233]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-black text-sm md:text-base">
                    <Users className="w-4 h-4" />
                    TEAM SQUAD
                  </div>
                  <div className="text-xl md:text-2xl font-round-bold font-black text-[#e63946] mt-1">
                    ₹200
                  </div>
                  <div className="text-[11px] opacity-80 mt-0.5">2 - 4 Members</div>
                </button>
              </div>

              {/* Informative notification */}
              <div className="bg-[#1b1926] border border-pink/30 p-3 rounded-lg flex items-start gap-3 text-xs md:text-sm text-gray-300">
                <Sparkles className="w-5 h-5 text-yellow shrink-0 mt-0.5" />
                <span>
                  <strong>Organised by Hack With Mumbai 4.O:</strong> Registration includes 36-hour arena entry, 1-on-1 industry mentorship, verified digital certificate, exclusive swag pack, and entry into the <strong>₹2,00,000 prize pool</strong>.
                </span>
              </div>

              {/* Primary details */}
              <div className="space-y-4">
                <h4 className="font-round-bold text-sm uppercase text-yellow tracking-wider">
                  {tier === "solo" ? "Hacker Information" : "Team Leader Information"}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Jason Duval"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="hacker@universe.dev"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      College / University / Org *
                    </label>
                    <input
                      required
                      type="text"
                      name="college"
                      placeholder="e.g. IIT Bombay / Freelance"
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Chosen Domain (Any Domain Permitted) *
                    </label>
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3 py-2.5 text-sm text-white outline-none"
                    >
                      <option value="AI / ML & Agentic Systems">Domain 01: AI/ML & Agentic Systems</option>
                      <option value="Web & Full-Stack Apps">Domain 02: Web & Full-Stack Apps</option>
                      <option value="Mobile & Cross-Platform">Domain 03: Mobile & Cross-Platform</option>
                      <option value="Cloud Infra & Cybersecurity">Domain 04: Cloud Infra & Cybersecurity</option>
                      <option value="Web3 & Blockchain">Domain 05: Web3 & Blockchain</option>
                      <option value="Open Innovation / Any Domain">Domain 06: Open Innovation / Any Domain</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      GitHub or Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="github"
                      placeholder="https://github.com/username"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Team fields if team tier selected */}
              {tier === "team" && (
                <div className="space-y-3 pt-3 border-t border-neutral-800">
                  <h4 className="font-round-bold text-sm uppercase text-pink tracking-wider">
                    Team Squad Configuration
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">
                      Team Squad Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="teamName"
                      placeholder="e.g. Vice City Synthetics"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Member 2 Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="member2Name"
                        placeholder="e.g. Lucia Caminos"
                        value={formData.member2Name}
                        onChange={handleInputChange}
                        className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Member 2 Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="member2Email"
                        placeholder="lucia@vicecity.io"
                        value={formData.member2Email}
                        onChange={handleInputChange}
                        className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Member 3 Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="member3Name"
                        placeholder="Teammate 3"
                        value={formData.member3Name}
                        onChange={handleInputChange}
                        className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        Member 4 Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="member4Name"
                        placeholder="Teammate 4"
                        value={formData.member4Name}
                        onChange={handleInputChange}
                        className="w-full bg-[#181622] border-2 border-neutral-700 focus:border-pink rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Fee & Payment breakdown */}
              <div className="bg-[#191624] border-2 border-black p-4 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                    Total Registration Amount
                  </div>
                  <div className="text-2xl font-round-bold font-black text-yellow">
                    ₹{currentPrice} <span className="text-xs text-gray-400 font-normal">INR / All-inclusive</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-400 font-bold bg-green-950/40 px-3 py-1.5 rounded border border-green-800">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  Instant Pass Confirmation
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3.5 px-6 font-round-bold text-base md:text-lg font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Generating Hacker Pass...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Complete Registration (₹{currentPrice})
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </button>
            </form>
          ) : (
            /* Digital Hacker Pass Display */
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500/20 text-green-400 rounded-full border border-green-500/40 mb-1">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-round-bold font-black text-yellow uppercase">
                Registration Confirmed!
              </h3>
              <p className="text-xs md:text-sm text-gray-300 max-w-md mx-auto">
                Welcome to the Multiverse. Your official pass for <strong>Hack With Mumbai 4.O</strong> has been generated and confirmed by Hack With Mumbai.
              </p>

              {/* Cyberpunk Comic Badge Ticket Card */}
              <div className="bg-[#fff9cb] text-black border-3 border-black comic-box p-5 md:p-6 text-left rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#e63946] text-white text-[10px] md:text-xs font-black uppercase px-3 py-1 border-b-2 border-l-2 border-black tracking-wider">
                  OFFICIAL HACKER PASS
                </div>

                <div className="flex items-start justify-between border-b-2 border-black pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#e63946] block">
                      HACK WITH MUMBAI 4.O PRESENTS
                    </span>
                    <h4 className="font-round-bold text-xl md:text-2xl font-black uppercase leading-none">
                      HACK WITH MUMBAI 4.O
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-700 block font-bold">PASS TYPE</span>
                    <span className="font-black text-sm bg-black text-[#fff9cb] px-2 py-0.5 rounded">
                      {ticketData.tier}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm font-sans mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-600 block">Hacker Name</span>
                    <strong className="text-sm font-black text-black">{ticketData.name}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-600 block">Team Name</span>
                    <strong className="text-sm font-black text-black">{ticketData.teamName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-600 block">Chosen Domain</span>
                    <strong className="text-xs font-bold text-black">{ticketData.track}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-600 block">Ticket ID</span>
                    <strong className="text-xs font-mono font-black text-[#e63946]">{ticketData.ticketId}</strong>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-dashed border-black/40 flex items-center justify-between text-[11px] font-bold">
                  <div>
                    <span>Event Date: <strong>24-25 September 2026</strong></span>
                    <br />
                    <span>Duration: <strong>36 Hours Non-Stop</strong></span>
                  </div>
                  <div className="bg-black text-[#fff9cb] px-2.5 py-1 rounded text-xs font-black">
                    PAID {ticketData.amountPaid}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleCopyTicket}
                  className="bg-[#242132] hover:bg-[#2e2a3f] text-white py-2.5 px-3 rounded border border-neutral-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Ticket Copied!" : "Copy Details"}
                </button>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752c4] text-white py-2.5 px-3 rounded text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Join Discord Room
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="bg-[#e63946] hover:bg-[#d62839] text-white py-2.5 px-3 rounded text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
