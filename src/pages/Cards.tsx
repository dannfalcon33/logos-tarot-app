import { Hero } from "../components/ui/Hero";
import { CARDS_CONTENT } from "../constants";

export const Cards = () => {
  const { hero } = CARDS_CONTENT;
  return (
    <Hero
      title={hero.title}
      subtitle={hero.subtitle}
      image={hero.image}
      description={hero.description}
    />
  );
};
