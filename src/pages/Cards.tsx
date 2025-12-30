import { Hero } from "../components/ui/Hero";
import { CARDS_CONTENT } from "../constants";
import { SuitShowcase } from "../components/ui/SuitShowcase";

// Pentacles (Pentaculos) - Unnumbered
import acePentacles from "../assets/cards/Pentaculos/As de Pentaculos.png";
import twoPentacles from "../assets/cards/Pentaculos/Dos de Pentaculos.png";
import threePentacles from "../assets/cards/Pentaculos/Tres de Pentaculos.png";
import fourPentacles from "../assets/cards/Pentaculos/Cuatro de Pentaculos.png";
import fivePentacles from "../assets/cards/Pentaculos/Cinco de Pentaculos.png";
import sixPentacles from "../assets/cards/Pentaculos/Seis de Pentaculos.png";

// Swords (Espadas) - Numbered "1 As...", "2 Dos..."
import aceSwords from "../assets/cards/Espadas/1 As de Espadas.png";
import twoSwords from "../assets/cards/Espadas/2 Dos de Espadas.png";
import threeSwords from "../assets/cards/Espadas/3 Tres de Espadas.png";
import fourSwords from "../assets/cards/Espadas/4 Cuatro de Espadas.png";
import fiveSwords from "../assets/cards/Espadas/5 Cinco de Espadas.png";
import sixSwords from "../assets/cards/Espadas/6 Seis de Espada.png"; // Note: "Espada" singular in filename based on list_dir? "6 Seis de Espada.png"

// Wands (Bastos) - Unnumbered
import aceWands from "../assets/cards/Bastos/As de Bastos.png";
import twoWands from "../assets/cards/Bastos/Dos de Bastos.png";
import threeWands from "../assets/cards/Bastos/Tres de Bastos.png";
import fourWands from "../assets/cards/Bastos/Cuatro de Bastos.png";
import fiveWands from "../assets/cards/Bastos/Cinco de Bastos.png";
import sixWands from "../assets/cards/Bastos/Seis de Bastos.png";

// Cups (Copas) - Unnumbered
import aceCups from "../assets/cards/Copas/As de Copas.png";
import twoCups from "../assets/cards/Copas/Dos de Copas.png";
import threeCups from "../assets/cards/Copas/Tres de Copas.png";
import fourCups from "../assets/cards/Copas/Cuatro de Copas.png";
import fiveCups from "../assets/cards/Copas/Cinco de Copas.png";
import sixCups from "../assets/cards/Copas/Seis de Copas.png";

// Major Arcana (Arcanos Mayores) - Numbered "0 El Loco", "1 El Mago"
import fool from "../assets/cards/Arcanos Mayores/0 El Loco.png";
import magician from "../assets/cards/Arcanos Mayores/1 El Mago.png";
import priestess from "../assets/cards/Arcanos Mayores/2 La Alta Sacerdotiza.png";
import empress from "../assets/cards/Arcanos Mayores/3 La Emperatriz.png";
import emperor from "../assets/cards/Arcanos Mayores/4 El Emperador.png";
import hierophant from "../assets/cards/Arcanos Mayores/5 El Hierofante.png";

// Background Image
import cardsSectionBg from "../assets/images/cards_section.png";

export const Cards = () => {
  const { hero } = CARDS_CONTENT;

  const pentaclesCards = [
    acePentacles,
    twoPentacles,
    threePentacles,
    fourPentacles,
    fivePentacles,
    sixPentacles,
  ];
  const swordsCards = [
    aceSwords,
    twoSwords,
    threeSwords,
    fourSwords,
    fiveSwords,
    sixSwords,
  ];
  const wandsCards = [
    aceWands,
    twoWands,
    threeWands,
    fourWands,
    fiveWands,
    sixWands,
  ];
  const cupsCards = [aceCups, twoCups, threeCups, fourCups, fiveCups, sixCups];
  const majorCards = [fool, magician, priestess, empress, emperor, hierophant];

  return (
    <div className="bg-[#0B0B1E]">
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        description={hero.description}
      />

      {/* Sections with shared background */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${cardsSectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0B0B1E]/80 backdrop-blur-[2px]" />{" "}
        {/* Overlay for readability */}
        <div className="relative z-10">
          <SuitShowcase
            title="Pentacles"
            cards={pentaclesCards}
            description="The Suit of Pentacles deals with the physical or external level of consciousness and thus mirrors the outer situations of your health, finances, work, and creativity. They are associated with the element of Earth."
          />
          <SuitShowcase
            title="Swords"
            cards={swordsCards}
            reverse
            description="The Suit of Swords is associated with the element of Air. It addresses action, change, force, power, oppression, ambition, courage, and conflict. Action can be both constructive and destructive."
          />
          <SuitShowcase
            title="Wands"
            cards={wandsCards}
            description="The Suit of Wands is associated with the element of Fire. Wands represent primal energy, spirituality, inspiration, determination, strength, intuition, creativity, ambition and expansion."
          />
          <SuitShowcase
            title="Cups"
            cards={cupsCards}
            reverse
            description="The Suit of Cups deal with the emotional level of consciousness and are associated with love, feelings, relationships and connections. They correspond to the element of Water."
          />
          <SuitShowcase
            title="Major Arcana"
            cards={majorCards}
            description="The Major Arcana cards represent the life lessons, karmic influences, and the big archetypal themes that are influencing your life and your soul's journey to enlightenment."
          />
        </div>
      </div>
    </div>
  );
};
