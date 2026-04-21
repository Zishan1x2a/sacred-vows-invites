import { useState } from "react";
import { Check } from "lucide-react";

export const RsvpAccept = ({ guestName }: { guestName: string }) => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <div className="relative paper-surface ornate-border p-10 md:p-14 text-center max-w-xl mx-auto fade-up">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="petal absolute text-vermilion/70 text-2xl"
              style={{
                left: `${(i * 8.3) % 100}%`,
                top: "-10px",
                animationDelay: `${i * 0.18}s`,
              }}
            >
              ❀
            </span>
          ))}
        </div>
        <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
          style={{ background: 'var(--gradient-gold)' }}>
          <Check className="w-8 h-8 text-ivory" strokeWidth={3} />
        </div>
        <p className="font-display text-[0.7rem] uppercase tracking-[0.35em] text-gold-deep mb-4">
          With Gratitude
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-maroon-deep mb-4">
          Your Presence is Confirmed
        </h3>
        <p className="font-serif-elegant italic text-lg text-maroon/80">
          Thank you, {guestName}. Our families are honoured by your blessings.
          We look forward to celebrating this sacred union with you.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <button onClick={() => setAccepted(true)} className="btn-royal text-base">
        Accept Invitation
      </button>
      <p className="mt-5 font-serif-elegant italic text-maroon/70">
        With your blessings, this celebration becomes complete.
      </p>
    </div>
  );
};
