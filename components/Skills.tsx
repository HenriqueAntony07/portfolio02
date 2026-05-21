"use client";
  import { motion } from "framer-motion";

  export default function Skills() {
    const skills = ["Web Design","WordPress","UI/UX Design","Designer Gráfico","Social Mídia","React","Next.js","JavaScript","TypeScript","HTML","CSS","Tailwind CSS","Node.js","Git","Figma","Python"];
    return (
      <section id="skills" className="py-32 md:py-40 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-16">Habilidades</h2>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-loose">
                {skills.map((skill, index) => (
                  <span key={index}>
                    <span className="text-foreground">{skill}</span>
                    {index < skills.length - 1 && <span className="mx-3 text-muted-foreground/40">·</span>}
                  </span>
                ))}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  