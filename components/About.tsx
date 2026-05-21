"use client";
  import { motion } from "framer-motion";

  export default function About() {
    const facts = [
      { label: "Localização", value: "Santa Catarina, Brasil" },
      { label: "Empresa atual", value: "Make+ / Gatte72" },
      { label: "Especialidades", value: "Web Design, Dev Web, UI/UX, Designer Gráfico" },
      { label: "Formação", value: "Ciências da Computação — UNISUL — 6º período" },
      { label: "Idiomas", value: "Português (nativo) · Inglês (básico)" },
      { label: "Na área desde", value: "2020" },
    ];
    return (
      <section id="about" className="py-32 md:py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-12">Sobre mim</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Iniciei na área em 2020, através de um curso técnico de Web Designer. Com o tempo fui me aperfeiçoando — realizei um técnico de desenvolvimento de sistemas e análise de banco de dados, e hoje curso Ciências da Computação na UNISUL, no 6º período. Trabalho na interseção entre design e desenvolvimento: desde identidade visual e materiais gráficos até sites e e-commerces completos. Atualmente faço parte da equipe da Make+ / Gatte72, onde atuo como Web Designer e Social Mídia. Amo tecnologia e estou sempre buscando me aperfeiçoar.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-border pt-4">
                  <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{fact.label}</h3>
                  <p className="text-foreground font-medium text-sm md:text-base">{fact.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  