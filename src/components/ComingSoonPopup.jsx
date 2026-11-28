import { useState } from "react";
import { X, Calendar, Clock, Zap, ArrowRight, Check, Sparkles, Users, ShieldCheck, Copy, ExternalLink } from "lucide-react";
import { HACKATHON_DETAILS } from "../constants/hackathonData";

const ComingSoonPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    college: "",
    teamSize: "4 Members",
    domain: "AI / ML & Agentic Systems",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [vipPass, setVipPass] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `HWM4-TEAM-${Math.floor(1000 + Math.random() * 9000)}`;
      setVipPass({
        id: generatedId,
        teamName: formData.teamName || "Multiverse Syndicate",
        leaderName: formData.leaderName || "Team Lead",
        teamSize: formData.teamSize,
        email: formData.email,
        domain: formData.domain,
        college: formData.college || "Tech University",
        tier: "TEAM SQUAD VIP PASS (2–4 MEMBERS)",
        fee: "OFFICIAL UNSTOP PORTAL",
        perks: "Guaranteed Early Team Slot • 1-on-1 Discord War Room Access • VIP Team Swag Kit"
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyTicket = () => {
    if (!vipPass) return;
    const text = `🎟️ HACK WITH MUMBAI 4.0 — VIP TEAM EARLY ACCESS PASS\nVIP ID: ${vipPass.id}\nTeam: ${vipPass.teamName}\nLeader: ${vipPass.leaderName}\nTeam Size: ${vipPass.teamSize}\nTier: ${vipPass.tier}\nDomain: ${vipPass.domain}\nFee: ${vipPass.fee}\nOrganised by: HACK WITH INDIA\nStatus: CONFIRMED FOR LAUNCH NOTIFICATION`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetAndClose = () => {
    setVipPass(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0f0d1a] border-3 border-black comic-box text-white rounded-2xl overflow-hidden my-auto shadow-[10px_10px_0px_#e63946] animate-in zoom-in-95 fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top vibrant accent stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#e63946] via-[#ffb0c4] to-[#fff9cb]" />

        {/* Header Bar */}
        <div className="bg-[#fff9cb] text-black px-4 sm:px-6 py-3 flex items-center justify-between border-b-3 border-black">
          <div className="flex items-center gap-2">
            <span className="bg-[#e63946] text-white px-2 py-0.5 text-[10px] md:text-xs font-black uppercase tracking-wider rounded-sm animate-pulse">
              VIP EARLY ACCESS
            </span>
            <span className="font-round-bold text-xs md:text-sm font-black uppercase text-black">
              HACK WITH INDIA
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 hover:bg-black hover:text-white rounded-md transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="p-4 sm:p-5 md:p-7 max-h-[82vh] overflow-y-auto">
          {!vipPass ? (
            <div className="space-y-4 sm:space-y-5">
              
              {/* Badge & Title */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 comic-badge text-[10px] md:text-xs px-3 py-1 mb-2 font-black">
                  <span className="w-2 h-2 rounded-full bg-[#e63946] animate-ping" />
                  TEAM REGISTRATION OPENING SOON
                </div>
                <h3 className="font-round-bold text-xl sm:text-2xl md:text-4xl font-black uppercase leading-tight text-white">
                  HACK WITH MUMBAI 4.0
                </h3>
                <p className="text-pink text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
                  36-Hour National Team Hackathon • 24-25 September 2026
                </p>
                <p className="text-gray-300 text-xs md:text-sm font-sans mt-2 max-w-md mx-auto">
                  Assemble your squad of <strong>2 to 4 members</strong>. Reserve your <strong>Priority Early-Bird Team Spot</strong> now to get notified first when portal opens!
                </p>
              </div>

              {/* Team Pass Banner */}
              <div className="p-4 rounded-xl border-2 border-black bg-[#fff9cb] text-black comic-box-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#e63946] text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#e63946] block tracking-wider">
                      TEAM PASS (2 TO 4 MEMBERS)
                    </span>
                    <h4 className="font-round-bold text-base md:text-lg font-black uppercase text-black">
                      TEAM SQUAD ENTRY
                    </h4>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-round-bold font-black text-[#e63946]">UNSTOP</span>
                  <span className="text-[10px] font-bold block text-neutral-700">2–4 Members</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1">
                      Team / Squad Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="teamName"
                      placeholder="e.g. Cyber Titans"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3.5 py-2 text-xs md:text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1">
                      Team Leader Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="leaderName"
                      placeholder="e.g. Jason Duval"
                      value={formData.leaderName}
                      onChange={handleInputChange}
                      className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3.5 py-2 text-xs md:text-sm text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1">
                      Leader Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="leader@squad.dev"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3.5 py-2 text-xs md:text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3.5 py-2 text-xs md:text-sm text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1">
                      College / Institute / Company *
                    </label>
                    <input
                      required
                      type="text"
                      name="college"
                      placeholder="e.g. BVUDET Navi Mumbai / Any College"
                      value={formData.college}
                      onChange={handleInputChange}
                      className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3.5 py-2 text-xs md:text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 mb-1">
                      Expected Team Size (2 to 4 Members) *
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3 py-2 text-xs md:text-sm text-white outline-none"
                    >
                      <option value="2 Members">2 Members</option>
                      <option value="3 Members">3 Members</option>
                      <option value="4 Members">4 Members</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">
                    Preferred Domain (Choose ANY Domain!)
                  </label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="w-full bg-[#181525] border-2 border-neutral-700 focus:border-pink rounded-lg px-3 py-2 text-xs md:text-sm text-white outline-none"
                  >
                    <option value="AI / ML & Agentic Systems">Domain 01: AI / ML & Agentic Systems</option>
                    <option value="Web & Full-Stack Apps">Domain 02: Web & Full-Stack Apps</option>
                    <option value="Mobile & Cross-Platform">Domain 03: Mobile & Cross-Platform</option>
                    <option value="Cloud Infra & Cybersecurity">Domain 04: Cloud Infra & Cybersecurity</option>
                    <option value="Web3 & Decentralized Tech">Domain 05: Web3 & Decentralized Tech</option>
                    <option value="Open Innovation / Wildcard">Domain 06: Open Innovation / Wildcard (Any Domain)</option>
                  </select>
                  <span className="text-[10px] text-yellow font-bold mt-1 block">
                    ★ All domains compete for the ONE single unified ₹1,50,000 Podium Prize Pool!
                  </span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3.5 px-6 font-round-bold text-sm md:text-base font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 shadow-[4px_4px_0px_#fff9cb]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Reserving Team VIP Spot...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      CLAIM TEAM VIP PRE-REGISTRATION SPOT
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </span>
                  )}
                </button>
              </form>

              {/* Event quick metrics */}
              <div className="flex items-center justify-around pt-3 border-t border-neutral-800 text-[11px] font-bold text-neutral-400">
                <span className="flex items-center gap-1 text-yellow">
                  <Calendar className="w-3.5 h-3.5" /> 24-25 Sept 2026
                </span>
                <span className="flex items-center gap-1 text-pink">
                  <Clock className="w-3.5 h-3.5" /> 36 Hours
                </span>
                <span className="flex items-center gap-1 text-green-400">
                  <Zap className="w-3.5 h-3.5" /> ₹1,50,000 Pool
                </span>
              </div>
            </div>
          ) : (
            /* Digital VIP Pass Generated */
            <div className="space-y-5 text-center animate-in zoom-in-95 duration-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 text-green-400 rounded-full border border-green-500/40">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-round-bold font-black text-yellow uppercase">
                  TEAM VIP SPOT RESERVED!
                </h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto mt-1">
                  Your squad is officially on the priority VIP list for <strong>Hack With Mumbai 4.0</strong>, organised by <strong>Hack With India</strong>.
                </p>
              </div>

              {/* Comic VIP Badge */}
              <div className="comic-box bg-[#fff9cb] text-black p-5 rounded-xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#e63946] text-white text-[9px] font-black uppercase px-2.5 py-0.5 border-b-2 border-l-2 border-black">
                  TEAM VIP CREDENTIAL
                </div>

                <div className="border-b-2 border-black pb-2.5 mb-3">
                  <span className="text-[9px] font-black uppercase text-[#e63946] tracking-widest block">
                    HACK WITH INDIA PRESENTS
                  </span>
                  <h4 className="font-round-bold text-xl md:text-2xl font-black uppercase leading-tight">
                    HACK WITH MUMBAI 4.0
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs mb-3">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-600 block">Squad Name</span>
                    <strong className="text-sm font-black text-black">{vipPass.teamName}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-600 block">Team Leader</span>
                    <strong className="text-xs font-black text-black">{vipPass.leaderName}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-600 block">Team Size</span>
                    <strong className="text-xs font-black text-[#e63946]">{vipPass.teamSize}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-600 block">VIP Pass ID</span>
                    <strong className="text-xs font-mono font-black text-black">{vipPass.id}</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[9px] uppercase font-bold text-gray-600 block">Selected Domain</span>
                    <strong className="text-xs font-bold text-black">{vipPass.domain}</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-dashed border-black/40 flex items-center justify-between text-[10px] font-bold">
                  <span>Squad Registration: <strong>UNSTOP OFFICIAL</strong></span>
                  <span className="bg-black text-[#fff9cb] px-2 py-0.5 rounded text-[10px] font-black">
                    EARLY ACCESS GUARANTEED
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <a
                  href={HACKATHON_DETAILS.unstopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-full comic-box-sm bg-[#ffd23f] hover:bg-white text-black py-2.5 px-3 font-round-bold text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer shadow-[3px_3px_0px_#000] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>REGISTER SQUAD NOW ON UNSTOP</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyTicket}
                  className="bg-[#1f1c2d] hover:bg-[#28243a] text-white py-2.5 px-3 rounded-lg border border-neutral-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Squad Details Copied!" : "Copy VIP Squad Details"}
                </button>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white py-2.5 px-3 font-round-bold text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
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

export default ComingSoonPopup;
