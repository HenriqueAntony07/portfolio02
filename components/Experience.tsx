"use client";
  import { motion } from "framer-motion";

  const experiences = [
    { company: "Make+ / Gatte72", role: "Web Designer | Social Mídia", period: "2025 — Atualmente", description: "Criação e atualização de sites do zero para as empresas do grupo, ajustes de imagens e criação de materiais para redes sociais — posts, carroseis e stories." },
    { company: "Print Evolution", role: "Designer Gráfico", period: "2022 — 2025", description: "Criação de materiais gráficos para serviços impressos: cartões de visita, banners, folders e afins." },
    { company: "Pessoal / Freelancer", role: "Web Designer", period: "2020 — Atualmente", description: "Criação de site pessoal, logotipos, landing pages e sites institucionais como projetos autorais e trabalhos extras." },
  ];

  export default function Experience() {
    return (
      <section id="experience" className="py-32 md:py-40 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">Experiência</h2>
          </motion.div>
          <div className="max-w-3xl space-y-16">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="md:w-48 shrink-0"><span className="text-sm text-muted-foreground uppercase tracking-widest">{exp.period}</span></div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">{exp.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  