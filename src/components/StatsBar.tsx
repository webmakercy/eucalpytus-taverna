const stats = [
  { value: "40+", label: "Χρόνια Παράδοσης" },
  { value: "100%", label: "Φρέσκο Κρέας" },
  { value: "4.6★", label: "Google Rating" },
  { value: "220+", label: "Critiques" },
];

export const StatsBar = () => (
  <section
    className="text-mint-cream py-10 sm:py-14"
    style={{ background: "var(--gradient-olive)" }}
  >
    <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className="font-serif italic text-mint-cream font-medium leading-none mb-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            {s.value}
          </div>
          <div className="label-eyebrow text-[0.7rem] sm:text-xs text-mint-cream/80">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);
