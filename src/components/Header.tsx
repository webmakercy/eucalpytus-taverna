import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "Αρχική" },
  { href: "#menu", label: "Μενού" },
  { href: "#story", label: "Ιστορία" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Επικοινωνία" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card-warm"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="5 Ευκάλυπτοι λογότυπο"
            className="h-12 sm:h-14 w-auto rounded-md shadow-sm"
            loading="eager"
          />
          <span
            className={`font-serif italic text-xl sm:text-2xl font-medium tracking-tight transition-colors hidden sm:inline ${
              scrolled ? "text-eucalyptus-deep" : "text-mint-cream"
            }`}
          >
            5 Ευκάλυπτοι
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`label-eyebrow text-xs transition-colors hover:text-eucalyptus ${
                scrolled ? "text-foreground" : "text-mint-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button asChild variant="default" className="bg-eucalyptus text-mint-cream hover:bg-eucalyptus-deep rounded-full px-5">
            <a href="tel:+35725336954">
              <Phone className="mr-2 h-4 w-4" /> 25 336954
            </a>
          </Button>
        </div>

        <button
          aria-label="Menu"
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-foreground" : "text-mint-cream"
          }`}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile slide-in */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-foreground/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-warm flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="5 Ευκάλυπτοι" className="h-10 w-auto rounded-md" />
              <span className="font-serif italic text-2xl font-medium text-eucalyptus-deep">
                5 Ευκάλυπτοι
              </span>
            </div>
            <button aria-label="Close" onClick={() => setOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif italic text-2xl py-3 border-b border-border/60 hover:text-eucalyptus transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto p-5">
            <Button asChild className="w-full bg-eucalyptus text-mint-cream hover:bg-eucalyptus-deep rounded-full h-12">
              <a href="tel:+35725336954">
                <Phone className="mr-2 h-5 w-5" /> Καλέστε μας
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
