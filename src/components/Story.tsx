import interior from "@/assets/taverna-interior.jpg";

export const Story = () => (
  <section id="story" className="py-20 sm:py-28">
    <div className="container-tight grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <p className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 font-medium">
          — Η ιστορία μας —
        </p>
        <h2
          className="font-serif font-semibold mb-8 text-balance"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          Μια οικογενειακή ταβέρνα που ζει την <span className="italic text-olive">παράδοση</span>
        </h2>
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Οι <strong>Αδελφοί Φωτή</strong> ξεκίνησαν τους «5 Ευκαλύπτους» με μία απλή ιδέα:
            να σερβίρουν φαγητό όπως ακριβώς το έφτιαχνε η γιαγιά τους — με υλικά που
            μυρίζουν από κήπο, με κρέας που δεν έχει μπει ποτέ σε καταψύκτη.
          </p>
          <p>
            Παραγγέλνουμε φρέσκο κρέας <strong>κάθε πρωί</strong>. Το κλέφτικο σιγοβράζει
            ώρες σε παραδοσιακό φούρνο, ενώ ο μεζές μας απλώνεται σε δεκάδες μικρά πιάτα
            που μοιράζεστε με την παρέα σας.
          </p>
          <p>
            Και κάθε γεύμα τελειώνει όπως πρέπει: με ένα <strong>δωρεάν παγωτό βανίλια</strong>
            και γλυκό βύσσινο — μια παράδοση που κρατάμε εδώ και χρόνια.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-warm">
          <img
            src={interior}
            alt="Εσωτερικό της ταβέρνας 5 Ευκάλυπτοι στη Λεμεσό"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden sm:block absolute -bottom-6 -left-6 bg-gold text-gold-foreground rounded-2xl px-6 py-5 shadow-warm max-w-[220px]">
          <div className="font-serif text-3xl font-semibold leading-none">40+</div>
          <div className="text-xs uppercase tracking-wider mt-1">χρόνια οικογενειακής φιλοξενίας</div>
        </div>
      </div>
    </div>
  </section>
);
