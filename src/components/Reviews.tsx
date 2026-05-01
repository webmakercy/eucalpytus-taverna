import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Μαρία Κ.",
    text: "Το καλύτερο κλέφτικο στη Λεμεσό. Λιώνει στο στόμα και η εξυπηρέτηση είναι σαν να σε φιλοξενούν στο σπίτι τους.",
  },
  {
    name: "David T.",
    text: "Authentic local taverna, not touristy. The free dessert at the end is a lovely touch — felt like family.",
  },
  {
    name: "Ανδρέας Π.",
    text: "Πάμε με την οικογένεια εδώ και χρόνια. Ποτέ δεν μας απογοήτευσαν, πάντα φρέσκα και νόστιμα.",
  },
];

export const Reviews = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-cream-deep/60">
      <div className="container-tight max-w-3xl text-center">
        <p className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 font-medium">
          — Τι λένε οι πελάτες μας —
        </p>
        <h2
          className="font-serif font-semibold mb-12 text-balance"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          ⭐ 4.6 από <span className="italic text-olive">220 reviews</span>
        </h2>

        <div className="relative min-h-[260px] sm:min-h-[220px]">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="text-gold text-2xl mb-4 tracking-widest">★★★★★</div>
              <blockquote
                className="font-serif italic text-foreground/90 text-balance leading-snug"
                style={{ fontSize: "clamp(1.15rem, 2vw, 1.65rem)" }}
              >
                “{r.text}”
              </blockquote>
              <cite className="not-italic block mt-6 text-sm text-muted-foreground font-medium">
                — {r.name}
              </cite>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-8 bg-secondary" : "w-2 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
