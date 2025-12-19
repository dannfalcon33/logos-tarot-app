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

export interface HowItWorksStep {
  title: string;
  description: string;
  image: string;
}

export interface HowItWorksSection {
  title: string;
  steps: HowItWorksStep[];
}

export interface Spread {
  id: string;
  title: string;
  description: string;
  image?: string;
  type: "standard" | "animation";
}

export interface SpreadsSection {
  title: string;
  items: Spread[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface PricingSection {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
}

export interface DownloadSection {
  title: string;
  description: string;
  ctaText?: string;
}

export interface PageContent {
  hero: HeroContent;
  aboutSection?: SectionContent;
  cardsSection?: SectionContent;
  howItWorksSection?: HowItWorksSection;
  spreadsSection?: SpreadsSection;
  pricingSection?: PricingSection;
  downloadSection?: DownloadSection;
}
