import { useEffect, useState } from "react";

interface CountdownProps {
  target: Date;
}

export const Countdown = ({ target }: CountdownProps) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="ornate-border bg-ivory/70 px-4 py-3 md:px-6 md:py-5 min-w-[68px] md:min-w-[100px]">
        <div className="font-display text-3xl md:text-5xl text-maroon-deep tabular-nums">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <div className="font-display text-[0.6rem] md:text-xs uppercase tracking-[0.3em] text-gold-deep mt-3">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      <Cell value={t.d} label="Days" />
      <Cell value={t.h} label="Hours" />
      <Cell value={t.m} label="Minutes" />
      <Cell value={t.s} label="Seconds" />
    </div>
  );
};
