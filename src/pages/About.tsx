import { Hero } from "../components/ui/Hero";
import aboutImg from "../assets/images/about_hero.png";

export const About = () => {
  return (
    <Hero
      title="About Us"
      subtitle="Our Story"
      image={aboutImg}
      description="Born from stardust and ancient wisdom, Logos Tarot seeks to bridge the gap between the scientific and the spiritual. We believe that the universe speaks to us in symbols, and Tarot is the language of the stars."
    />
  );
};
