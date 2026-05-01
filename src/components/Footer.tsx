import { Facebook, Instagram } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Αρχική" },
  { href: "#menu", label: "Μενού" },
  { href: "#story", label: "Ιστορία" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Επικοινωνία" },
];

export const Footer = () => (
  <footer
    className="text-cream"
    style={{ background: "var(--gradient-olive)" }}
  >
    <div className="container-tight py-14 grid md:grid-cols-3 gap-10">
      <div>
        <div className="font-serif text-3xl font-semibold mb-3">
          5 <span className="text-gold">Ευκάλυπτοι</span>
        </div>
        <p className="text-cream/75 text-sm leading-relaxed max-w-xs">
          Αυθεντική κυπριακή ταβέρνα στη Λεμεσό. Από τους Αδελφούς Φωτή, με αγάπη.
        </p>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Πλοήγηση</h4>
        <ul className="space-y-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-cream/85 hover:text-gold transition-colors text-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Ακολουθήστε μας</h4>
        <div className="flex items-center gap-3 mb-5">
          <a
            href="https://www.facebook.com/5Eukalyptoi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="h-10 w-10 rounded-full bg-cream/10 hover:bg-gold hover:text-olive-deep flex items-center justify-center transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/pente_efkaliptoi_mezedopolio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="h-10 w-10 rounded-full bg-cream/10 hover:bg-gold hover:text-olive-deep flex items-center justify-center transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <a
          href="tel:+35725336954"
          className="text-gold font-serif text-2xl hover:underline"
        >
          25 336954
        </a>
      </div>
    </div>

    <div className="border-t border-cream/10">
      <div className="container-tight py-5 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-cream/60">
        <div>© 2026 ADELFOI FOTI (I 5 EFKALIPTOI) LTD. Όλα τα δικαιώματα διατηρούνται.</div>
        <div>
          Powered by{" "}
          <a
            href="https://webmakercy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            WebMaker Agency
          </a>
        </div>
      </div>
    </div>
  </footer>
);
