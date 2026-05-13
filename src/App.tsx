import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { AmbientExperience } from "@/components/AmbientExperience";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { Pourquoi } from "@/components/Pourquoi";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { LabMedia } from "@/components/LabMedia";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaFooter } from "@/components/CtaFooter";
import { PARTNERS } from "@/lib/constants";
import { ProductsPage } from "@/components/ProductsPage";
import { ScrollToTop } from "@/components/ScrollToTop";

function Partners() {
  return (
    <section className="relative overflow-hidden border-y border-primary/10 py-10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--bg),rgba(255,255,255,.018)_24%,rgba(45,255,20,.035)_52%,rgba(255,229,196,.018)_78%,var(--bg))]" />
      <div className="absolute inset-0 calibration-grid opacity-[0.12]" />
      <div className="scene-rail left-[var(--gutter)] top-0 h-px w-[24vw]" />
      <div className="scene-rail bottom-0 right-[var(--gutter)] h-px w-[24vw]" />
      <div className="absolute left-[var(--gutter)] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent md:block" />
      <div className="absolute right-[var(--gutter)] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/12 to-transparent md:block" />
      <div className="relative mx-auto flex max-w-[var(--max)] flex-wrap items-center justify-center gap-x-8 gap-y-4 px-[var(--gutter)] text-center text-xs uppercase tracking-[0.22em] text-foreground/42 md:justify-between">
        <span className="micro-hud hidden px-3 py-2 text-primary/62 lg:inline-flex">
          LOCAL CATEGORIES
        </span>
        {PARTNERS.map((brand) => (
          <span key={brand} className="whitespace-nowrap">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main
      id="top"
      className="premium-site min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      <AmbientExperience />
      <Navbar />
      <Hero />
      <Partners />
      <ServicesBento />
      <Pourquoi />
      <Process />
      <LabMedia />
      <Products />
      <Stats />
      <Testimonials />
      <Faq />
      <CtaFooter />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}
