import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/BlurText";
import { Navbar } from "@/components/Navbar";
import { AmbientExperience } from "@/components/AmbientExperience";
import { CtaFooter } from "@/components/CtaFooter";
import { PRODUCTS, CATEGORIES, Product } from "@/lib/products";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants";
import { Link } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  const whatsappMessage = `Olá, vim pelo site da André Tech e tenho interesse no produto: ${product.name}. Ele ainda está disponível?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border border-primary/10 bg-card/50 backdrop-blur-sm"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 text-sm uppercase tracking-wider text-primary/70">
          {product.category}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mb-4 text-sm text-foreground/70">
          {product.description}
        </p>
        <div className="mb-4 flex items-center justify-between">
          {product.price && (
            <span className="text-lg font-medium text-primary">
              R$ {product.price}
            </span>
          )}
          <span
            className={`text-sm ${
              product.status === "disponível"
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {product.status}
          </span>
        </div>
        <Button asChild className="w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            {product.status === "disponível" ? "Comprar pelo WhatsApp" : "Encomendar"}
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <main className="premium-site min-h-screen overflow-x-hidden bg-background text-foreground">
      <AmbientExperience />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,255,20,.05),transparent_50%)]" />
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="relative mx-auto max-w-[var(--max)] px-[var(--gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <BlurText
              text="Produtos disponíveis na André Tech."
              className="font-display text-4xl leading-[0.96] tracking-normal sm:text-5xl lg:text-6xl"
            />
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-foreground/64">
              Aparelhos, acessórios, áudio e tecnologia selecionados para quem busca praticidade, confiança e suporte próximo.
            </p>
            <Button variant="heroGlass" className="mt-8" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative py-12">
        <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)]">
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)]">
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[var(--max)] px-[var(--gutter)] text-center">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao início
            </Link>
          </Button>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}