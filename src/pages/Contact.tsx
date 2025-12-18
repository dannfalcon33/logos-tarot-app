import { Hero } from "../components/ui/Hero";
import { CONTACT_CONTENT } from "../constants";

export const Contact = () => {
  const { hero } = CONTACT_CONTENT;
  return (
    <Hero
      title={hero.title}
      subtitle={hero.subtitle}
      image={hero.image}
      description={hero.description}
    />
  );
};
