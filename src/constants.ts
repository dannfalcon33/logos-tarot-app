import type { NavItem, PageContent, FooterContent } from "./types";
import homeHeroImg from "./assets/images/home_hero.png";
import aboutHeroImg from "./assets/images/about_hero.png";
import guideHeroImg from "./assets/images/guide_hero.png";
import cardsHeroImg from "./assets/images/cards_hero.png";
import contactHeroImg from "./assets/images/contact_hero.png";
import aboutHomeImg from "./assets/images/about_home.png";

import stepSpreadImg from "./assets/images/step_spread.png";
import stepIntentionImg from "./assets/images/step_intention.png";
import stepWisdomImg from "./assets/images/step_wisdom.png";
import spreadLoveImg from "./assets/images/spread_love.png";
import spreadWorkImg from "./assets/images/spread_work.png";
import spreadFreeImg from "./assets/images/spread_free.png";
import spreadDailyImg from "./assets/images/spread_daily.png";

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
  howItWorksSection: {
    title: "How It Works",
    steps: [
      {
        title: "Choose Your Spread",
        description:
          "Select from our curated cosmic spreads designed for specific life questions.",
        image: stepSpreadImg,
      },
      {
        title: "Formulate Intention",
        description:
          "Focus your energy. The cards respond to the vibrations of your query.",
        image: stepIntentionImg,
      },
      {
        title: "Receive Wisdom",
        description:
          "Unlock the meaning behind the cards with our detailed, intuitive interpretations.",
        image: stepWisdomImg,
      },
    ],
  },
  spreadsSection: {
    title: "Types of Spreads",
    items: [
      {
        id: "daily",
        title: "Daily Spread",
        description:
          "Start your day with guidance. A single card to set the tone and provide focus for the day ahead.",
        image: spreadDailyImg,
        type: "standard",
      },
      {
        id: "ppf",
        title: "Past / Present / Future",
        description:
          "Gain perspective on your timeline. Understand how your past influences your present and shapes your future.",
        image: stepSpreadImg,
        type: "standard",
      },
      {
        id: "love",
        title: "Love & Relationships",
        description:
          "Navigate matters of the heart. Discover insights into connection, compatibility, and emotional growth.",
        image: spreadLoveImg,
        type: "standard",
      },
      {
        id: "work",
        title: "Work & Money",
        description:
          "Unlock your career potential and financial abundance. Practical advice for professional success.",
        image: spreadWorkImg,
        type: "standard",
      },
      {
        id: "free",
        title: "Free Question",
        description:
          "Ask the universe anything. A flexible spread to address your most burning questions directly.",
        image: spreadFreeImg,
        type: "standard",
      },
    ],
  },
  cardsSection: {
    title: "The Cosmic Deck",
    description:
      "Witness the major and minor arcana reimagined. Each card is a masterpiece of digital art, infused with the energy of distant galaxies.",
    ctaText: "View Gallery",
  },
  pricingSection: {
    title: "Choose Your Path",
    subtitle: "Unlock deeper wisdom with our tier plans.",
    plans: [
      {
        id: "world",
        name: "World",
        price: "$4.99/mo",
        features: [
          "Daily Card",
          "Basic Spreads",
          "Limited Journal",
          "Ad-supported",
        ],
        ctaText: "Start Journey",
      },
      {
        id: "stellar",
        name: "Stellar",
        price: "$9.99/mo",
        features: [
          "All Spreads",
          "Unlimited Journal",
          "Ad-free Experience",
          "Moon Phase Insights",
          "Priority Support",
        ],
        ctaText: "Join Stellar",
        isPopular: true,
      },
      {
        id: "universe",
        name: "Universe",
        price: "$19.99/mo",
        features: [
          "Everything in Stellar",
          "1-on-1 Expert Consultation",
          "Custom Spread Creation",
          "Exclusive Cosmic Events",
          "Early Access to Features",
        ],
        ctaText: "Expand Universe",
      },
    ],
  },
  downloadSection: {
    title: "Carry the Cosmos in Your Pocket",
    description:
      "Download the Logos Tarot app today and align with the stars wherever you go. Available on iOS and Android.",
    ctaText: "Download Now",
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
