export interface NavItem {
  name: string;
  path: string;
}

export interface FooterContent {
  title: string;
  copyright: string;
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  ctaText?: string;
  showCta?: boolean;
}

export interface SectionContent {
  title: string;
  description: string;
  ctaText?: string;
  image?: string;
}

export interface PageContent {
  hero: HeroContent;
  aboutSection?: SectionContent;
  cardsSection?: SectionContent;
}
