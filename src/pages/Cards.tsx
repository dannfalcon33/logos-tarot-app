import { Hero } from "../components/ui/Hero";
import cardsImg from "../assets/images/cards_hero.png";

export const Cards = () => {
  return (
    <Hero
      title="The Cards"
      subtitle="Major & Minor Arcana"
      image={cardsImg}
      description="Each card is a window into a different dimension of the human experience. Browse our collection of 78 cards, reimagined with cosmic imagery to reflect universal archetypes."
    />
  );
};
