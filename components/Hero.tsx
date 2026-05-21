"use client";
  import { motion } from "framer-motion";
  import { ArrowRight } from "lucide-react";

  export default function Hero() {
    const scrollTo = (id: string) =>
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

    return (
      <section id="home" className="min-h-[100dvh] flex flex-col justify-center pt-28 pb-16 relative bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8">
            <div className="max-w-2xl">
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="text-[clamp(3.2rem,8vw,7.5rem)] font-black leading-[1.0] tracking-tight text-foreground mb-6">
                Design que<br /><span className="text-muted-foreground">comunica.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Web Designer e Desenvolvedor baseado em Santa Catarina. Crio sites, e-commerces e identidades digitais que geram resultado.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
                className="flex flex-wrap items-center gap-4">
                <button onClick={() => scrollTo("#projects")}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 active:scale-95 transition-all">
                  Ver projetos <ArrowRight size={16} />
                </button>
                <button onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted active:scale-95 transition-all">
                  Entrar em contato
                </button>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex flex-col gap-5 min-w-[220px]">
              {[
                { label: "Localização", value: "Santa Catarina, BR" },
                { label: "Empresa", value: "Make+ / Gatte72" },
                { label: "Na área desde", value: "2020" },
                { label: "Formação", value: "Ciências da Computação" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-border pl-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  