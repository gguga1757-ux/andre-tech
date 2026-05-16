import { type MouseEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
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
  const section = document.getElementById(id);
  const target = section?.querySelector<HTMLElement>("h1, h2") ?? section;

  if (!target) {
    return;
  }

  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const offset = window.matchMedia("(max-width: 1024px)").matches ? 18 : 28;
  const top = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(top - headerHeight - offset, 0),
    left: 0,
    behavior: "smooth",
  });
}

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const header = headerRef.current;
    const shell = shellRef.current;

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches;

    if (!header || !shell || shouldReduceMotion || isMobileOrTablet) {
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
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

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

  function handleMenuNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    setMenuOpen(false);
    handleNavClick(event, href);
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
      <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)] py-3 min-[1025px]:py-5">
        <div
          ref={shellRef}
          className="material-surface relative flex items-center justify-between overflow-hidden rounded-full border border-primary/15 px-3 py-3 min-[1025px]:px-6 min-[1025px]:py-3.5"
        >
          <div className="nav-reflection pointer-events-none absolute inset-y-[-40%] left-[18%] z-0 w-[46%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.11),rgba(255,229,196,.045),transparent)] blur-xl" />
          <div className="nav-sheen pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.16),rgba(45,255,20,.08),transparent)] blur-md" />
          <div className="pointer-events-none absolute inset-x-8 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70" />
          <div className="pointer-events-none absolute inset-x-10 top-0 z-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-80" />

          <Link
            to="/"
            className="group relative z-10 flex min-h-11 min-w-0 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img src={LOGO_PATH} alt={BRAND_NAME} className="h-9 w-9" />

            <span className="truncate font-display text-base tracking-normal transition-colors group-hover:text-primary sm:text-lg">
              {BRAND_NAME}
            </span>
            <span className="micro-hud hidden rounded-full px-2.5 py-1 min-[1025px]:inline-flex">
              SYSTEM READY
            </span>
          </Link>

          <nav className="relative z-10 hidden items-center gap-8 text-sm text-foreground/70 min-[1025px]:flex">
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

          <div className="relative z-10 flex shrink-0 items-center gap-2">
            <Button
              variant="heroGlass"
              asChild
              className="min-h-11 px-3 text-sm min-[390px]:px-4 min-[1025px]:hidden"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CTA_LABEL}
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden min-[390px]:inline">WhatsApp</span>
              </a>
            </Button>

            <Button
              variant="hero"
              asChild
              className="hidden min-h-11 min-[1025px]:inline-flex"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {CTA_LABEL}
              </a>
            </Button>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/18 bg-white/[0.035] text-foreground/88 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_12px_34px_rgba(0,0,0,.26)] transition-colors hover:border-primary/35 hover:text-primary min-[1025px]:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-[var(--gutter)] right-[var(--gutter)] top-[92px] z-40 overflow-hidden rounded-2xl border border-primary/16 bg-[#061009]/88 p-3 shadow-[0_26px_80px_rgba(0,0,0,.46),inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-md min-[1025px]:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(45,255,20,.13),transparent_42%),linear-gradient(135deg,rgba(255,255,255,.045),transparent_46%,rgba(45,255,20,.035))]" />
            <nav className="relative z-10 grid gap-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.24,
                    delay: index * 0.035,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={item.href}
                    onClick={(event) => handleMenuNavClick(event, item.href)}
                    className="group flex min-h-14 items-center justify-between rounded-xl border border-transparent px-4 text-base text-foreground/82 transition-colors hover:border-primary/18 hover:bg-white/[0.04] hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="h-px w-8 bg-primary/24 transition-all group-hover:w-12 group-hover:bg-primary/50" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
