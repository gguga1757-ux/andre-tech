import { type MouseEvent, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  BRAND_NAME,
  NAV_ITEMS,
  CTA_LABEL,
  LOGO_PATH,
  WHATSAPP_URL,
} from "@/lib/constants";

function getSectionId(href: string) {
  return href.startsWith("/#") ? href.slice(2) : null;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const header = headerRef.current;
    const shell = shellRef.current;

    if (!header || !shell || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(shell, {
        y: -3,
        scale: 0.988,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,.16), inset 0 -1px 0 rgba(45,255,20,.1), 0 26px 90px rgba(0,0,0,.36), 0 0 46px rgba(45,255,20,.075)",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: 260,
          scrub: 0.7,
        },
      });

      gsap.fromTo(
        ".nav-sheen",
        { xPercent: -135, opacity: 0 },
        {
          xPercent: 145,
          opacity: 0.42,
          duration: 7.5,
          repeat: -1,
          repeatDelay: 3,
          ease: "sine.inOut",
        }
      );

      gsap.to(".nav-reflection", {
        xPercent: 18,
        opacity: 0.38,
        duration: 8.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, header);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const id = decodeURIComponent(location.hash.replace("#", ""));
    const frame = window.requestAnimationFrame(() => scrollToSection(id));

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  function handleNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    const sectionId = getSectionId(href);

    if (!sectionId) {
      return;
    }

    event.preventDefault();

    navigate(href);

    if (location.pathname === "/") {
      window.requestAnimationFrame(() => scrollToSection(sectionId));
    }
  }

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)] py-5">
        <div
          ref={shellRef}
          className="material-surface relative flex items-center justify-between overflow-hidden rounded-full border border-primary/15 px-4 py-3.5 md:px-6"
        >
          <div className="nav-reflection pointer-events-none absolute inset-y-[-40%] left-[18%] z-0 w-[46%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.11),rgba(255,229,196,.045),transparent)] blur-xl" />
          <div className="nav-sheen pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.16),rgba(45,255,20,.08),transparent)] blur-md" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70" />
          <div className="pointer-events-none absolute inset-x-10 top-0 z-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-80" />

          <Link to="/" className="relative z-10 flex items-center gap-3 group">
            <img src={LOGO_PATH} alt={BRAND_NAME} className="h-9 w-9" />

            <span className="font-display text-base tracking-normal transition-colors group-hover:text-primary md:text-lg">
              {BRAND_NAME}
            </span>
            <span className="micro-hud hidden rounded-full px-2.5 py-1 lg:inline-flex">
              SYSTEM READY
            </span>
          </Link>

          <nav className="relative z-10 hidden md:flex items-center gap-8 text-sm text-foreground/70">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button variant="hero" asChild className="relative z-10 hidden sm:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              {CTA_LABEL}
            </a>
          </Button>

          <Button variant="heroGlass" asChild className="relative z-10 sm:hidden px-4 py-2 text-sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
