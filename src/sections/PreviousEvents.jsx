import { useState, useEffect, useRef, useCallback } from "react";
import { PAST_EVENTS } from "../constants/pastEventsData";
import { 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Calendar, 
  Users, 
  Sparkles, 
  ExternalLink, 
  CheckCircle, 
  FolderGit2, 
  Image as ImageIcon, 
  X,
  Play,
  Pause
} from "lucide-react";

const PreviousEvents = ({ onOpenRegister }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeEvent = PAST_EVENTS[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PAST_EVENTS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + PAST_EVENTS.length) % PAST_EVENTS.length);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused || selectedEvent) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isPaused, selectedEvent, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedEvent) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, selectedEvent]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      id="past-events" 
      className="relative py-20 md:py-28 px-4 sm:px-6 md:px-16 z-30 overflow-hidden bg-[#0a0814] border-t-2 border-black"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(230,57,70,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block mb-3">
            <span className="comic-badge text-xs sm:text-sm px-4 py-1.5 uppercase font-black inline-flex items-center gap-2 bg-[#ffd23f] text-black shadow-[3px_3px_0px_#000]">
              <Sparkles className="w-4 h-4 text-[#e63946]" />
              THE BUILDER ARCHIVES • HACK WITH INDIA
            </span>
          </div>

          <h2 className="font-round-bold text-3xl sm:text-5xl md:text-7xl font-black uppercase text-white tracking-tight drop-shadow-[0_4px_20px_rgba(230,57,70,0.5)]">
            PREVIOUS EDITIONS
          </h2>
          
          <p className="text-pink text-sm sm:text-lg md:text-xl font-round-bold uppercase font-bold tracking-wider mt-2 max-w-2xl mx-auto">
            From 12-Hour Genesis Sprints to 36-Hour National Arenas
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-2 max-w-xl mx-auto">
            Explore our proven track record of shipping production-grade software, packed war rooms, and empowering thousands of developers nationwide.
          </p>
        </div>

        {/* Top Interactive Event Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {PAST_EVENTS.map((event, idx) => (
            <button
              key={event.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-round-bold font-black uppercase tracking-wider transition-all cursor-pointer border-2 ${
                idx === currentIndex
                  ? "bg-[#e63946] text-white border-black shadow-[3px_3px_0px_#fff9cb] scale-105"
                  : "bg-black/60 text-gray-400 border-neutral-800 hover:text-white hover:border-neutral-600"
              }`}
            >
              <span className="hidden sm:inline mr-1 text-[10px] opacity-75">{event.edition}:</span>
              <span>{event.title}</span>
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Card */}
          <div className="comic-box bg-[#fff9cb] text-black rounded-2xl overflow-hidden shadow-[10px_10px_0px_#e63946] border-3 border-black transition-all duration-300">
            
            {/* Top Event Header Ribbon */}
            <div className="bg-[#121118] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b-3 border-black flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="comic-badge text-[10px] sm:text-xs px-2.5 py-0.5 bg-[#e63946] text-white">
                  {activeEvent.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#ffd23f]">
                  {activeEvent.date}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <FolderGit2 className="w-3.5 h-3.5 text-[#ffb0c4]" />
                <span className="hidden sm:inline">Archive:</span>
                <span className="text-white font-bold">{activeEvent.folderName}</span>
              </div>
            </div>

            {/* Grid Layout: Visual Banner & Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left / Top Visual Showcase Column */}
              <div className="lg:col-span-5 relative bg-[#181622] min-h-[260px] sm:min-h-[320px] flex flex-col justify-between p-4 sm:p-6 overflow-hidden border-b-3 lg:border-b-0 lg:border-r-3 border-black group">
                
                {/* Background Image / Placeholder with Cyberpunk Vignette */}
                <img 
                  src={activeEvent.image} 
                  alt={activeEvent.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121118] via-[#121118]/60 to-transparent pointer-events-none" />

                {/* Top Corner Pill */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-black/80 backdrop-blur-md border border-white/20 text-[#fff9cb] text-[10px] sm:text-xs px-2.5 py-1 rounded-md font-black uppercase inline-flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#e63946]" />
                    EVENT MEDIA ARCHIVE
                  </span>

                  <span className="bg-[#e63946] text-white text-[10px] px-2 py-0.5 font-black uppercase rounded shadow-sm">
                    {currentIndex + 1} / {PAST_EVENTS.length}
                  </span>
                </div>

                {/* Center Graphic Badge */}
                <div className="relative z-10 my-auto text-center py-6">
                  <div className="inline-block p-4 rounded-2xl bg-black/60 border-2 border-white/20 backdrop-blur-md shadow-2xl">
                    <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-[#ffd23f] mx-auto mb-2" />
                    <span className="font-round-bold text-xs sm:text-sm font-black uppercase text-white tracking-widest block">
                      {activeEvent.edition}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 block">
                      {activeEvent.venue}
                    </span>
                  </div>
                </div>

                {/* Bottom Placeholder Notice */}
                <div className="relative z-10 bg-black/85 backdrop-blur-md border border-yellow/30 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] font-bold text-yellow flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#e63946]" />
                    <span>Official Photos From <strong>"{activeEvent.folderName}"</strong></span>
                  </span>
                </div>
              </div>

              {/* Right / Content Column */}
              <div className="lg:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#e63946] block mb-1">
                      {activeEvent.tagline}
                    </span>
                    <h3 className="font-round-bold text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight text-black">
                      {activeEvent.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-neutral-700 font-sans mt-0.5">
                      {activeEvent.subtitle} • {activeEvent.venue}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-900 leading-relaxed font-sans mb-6">
                    {activeEvent.description}
                  </p>

                  {/* Key Stats Metric Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                    {activeEvent.stats.map((stat, i) => (
                      <div key={i} className="bg-black/5 border border-black/20 p-2.5 rounded-xl text-center">
                        <span className="text-lg sm:text-xl md:text-2xl font-round-bold font-black text-[#e63946] leading-none block">
                          {stat.value}
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-wider text-black block mt-0.5">
                          {stat.label}
                        </span>
                        <span className="text-[8px] text-neutral-600 font-sans block leading-none">
                          {stat.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-black uppercase text-neutral-700 tracking-wider block">
                      KEY EDITION HIGHLIGHTS:
                    </span>
                    {activeEvent.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-800 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-green-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t-2 border-black/20">
                  <button
                    onClick={() => setSelectedEvent(activeEvent)}
                    className="w-full sm:w-auto flex-1 comic-box-sm bg-[#e63946] hover:bg-[#d62839] text-white py-3 px-5 font-round-bold text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5 shadow-[3px_3px_0px_#000]"
                  >
                    <span>INSPECT EDITION ARCHIVE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenRegister?.("team")}
                    className="w-full sm:w-auto comic-box-sm bg-black hover:bg-neutral-800 text-white py-3 px-5 font-round-bold text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5 shadow-[3px_3px_0px_#e63946]"
                  >
                    <span>JOIN HWM 4.0 SQUAD</span>
                    <Trophy className="w-3.5 h-3.5 text-[#ffd23f]" />
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Carousel Arrow Controls */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fff9cb] text-black border-2 border-black flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_#000] hover:scale-110 active:scale-95 transition-transform z-20"
            aria-label="Previous Event"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fff9cb] text-black border-2 border-black flex items-center justify-center cursor-pointer shadow-[3px_3px_0px_#000] hover:scale-110 active:scale-95 transition-transform z-20"
            aria-label="Next Event"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

        {/* Carousel Bottom Pagination Bar */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            {PAST_EVENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex 
                    ? "w-8 h-2.5 bg-[#e63946] border border-black shadow-[1px_1px_0px_#fff9cb]" 
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle button */}
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 font-mono px-2 py-1 rounded bg-black/40 border border-white/10 cursor-pointer ml-3"
            title={isPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
          >
            {isPaused ? <Play className="w-3 h-3 text-[#ffd23f]" /> : <Pause className="w-3 h-3 text-pink" />}
            <span className="text-[10px]">{isPaused ? "RESUME" : "PAUSE"}</span>
          </button>
        </div>

      </div>

      {/* Interactive Modal for Selected Event Details */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="comic-box bg-[#fff9cb] text-black max-w-2xl w-full rounded-2xl overflow-hidden shadow-[10px_10px_0px_#e63946] border-3 border-black relative my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#121118] text-white px-5 sm:px-7 py-4 flex items-center justify-between border-b-3 border-black">
              <div>
                <span className="comic-badge text-[10px] px-2 py-0.5 bg-[#e63946] text-white">
                  {selectedEvent.badge}
                </span>
                <h3 className="font-round-bold text-lg sm:text-2xl font-black uppercase text-white mt-1 leading-tight">
                  {selectedEvent.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 hover:bg-white/20 rounded-md transition-colors cursor-pointer text-white"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto space-y-5">
              
              {/* Event Folder & Archive Notice */}
              <div className="bg-black/10 border-2 border-black p-3.5 rounded-xl flex items-center gap-3">
                <div className="p-2.5 bg-[#e63946] text-white rounded-lg shrink-0">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#e63946] block">
                    GOOGLE DRIVE ARCHIVE REPOSITORY
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-black font-mono">
                    "{selectedEvent.folderName}"
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-round-bold text-sm uppercase text-[#e63946] tracking-wider mb-1">
                  Edition Narrative
                </h4>
                <p className="text-xs sm:text-sm text-neutral-800 font-sans leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedEvent.stats.map((stat, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-black/20 text-center shadow-sm">
                    <span className="text-xl font-round-bold font-black text-[#e63946] block">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-black uppercase text-black block mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[9px] text-neutral-500 font-sans block">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* All Highlights */}
              <div>
                <h4 className="font-round-bold text-sm uppercase text-[#e63946] tracking-wider mb-2">
                  Official Highlights & Key Takeaways
                </h4>
                <div className="space-y-2">
                  {selectedEvent.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white/70 p-2.5 rounded-lg border border-black/15 text-xs text-neutral-800">
                      <CheckCircle className="w-4 h-4 text-green-700 shrink-0 mt-0.5" />
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Slot Notice */}
              <div className="bg-[#fff275]/50 border-2 border-dashed border-black/40 p-4 rounded-xl text-center">
                <ImageIcon className="w-6 h-6 text-[#e63946] mx-auto mb-1.5" />
                <span className="font-round-bold text-xs uppercase font-black text-black block">
                  Photo & Video Reel Slot Ready
                </span>
                <p className="text-[11px] text-neutral-700 font-sans mt-0.5">
                  High-resolution photo reels from <strong>"{selectedEvent.folderName}"</strong> will be rendered in this gallery.
                </p>
              </div>

              {/* Action */}
              <button
                onClick={() => {
                  setSelectedEvent(null);
                  onOpenRegister?.("team");
                }}
                className="w-full comic-box bg-[#e63946] hover:bg-[#d62839] text-white py-3.5 px-6 font-round-bold text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0px_#000]"
              >
                <span>REGISTER FOR HACK WITH MUMBAI 4.0</span>
                <Trophy className="w-4 h-4 text-[#ffd23f]" />
              </button>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default PreviousEvents;
