import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      date: "01/2022 – Present",
      title: "Visiting Lecturer — School of Architecture",
      place: "Universidad de Costa Rica (UCR), San José",
      description:
        "Teaching architecture studios and seminars focused on urban analysis, spatial representation, and design research. Guiding students through project-based work integrating site analysis, cartography, and critical interpretation of social and environmental conditions in Costa Rican cities.",
    },
    {
      date: "11/2025 – Present",
      title: "Researcher",
      place: "re/presentare, San José",
      description:
        "Design and implementation of public-facing research platforms translating large archival and geospatial datasets into interactive web interfaces. Development of front-end components, UI filters, and data-visualization workflows for spatial investigations and multi-temporal analysis.",
    },
    {
      date: "02/2025 – 05/2025",
      title: "Research Aide",
      place: "Forensic Architecture, London",
      description:
        "Development and refinement of front-end interfaces for investigative platforms, with emphasis on usability, filtering systems, and clarity of complex visual information in production research environments.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-20 text-center"
        >
          Professional <span className="text-primary">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary/30 hidden md:block" />

          <div className="space-y-20">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Columna izquierda */}
                  <div
                    className={`${
                      isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    {isLeft && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {exp.date}
                        </p>
                        <h3 className="text-lg font-semibold">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exp.place}
                        </p>
                        <p className="text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Punto central */}
                  <span className="absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block" />

                  {/* Columna derecha */}
                  <div
                    className={`${
                      !isLeft
                        ? "md:pl-12"
                        : "md:col-start-1 md:row-start-1"
                    }`}
                  >
                    {!isLeft && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {exp.date}
                        </p>
                        <h3 className="text-lg font-semibold">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {exp.place}
                        </p>
                        <p className="text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
