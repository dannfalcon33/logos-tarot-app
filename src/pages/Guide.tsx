import { Hero } from "../components/ui/Hero";
import { GUIDE_CONTENT } from "../constants";

export const Guide = () => {
  const { hero } = GUIDE_CONTENT;
  return (
    <Hero
      title={hero.title}
      subtitle={hero.subtitle}
      image={hero.image}
      description={hero.description}
    />
  );
};
