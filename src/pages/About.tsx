import { Hero } from "../components/ui/Hero";
import { ABOUT_CONTENT } from "../constants";

export const About = () => {
  const { hero } = ABOUT_CONTENT;
  return (
    <Hero
      title={hero.title}
      subtitle={hero.subtitle}
      image={hero.image}
      description={hero.description}
    />
  );
};
