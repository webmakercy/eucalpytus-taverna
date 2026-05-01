import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-20 sm:py-28">
    <div className="container-tight">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <p className="label-eyebrow text-eucalyptus text-xs sm:text-sm mb-4">
          — Ελάτε να μας γνωρίσετε —
        </p>
        <h2
          className="font-serif font-medium text-balance text-eucalyptus-deep"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Επικοινωνία &amp; <span className="italic">τοποθεσία</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="space-y-6">
          <InfoRow icon={<MapPin className="h-5 w-5" />} label="Διεύθυνση">
            Νίκου &amp; Δέσποινας Παττίχη 5Λ, Λεμεσός, Κύπρος
          </InfoRow>
          <InfoRow icon={<Phone className="h-5 w-5" />} label="Τηλέφωνο">
            <a href="tel:+35725336954" className="hover:text-eucalyptus transition-colors">
              +357 25 336954
            </a>
          </InfoRow>
          <InfoRow icon={<Mail className="h-5 w-5" />} label="Email">
            <a
              href="mailto:taverna5efkaliptoi@gmail.com"
              className="hover:text-eucalyptus transition-colors break-all"
            >
              taverna5efkaliptoi@gmail.com
            </a>
          </InfoRow>
          <InfoRow icon={<Clock className="h-5 w-5" />} label="Ώρες λειτουργίας">
            Δευτέρα–Σάββατο: 12:00 – 24:00<br />
            Κυριακή: κλειστά
          </InfoRow>

          <div className="flex items-center gap-3 pt-4">
            <SocialIcon href="https://www.facebook.com/5Eukalyptoi/" label="Facebook">
              <Facebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/pente_efkaliptoi_mezedopolio/" label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-warm aspect-[4/3] lg:aspect-auto lg:h-[500px] bg-muted">
          <iframe
            title="Χάρτης 5 Ευκάλυπτοι"
            src="https://www.google.com/maps?q=Nikou+%26+Despoinas+Pattichi+5L,+Limassol,+Cyprus&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 h-11 w-11 rounded-full bg-eucalyptus text-mint-cream flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="label-eyebrow text-[0.7rem] text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-foreground leading-relaxed">{children}</div>
    </div>
  </div>
);

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="h-11 w-11 rounded-full bg-eucalyptus text-mint-cream flex items-center justify-center hover:bg-eucalyptus-deep transition-colors"
  >
    {children}
  </a>
);
