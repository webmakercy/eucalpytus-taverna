import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-mezze.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-svh-screen w-full overflow-hidden flex items-end"
    >
      <img
        src={heroImg}
        alt="Παραδοσιακό κυπριακό τραπέζι μεζέ κάτω από ευκαλύπτους"
        className="absolute inset-0 h-full w-full object-cover animate-fade-in"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container-tight pb-16 sm:pb-24 lg:pb-32 pt-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-mint-cream/15 backdrop-blur-md px-4 py-2 mb-6 ring-1 ring-mint-cream/30 animate-fade-up">
          <span className="text-mint-cream text-base">★</span>
          <span className="text-mint-cream text-sm font-medium label-eyebrow" style={{ letterSpacing: "0.12em" }}>
            4.6 · 220 reviews στο Google
          </span>
        </div>

        <h1
          className="text-mint-cream font-serif italic font-medium text-balance leading-[1.05] mb-5 animate-fade-up"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Αυθεντική
          <br />
          <span className="text-mint-cream">Κυπριακή</span> Παράδοση
        </h1>

        <p
          className="text-mint-cream/90 max-w-xl mb-8 text-balance font-sans animate-fade-up"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", animationDelay: "0.1s" }}
        >
          Από τους Αδελφούς Φωτή — φρέσκο κρέας, αυθεντικός μεζές
          και ζεστή φιλοξενία στην καρδιά της Λεμεσού.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button
            asChild
            size="lg"
            className="bg-eucalyptus hover:bg-eucalyptus-deep text-mint-cream rounded-full h-14 px-7 text-base shadow-warm"
          >
            <a href="tel:+35725336954">
              <Phone className="mr-2 h-5 w-5" /> Κλείστε τραπέζι
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full h-14 px-7 text-base bg-transparent border-mint-cream/60 text-mint-cream hover:bg-mint-cream hover:text-eucalyptus-deep"
          >
            <a href="#menu">Δείτε το μενού</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
