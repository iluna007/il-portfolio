import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sounding-ice",
    description: "A research-driven web platform for browsing and organizing field recordings through thematic categories, designed to support public access, education, and environmental research.",
    image: "public/soundingice1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite", "Leaflet", "Netlify","Mapbox"],
    demoUrl: "https://sounding-ice.ca/",
    githubUrl: "https://github.com/iluna007/soundingice",
  },
  {
    id: 2,
    title: "Berta Cáceres — Spatial-Temporal Platform",
    description:
      "An interactive cartographic platform that visualizes and cross-references thousands of events over time and territory, enabling pattern analysis within a human-rights investigation.",
    image: "public/berta1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite", "Leaflet", "Netlify","Mapbox"],
    demoUrl: "https://bertacaceres.re-presentare.org/",
    githubUrl: "https://github.com/iluna007/berta",
  },
  {
    id: 3,
    title: "Finnja Willner — Artist Portfolio",
    description:
      "A lightweight, responsive portfolio website translating an audiovisual artistic practice into clear information architecture, page rhythm, and a focused user experience.",
    image: "public/finnja1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite","Netlify"],
    demoUrl: "https://finnjawillner.de/",
    githubUrl: "https://github.com/iluna007/Portfolio_06_Finnjaweb",
  },
  {
    id: 4,
    title: "Practice Project 1",
    description:
      "A shopping cart web app built using React and Vite, showcasing product listing and cart management with a dynamic user interface. This project is part of a series of smaller projects aimed at demonstrating my skills and practices as a web developer.",
    image: "public/pp1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite","Netlify"],
    demoUrl: "https://iluna007.github.io/Portfolio_01_Shoping_cart/",
    githubUrl: "https://github.com/iluna007/Portfolio_01_Shoping_cart",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/iluna007"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
