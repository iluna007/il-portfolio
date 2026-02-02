import { Briefcase, Code, User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <motion.div
            style={{ y: leftY }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Imagen (reinsertada) */}
            <motion.img
              src="/iker-luna.jpeg"
              alt="Iker Luna"
              style={{ y: imageY }}
              className="w-full max-w-sm mx-auto rounded-lg object-cover"
            />


            <p className="text-muted-foreground">
              I was trained as an architect, where my interest in code first
              emerged through computational design at{" "}
              <a
                href="https://iaac.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                IAAC
              </a>
              , as a way of thinking through form, systems, and relationships
              beyond static representation. This interest deepened through
              spatial analysis and research practices at{" "}
              <a
                href="https://research-architecture.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Centre for Research Architecture
              </a>{" "}
              and through collaborative work with{" "}
              <a
                href="https://forensic-architecture.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Forensic Architecture
              </a>
              , where code, data, and interfaces became tools for investigation
              and evidence.
            </p>

            <p className="text-muted-foreground">
              Over the past two years, I have been working as a full-stack
              developer, building research-driven web platforms that combine
              front-end development, data visualization, and spatial thinking to
              turn complex information into clear, usable digital experiences.
              In parallel, I work as a visiting lecturer at the{" "}
              <a
                href="https://arquis.ucr.ac.cr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                School of Architecture, University of Costa Rica
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cosmic-button"
              >
                Get In Touch
              </button>

              <a
                href="/IL_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            style={{ y: rightY }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Project Management
                  </h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
