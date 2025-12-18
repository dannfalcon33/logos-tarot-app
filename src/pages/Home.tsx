import { Hero } from "../components/ui/Hero";
import { Button } from "../components/ui/Button";
import { PageTransition } from "../components/animated/PageTransition";
import homeHeroImg from "../assets/images/home_hero.png";

export const Home = () => {
  return (
    <PageTransition>
      <Hero
        title="Logos Tarot"
        subtitle="Reveal Your Destiny"
        description="Explore the mysteries of the universe through the ancient wisdom of the Tarot. Embark on a journey of self-discovery and cosmetic enlightenment."
        image={homeHeroImg}
        showCta={true}
      />

      <section className="py-20 px-4 bg-linear-to-b from-[#0B0B1E] to-[#1A1A2E]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            About Our Vision
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Logos Tarot is not just a deck of cards; it is a portal to
            understanding the cosmic forces that shape our lives. Blending
            ancient symbolism with futuristic space fantasy aesthetics, we
            invite you to look beyond the veil of reality.
          </p>
          <Button variant="outline">Read Our Guide</Button>
        </div>
      </section>
    </PageTransition>
  );
};
