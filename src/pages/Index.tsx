import { ExpiryBanner } from "@/components/ExpiryBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { SignatureDishes } from "@/components/SignatureDishes";
import { CyprusMail } from "@/components/CyprusMail";
import { Story } from "@/components/Story";
import { CharmBadge } from "@/components/CharmBadge";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { StickyCall } from "@/components/StickyCall";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ExpiryBanner />
      <Header />
      <Hero />
      <StatsBar />
      <SignatureDishes />
      <CyprusMail />
      <Story />
      <CharmBadge />
      <Reviews />
      <Contact />
      <Footer />
      <StickyCall />
    </main>
  );
};

export default Index;
