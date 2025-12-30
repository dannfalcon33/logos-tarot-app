import { Hero } from "../components/ui/Hero";
import { GUIDE_CONTENT } from "../constants";
import zodiacfieldBg from "../assets/images/guide_hero.png";
import arcaneLibrary from "../assets/images/library-guide.png";
import wisdomImg from "../assets/images/step_wisdom.png";
import { Button } from "../components/ui/Button";

export const Guide = () => {
  const { hero } = GUIDE_CONTENT;

  return (
    <div className="bg-[#0B0B1E]">
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        description={hero.description}
      />

      {/* Section 1: Card Meanings Guide */}
      <section className="py-24 px-4 bg-linear-to-b from-[#0B0B1E] to-[#1A1A2E]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full" />
            <img
              src={arcaneLibrary}
              alt="Arcane Library Guide"
              className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl shadow-2xl shadow-purple-900/40 border border-white/10 transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Content Side */}
          <div className="md:w-1/2 space-y-6 text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931]">
              Deep Dive into Arcana
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Unlock the secrets of the 78 cards. Our comprehensive guide covers
              the detailed meaning of every Major and Minor Arcana card,
              including their upright and reversed interpretations, symbolism,
              and astrological associations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you are a beginner or an adept, our library serves as a
              constant companion for referencing and deepening your
              understanding of the Tarot archetypes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Video Tutorials */}
      <section className="py-24 px-4 bg-[#0B0B1E] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Image Side */}
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
            <img
              src={wisdomImg}
              alt="Video Tutorials"
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-blue-900/40 border border-white/10 transform transition-transform duration-500 group-hover:rotate-1"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Content Side */}
          <div className="md:w-1/2 space-y-6 text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Master the Art of Reading
            </h2>
            <div className="h-1 w-20 bg-[#FFD700] rounded-full" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Learning Tarot is a journey of intuition and study. Our app
              includes exclusive video tutorials that walk you through the
              basics of shuffling, spread layouts, and intuitive storytelling.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Visualize the connections between cards and gain confidence in
              your readings with step-by-step visual lessons designed for the
              modern mystic.
            </p>
            <Button variant="outline">Watch Preview</Button>
          </div>
        </div>
      </section>

      {/* Section 3: Kybalion Quote (Cosmos Background) */}
      <section
        className="py-40 px-4 relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${zodiacfieldBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        {/* Decorative borders */}
        <div className="absolute top-0 inset-x-0 h-24 bg-linear-to-b from-[#0B0B1E] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-[#0B0B1E] to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4">
            <span className="text-5xl text-[#FFD700] opacity-50">❝</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight tracking-wide drop-shadow-lg">
            "The lips of wisdom are closed, except to the ears of
            Understanding."
          </h2>
          <div className="inline-block mt-4">
            <span className="text-5xl text-[#FFD700] opacity-50">❞</span>
          </div>
          <p className="text-xl md:text-2xl text-[#FFD700] font-light tracking-widest uppercase mt-8">
            — The Kybalion
          </p>
        </div>
      </section>
    </div>
  );
};
