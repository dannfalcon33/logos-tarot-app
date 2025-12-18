import { Hero } from "../components/ui/Hero";
import guideImg from "../assets/images/guide_hero.png";

export const Guide = () => {
  return (
    <Hero
      title="Guide"
      subtitle="How to Read"
      image={guideImg}
      description="Navigating the celestial map of Tarot requires intuition and knowledge. Learn the spread configurations that align with the constellations and interpret the messages from the void."
    />
  );
};
