import { MapPin } from "lucide-react";

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
  return (
    <article
      className="group relative paper-surface ornate-border p-6 md:p-8 transition-all duration-700 hover:-translate-y-1"
      style={{ boxShadow: `0 20px 60px -30px ${tint}` }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: `linear-gradient(90deg, transparent, ${tint}, transparent)` }}
      />
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div
            className="font-display text-[0.65rem] uppercase tracking-[0.3em] mb-2"
            style={{ color: tint }}
          >
            Chapter {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-maroon-deep">
            {event.name}
          </h3>
        </div>
        <div
          className="text-3xl md:text-4xl opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
          style={{ color: tint }}
          aria-hidden="true"
        >
          {event.symbol}
        </div>
      </div>

      <p className="italic text-maroon/80 text-base md:text-lg leading-relaxed mb-6 font-serif-elegant">
        “{event.meaning}”
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-gold-deep mb-1">Date</div>
          <div className="text-maroon-deep">{event.date}</div>
          <div className="text-muted-foreground text-xs">{event.day}</div>
        </div>
        <div>
          <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-gold-deep mb-1">Time</div>
          <div className="text-maroon-deep">{event.time}</div>
        </div>
        <div className="col-span-2">
          <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-gold-deep mb-1">Venue</div>
          <div className="text-maroon-deep">{event.venue}</div>
        </div>
        {event.dress && (
          <div className="col-span-2">
            <div className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-gold-deep mb-1">Dress</div>
            <div className="text-maroon-deep/80 text-xs">{event.dress}</div>
          </div>
        )}
      </div>

      <a
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost-gold w-full"
      >
        <MapPin className="w-3.5 h-3.5" /> View Map
      </a>
    </article>
  );
};
