"use client";
  import { motion } from "framer-motion";
  import { ArrowUpRight } from "lucide-react";
  import Link from "next/link";
  import { projectsData } from "@/data/projects";

  export default function Projects() {
    return (
      <section id="projects" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-none">Projetos</h2>
            <p className="text-muted-foreground text-sm max-w-xs">Seleção de trabalhos em e-commerce, web design e identidade visual.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {projectsData.map((project, index) => (
              <motion.div key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}>
                <Link href={`/projetos/${project.slug}`}>
                  <div className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 hover:border-muted-foreground/30 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40">
                    <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <div className="flex items-center justify-center h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm shadow-sm">
                          <ArrowUpRight size={16} className="text-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <div>
                        <h3 className="text-base font-bold text-foreground leading-tight mb-1">{project.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground bg-muted rounded-md px-2 py-0.5">{project.tag}</span>
                          <span className="text-xs text-muted-foreground">{project.year}</span>
                        </div>
                      </div>
                      <ArrowUpRight size={18} className="text-muted-foreground shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:text-foreground" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  