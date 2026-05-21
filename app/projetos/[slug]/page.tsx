"use client";
  import { useParams } from "next/navigation";
  import { projectsData } from "@/data/projects";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import { motion } from "framer-motion";
  import { ArrowUpRight, ArrowLeft } from "lucide-react";
  import Link from "next/link";

  export default function ProjectDetail() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
      return (
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-black text-foreground mb-4">404</h1>
              <p className="text-muted-foreground mb-8">Projeto não encontrado.</p>
              <Link href="/" className="text-sm font-medium text-foreground underline underline-offset-4">Voltar ao início</Link>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1 pt-40 pb-32">
          <article className="container mx-auto px-6 md:px-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mb-24">
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-6">[{project.tag}]</div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-8 leading-[1.0]">{project.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">{project.tagline}</p>
              <div className="flex flex-wrap items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground border-t border-border pt-8">
                <div><span className="text-foreground mr-2">Cliente</span>{project.client}</div>
                <div><span className="text-foreground mr-2">Ano</span>{project.year}</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mb-24 rounded-xl overflow-hidden border border-border">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-24">
              {[
                { title: "O Desafio", content: project.challenge },
                { title: "A Solução", content: project.solution },
                { title: "Resultado", content: project.results },
              ].map(({ title, content }) => (
                <motion.section key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <h2 className="text-3xl font-bold mb-8 text-foreground">{title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{content}</p>
                </motion.section>
              ))}
              <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Tecnologias</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-foreground border border-border rounded-lg px-3 py-1 text-sm">{t}</span>
                  ))}
                </div>
              </motion.section>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center gap-8 pt-16 border-t border-border">
                <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors border-b border-foreground/30 hover:border-transparent pb-1">
                  Ver Site ao Vivo <ArrowUpRight size={16} />
                </a>
                <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors pb-1">
                  <ArrowLeft size={16} /> Voltar aos Projetos
                </Link>
              </motion.div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }
  