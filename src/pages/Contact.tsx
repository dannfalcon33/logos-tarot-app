import { Hero } from "../components/ui/Hero";
import contactImg from "../assets/images/contact_hero.png";

export const Contact = () => {
  return (
    <Hero
      title="Contact"
      subtitle="Reach Out"
      image={contactImg}
      description="Do you have questions about your reading? Or perhaps you wish to commission a custom spread? Send a signal across the cosmos, and we will respond."
    />
  );
};
