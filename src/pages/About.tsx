import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "../components/ui/Hero";
import { ABOUT_CONTENT } from "../constants";
import { DownloadSection } from "../components/ui/DownloadSection";
import card1 from "../assets/images/card-example-1.png";
import card2 from "../assets/images/card-example-2.png";
import card3 from "../assets/images/card-example-3.png";
import card4 from "../assets/images/card-example-4.png";
import card5 from "../assets/images/card-example-5.png";
import card6 from "../assets/images/card-example-6.png";

const CARD_IMAGES = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card1, // Repeating to get 8
  card2, // Repeating to get 8
];

const CardStack = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CARD_IMAGES.length);
    }, 2500); // Change card every 2.5s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-64 h-96 mx-auto perspective-1000">
      {CARD_IMAGES.map((img, i) => {
        // Calculate relative index to create the stack effect
        // We want to show cards starting from 'index' onwards
        let offset = i - index;
        if (offset < 0) offset += CARD_IMAGES.length;

        // Only render the top 3 visible cards + the one animating out (conceptually)
        // But for a loop, simpler global map with dynamic styles is easier
        // Let's force a strict order:
        // Render all, but control Z-index and transforms based on offset

        // Improve: "Once passes behind the other"
        // Active card (offset 0) is front.
        // offset 1 is behind 1 step.
        // offset 2 is behind 2 steps.
        // last cards are hidden or way back.

        // We only really need to animate the transition when index changes.
        // Let's use layoutId or simpler absolute positioning.

        // Logic:
        // Top card (i === index) is front.
        // Transitions:
        // When index increases, old top card becomes "last" (or hidden) and new top card slides in?
        // User request: "se pasan una a una, una pasa detras de la otra"
        // This usually means Top Card slides off, then re-appears at bottom.

        const isTop = i === index;
        const isSecond = i === (index + 1) % CARD_IMAGES.length;
        const isThird = i === (index + 2) % CARD_IMAGES.length;
        const isFourth = i === (index + 3) % CARD_IMAGES.length;

        // We only render active ones to save resources and manage z-index easily?
        // No, render all to keep DOM stable, just hide others.

        // Better Loop Logic:
        // visualIndex = (i - index + len) % len
        const visualIndex =
          (i - index + CARD_IMAGES.length) % CARD_IMAGES.length;

        if (visualIndex > 4) return null; // Hide cards deep in stack

        return (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-2xl border border-[#FFD700]/30 shadow-2xl overflow-hidden bg-[#0B0B1E]"
            initial={false}
            animate={{
              scale: 1 - visualIndex * 0.05,
              y: visualIndex * 15,
              x: visualIndex * 10, // Slight stagger to right
              zIndex: CARD_IMAGES.length - visualIndex,
              opacity: 1 - visualIndex * 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "top center",
            }}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="tarot card"
            />
            {/* Gloss effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
};

export const About = () => {
  const { hero } = ABOUT_CONTENT;

  const howItWorksSteps = [
    {
      title: "Download the App",
      description: "Get start by downloading the app from the store.",
      image: card1,
    },
    {
      title: "Ask a Question",
      description: "Think of a question and focus your energy.",
      image: card2,
    },
    {
      title: "Reveal Your Path",
      description: "Let the cards guide you with AI-powered readings.",
      image: card3,
    },
  ];

  return (
    <div className="bg-[#0B0B1E]">
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        description={hero.description}
      />

      {/* About Us Section */}
      <section className="py-24 px-4 bg-linear-to-b from-[#0B0B1E] to-[#1A1A2E]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Image Side - Card Stack */}
            <div className="md:w-1/2 relative h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
              <CardStack />
            </div>

            {/* Right Content Side */}
            <div className="md:w-1/2 space-y-8 text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931]">
                Modern Tarot for the Digital Age
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We are a modern Tarot application for Android designed to bring
                ancient wisdom into your pocket. Experience personalized
                readings, interactive decks, giving it a tactile feel, and
                comprehensive guides to help you navigate your spiritual
                journey.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Powered by advanced AI, our content provides deep, meaningful
                insights in English, tailored to your unique energy and
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Roadmap Style */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#0B0B1E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931] mb-24">
            How It Works
          </h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-transparent via-[#FFD700]/50 to-transparent hidden md:block" />

            {howItWorksSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
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
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Image Side */}
                  <div className="md:w-1/2">
                    <div
                      className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group w-full max-w-sm mx-auto transform transition-transform duration-500 hover:scale-105 ${
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/0 transition-colors duration-500" />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <DownloadSection />
    </div>
  );
};
