import { Phone, MessageCircle, Plane, Hotel, Heart } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import arch from "@/assets/arch.png";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import couple4 from "@/assets/couple-4.jpg";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";
import { GoldDivider, SectionLabel, SectionTitle, GaneshMark } from "@/components/wedding/Ornaments";
import { Countdown } from "@/components/wedding/Countdown";
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
  { src: couple6, alt: "An elegant reception portrait" },
];

const Index = () => {
  const [showShlokIntro, setShowShlokIntro] = useState(true);
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
    const timer = window.setTimeout(() => {
      setShowShlokIntro(false);
    }, 6800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

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

  if (showShlokIntro) {
    return (
      <section className="shlok-intro-screen" aria-label="Opening shlok animation">
        <div className="shlok-intro-ambient" aria-hidden="true">
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
        
        <div className="shlok-intro-sheet relative max-w-[95%] md:max-w-4xl mx-auto flex flex-col items-center justify-center p-8 md:p-14 rounded-xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-gradient-to-b from-[#1a0f0a]/90 to-[#2a1a10]/90 backdrop-blur-md">
          {/* Corner Ornaments */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gold/60 md:w-10 md:h-10 md:top-6 md:left-6 transition-all duration-1000"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-gold/60 md:w-10 md:h-10 md:top-6 md:right-6 transition-all duration-1000"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-gold/60 md:w-10 md:h-10 md:bottom-6 md:left-6 transition-all duration-1000"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gold/60 md:w-10 md:h-10 md:bottom-6 md:right-6 transition-all duration-1000"></div>

          <div className="mb-6 md:mb-8 opacity-0 animate-[fadeIn_1.5s_ease-out_0.2s_forwards] scale-90 md:scale-100 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]">
             <GaneshMark size={85} />
          </div>

          <p className="shlok-intro-label text-gold-soft tracking-[0.3em] md:tracking-[0.5em] text-[0.65rem] md:text-xs mb-6 pb-3 border-b border-gold/20 inline-block px-6 md:px-12 uppercase">
            Sacred Invocation
          </p>
          
          <div className="shlok-intro-lines flex flex-col items-center space-y-5 md:space-y-7 w-full px-2 mt-4">
            {openingShlokaLines.map((line, index) => (
              <p
                key={line}
                className="shlok-intro-line w-full text-center"
                style={{ ["--line-delay" as string]: `${0.7 + index * 1.4}s` } as CSSProperties}
              >
                <span className={`${index === 0 ? 'text-vermilion font-semibold drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]' : 'text-gold-soft drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]'}`}>
                  {line}
                </span>
              </p>
            ))}
          </div>
          
          <div className="mt-10 mb-2 w-full max-w-[200px] mx-auto opacity-0 animate-[fadeIn_1s_ease-out_5s_forwards]">
             <GoldDivider />
          </div>
          
          <p className="shlok-intro-mantra mt-4 text-3xl md:text-5xl text-gold pb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            शुभारम्भ
          </p>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden pb-28 md:pb-32">
      {/* ============ 1. SACRED WELCOME ============ */}
      {currentStep === 0 && (
      <section className="step-screen relative min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 pt-8 pb-4 md:pt-10 md:pb-6 overflow-hidden bg-maroon-deep">
        {/* Fullscreen Rich Background Layer */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0808]/90 via-maroon-deep/80 to-[#1a0f0a]/90" aria-hidden="true" />
        
        {/* Floating Ambient Motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold/50 animate-[floatSlow_8s_ease-in-out_infinite] shadow-[0_0_8px_rgba(212,175,55,0.8)]" 
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}>
            </div>
          ))}
        </div>

        {/* Elegant Perimeter Frame */}
        <div className="absolute inset-4 md:inset-8 border-x border-y border-gold/20 rounded-[2rem] pointer-events-none flex items-center justify-center">
            {/* Corner Ornaments */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/50 rounded-tl-[2rem]"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/50 rounded-tr-[2rem]"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/50 rounded-bl-[2rem]"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/50 rounded-br-[2rem]"></div>
        </div>

        {/* Glowing Central Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,hsl(var(--gold)/0.12)_0%,transparent_60%)] rounded-full pointer-events-none z-0"></div>

        {/* Main Content Floating directly on the background */}
        <div className="step-surface relative z-10 text-center w-full max-w-3xl mx-auto flex flex-col items-center select-none">

          <div className="seal-reveal flex justify-center drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-3 md:mb-5">
            <div className="relative">
               <GaneshMark size={92} className="md:!w-[130px] md:!h-[130px] opacity-90 drop-shadow-md" />
               <div className="absolute inset-0 border border-gold/30 rounded-full animate-[inviteRing_3s_ease-out_infinite]"></div>
            </div>
          </div>

          <p className="font-script text-2xl md:text-4xl text-gold-soft fade-in tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold flex items-center justify-center gap-3" style={{ animationDelay: "0.4s" }}>
            <span className="text-gold-deep text-xl md:text-2xl">✤</span> 
            Shree Ganeshaya Namah 
            <span className="text-gold-deep text-xl md:text-2xl">✤</span>
          </p>

          <div className="fade-up flex flex-col items-center w-full mt-3 md:mt-5" style={{ animationDelay: "0.7s" }}>
            <div className="my-2 md:my-3 w-full max-w-[220px] opacity-80 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
              <GoldDivider />
            </div>
            
            <p className="font-display text-[0.6rem] md:text-xs uppercase tracking-[0.45em] md:tracking-[0.6em] text-ivory/80 mb-3 md:mb-5 pb-1 border-b border-gold/30">
              Dear {guestName}
            </p>
            
            <div className="flex flex-col items-center mb-3 md:mb-5 w-full relative">
                <h1 className="font-display text-4xl md:text-7xl text-ivory leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-normal z-10">
                {couple.bride.split(" ")[0]}
                </h1>
                
                <span className="font-script text-4xl md:text-6xl text-gold-deep my-1 md:my-2 z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] italic">weds</span>
                
                <h1 className="font-display text-4xl md:text-7xl text-ivory leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] font-normal z-10">
                {couple.groom.split(" ")[0]}
                </h1>
            </div>
            
            <p className="font-serif-elegant italic text-base md:text-xl text-ivory/90 mb-2 md:mb-3 px-4 font-medium drop-shadow-md">
              To begin their journey of eternal love
            </p>
            
            <div className="flex items-center gap-3 mb-3 md:mb-5 opacity-90">
                <span className="h-[1px] w-8 md:w-12 bg-gold/50"></span>
                <p className="font-display text-[0.6rem] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.4em] text-gold-soft font-semibold drop-shadow-md">
                {weddingDateLabel} 
                <span className="text-ivory/50 mx-2 md:mx-4">|</span> 
                {destination}
                </p>
                <span className="h-[1px] w-8 md:w-12 bg-gold/50"></span>
            </div>

            <div className="mt-2 md:mt-4 relative w-full flex justify-center">
              <button type="button" onClick={() => setCurrentStep(1)} className="btn-royal btn-open-invitation group !px-10 !py-4 md:!px-14 md:!py-5 rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.4)] border-1 border-gold/80">
                <span className="relative z-10 flex items-center gap-3 text-[0.7rem] md:text-sm font-semibold tracking-[0.3em] md:tracking-[0.4em] text-ivory uppercase">
                  Open Invitation <span className="text-gold-deep group-hover:translate-y-1 transition-transform text-lg">▼</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ============ 2. INVITATION REVEAL ============ */}
      {currentStep === 1 && (
      <section id="invitation" className="step-screen relative px-5 py-24 md:py-32 paper-surface premium-glow">
        <div className="step-surface max-w-3xl mx-auto text-center relative">
          <img
            src={arch}
            alt=""
            aria-hidden="true"
            width={400}
            height={500}
            loading="lazy"
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 md:w-96 opacity-15 pointer-events-none"
          />
          <div className="relative">
            <SectionLabel>The Invitation</SectionLabel>
            <p className="font-serif-elegant italic text-maroon/80 text-lg md:text-xl mb-8">
              Together with their families
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-maroon-deep mb-3">{couple.bride}</h2>
            <p className="font-script text-3xl md:text-5xl text-vermilion my-4">weds</p>
            <h2 className="font-display text-3xl md:text-5xl text-maroon-deep mb-8">{couple.groom}</h2>

            <GoldDivider />

            <p className="font-serif-elegant text-base md:text-xl text-maroon/85 leading-relaxed max-w-xl mx-auto">
              request the honour of your presence as they begin their sacred journey
              in <span className="text-vermilion">{destination}</span>, surrounded by the love,
              prayers, and blessings of family and friends.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:text-center">
              <div>
                <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-gold-deep mb-2">Bride’s Family</p>
                <p className="text-maroon-deep text-lg">{families.bride}</p>
                <p className="text-muted-foreground text-sm italic">{families.brideElders}</p>
              </div>
              <div>
                <p className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-gold-deep mb-2">Groom’s Family</p>
                <p className="text-maroon-deep text-lg">{families.groom}</p>
                <p className="text-muted-foreground text-sm italic">{families.groomElders}</p>
              </div>
            </div>

            <p className="mt-12 font-script text-3xl md:text-4xl text-maroon mb-10">
              ॐ सह नाववतु · May we be blessed together
            </p>

            <div className="mt-4 pb-4">
              <button 
                type="button" 
                onClick={() => setCurrentStep(2)} 
                className="btn-royal group !px-8 !py-4 md:!px-12 md:!py-5 rounded-full overflow-hidden shadow-lg w-[85%] md:w-auto mx-auto border-gold/70"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-xs md:text-sm font-semibold tracking-[0.3em] text-ivory uppercase">
                  View Events <span className="text-gold-soft group-hover:translate-x-2 transition-transform text-lg">➔</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ============ 3. CELEBRATION JOURNEY ============ */}
      {currentStep === 2 && (
      <section className="step-screen relative px-5 py-24 md:py-32 bg-gradient-to-b from-ivory to-sandal/40 premium-glow">
        <div className="step-surface max-w-6xl mx-auto">
          <div className="step-heading text-center mb-14">
            <SectionLabel>Six Sacred Chapters</SectionLabel>
            <SectionTitle>Celebration Journey</SectionTitle>
            <p className="font-serif-elegant italic text-maroon/70 mt-4 max-w-xl mx-auto">
              Each ceremony carries its own light. Together, they weave a story we will remember forever.
            </p>
            <GoldDivider />
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
      <section className="step-screen relative px-5 py-24 md:py-32 bg-gradient-to-b from-ivory to-sandal/30 premium-glow">
        <div className="step-surface max-w-6xl mx-auto">
          <div className="step-heading text-center mb-14">
            <GaneshMark size={64} />
            <SectionLabel>Our Families</SectionLabel>
            <SectionTitle>The Hearts Behind This Union</SectionTitle>
            <p className="font-serif-elegant italic text-maroon/70 mt-4 max-w-xl mx-auto">
              Two families, woven together by love, tradition, and grace.
            </p>
            <GoldDivider />
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
      <section className="step-screen relative px-5 py-24 md:py-32 bg-gradient-to-b from-sandal/30 to-ivory premium-glow">
        <div className="step-surface max-w-6xl mx-auto">
          <div className="step-heading text-center mb-14">
            <SectionLabel>Cherished Memories</SectionLabel>
            <SectionTitle>Moments That Led Us Here</SectionTitle>
            <p className="font-serif-elegant italic text-maroon/70 mt-6 max-w-xl mx-auto text-lg">
              A few moments that gently led us to this beautiful beginning.
            </p>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[1fr] gap-3 md:gap-5">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`gallery-tile group relative overflow-hidden ornate-border rounded-sm fade-up ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
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
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
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
      <section className="step-screen relative px-5 py-24 md:py-32 paper-surface premium-glow">
        <div className="step-surface max-w-3xl mx-auto text-center">
          <GaneshMark size={70} />
          <SectionLabel>Your Presence, Our Blessing</SectionLabel>
          <SectionTitle>Accept the Invitation</SectionTitle>
          <GoldDivider />
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold-deep mb-3 mt-2">
            Dear {guestName}
          </p>
          <p className="font-serif-elegant text-lg md:text-xl text-maroon-deep mb-8 max-w-lg mx-auto">
            Your presence will be the most cherished blessing of our journey.
          </p>
          <RsvpAccept guestName={guestName} />
        </div>
      </section>
      )}

      {/* ============ 5. BLESSINGS WALL ============ */}
      {currentStep === 6 && (
      <section className="step-screen relative px-5 py-24 md:py-32 bg-gradient-to-b from-sandal/40 to-ivory premium-glow">
        <div className="step-surface max-w-5xl mx-auto">
          <div className="step-heading text-center mb-12">
            <Heart className="w-8 h-8 text-vermilion mx-auto mb-4" />
            <SectionLabel>With Your Blessings</SectionLabel>
            <SectionTitle>Bless Us, Dear Ones</SectionTitle>
            <p className="font-serif-elegant italic text-lg md:text-xl text-maroon/75 leading-relaxed mt-5 max-w-2xl mx-auto">
              Your prayers light our path. Leave a blessing that we will carry with us
              into our new beginning.
            </p>
            <GoldDivider />
          </div>
          <BlessingsWall />
        </div>
      </section>
      )}

      {/* ============ 7. TRAVEL HELP ============ */}
      {currentStep === 7 && (
      <section className="step-screen relative px-5 py-24 bg-gradient-to-b from-ivory to-sandal/40 premium-glow">
        <div className="step-surface max-w-5xl mx-auto">
          <div className="step-heading text-center mb-12">
            <SectionLabel>Destination Guidance</SectionLabel>
            <SectionTitle>Stay & Travel</SectionTitle>
            <GoldDivider />
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
      <section className="step-screen relative px-5 py-20 md:py-28 paper-surface premium-glow">
        <div className="step-surface max-w-3xl mx-auto text-center">
          <GaneshMark size={70} />
          <SectionLabel>The Sacred Day Approaches</SectionLabel>
          <SectionTitle>Counting the Moments</SectionTitle>
          <p className="font-serif-elegant italic text-maroon/70 mt-4 mb-10">
            Until the wedding muhurat in {destination}
          </p>
          <Countdown target={weddingDate} />
          <GoldDivider />
        </div>
      </section>
      )}

      {/* ============ 8. CONTACT CARDS ============ */}
      {currentStep === 9 && (
      <section className="step-screen relative px-5 py-24 paper-surface premium-glow">
        <div className="step-surface max-w-5xl mx-auto">
          <div className="step-heading text-center mb-12">
            <SectionLabel>For Any Assistance</SectionLabel>
            <SectionTitle>A Loving Hand, Always</SectionTitle>
            <GoldDivider />
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
      <footer className="step-screen relative px-5 py-24 md:py-32 bg-gradient-to-b from-sandal/40 to-maroon-deep text-center overflow-hidden premium-glow">
        <div className="step-surface relative max-w-2xl mx-auto">
          <GaneshMark size={70} className="opacity-80" />
          <p className="font-script text-4xl md:text-6xl text-ivory mt-4 mb-4">
            Dhanyavaad
          </p>
          <p className="font-serif-elegant italic text-lg md:text-xl text-ivory/85 leading-relaxed">
            With folded hands and full hearts, we look forward to celebrating with you.
          </p>
          <p className="mt-10 font-display text-xs uppercase tracking-[0.4em] text-gold-soft">
            {couple.bride.split(" ")[0]} &nbsp;&amp;&nbsp; {couple.groom.split(" ")[0]}
          </p>
          <p className="mt-2 font-display text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60">
            {weddingDateLabel} · {destination}
          </p>
        </div>
      </footer>
      )}

      <div className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,760px)] -translate-x-1/2 rounded-2xl border border-gold/30 bg-ivory/90 backdrop-blur px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
            className="btn-ghost-gold !px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>

          <div className="text-center min-w-0">
            <p className="font-display text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.3em] text-gold-deep">
              Step {currentStep + 1} of {totalSteps}
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
    </main>
  );
};

export default Index;
