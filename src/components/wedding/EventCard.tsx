import { MapPin, Clock, CalendarDays } from "lucide-react";

export interface EventData {
  name: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  mapUrl: string;
  meaning: string;
  dress?: string;
  hueVar: string; // e.g. "--hue-haldi"
  symbol: string;
}

export const EventCard = ({ event, index }: { event: EventData; index: number }) => {
  const tint = `hsl(var(${event.hueVar}))`;
  const tintSoft = `hsl(var(${event.hueVar}) / 0.15)`;
  
  return (
    <article
      className="group relative bg-ivory rounded-2xl p-6 md:p-8 transition-all duration-700 transform hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-gold/20 hover:border-gold/60 overflow-hidden flex flex-col h-full z-10"
      style={{ boxShadow: `0 10px 30px -15px ${tint}` }}
    >
      {/* Decorative gradient overlay that reveals on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${tintSoft}, transparent 80%)` }}
      />
      
      {/* Top glowing bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
        style={{ background: `linear-gradient(90deg, ${tint}, transparent)` }}
      />
      
      <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
        <div>
          <div
            className="font-display text-[0.65rem] uppercase tracking-[0.4em] mb-2 font-semibold transition-colors duration-500"
            style={{ color: tint }}
          >
            Chapter {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-maroon-deep drop-shadow-sm transition-transform duration-500 group-hover:translate-x-1">
            {event.name}
          </h3>
        </div>
        
        {/* Animated Symbol */}
        <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
          <div className="absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" style={{ backgroundColor: tint }}></div>
          <div
            className="text-4xl md:text-5xl opacity-80 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            style={{ color: tint }}
            aria-hidden="true"
          >
            {event.symbol}
          </div>
        </div>
      </div>

      <p className="italic text-maroon/75 text-sm md:text-base leading-relaxed mb-6 font-serif-elegant font-medium grow relative z-10">
        “{event.meaning}”
      </p>

      <div className="bg-[#fcfaf7] shadow-[inset_0_0_10px_rgba(212,175,55,0.05)] rounded-xl p-4 md:p-5 mb-8 border border-gold/10 group-hover:bg-white group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-500 relative z-10 grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
        <div className="flex items-start gap-2">
          <CalendarDays className="w-4 h-4 text-gold mt-0.5 shrink-0" />
          <div>
            <div className="font-display text-[0.55rem] uppercase tracking-[0.2em] text-gold-deep mb-0.5">Date</div>
            <div className="text-maroon-deep font-semibold">{event.date}</div>
            <div className="text-maroon/60 text-[0.65rem]">{event.day}</div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
          <div>
            <div className="font-display text-[0.55rem] uppercase tracking-[0.2em] text-gold-deep mb-0.5">Time</div>
            <div className="text-maroon-deep font-semibold">{event.time}</div>
          </div>
        </div>
        <div className="col-span-2 flex items-start gap-2 pt-1 border-t border-gold/10 mt-1">
          <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
          <div>
            <div className="font-display text-[0.55rem] uppercase tracking-[0.2em] text-gold-deep mb-0.5">Venue</div>
            <div className="text-maroon-deep font-semibold">{event.venue}</div>
          </div>
        </div>
        {event.dress && (
          <div className="col-span-2 flex items-start gap-2 pt-1">
            <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5"><span className="text-gold text-lg leading-none">❋</span></div>
            <div>
              <div className="font-display text-[0.55rem] uppercase tracking-[0.2em] text-gold-deep mb-0.5">Dress Code</div>
              <div className="text-maroon-deep/80 text-xs italic">{event.dress}</div>
            </div>
          </div>
        )}
      </div>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost-gold w-full flex items-center justify-center gap-2 group/btn relative z-10 overflow-hidden rounded-full py-3 font-semibold text-xs tracking-[0.2em] border-gold/40 hover:border-gold hover:text-maroon-deep transition-colors duration-300"
      >
        <span className="absolute inset-0 bg-gold/10 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full"></span>
        <MapPin className="w-4 h-4 relative z-10 group-hover/btn:animate-[bounce_1s_infinite]" /> 
        <span className="relative z-10">Open in Maps</span>
      </a>
    </article>
  );
};
