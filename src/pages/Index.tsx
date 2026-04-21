import { Phone, MessageCircle, Plane, Hotel, Heart } from "lucide-react";
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
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ============ 1. SACRED WELCOME ============ */}
      <section className="relative min-h-screen flex items-center justify-center px-5 py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/50 to-ivory" aria-hidden="true" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="seal-reveal">
            <GaneshMark size={160} className="md:!w-[200px] md:!h-[200px]" />
          </div>

          <p className="font-script text-4xl md:text-6xl text-maroon mt-2 fade-in" style={{ animationDelay: "0.6s" }}>
            Shree Ganeshaya Namah
          </p>

          <div className="fade-up" style={{ animationDelay: "1s" }}>
            <GoldDivider />
            <p className="font-display text-[0.7rem] md:text-xs uppercase tracking-[0.4em] text-gold-deep mb-4">
              Dear {guestName}
            </p>
            <h1 className="font-display text-4xl md:text-7xl text-maroon-deep leading-[1.1] mb-6">
              {couple.bride.split(" ")[0]}
              <span className="font-script text-5xl md:text-8xl text-vermilion mx-3 align-middle">&</span>
              {couple.groom.split(" ")[0]}
            </h1>
            <p className="font-serif-elegant italic text-lg md:text-xl text-maroon/80 mb-2">
              are to be wed
            </p>
            <p className="font-display text-xs md:text-sm uppercase tracking-[0.3em] text-maroon-deep">
              {weddingDateLabel} · {destination}
            </p>

            <div className="mt-10">
              <a href="#invitation" className="btn-royal">Open Invitation</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. INVITATION REVEAL ============ */}
      <section id="invitation" className="relative px-5 py-24 md:py-32 paper-surface">
        <div className="max-w-3xl mx-auto text-center relative">
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

            <p className="mt-12 font-script text-3xl md:text-4xl text-maroon">
              ॐ सह नाववतु · May we be blessed together
            </p>
          </div>
        </div>
      </section>

      {/* ============ 3. CELEBRATION JOURNEY ============ */}
      <section className="relative px-5 py-24 md:py-32 bg-gradient-to-b from-ivory to-sandal/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
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

      {/* ============ COUNTDOWN (moved up) ============ */}
      <section className="relative px-5 py-20 md:py-28 paper-surface">
        <div className="max-w-3xl mx-auto text-center">
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

      {/* ============ 4a. OUR FAMILIES (Bride & Groom Members) ============ */}
      <section className="relative px-5 py-24 md:py-32 bg-gradient-to-b from-ivory to-sandal/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
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
            <div className="ornate-border paper-surface p-7 md:p-10 relative">
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
            <div className="ornate-border paper-surface p-7 md:p-10 relative">
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

      {/* ============ 4b. MEMORIES GALLERY ============ */}
      <section className="relative px-5 py-24 md:py-32 bg-gradient-to-b from-sandal/30 to-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Cherished Memories</SectionLabel>
            <SectionTitle>Moments That Led Us Here</SectionTitle>
            <p className="font-serif-elegant italic text-maroon/70 mt-6 max-w-xl mx-auto text-lg">
              A few moments that gently led us to this beautiful beginning.
            </p>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden ornate-border ${
                  i === 0 ? "col-span-2 md:col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. BLESSINGS WALL ============ */}
      <section className="relative px-5 py-24 md:py-32 bg-gradient-to-b from-sandal/40 to-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
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

      {/* ============ 6. GUEST ACTION ============ */}
      <section className="relative px-5 py-24 md:py-32 paper-surface">
        <div className="max-w-3xl mx-auto text-center">
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

      {/* ============ 7. TRAVEL HELP ============ */}
      <section className="relative px-5 py-24 bg-gradient-to-b from-ivory to-sandal/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Destination Guidance</SectionLabel>
            <SectionTitle>Stay & Travel</SectionTitle>
            <GoldDivider />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="paper-surface ornate-border p-7 md:p-9">
              <Plane className="w-7 h-7 text-gold-deep mb-4" />
              <h3 className="font-display text-xl text-maroon-deep mb-3">Reaching Udaipur</h3>
              <p className="font-serif-elegant text-maroon/85 leading-relaxed">
                Maharana Pratap Airport (UDR) is 25 km from the venue. Direct flights from
                Delhi, Mumbai & Bengaluru. Our coordinators can arrange airport transfers
                on request.
              </p>
            </div>
            <div className="paper-surface ornate-border p-7 md:p-9">
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

      {/* ============ 8. CONTACT CARDS ============ */}
      <section className="relative px-5 py-24 paper-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
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
              <div key={c.name} className="ornate-border bg-ivory/70 p-6 text-center">
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

      {/* ============ 9. CLOSING NOTE ============ */}
      <footer className="relative px-5 py-24 md:py-32 bg-gradient-to-b from-sandal/40 to-maroon-deep text-center overflow-hidden">
        <div className="relative max-w-2xl mx-auto">
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
    </main>
  );
};

export default Index;
