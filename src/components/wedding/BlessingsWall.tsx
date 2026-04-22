import { useEffect, useState } from "react";
import { Heart, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

type Blessing = {
  id: string;
  message: string;
  at: number;
};

const STORAGE_KEY = "wedding_blessings_v2";

const seedBlessings: Blessing[] = [
  {
    id: "seed-1",
    message:
      "May Lord Ganesha shower you both with endless joy, prosperity, and a love that deepens with every sunrise.",
    at: Date.now() - 1000 * 60 * 60 * 24 * 3,
  },
  {
    id: "seed-2",
    message:
      "Wishing you a marriage filled with laughter, sacred bonds, and countless beautiful memories. Bahut bahut badhai!",
    at: Date.now() - 1000 * 60 * 60 * 24,
  },
  {
    id: "seed-3",
    message:
      "Two beautiful souls beginning a sacred journey — may every step be blessed.",
    at: Date.now() - 1000 * 60 * 30,
  },
];

const blessingSchema = z.object({
  message: z
    .string()
    .trim()
    .nonempty({ message: "Apna ashirvaad likhein" })
    .min(5, { message: "Thoda aur likhein" })
    .max(400, { message: "Sandesh 400 characters tak rakhein" }),
});

const formatWhen = (ts: number) => {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
};

export const BlessingsWall = () => {
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Blessing[];
        setBlessings(parsed);
        return;
      }
    } catch {
      /* ignore */
    }
    setBlessings(seedBlessings);
  }, []);

  const persist = (list: Blessing[]) => {
    setBlessings(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = blessingSchema.safeParse({ message });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const next: Blessing = {
      id: `b-${Date.now()}`,
      message: result.data.message,
      at: Date.now(),
    };
    const list = [next, ...blessings].slice(0, 100);
    persist(list);
    setMessage("");
    toast.success("Aapka ashirvaad mil gaya 🙏");
    setTimeout(() => setSubmitting(false), 400);
  };

  return (
    <div className="space-y-10">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="ornate-border paper-surface p-6 md:p-8 max-w-2xl mx-auto text-left"
      >
        <p className="font-display text-[0.65rem] uppercase tracking-[0.35em] text-gold-deep text-center mb-4">
          Leave Your Blessing
        </p>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="b-msg"
              className="font-display text-[0.65rem] uppercase tracking-[0.25em] text-maroon/70 block mb-2"
            >
              Your Ashirvaad
            </label>
            <textarea
              id="b-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={400}
              rows={4}
              placeholder="Share a blessing, prayer, or warm wish for the couple…"
              className="w-full bg-ivory/60 border border-gold/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 rounded-sm px-4 py-3 font-serif-elegant text-maroon-deep placeholder:text-maroon/30 resize-none"
            />
            <p className="text-right text-[0.65rem] text-maroon/50 mt-1 font-display tracking-wider">
              {message.length}/400
            </p>
          </div>
          <div className="text-center pt-2">
            <button type="submit" disabled={submitting} className="btn-royal inline-flex items-center gap-2">
              <Send className="w-4 h-4" />
              {submitting ? "Sending…" : "Offer Blessing"}
            </button>
          </div>
        </div>
      </form>

      {/* Wall */}
      <div className="max-w-4xl mx-auto">
        <div className="max-h-[58vh] overflow-y-auto pr-1 md:pr-2">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {blessings.map((b, i) => (
              <article
                key={b.id}
                className="ornate-border bg-ivory/70 p-5 md:p-6 relative fade-up"
                style={{ animationDelay: `${Math.min(i, 6) * 0.05}s` }}
              >
                <Heart className="w-4 h-4 text-vermilion absolute top-4 right-4 opacity-70" aria-hidden="true" />
                <p className="font-serif-elegant italic text-maroon-deep/90 leading-relaxed text-base md:text-[1.05rem]">
                  “{b.message}”
                </p>
                <div className="gold-divider !my-4" />
                <div className="flex items-center justify-end">
                  <span className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-gold-deep/80">
                    {formatWhen(b.at)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
