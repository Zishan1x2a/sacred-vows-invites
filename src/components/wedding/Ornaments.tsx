import ganeshSeal from "@/assets/ganesh-seal.png";

export const GoldDivider = ({ ornament = true }: { ornament?: boolean }) => (
  <div className="gold-divider my-10 md:my-14">
    {ornament && (
      <span className="text-gold text-2xl md:text-3xl float-slow" aria-hidden="true">❋</span>
    )}
  </div>
);

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-display text-[0.7rem] md:text-xs uppercase tracking-[0.4em] text-gold-deep/80 mb-4">
    {children}
  </p>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-3xl md:text-5xl text-maroon-deep leading-tight">
    {children}
  </h2>
);

export const GaneshMark = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <img
    src={ganeshSeal}
    alt="Shree Ganesha emblem"
    width={size}
    height={size}
    loading="lazy"
    className={`mx-auto opacity-90 ${className}`}
    style={{ width: size, height: size }}
  />
);
