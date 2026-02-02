import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: imagen + texto */}
          <div className="space-y-8">
            <img
              src="/il-portfolio/iker-luna.jpeg"
              alt="Iker Luna"
              className="w-full max-w-sm mx-auto rounded-lg object-cover"
            />

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Passionate Web Developer & Architect
              </h3>

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
                front-end development, data visualization, and spatial thinking
                to turn complex information into clear, usable digital
                experiences. In parallel, I work as a visiting lecturer at the{" "}
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
                  href="/il-portfolio/IL_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha: cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
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
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
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
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
