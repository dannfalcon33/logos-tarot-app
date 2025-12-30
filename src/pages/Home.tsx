import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "../components/ui/Hero";
import { Button } from "../components/ui/Button";
import { PageTransition } from "../components/animated/PageTransition";
import { DownloadSection } from "../components/ui/DownloadSection";
import { HOME_CONTENT } from "../constants";
import card1 from "../assets/images/card-example-1.png";
import card2 from "../assets/images/card-example-2.png";
import card3 from "../assets/images/card-example-3.png";
import card4 from "../assets/images/card-example-4.png";
import card5 from "../assets/images/card-example-5.png";
import planetfieldBg from "../assets/images/planetfield_bg.png";
import cardBack from "../assets/images/reverso.png";

gsap.registerPlugin(ScrollTrigger);

const cardImages = [card1, card2, card3, card4, card5];

export const Home = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fan Animation
      const cards = gsap.utils.toArray(".card-fan-item");
      gsap.to(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        rotate: (i: number) => (i - 2) * 15,
        y: (i: number) => Math.abs(i - 2) * 10,
        x: (i: number) => (i - 2) * 40,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  const { hero, aboutSection, cardsSection, howItWorksSection } = HOME_CONTENT;

  return (
    <PageTransition>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        image={hero.image}
        showCta={hero.showCta}
      />

      <div className="bg-[#0B0B1E]">
        {/* About Section */}
        <section className="py-24 px-4 bg-linear-to-b from-[#0B0B1E] to-[#1A1A2E]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-8 text-left">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931]">
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
          </div>
        </section>

        {/* Our Cards Section - Full Width */}
        <section
          className="relative py-32 px-4 overflow-hidden"
          style={{
            backgroundImage: `url(${planetfieldBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#0B0B1E] to-transparent z-10" />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0B0B1E] to-transparent z-10" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 space-y-8 text-left order-1 md:order-1">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931]">
                  {cardsSection?.title}
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed shadow-black drop-shadow-md">
                  {cardsSection?.description}
                </p>
                {cardsSection?.ctaText && (
                  <Button>{cardsSection.ctaText}</Button>
                )}
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

        {/* How It Works Section */}
        {howItWorksSection && (
          <section className="py-24 px-4 bg-[#0B0B1E]">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931] mb-16">
                {howItWorksSection.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howItWorksSection.steps.map((step, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                    >
                      <div className="w-full h-48 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/30 transition-shadow duration-300">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Types of Spreads Section - Roadmap Style */}
        {hero && (
          <section
            className="relative py-32 px-4 overflow-hidden"
            style={{
              backgroundImage: `url(${cardBack})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#0B0B1E] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0B0B1E] to-transparent z-10" />

            <div className="relative z-10 max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931] mb-24">
                Types of Spreads
              </h2>

              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-transparent via-[#FFD700]/50 to-transparent hidden md:block" />

                {HOME_CONTENT.spreadsSection?.items.map((item, index) => {
                  const isEven = index % 2 === 0;

                  // Standard Items - Stick to Roadmap Layout
                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col md:flex-row items-center gap-12 mb-24 relative ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-[#0B0B1E] bg-[#9C92AC] shadow-[0_0_15px_rgba(156,146,172,0.5)] z-20 hidden md:block" />

                      {/* Content Side */}
                      <div
                        className={`md:w-1/2 ${
                          isEven ? "md:pl-16 text-left" : "md:pr-16 text-right"
                        }`}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Image Side */}
                      <div className="md:w-1/2">
                        {item.image && (
                          <div
                            className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-105 ${
                              isEven ? "md:mr-auto" : "md:ml-auto"
                            }`}
                          >
                            <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/0 transition-colors duration-500" />
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Plans Section */}
        {HOME_CONTENT.pricingSection && (
          <section className="py-24 px-4 bg-[#0B0B1E]">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931] mb-6">
                {HOME_CONTENT.pricingSection.title}
              </h2>
              <p className="text-lg text-gray-300">
                {HOME_CONTENT.pricingSection.subtitle}
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {HOME_CONTENT.pricingSection.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-8 rounded-2xl border transition-transform duration-300 hover:-translate-y-2 flex flex-col ${
                    plan.isPopular
                      ? "border-[#FFD700] bg-white/10 shadow-[0_0_30px_rgba(255,215,0,0.15)] scale-105 z-10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-[#FFD700] to-[#FDB931] text-[#0B0B1E] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#FFD700] mb-6">
                    {plan.price}
                  </div>

                  <ul className="space-y-4 mb-8 flex-1 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="mr-3 text-[#FFD700]">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.isPopular ? "primary" : "outline"}
                    className="w-full justify-center"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Download App Section */}
        <DownloadSection />
      </div>
    </PageTransition>
  );
};
