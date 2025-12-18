import type { NavItem, PageContent, FooterContent } from "./types";
import homeHeroImg from "./assets/images/home_hero.png";
import aboutHeroImg from "./assets/images/about_hero.png";
import guideHeroImg from "./assets/images/guide_hero.png";
import cardsHeroImg from "./assets/images/cards_hero.png";
import contactHeroImg from "./assets/images/contact_hero.png";
import aboutHomeImg from "./assets/images/about_home.png";

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Guide", path: "/guide" },
  { name: "Cards", path: "/cards" },
  { name: "Contact", path: "/contact" },
];

// Footer
export const FOOTER_CONTENT: FooterContent = {
  title: "Logos Tarot",
  copyright: `© ${new Date().getFullYear()} Logos Tarot. All mysteries revealed.`,
};

// Pages
export const HOME_CONTENT: PageContent = {
  hero: {
    title: "Logos Tarot",
    subtitle: "Reveal Your Destiny",
    description:
      "Explore the mysteries of the universe through the ancient wisdom of the Tarot. Embark on a journey of self-discovery and cosmetic enlightenment.",
    image: homeHeroImg,
    ctaText: "Begin Your Journey",
    showCta: true,
  },
  aboutSection: {
    title: "About Our Vision",
    description:
      "Logos Tarot is not just a deck of cards; it is a portal to understanding the cosmic forces that shape our lives. Blending ancient symbolism with futuristic space fantasy aesthetics, we invite you to look beyond the veil of reality.",
    ctaText: "Read Our Guide",
    image: aboutHomeImg,
  },
  cardsSection: {
    title: "The Cosmic Deck",
    description:
      "Witness the major and minor arcana reimagined. Each card is a masterpiece of digital art, infused with the energy of distant galaxies.",
    ctaText: "View Gallery",
  },
};

export const ABOUT_CONTENT: PageContent = {
  hero: {
    title: "About Us",
    subtitle: "Our Story",
    description:
      "Born from stardust and ancient wisdom, Logos Tarot seeks to bridge the gap between the scientific and the spiritual. We believe that the universe speaks to us in symbols, and Tarot is the language of the stars.",
    image: aboutHeroImg,
  },
};

export const GUIDE_CONTENT: PageContent = {
  hero: {
    title: "Guide",
    subtitle: "How to Read",
    description:
      "Navigating the celestial map of Tarot requires intuition and knowledge. Learn the spread configurations that align with the constellations and interpret the messages from the void.",
    image: guideHeroImg,
  },
};

export const CARDS_CONTENT: PageContent = {
  hero: {
    title: "The Cards",
    subtitle: "Major & Minor Arcana",
    description:
      "Each card is a window into a different dimension of the human experience. Browse our collection of 78 cards, reimagined with cosmic imagery to reflect universal archetypes.",
    image: cardsHeroImg,
  },
};

export const CONTACT_CONTENT: PageContent = {
  hero: {
    title: "Contact",
    subtitle: "Reach Out",
    description:
      "Do you have questions about your reading? Or perhaps you wish to commission a custom spread? Send a signal across the cosmos, and we will respond.",
    image: contactHeroImg,
  },
};
