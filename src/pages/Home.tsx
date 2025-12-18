import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "../components/ui/Hero";
import { Button } from "../components/ui/Button";
import { PageTransition } from "../components/animated/PageTransition";
import { HOME_CONTENT } from "../constants";
import card1 from "../assets/images/card-example-1.png";
import card2 from "../assets/images/card-example-2.png";
import card3 from "../assets/images/card-example-3.png";
import card4 from "../assets/images/card-example-4.png";
import card5 from "../assets/images/card-example-5.png";

gsap.registerPlugin(ScrollTrigger);

const cardImages = [card1, card2, card3, card4, card5];

export const Home = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-fan-item");

      gsap.to(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        rotate: (i: number) => (i - 1.5) * 15,
        y: (i: number) => Math.abs(i - 1.5) * 10,
        x: (i: number) => (i - 1.5) * 40,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const { hero, aboutSection, cardsSection } = HOME_CONTENT;

  return (
    <PageTransition>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        image={hero.image}
        showCta={hero.showCta}
      />

      <section className="py-20 px-4 bg-linear-to-b from-[#0B0B1E] to-[#1A1A2E] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
            <div className="md:w-1/2 space-y-8 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                {aboutSection?.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {aboutSection?.description}
              </p>
              {aboutSection?.ctaText && (
                <Button variant="outline">{aboutSection.ctaText}</Button>
              )}
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full" />
              {aboutSection?.image && (
                <img
                  src={aboutSection.image}
                  alt={aboutSection.title}
                  className="relative z-10 rounded-2xl shadow-2xl shadow-purple-900/50 border border-white/10 hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          </div>

          {/* Our Cards Section */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8 text-left order-1 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931]">
                {cardsSection?.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {cardsSection?.description}
              </p>
              {cardsSection?.ctaText && <Button>{cardsSection.ctaText}</Button>}
            </div>

            <div className="md:w-1/2 relative h-[400px] flex items-center justify-center order-2 md:order-2 perspective-1000">
              {/* Card Fan Animation Container */}
              <div ref={cardsRef} className="card-fan relative w-48 h-72">
                {cardImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Card Example ${i + 1}`}
                    className="card-fan-item absolute inset-0 w-full h-full object-cover rounded-xl border border-[#FFD700]/30 shadow-2xl origin-bottom-center"
                    style={{ transformOrigin: "bottom center" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
