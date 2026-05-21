"use client";
  import { motion } from "framer-motion";
  import { ArrowUpRight } from "lucide-react";

  export default function Contact() {
    return (
      <section id="contact" className="py-32 md:py-40 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-12">Contato</h2>
            <div className="flex flex-col gap-6">
              <a href="mailto:henriqueantonydev@gmail.com" className="inline-flex items-center gap-4 text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors w-fit border-b border-transparent hover:border-border pb-1">
                henriqueantonydev@gmail.com <ArrowUpRight size={24} />
              </a>
              <a href="https://www.linkedin.com/in/henriqueantony" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors w-fit border-b border-transparent hover:border-border pb-1">
                linkedin.com/in/henriqueantony <ArrowUpRight size={24} />
              </a>
              <a href="https://github.com/HenriqueAntony07" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors w-fit border-b border-transparent hover:border-border pb-1">
                github.com/HenriqueAntony07 <ArrowUpRight size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  