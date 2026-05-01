import { Quote } from "lucide-react";

export const CyprusMail = () => (
  <section className="py-16 sm:py-24 bg-muted/40">
    <div className="container-tight">
      <div className="bg-card rounded-3xl shadow-card-warm p-8 sm:p-14 max-w-4xl mx-auto relative border border-sage/30">
        <Quote className="absolute -top-6 left-8 h-14 w-14 text-eucalyptus opacity-90" strokeWidth={1.5} />
        <p className="label-eyebrow text-eucalyptus text-xs mb-4 mt-2">
          Cyprus Mail · Restaurant Review
        </p>
        <h3
          className="font-serif font-medium mb-6 text-balance text-eucalyptus-deep"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
        >
          Όπως μας περιέγραψε το Cyprus Mail
        </h3>
        <blockquote
          className="font-serif italic text-foreground/90 leading-snug text-balance"
          style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.875rem)" }}
        >
          “Σε αντίθεση με πολλές ταβέρνες που σας αναγκάζουν να παραγγείλετε μεζέ,
          οι 5 Ευκάλυπτοι σας αφήνουν να επιλέξετε ξεχωριστά πιάτα από το μενού.”
        </blockquote>
        <footer className="mt-8 flex flex-wrap items-center gap-4 justify-between">
          <cite className="not-italic text-sm text-muted-foreground">
            — Cyprus Mail Restaurant Review, Ιούνιος 2025
          </cite>
          <a
            href="https://cyprus-mail.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-eucalyptus font-medium text-sm hover:text-eucalyptus-deep hover:underline"
          >
            Read full review →
          </a>
        </footer>
      </div>
    </div>
  </section>
);
