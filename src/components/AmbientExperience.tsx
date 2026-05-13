import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const particles = Array.from({ length: 46 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 101}%`,
  top: `${(i * 53) % 97}%`,
  delay: `${(i % 9) * 0.55}s`,
  scale: 0.6 + (i % 5) * 0.14,
}));

export function AmbientExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!root || shouldReduceMotion || isMobile) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".ambient-orb-a", {
        x: 80,
        y: 42,
        scale: 1.08,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-orb-b", {
        x: -62,
        y: -54,
        scale: 0.94,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-scan", {
        xPercent: 118,
        opacity: 0.3,
        duration: 13.5,
        repeat: -1,
        repeatDelay: 3.2,
        ease: "power2.inOut",
      });

      gsap.to(".ambient-depth-line", {
        x: "random(-28, 28)",
        opacity: "random(0.12, 0.28)",
        duration: "random(8, 14)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });

      gsap.to(".ambient-reticle", {
        rotate: "random(-3, 3)",
        scale: "random(0.68, 1)",
        opacity: "random(0.12, 0.32)",
        duration: "random(9, 16)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      gsap.to(".ambient-particle", {
        y: "random(-18, 18)",
        x: "random(-12, 12)",
        opacity: "random(0.18, 0.44)",
        duration: "random(8, 15)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.05,
          from: "random",
        },
      });

      gsap.to(root, {
        "--ambient-shift": "1",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.3,
        },
      });

      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 62%",
          end: "bottom 38%",
          toggleClass: { targets: section, className: "is-active-scene" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="ambient-root" aria-hidden="true">
      <div className="ambient-vignette" />
      <div className="ambient-grid-layer" />
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-scan" />
      <div className="ambient-depth-line ambient-depth-line-a" />
      <div className="ambient-depth-line ambient-depth-line-b" />
      <div className="ambient-reticle ambient-reticle-a" />
      <div className="ambient-reticle ambient-reticle-b" />
      <div className="ambient-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              transform: `scale(${particle.scale})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
