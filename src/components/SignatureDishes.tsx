import kleftiko from "@/assets/dish-kleftiko.jpg";
import souvla from "@/assets/dish-souvla.jpg";
import souvlaki from "@/assets/dish-souvlaki.jpg";
import paidakia from "@/assets/dish-paidakia.jpg";
import mezze from "@/assets/dish-mezze.jpg";
import salad from "@/assets/dish-salad.jpg";

const dishes = [
  {
    img: kleftiko,
    name: "Κλέφτικο",
    desc: "Αργοψημένο αρνί με πατάτες — μυρίζει ώρες πριν φτάσει στο τραπέζι.",
    price: "€16",
  },
  {
    img: souvla,
    name: "Σούβλα",
    desc: "Παραδοσιακή σχάρα στα κάρβουνα, διάσημη στους ντόπιους.",
    price: "€14",
  },
  {
    img: souvlaki,
    name: "Σουβλάκι Χοιρινό",
    desc: "Φρέσκο χοιρινό, μαριναρισμένο με μυρωδικά.",
    price: "€12",
  },
  {
    img: paidakia,
    name: "Παϊδάκια Αρνίσια",
    desc: "Με χωριάτικα μυρωδικά και χοντρό αλάτι.",
    price: "€18",
  },
  {
    img: mezze,
    name: "Mezze Platter",
    desc: "Πάνω από 18 πιάτα κυπριακής παράδοσης σε ένα τραπέζι.",
    price: "€24/άτ.",
  },
  {
    img: salad,
    name: "Χωριάτικη με Χαλούμι",
    desc: "Με ντόπια λαχανικά, ελιές και ψητό χαλούμι.",
    price: "€9",
  },
];

export const SignatureDishes = () => (
  <section id="menu" className="py-20 sm:py-28">
    <div className="container-tight">
      <div className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
        <p className="label-eyebrow text-eucalyptus text-xs sm:text-sm mb-4">
          — Το μενού μας —
        </p>
        <h2
          className="font-serif font-medium text-balance text-eucalyptus-deep"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Πιάτα <span className="italic">υπογραφής</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-balance">
          Φρέσκα υλικά κάθε μέρα. Καθόλου κατεψυγμένα. Συνταγές που περνάνε από γενιά σε γενιά.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {dishes.map((d) => (
          <article
            key={d.name}
            className="group bg-card rounded-2xl overflow-hidden shadow-card-warm hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-serif text-2xl font-medium text-eucalyptus-deep">{d.name}</h3>
                <span className="text-eucalyptus font-serif italic text-xl font-semibold">{d.price}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
