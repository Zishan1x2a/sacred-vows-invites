import { Phone, MessageCircle, Plane, Hotel, Heart } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import arch from "@/assets/arch.png";
import couple1 from "@/assets/pic1.jpg";
import couple2 from "@/assets/pic2.jpg";
import couple3 from "@/assets/pic3.jpg";
import couple4 from "@/assets/pic4.jpg";
import couple5 from "@/assets/pic5.jpg";
import couple6 from "@/assets/pic6.jpg";
import { GoldDivider, SectionLabel, SectionTitle, GaneshMark } from "@/components/wedding/Ornaments";
import { Countdown } from "@/components/wedding/Countdown";
import { ScratchHeart } from "@/components/ScratchHeart";
import { EventCard, type EventData } from "@/components/wedding/EventCard";
import { RsvpAccept } from "@/components/wedding/RsvpAccept";
import { BlessingsWall } from "@/components/wedding/BlessingsWall";

// ------- Editable content (token-friendly) -------
const guestName = "Esteemed Guest"; // {{guest_name}}
const couple = { bride: "Aanya Sharma", groom: "Arjun Mehra", initials: "A & A" };
const destination = "Udaipur, Rajasthan";
const weddingDate = new Date("2026-02-14T19:30:00+05:30");
const weddingDateLabel = "14th February 2026";

const families = {
  bride: "Mr. & Mrs. Rajeev Sharma",
  groom: "Mr. & Mrs. Vikram Mehra",
  brideElders: "Daughter of Late Smt. Sushila Devi",
  groomElders: "Grandson of Shri Madhav Mehra",
};

type FamilyMember = { name: string; relation: string };
const familyMembers: { bride: FamilyMember[]; groom: FamilyMember[] } = {
  bride: [
    { name: "Shri Rajeev Sharma", relation: "Father of the Bride" },
    { name: "Smt. Meera Sharma", relation: "Mother of the Bride" },
    { name: "Rohan Sharma", relation: "Brother of the Bride" },
    { name: "Ishita Sharma", relation: "Sister of the Bride" },
    { name: "Shri Mohan Lal Sharma", relation: "Grandfather" },
    { name: "Smt. Kamla Devi", relation: "Grandmother" },
  ],
  groom: [
    { name: "Shri Vikram Mehra", relation: "Father of the Groom" },
    { name: "Smt. Sunita Mehra", relation: "Mother of the Groom" },
    { name: "Aditya Mehra", relation: "Brother of the Groom" },
    { name: "Priya Mehra", relation: "Sister of the Groom" },
    { name: "Shri Madhav Mehra", relation: "Grandfather" },
    { name: "Smt. Lalita Mehra", relation: "Grandmother" },
  ],
};

const events: EventData[] = [
  {
    name: "Engagement",
    date: "10 February 2026",
    day: "Tuesday",
    time: "7:00 PM onwards",
    venue: "The Lake Pavilion, Taj Lake Palace, Udaipur",
    mapUrl: "https://maps.google.com/?q=Taj+Lake+Palace+Udaipur",
    meaning: "The first promise of a lifelong union.",
    dress: "Indian Formal · Champagne tones",
    hueVar: "--hue-engagement",
    symbol: "❖",
  },
  {
    name: "Haldi",
    date: "12 February 2026",
    day: "Thursday",
    time: "11:00 AM onwards",
    venue: "Marigold Courtyard, Leela Palace, Udaipur",
    mapUrl: "https://maps.google.com/?q=Leela+Palace+Udaipur",
    meaning: "A joyful ritual of blessings, purity, and golden beginnings.",
    dress: "Yellows & florals",
    hueVar: "--hue-haldi",
    symbol: "✺",
  },
  {
    name: "Mehendi",
    date: "12 February 2026",
    day: "Thursday",
    time: "5:00 PM onwards",
    venue: "Chandni Garden, Leela Palace, Udaipur",
    mapUrl: "https://maps.google.com/?q=Leela+Palace+Udaipur",
    meaning: "An evening of artistry, beauty, and celebration.",
    dress: "Greens, pinks & henna palette",
    hueVar: "--hue-mehendi",
    symbol: "❦",
  },
  {
    name: "Sangeet",
    date: "13 February 2026",
    day: "Friday",
    time: "8:00 PM onwards",
    venue: "Durbar Hall, Fateh Prakash Palace, Udaipur",
    mapUrl: "https://maps.google.com/?q=Fateh+Prakash+Palace+Udaipur",
    meaning: "A night of music, dance, and shared joy.",
    dress: "Jewel tones & festive shimmer",
    hueVar: "--hue-sangeet",
    symbol: "♪",
  },
  {
    name: "Wedding",
    date: "14 February 2026",
    day: "Saturday",
    time: "7:30 PM (Muhurat 9:12 PM)",
    venue: "Mor Chowk, City Palace, Udaipur",
    mapUrl: "https://maps.google.com/?q=City+Palace+Udaipur",
    meaning: "The sacred union witnessed by family, tradition, and fire.",
    dress: "Traditional Indian · Reds & golds",
    hueVar: "--hue-wedding",
    symbol: "卐",
  },
  {
    name: "Reception",
    date: "15 February 2026",
    day: "Sunday",
    time: "7:00 PM onwards",
    venue: "Sheesh Mahal, Oberoi Udaivilas, Udaipur",
    mapUrl: "https://maps.google.com/?q=Oberoi+Udaivilas+Udaipur",
    meaning: "A heartfelt celebration of togetherness with loved ones.",
    dress: "Black tie · Maroons & metallics",
    hueVar: "--hue-reception",
    symbol: "✦",
  },
];

const gallery = [
  { src: couple1, alt: "Aanya and Arjun in royal traditional attire" },
  { src: couple2, alt: "A joyful haldi moment" },
  { src: couple5, alt: "Sacred wedding rituals" },
  { src: couple3, alt: "Intricate bridal mehendi" },
  { src: couple4, alt: "Festive sangeet evening" },
  { src: couple6, alt: "An elegant reception portrait", desktopOnly: true },
];

const HangingBell = ({ delay = "0s", left = "50%", scale = 1 }: { delay?: string; left?: string; scale?: number }) => (
  <div
    className="absolute top-0 pointer-events-none origin-top z-0"
    style={{ left, transform: `translateX(-50%) scale(${scale})`, animation: `floatSlow 5s ease-in-out infinite ${delay}` }}
  >
    <svg width="40" height="150" viewBox="0 0 40 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_6px_rgba(128,0,0,0.3)] opacity-70">
      <line x1="20" y1="0" x2="20" y2="80" stroke="url(#bell-gold)" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="20" cy="25" r="3" fill="#ffe58f" />
      <circle cx="20" cy="55" r="4" fill="#d4af37" />
      <path d="M20 75 C 5 75, 5 105, 0 120 C 10 123, 30 123, 40 120 C 35 105, 35 75, 20 75 Z" fill="url(#bell-gold)" />
      <circle cx="20" cy="125" r="4" fill="#d4af37" />
      <defs>
        <linearGradient id="bell-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe58f" />
          <stop offset="40%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8a6d1c" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Lotus = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="drop-shadow(0px 10px 15px rgba(0,0,0,0.15))">
      {/* Background Petals */}
      <path d="M100 180 C 40 160, 20 80, 50 60 C 70 80, 90 120, 100 180 Z" fill="url(#petal-dark)" />
      <path d="M100 180 C 160 160, 180 80, 150 60 C 130 80, 110 120, 100 180 Z" fill="url(#petal-dark)" />

      {/* Mid Petals */}
      <path d="M100 190 C 50 150, 40 70, 70 40 C 85 70, 95 130, 100 190 Z" fill="url(#petal-mid)" />
      <path d="M100 190 C 150 150, 160 70, 130 40 C 115 70, 105 130, 100 190 Z" fill="url(#petal-mid)" />

      {/* Center Petal */}
      <path d="M100 200 C 70 140, 80 50, 100 20 C 120 50, 130 140, 100 200 Z" fill="url(#petal-light)" />

      {/* Base Leaves */}
      <path d="M100 195 C 40 195, 10 180, 0 150 C 30 170, 70 190, 100 195 Z" fill="url(#leaf)" />
      <path d="M100 195 C 160 195, 190 180, 200 150 C 170 170, 130 190, 100 195 Z" fill="url(#leaf)" />
    </g>
    <defs>
      <linearGradient id="petal-dark" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#b34d4d" />
        <stop offset="100%" stopColor="#e8b4b8" />
      </linearGradient>
      <linearGradient id="petal-mid" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#c26666" />
        <stop offset="100%" stopColor="#f5d5d8" />
      </linearGradient>
      <linearGradient id="petal-light" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#d18080" />
        <stop offset="100%" stopColor="#ffecf0" />
      </linearGradient>
      <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8f9e7a" />
        <stop offset="100%" stopColor="#687854" />
      </linearGradient>
    </defs>
  </svg>
);

const Index = () => {
  const [showScratchCard, setShowScratchCard] = useState(true);
  const [showShlokIntro, setShowShlokIntro] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 11;
  const openingShlokaLines = [
    "ॐ श्री गणेशाय नमः",
    "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।",
    "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
  ];
  const introMotes = Array.from({ length: 18 }, (_, index) => ({
    left: ((index * 19) % 100) + 0.5,
    delay: (index % 6) * 0.6,
    duration: 4.2 + (index % 5) * 0.7,
  }));

  useEffect(() => {
    if (showShlokIntro) {
      const timer = window.setTimeout(() => {
        setShowShlokIntro(false);
      }, 7600);
      return () => window.clearTimeout(timer);
    }
  }, [showShlokIntro]);

  const handleScratchComplete = () => {
    setShowShlokIntro(true);
  };

  const handleScratchReveal = () => {
    setShowScratchCard(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentStep]);

  // Stable ambient motes for the welcome screen (avoid per-render randomness)
  const welcomeMotes = Array.from({ length: 14 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    delay: (i % 6) * 0.7,
  }));

  const stepTitleByIndex = [
    "Sacred Welcome",
    "Invitation Reveal",
    "Celebration Journey",
    "Our Families",
    "Memories Gallery",
    "Accept the Invitation",
    "Blessings Wall",
    "Stay & Travel",
    "Countdown",
    "Contact Cards",
    "Closing Note",
  ];

  return (
    <>
      {showShlokIntro && (
        <section className="shlok-intro-screen fixed inset-0 z-50 flex items-center justify-center px-4 pt-8 pb-4 md:pt-10 md:pb-6 overflow-hidden bg-maroon-deep" aria-label="Opening shlok animation">
          {/* Fullscreen Rich Background Layer */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a0808]/85 via-maroon-deep/80 to-[#1a0f0a]/90" aria-hidden="true" />

          {/* Elegant Perimeter Frame */}
          <div className="absolute inset-4 md:inset-8 border-x border-y border-gold/20 rounded-[2rem] pointer-events-none flex items-center justify-center z-10">
            {/* Corner Ornaments */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/50 rounded-tl-[2rem]"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/50 rounded-tr-[2rem]"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/50 rounded-bl-[2rem]"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/50 rounded-br-[2rem]"></div>
          </div>

          {/* Glowing Central Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,hsl(var(--gold)/0.12)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>

          <div className="shlok-intro-ambient absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden="true">
            {introMotes.map((mote, index) => (
              <span
                key={`mote-${index}`}
                className="shlok-intro-mote"
                style={
                  {
                    left: `${mote.left}%`,
                    animationDelay: `${mote.delay}s`,
                    animationDuration: `${mote.duration}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="shlok-intro-sheet relative z-20 w-[92%] md:max-w-3xl mx-auto flex flex-col items-center justify-center p-6 py-6 md:p-8 rounded-xl border border-gold/40 shadow-[0_0_60px_rgba(212,175,55,0.25)] bg-gradient-to-b from-[#1a0f0a]/95 to-[#2a1a10]/95 backdrop-blur-md">
            {/* Stacked Card Borders */}
            <div className="absolute inset-[-8px] md:inset-[-10px] border-[1px] border-gold/20 rounded-[1.2rem] pointer-events-none" aria-hidden="true"></div>
            <div className="absolute inset-[-16px] md:inset-[-20px] border-[1px] border-gold/10 rounded-[1.5rem] pointer-events-none" aria-hidden="true"></div>

            {/* Corner Ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gold/60 md:w-8 md:h-8 md:top-5 md:left-5 transition-all duration-1000"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-gold/60 md:w-8 md:h-8 md:top-5 md:right-5 transition-all duration-1000"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-gold/60 md:w-8 md:h-8 md:bottom-5 md:left-5 transition-all duration-1000"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gold/60 md:w-8 md:h-8 md:bottom-5 md:right-5 transition-all duration-1000"></div>

            <div className="mb-3 md:mb-4 opacity-0 animate-[fadeIn_1.5s_ease-out_0.2s_forwards] scale-75 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]">
              <GaneshMark size={70} />
            </div>

            <p className="shlok-intro-label text-gold-soft tracking-[0.3em] md:tracking-[0.4em] text-[0.6rem] md:text-[0.65rem] mb-3 md:mb-3 pb-1.5 border-b border-gold/20 inline-block px-5 md:px-10 uppercase">
              Sacred Invocation
            </p>

            <div className="shlok-intro-lines flex flex-col items-center space-y-2 md:space-y-3 w-full px-2 mt-1 md:mt-2">
              {openingShlokaLines.map((line, index) => (
                <div
                  key={line}
                  className="relative inline-block text-center shlok-line-wrapper opacity-0"
                  style={{ ["--line-delay" as string]: `${0.9 + index * 1.85}s` } as CSSProperties}
                >
                  {/* Hidden text to define exact width and height */}
                  <span className={`shlok-intro-text inline-block opacity-0 invisible ${index === 0 ? 'font-semibold' : ''}`} aria-hidden="true">
                    {line}
                  </span>
                  {/* Typing text absolutely positioned */}
                  <span className={`shlok-intro-text absolute top-0 left-0 h-full overflow-hidden whitespace-nowrap border-r-[2px] md:border-r-[3px] border-transparent ${index === 0 ? 'text-vermilion font-semibold drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]' : 'text-gold-soft drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]'} typing-animation`} style={{ ["--steps" as string]: line.length } as CSSProperties}>
                    {line}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 md:mt-5 mb-1.5 md:mb-2 w-full max-w-[120px] md:max-w-[160px] mx-auto opacity-0 animate-[fadeIn_1.5s_ease-out_5.8s_forwards]">
              <GoldDivider />
            </div>

            <div className="mt-3 md:mt-4 flex justify-center opacity-0 shlok-line-wrapper" style={{ ["--line-delay" as string]: "6.4s" } as CSSProperties}>
              <div style={{ animation: "dullHighPulse 3s ease-in-out infinite 8.6s" }}>
                <div className="relative inline-block text-center">
                  <span className="font-serif-elegant text-3xl md:text-4xl text-gold-soft tracking-[0.15em] inline-block pb-1.5 md:pb-2 brush-reveal-animation drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" style={{ ["--line-delay" as string]: "6.4s" } as CSSProperties}>
                    शुभारम्भ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showScratchCard && (
        <ScratchHeart
          onScratchComplete={handleScratchComplete}
          onReveal={handleScratchReveal}
        />
      )}

      {(!showScratchCard && !showShlokIntro) && (
        <main className={`min-h-[100dvh] flex flex-col ${(currentStep <= 1 || currentStep === totalSteps - 1) ? "h-[100dvh] overflow-hidden" : "overflow-y-auto pb-20 md:pb-24"}`}>
          {/* ============ 1. SACRED WELCOME ============ */}
          {currentStep === 0 && (
            <section className="step-screen relative flex-1 w-full flex items-center justify-center overflow-hidden bg-[#f5efe6] py-6 md:py-8">

              {/* Subtle Background Texture */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none"></div>

              {/* Outer Frame */}
              <div className="absolute inset-3 md:inset-6 border-[1px] border-gold/40 rounded-2xl md:rounded-[2.5rem] pointer-events-none"></div>

              {/* Inner Frame */}
              <div className="absolute inset-4 md:inset-8 border-[0.5px] border-gold/30 rounded-xl md:rounded-[2rem] pointer-events-none"></div>

              {/* Hanging Bells - 2 near borders, 2 in middle */}
              <div className="absolute top-0 left-0 w-full h-32 md:h-48 pointer-events-none z-10">
                <HangingBell left="8%" scale={0.4} delay="0s" />
                <HangingBell left="38%" scale={0.4} delay="0.5s" />
                <HangingBell left="62%" scale={0.4} delay="1s" />
                <HangingBell left="92%" scale={0.4} delay="1.5s" />
              </div>

              {/* Corner Lotuses */}
              <div className="absolute bottom-0 left-0 w-32 md:w-56 opacity-95 pointer-events-none z-10 animate-[fadeUp_1.5s_ease-out] -translate-x-2 translate-y-4 md:-translate-x-4 md:translate-y-6">
                <Lotus />
              </div>
              <div className="absolute bottom-0 right-0 w-32 md:w-56 opacity-95 pointer-events-none z-10 animate-[fadeUp_1.5s_ease-out] scale-x-[-1] translate-x-2 translate-y-4 md:translate-x-4 md:translate-y-6">
                <Lotus />
              </div>

              {/* Main Content Area - Refined Premium Card */}
              <div className="relative z-20 w-full max-w-2xl mx-auto px-4 md:px-0 animate-[fadeIn_2s_ease-out]">
                <div className="luxury-card paper-surface ornate-border p-6 py-10 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col items-center justify-center select-none text-center">

                  {/* Internal Card Frame Ornaments */}
                  <div className="absolute inset-2 md:inset-4 border border-gold/15 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none"></div>
                  <div className="absolute inset-3 md:inset-6 border border-gold/5 rounded-[1.2rem] md:rounded-[2.2rem] pointer-events-none"></div>

                  {/* Corner Accents for the card */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-gold/40 rounded-tl-xl md:w-12 md:h-12 md:top-6 md:left-6"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-gold/40 rounded-tr-xl md:w-12 md:h-12 md:top-6 md:right-6"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-gold/40 rounded-bl-xl md:w-12 md:h-12 md:bottom-6 md:left-6"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[1.5px] border-r-[1.5px] border-gold/40 rounded-br-xl md:w-12 md:h-12 md:bottom-6 md:right-6"></div>

                  {/* Ganesha Top Mandala */}
                  <div className="relative mb-4 md:mb-6 mt-2 md:mt-0">
                    <div className="absolute inset-[-8px] rounded-full border border-gold/30 animate-[spin:12s_linear_infinite]"></div>
                    <div className="absolute inset-[-3px] rounded-full border border-dashed border-gold/40 animate-[spin:18s_linear_infinite_reverse]"></div>
                    <GaneshMark size={55} className="md:!w-[70px] md:!h-[70px] text-gold-deep drop-shadow-sm opacity-90 p-1" />
                  </div>

                  {/* Shree Ganeshaya Namah */}
                  <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-6 opacity-95">
                    <span className="text-gold-deep text-sm md:text-base drop-shadow-sm">❖</span>
                    <h2 className="font-script text-3xl md:text-4xl text-maroon-deep font-semibold tracking-wide">Shree Ganeshaya Namah</h2>
                    <span className="text-gold-deep text-sm md:text-base drop-shadow-sm">❖</span>
                  </div>

                  {/* Divider & Dear Esteemed Guest */}
                  <div className="flex flex-col items-center mb-5 md:mb-8 w-full max-w-[200px] md:max-w-[260px] opacity-80">
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-deep/50 to-transparent mb-2 md:mb-3"></div>
                    <p className="font-display text-[0.55rem] md:text-[0.7rem] uppercase tracking-[0.45em] md:tracking-[0.6em] text-maroon/70 font-semibold">
                      Dear {guestName}
                    </p>
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-deep/50 to-transparent mt-2 md:mt-3"></div>
                  </div>

                  {/* Couple Names */}
                  <div className="flex flex-col items-center mb-5 md:mb-8 w-full relative">
                    <h1 className="font-serif-elegant text-5xl md:text-7xl text-[#5b1f1f] leading-none font-medium drop-shadow-sm uppercase tracking-[0.22em] transition-all duration-700">
                      {couple.bride.split(" ")[0]}
                    </h1>

                    <div className="relative flex items-center justify-center w-full my-2 md:my-3">
                      <div className="absolute h-[1px] w-24 md:w-32 bg-gold/20 left-1/2 -translate-x-[160%] md:-translate-x-[180%]"></div>
                      <span className="font-script text-2xl md:text-4xl text-[#d94c3a] italic drop-shadow-sm z-10 font-bold px-4">weds</span>
                      <div className="absolute h-[1px] w-24 md:w-32 bg-gold/20 left-1/2 translate-x-[60%] md:translate-x-[80%]"></div>
                    </div>

                    <h1 className="font-serif-elegant text-5xl md:text-7xl text-[#5b1f1f] leading-none font-medium drop-shadow-sm uppercase tracking-[0.22em] transition-all duration-700">
                      {couple.groom.split(" ")[0]}
                    </h1>
                  </div>

                  {/* Eternal Love Line */}
                  <p className="font-serif-elegant italic text-sm md:text-xl text-[#7a5c5c] mb-6 md:mb-10 font-medium tracking-wide">
                    To begin their journey of eternal love
                  </p>

                  {/* Date and Location line */}
                  <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12 opacity-95 w-full max-w-[320px] md:max-w-[420px]">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-deep/60"></div>
                    <span className="text-gold-deep text-[8px] md:text-[10px]">⟡</span>
                    <p className="font-display text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.18em] md:tracking-[0.35em] text-gold-deep font-bold whitespace-nowrap px-2">
                      {weddingDateLabel}
                      <span className="text-maroon/30 mx-2 md:mx-4">|</span>
                      {destination}
                    </p>
                    <span className="text-gold-deep text-[8px] md:text-[10px]">⟡</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-deep/60"></div>
                  </div>

                  <div className="mt-2 md:mt-4 relative w-full flex justify-center pb-1 md:pb-2">
                    <button type="button" onClick={() => setCurrentStep(1)} className="btn-royal btn-open-invitation group !px-6 !py-3 md:!px-12 md:!py-4 rounded-full overflow-hidden shadow-[0_10px_40px_-10px_rgba(128,0,0,0.5)] border border-gold/80 hover:border-gold scale-100 md:scale-110">
                      <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="relative z-10 flex items-center gap-2 md:gap-3 text-[0.55rem] md:text-xs font-bold tracking-[0.35em] md:tracking-[0.45em] text-ivory uppercase drop-shadow-md">
                        Open Invitation <span className="text-gold-soft group-hover:translate-y-1.5 transition-transform duration-300 text-base md:text-lg">▼</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============ 2. INVITATION REVEAL ============ */}
          {currentStep === 1 && (
            <section id="invitation" className="step-screen relative flex-1 w-full flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-10 paper-surface premium-glow">
              <div className="luxury-card paper-surface ornate-border p-6 py-10 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col items-center justify-center select-none text-center max-w-3xl w-full mx-auto">

                {/* Internal Card Frame Ornaments */}
                <div className="absolute inset-2 md:inset-4 border border-gold/15 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none"></div>
                <div className="absolute inset-3 md:inset-6 border border-gold/5 rounded-[1.2rem] md:rounded-[2.2rem] pointer-events-none"></div>

                {/* Corner Accents for the card */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-[1.5px] border-l-[1.5px] border-gold/40 rounded-tl-xl md:w-12 md:h-12 md:top-6 md:left-6"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-gold/40 rounded-tr-xl md:w-12 md:h-12 md:top-6 md:right-6"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-gold/40 rounded-bl-xl md:w-12 md:h-12 md:bottom-6 md:left-6"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[1.5px] border-r-[1.5px] border-gold/40 rounded-br-xl md:w-12 md:h-12 md:bottom-6 md:right-6"></div>

                <img
                  src={arch}
                  alt=""
                  aria-hidden="true"
                  width={400}
                  height={500}
                  loading="lazy"
                  className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 md:w-96 opacity-15 pointer-events-none"
                />

                <div className="relative z-10">
                  <SectionLabel>The Invitation</SectionLabel>
                  <p className="font-serif-elegant italic text-maroon/80 text-lg md:text-xl mb-2">
                    Together with their families
                  </p>

                  <h2 className="font-display text-2xl md:text-5xl text-maroon-deep mb-1">{couple.bride}</h2>
                  <p className="font-script text-2xl md:text-5xl text-vermilion my-1">weds</p>
                  <h2 className="font-display text-2xl md:text-5xl text-maroon-deep mb-4">{couple.groom}</h2>

                  <GoldDivider className="!my-4" />

                  <p className="font-serif-elegant text-sm md:text-xl text-maroon/85 leading-relaxed max-w-xl mx-auto mt-2 px-2">
                    request the honour of your presence as they begin their sacred journey
                    in <span className="text-vermilion">{destination}</span>, surrounded by the love,
                    prayers, and blessings of family and friends.
                  </p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-left md:text-center w-full">
                    <div className="px-2">
                      <p className="font-display text-[0.6rem] uppercase tracking-[0.3em] text-gold-deep mb-0.5">Bride’s Family</p>
                      <p className="text-maroon-deep text-base md:text-lg">{families.bride}</p>
                      <p className="text-muted-foreground text-xs italic">{families.brideElders}</p>
                    </div>
                    <div className="px-2">
                      <p className="font-display text-[0.6rem] uppercase tracking-[0.3em] text-gold-deep mb-0.5">Groom’s Family</p>
                      <p className="text-maroon-deep text-base md:text-lg">{families.groom}</p>
                      <p className="text-muted-foreground text-xs italic">{families.groomElders}</p>
                    </div>
                  </div>

                  <p className="mt-4 font-script text-2xl md:text-4xl text-maroon mb-2">
                    ॐ सह नाववतु · May we be blessed together
                  </p>

                  <div className="mt-4 relative w-full flex justify-center pb-2">
                    <div className="relative group">
                      {/* Ambient Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-gold-deep via-gold to-vermilion rounded-full opacity-40 blur-lg group-hover:opacity-70 group-hover:blur-xl transition-all duration-700 animate-[pulse_3s_ease-in-out_infinite]"></div>

                      {/* Decorative Ring */}
                      <div className="absolute -inset-[3px] rounded-full border border-gold/30 group-hover:border-gold/60 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"></div>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="relative flex items-center justify-center gap-4 px-8 py-3 md:px-12 md:py-4 bg-gradient-to-b from-[#d63d3d] via-[#a82525] to-[#701313] rounded-full border border-gold/50 shadow-[0_8px_25px_rgba(150,20,20,0.4)] overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] group-hover:border-gold/90 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.25),transparent_60%)] transition-opacity duration-700"></div>
                        <div className="absolute top-0 left-0 h-full w-[150%] -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-ivory/20 to-transparent group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></div>

                        <span className="relative z-10 flex items-center gap-3 md:gap-5 font-display text-[0.65rem] md:text-sm font-semibold tracking-[0.3em] md:tracking-[0.4em] text-ivory uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                          <span className="text-gold-soft text-lg md:text-xl drop-shadow-md">✧</span>
                          View Events
                          <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-gold/15 border border-gold/40 group-hover:bg-gold/30 group-hover:border-gold/70 transition-all duration-500 shadow-[inset_0_0_8px_rgba(212,175,55,0.2)]">
                            <span className="text-gold-soft group-hover:translate-x-0.5 transition-transform duration-300 text-[0.6rem] md:text-xs drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]">➔</span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============ 3. CELEBRATION JOURNEY ============ */}
          {currentStep === 2 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-ivory to-sandal/40 premium-glow">
              <div className="step-surface max-w-6xl mx-auto">
                <div className="step-heading text-center mb-8 md:mb-12">
                  <SectionLabel>Six Sacred Chapters</SectionLabel>
                  <SectionTitle>Celebration Journey</SectionTitle>
                  <p className="font-serif-elegant italic text-maroon/70 mt-4 max-w-xl mx-auto">
                    Each ceremony carries its own light. Together, they weave a story we will remember forever.
                  </p>
                  <GoldDivider className="!my-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {events.map((e, i) => (
                    <EventCard key={e.name} event={e} index={i} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ============ 4a. OUR FAMILIES (Bride & Groom Members) ============ */}
          {currentStep === 3 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-ivory to-sandal/30 premium-glow">
              <div className="step-surface max-w-6xl mx-auto">
                <div className="step-heading text-center mb-8 md:mb-12">
                  <GaneshMark size={64} />
                  <SectionLabel>Our Families</SectionLabel>
                  <SectionTitle>The Hearts Behind This Union</SectionTitle>
                  <p className="font-serif-elegant italic text-maroon/70 mt-4 max-w-xl mx-auto">
                    Two families, woven together by love, tradition, and grace.
                  </p>
                  <GoldDivider className="!my-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                  {/* Bride Side */}
                  <div className="luxury-card ornate-border paper-surface p-7 md:p-10 relative">
                    <span className="absolute top-4 right-5 text-gold text-xl float-slow" aria-hidden="true">❋</span>
                    <p className="font-display text-[0.65rem] uppercase tracking-[0.35em] text-gold-deep text-center mb-2">
                      Bride’s Family
                    </p>
                    <h3 className="font-script text-4xl md:text-5xl text-maroon-deep text-center mb-2">
                      The Sharmas
                    </h3>
                    <p className="font-serif-elegant italic text-center text-maroon/70 text-sm mb-6">
                      {families.brideElders}
                    </p>
                    <div className="gold-divider !my-5" />
                    <ul className="space-y-4">
                      {familyMembers.bride.map((m) => (
                        <li key={m.name} className="text-center">
                          <p className="font-display text-base md:text-lg text-maroon-deep">{m.name}</p>
                          <p className="font-serif-elegant italic text-xs md:text-sm text-gold-deep tracking-wide">
                            {m.relation}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Groom Side */}
                  <div className="luxury-card ornate-border paper-surface p-7 md:p-10 relative">
                    <span className="absolute top-4 right-5 text-gold text-xl float-slow" aria-hidden="true">❋</span>
                    <p className="font-display text-[0.65rem] uppercase tracking-[0.35em] text-gold-deep text-center mb-2">
                      Groom’s Family
                    </p>
                    <h3 className="font-script text-4xl md:text-5xl text-maroon-deep text-center mb-2">
                      The Mehras
                    </h3>
                    <p className="font-serif-elegant italic text-center text-maroon/70 text-sm mb-6">
                      {families.groomElders}
                    </p>
                    <div className="gold-divider !my-5" />
                    <ul className="space-y-4">
                      {familyMembers.groom.map((m) => (
                        <li key={m.name} className="text-center">
                          <p className="font-display text-base md:text-lg text-maroon-deep">{m.name}</p>
                          <p className="font-serif-elegant italic text-xs md:text-sm text-gold-deep tracking-wide">
                            {m.relation}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============ 4b. MEMORIES GALLERY ============ */}
          {currentStep === 4 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-sandal/30 to-ivory premium-glow">
              <div className="step-surface max-w-6xl mx-auto">
                <div className="step-heading text-center mb-10 md:mb-14">
                  <SectionLabel>Cherished Memories</SectionLabel>
                  <SectionTitle>Moments That Led Us Here</SectionTitle>
                  <p className="font-serif-elegant italic text-maroon/70 mt-6 max-w-xl mx-auto text-lg">
                    A few moments that gently led us to this beautiful beginning.
                  </p>
                  <GoldDivider className="!my-6" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[1fr] gap-3 md:gap-5">
                  {gallery.map((img, i) => (
                    <div
                      key={i}
                      className={`gallery-tile group relative overflow-hidden ornate-border rounded-sm fade-up ${img.desktopOnly ? "hidden md:block" : ""
                        } ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                        }`}
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <span className="gc-tl" aria-hidden="true" />
                      <span className="gc-tr" aria-hidden="true" />
                      <span className="gc-bl" aria-hidden="true" />
                      <span className="gc-br" aria-hidden="true" />
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-700" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ============ 6. GUEST ACTION ============ */}
          {currentStep === 5 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 paper-surface premium-glow">
              <div className="step-surface max-w-3xl mx-auto text-center">
                <GaneshMark size={70} />
                <SectionLabel>Your Presence, Our Blessing</SectionLabel>
                <SectionTitle>Accept the Invitation</SectionTitle>
                <GoldDivider className="!my-4" />
                <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-deep mb-2 mt-2">
                  Dear {guestName}
                </p>
                <p className="font-serif-elegant text-lg md:text-xl text-maroon-deep mb-6 max-w-lg mx-auto">
                  Your presence will be the most cherished blessing of our journey.
                </p>
                <RsvpAccept guestName={guestName} />
              </div>
            </section>
          )}

          {/* ============ 5. BLESSINGS WALL ============ */}
          {currentStep === 6 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-sandal/40 to-ivory premium-glow">
              <div className="step-surface max-w-5xl mx-auto">
                <div className="step-heading text-center mb-8 md:mb-10">
                  <Heart className="w-8 h-8 text-vermilion mx-auto mb-4" />
                  <SectionLabel>With Your Blessings</SectionLabel>
                  <SectionTitle>Bless Us, Dear Ones</SectionTitle>
                  <p className="font-serif-elegant italic text-lg md:text-xl text-maroon/75 leading-relaxed mt-4 max-w-2xl mx-auto">
                    Your prayers light our path. Leave a blessing that we will carry with us
                    into our new beginning.
                  </p>
                  <GoldDivider className="!my-6" />
                </div>
                <BlessingsWall />
              </div>
            </section>
          )}

          {/* ============ 7. TRAVEL HELP ============ */}
          {currentStep === 7 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-ivory to-sandal/40 premium-glow">
              <div className="step-surface max-w-5xl mx-auto">
                <div className="step-heading text-center mb-8 md:mb-10">
                  <SectionLabel>Destination Guidance</SectionLabel>
                  <SectionTitle>Stay & Travel</SectionTitle>
                  <GoldDivider className="!my-6" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="luxury-card paper-surface ornate-border p-7 md:p-9">
                    <Plane className="w-7 h-7 text-gold-deep mb-4" />
                    <h3 className="font-display text-xl text-maroon-deep mb-3">Reaching Udaipur</h3>
                    <p className="font-serif-elegant text-maroon/85 leading-relaxed">
                      Maharana Pratap Airport (UDR) is 25 km from the venue. Direct flights from
                      Delhi, Mumbai & Bengaluru. Our coordinators can arrange airport transfers
                      on request.
                    </p>
                  </div>
                  <div className="luxury-card paper-surface ornate-border p-7 md:p-9">
                    <Hotel className="w-7 h-7 text-gold-deep mb-4" />
                    <h3 className="font-display text-xl text-maroon-deep mb-3">Where to Stay</h3>
                    <p className="font-serif-elegant text-maroon/85 leading-relaxed">
                      We have reserved rooms at <em>Taj Lake Palace</em>, <em>The Leela Palace</em>,
                      and <em>Trident Udaipur</em> at preferred rates. Mention “Sharma–Mehra
                      Wedding” when booking, or reach out to our travel desk.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============ COUNTDOWN ============ */}
          {currentStep === 8 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 paper-surface premium-glow">
              <div className="step-surface max-w-3xl mx-auto text-center">
                <GaneshMark size={70} />
                <SectionLabel>The Sacred Day Approaches</SectionLabel>
                <SectionTitle>Counting the Moments</SectionTitle>
                <p className="font-serif-elegant italic text-maroon/70 mt-2 md:mt-4 mb-6 md:mb-10">
                  Until the wedding muhurat in {destination}
                </p>
                <Countdown target={weddingDate} />
                <GoldDivider className="!my-6" />
              </div>
            </section>
          )}

          {/* ============ 8. CONTACT CARDS ============ */}
          {currentStep === 9 && (
            <section className="step-screen relative px-5 pt-16 pb-8 md:pt-24 md:pb-12 paper-surface premium-glow">
              <div className="step-surface max-w-5xl mx-auto">
                <div className="step-heading text-center mb-8 md:mb-10">
                  <SectionLabel>For Any Assistance</SectionLabel>
                  <SectionTitle>A Loving Hand, Always</SectionTitle>
                  <GoldDivider className="!my-6" />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { side: "Bride’s Side", name: "Rohan Sharma (Brother)", phone: "+91 98100 12345" },
                    { side: "Groom’s Side", name: "Aditya Mehra (Cousin)", phone: "+91 98200 67890" },
                    { side: "Wedding Coordinator", name: "Saheli Events", phone: "+91 90000 11122" },
                  ].map((c) => (
                    <div key={c.name} className="luxury-card ornate-border bg-ivory/70 p-6 text-center">
                      <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-gold-deep mb-3">
                        {c.side}
                      </p>
                      <p className="text-maroon-deep text-lg mb-4">{c.name}</p>
                      <div className="flex justify-center gap-3">
                        <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="btn-ghost-gold !px-3" aria-label={`Call ${c.name}`}>
                          <Phone className="w-3.5 h-3.5" /> Call
                        </a>
                        <a
                          href={`https://wa.me/${c.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost-gold !px-3"
                          aria-label={`WhatsApp ${c.name}`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ============ 9. CLOSING NOTE ============ */}
          {currentStep === 10 && (
            <section className="step-screen relative flex-1 w-full flex flex-col items-center justify-center paper-surface overflow-hidden text-center p-6 premium-glow">

              {/* Subtle Background Texture Layer */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply pointer-events-none"></div>

              {/* Subtle Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] bg-[radial-gradient(circle,hsl(var(--gold)/0.1)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

              <div className="step-surface relative z-20 max-w-2xl mx-auto px-6 animate-[fadeIn_2.5s_ease-out]">
                <div className="mb-6 md:mb-10 opacity-90 scale-125 md:scale-150 transition-transform duration-1000">
                  <GaneshMark size={80} className="text-gold-deep drop-shadow-sm mx-auto" />
                </div>

                <h2 className="font-script text-6xl md:text-8xl text-maroon-deep mb-6 drop-shadow-sm tracking-wide">
                  Dhanyavaad
                </h2>

                <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold-deep/40 to-transparent mx-auto mb-8"></div>

                <p className="font-serif-elegant italic text-xl md:text-3xl text-maroon/90 leading-relaxed mb-12 max-w-xl mx-auto drop-shadow-sm px-4 font-medium">
                  "With folded hands and full hearts, we look forward to celebrating our new beginning with you."
                </p>

                <div className="space-y-4 animate-[fadeIn_1.5s_ease-out_1s_forwards] opacity-0">
                  <p className="font-display text-sm md:text-lg uppercase tracking-[0.4em] text-gold-deep font-bold">
                    {couple.bride.split(" ")[0]} &nbsp;&amp;&nbsp; {couple.groom.split(" ")[0]}
                  </p>

                  <div className="flex items-center justify-center gap-4 opacity-80">
                    <div className="h-[1px] w-12 bg-gold-deep/30"></div>
                    <p className="font-display text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.25em] text-maroon/70">
                      {weddingDateLabel}
                    </p>
                    <div className="h-[1px] w-12 bg-gold-deep/30"></div>
                  </div>

                  <p className="font-display text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.3em] text-maroon/50">
                    {destination}
                  </p>
                </div>
              </div>

              {/* Elegant Perimeter Frame */}
              <div className="absolute inset-4 md:inset-8 border border-gold/30 rounded-[2rem] pointer-events-none">
                {/* Corner Ornaments */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/60 rounded-tl-[2rem]"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/60 rounded-tr-[2rem]"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/60 rounded-bl-[2rem]"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/60 rounded-br-[2rem]"></div>
              </div>
            </section>
          )}

          {currentStep > 0 && (
            <div className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,760px)] -translate-x-1/2 rounded-2xl border border-gold/30 bg-ivory/95 px-4 py-3 shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                  className="btn-ghost-gold !px-4"
                >
                  Back
                </button>

                <div className="text-center min-w-0">
                  <p className="font-display text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.3em] text-gold-deep">
                    Step {currentStep} of {totalSteps - 1}
                  </p>
                  <p className="font-serif-elegant italic text-maroon-deep text-sm md:text-base truncate">
                    {stepTitleByIndex[currentStep]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))}
                  disabled={currentStep === totalSteps - 1}
                  className="btn-royal !px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default Index;
