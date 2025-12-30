import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SuitShowcaseProps {
  title: string;
  description: string;
  cards: string[]; // Array of image URLs
  reverse?: boolean;
}

export const SuitShowcase = ({
  title,
  description,
  cards,
  reverse = false,
}: SuitShowcaseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray(
        ".suit-card-item",
        containerRef.current
      );

      gsap.to(cardElements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Start animation when section is in view
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
        rotate: (i: number) => (reverse ? (2.5 - i) * 10 : (i - 2.5) * 10), // Reverse rotation
        y: (i: number) => Math.abs(i - 2.5) * 15, // Curve effect
        x: (i: number) => (reverse ? (2.5 - i) * 50 : (i - 2.5) * 50), // Reverse spread
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Cards Side (Left by default, swapped if reverse) */}
        <div
          className={`md:w-1/2 flex justify-center order-2 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <div
            ref={containerRef}
            className="relative w-full h-[400px] flex items-center justify-center perspective-1000"
          >
            {cards.slice(0, 6).map((img, i) => (
              <div
                key={i}
                className="suit-card-item absolute w-48 h-72 rounded-xl border border-[#FFD700]/30 shadow-2xl origin-bottom-center bg-black/50 overflow-hidden group"
                style={{
                  // Initial stacked state
                  transform: "translate(0, 0) rotate(0)",
                  zIndex: 10 - i,
                }}
              >
                <img
                  src={img}
                  alt={`${title} Card ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gloss */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Text Side (Right by default) */}
        <div
          className={`md:w-1/2 space-y-6 text-left order-1 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] to-[#FDB931]">
            {title}
          </h2>
          <div className="h-1 w-24 bg-[#FFD700] rounded-full opacity-80" />
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
