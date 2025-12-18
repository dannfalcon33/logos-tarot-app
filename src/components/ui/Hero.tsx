import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "./Button";
import { PageTransition } from "../animated/PageTransition";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  showCta?: boolean;
}

export const Hero = ({
  title,
  subtitle,
  description,
  image,
  showCta = false,
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.to(containerRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-[#0B0B1E]/60 via-transparent to-[#0B0B1E]" />

        {/* Content */}
        <div
          ref={textRef}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6"
        >
          {subtitle && (
            <h2 className="text-xl md:text-2xl text-[#FFD700] tracking-[0.2em] font-light uppercase">
              {subtitle}
            </h2>
          )}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {showCta && (
            <div className="pt-4">
              <Button>Get Started</Button>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};
