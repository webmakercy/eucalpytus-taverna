import dessert from "@/assets/dessert-icecream.jpg";

export const CharmBadge = () => (
  <section
    className="relative py-16 sm:py-20 overflow-hidden"
    style={{ background: "var(--gradient-warm)" }}
  >
    <img
      src={dessert}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
    />
    <div className="container-tight relative text-center text-secondary-foreground">
      <div className="text-5xl sm:text-6xl mb-4">🍦</div>
      <h2
        className="font-serif font-semibold text-balance leading-tight"
        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
      >
        Δωρεάν παγωτό με γλυκό βύσσινο
        <br />
        <span className="italic font-medium opacity-90">σε κάθε γεύμα</span>
      </h2>
      <p className="mt-4 text-secondary-foreground/85 max-w-xl mx-auto">
        Μια μικρή παράδοση που κρατάμε εδώ και χρόνια — γιατί το γλυκό φινάλε κάνει το γεύμα τέλειο.
      </p>
    </div>
  </section>
);
