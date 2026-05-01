import { Phone } from "lucide-react";

export const StickyCall = () => (
  <a
    href="tel:+35725336954"
    aria-label="Καλέστε μας"
    className="lg:hidden fixed bottom-5 right-5 z-40 h-16 w-16 rounded-full bg-secondary text-secondary-foreground shadow-warm flex items-center justify-center active:scale-95 transition-transform"
  >
    <Phone className="h-7 w-7" />
    <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-25" />
  </a>
);
