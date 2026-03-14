import { ArrowRight, ExternalLink, Github, LayoutGrid, List } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Sounding-ice",
    description: "A research-driven web platform for browsing and organizing field recordings through thematic categories, designed to support public access, education, and environmental research.",
    image: "/soundingice1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite", "Leaflet", "Netlify","Mapbox"],
    demoUrl: "https://sounding-ice.ca/",
    githubUrl: "https://github.com/iluna007/soundingice",
    date: "2025",
    category: "Web Platform",
    status: "Completed",
  },
  {
    id: 2,
    title: "Berta Cáceres — Spatial-Temporal Platform",
    description:
      "An interactive cartographic platform that visualizes and cross-references thousands of events over time and territory, enabling pattern analysis within a human-rights investigation.",
    image: "/berta1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite", "Leaflet", "Netlify","Mapbox"],
    demoUrl: "https://bertacaceres.re-presentare.org/",
    githubUrl: "https://github.com/iluna007/berta",
    date: "2026",
    category: "Research / Mapping",
    status: "Completed",
  },
  {
    id: 3,
    title: "Finnja Willner — Artist Portfolio",
    description:
      "A lightweight, responsive portfolio website translating an audiovisual artistic practice into clear information architecture, page rhythm, and a focused user experience.",
    image: "/finnja1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite","Netlify"],
    demoUrl: "https://finnjawillner.de/",
    githubUrl: "https://github.com/iluna007/Portfolio_06_Finnjaweb",
    date: "2025",
    category: "Portfolio",
    status: "Completed",
  },
  {
    id: 4,
    title: "Practice Project 1",
    description:
      "A shopping cart web app built using React and Vite, showcasing product listing and cart management with a dynamic user interface. This project is part of a series of smaller projects aimed at demonstrating my skills and practices as a web developer.",
    image: "/pp1.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite","Netlify"],
    demoUrl: "https://whimsical-douhua-15aec6.netlify.app/",
    githubUrl: "https://github.com/iluna007/Portfolio_01_Shoping_cart",
    date: "2024",
    category: "Web App",
    status: "Completed",
  },
  {
    id: 5,
    title: "Practice Project 2",
    description:
      "A dynamic 3D galaxy generator built with Three.js, allowing real-time customization of galaxy parameters such as size, branches, randomness, and colors through an interactive GUI. The project includes optional spin animation and smooth camera controls via OrbitControls. This repository is a learning project from the Three.js Journey.",
    image: "/pp2.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite","Three.js","Netlify"],
    demoUrl: "https://galaxytest00.netlify.app/",
    githubUrl: "https://github.com/iluna007/Portfolio_05_Threejs_journey_03_Galaxy",
    date: "2024",
    category: "Web / 3D",
    status: "Completed",
  },
  {
    id: 6,
    title: "Practice Project 3",
    description:
      "This project is a Tip Calculator web application built with React and Vite. It enables users to calculate tips and consumption totals, providing an intuitive and responsive user experience. The project demonstrates core React concepts like state management, form validation, and API handling.",
    image: "/pp3.jpg",
    tags: ["HTML", "Tailwind CSS", "JavaScript","React","Vite","TypeScript","Netlify"],
    demoUrl: "https://ornate-profiterole-7336df.netlify.app/",
    githubUrl: "https://github.com/iluna007/Portfolio_02_Tips",
    date: "2024",
    category: "Web App",
    status: "Completed",
  },
  {
    id: 7,
    title: "Practice Project 4",
    description:
      "An interactive 3D scroll animation built with Three.js, featuring real-time color customization, scroll-triggered object rotation, and parallax camera movement. Includes a GUI for material color changes and uses GSAP for smooth animations.",
    image: "/pp4.jpg",
    tags: ["HTML", "SCSS", "JavaScript","React","Vite","Three.js","Netlify"],
    demoUrl: "https://portfoliotest10.netlify.app/",
    githubUrl: "https://github.com/iluna007/Portfolio_05_Threejs_journey_04_LandPage_Portfolio",
    date: "2024",
    category: "Web / 3D",
    status: "Completed",
  },
  {
    id: 8,
    title: "Practice Project 5",
    description:
      "This project set up with React, TypeScript, and Vite, designed for managing patient tracking in a veterinary context. It provides a basic interface to add, view, and update patient records, utilizing modern development practices, including ESLint for code quality and Vite for fast development refreshes.",
    image: "/pp5.jpg",
    tags: ["HTML", "Tailwind CSS", "JavaScript","React","Vite","TypeScript","Netlify"],
    demoUrl: "https://patientstest.netlify.app/",
    githubUrl: "https://github.com/iluna007/Portfolio_09_Patients",
    date: "2024",
    category: "Web App",
    status: "Completed",
  },
  {
    id: 9,
    title: "Investigación Urgente",
    description:
      "Under Construction",
    image: "/investigacionurgent.jpg",
    tags: ["HTML", "Tailwind CSS", "JavaScript","React","Vite","Bootstrap","Netlify"],
    demoUrl: "https://investigacionurgente.netlify.app/",
    githubUrl: "https://github.com/iluna007/I-U",
    date: "2026",
    category: "Research",
    status: "Under Construction",
  },
  {
    id: 10,
    title: "Memorias vivas",
    description:
      "Under Construction",
    image: "/memoriasvivas.jpg",
    tags: ["HTML", "Tailwind CSS", "JavaScript","React","Vite","Bootstrap","Netlify"],
    demoUrl: "https://memoriasvivastest.netlify.app/",
    githubUrl: "https://github.com/iluna007/memoriasvivas",
    date: "2026",
    category: "Research",
    status: "Under Construction",
  },
  {
    id: 11,
    title: "Mnemonic model",
    description:
      "Under Construction",
    image: "/mnemonic.jpg",
    tags: ["HTML", "Tailwind CSS", "JavaScript","React","Vite","Bootstrap","Netlify"],
    demoUrl: "https://mnemonicmodel.netlify.app/",
    githubUrl: "https://github.com/iluna007/mnemonic-model",
    date: "2025",
    category: "Research",
    status: "Under Construction",
  },
  {
    id: 12,
    title: "Flo Research Archive",
    description:
      "Under Construction",
    image: "/floarchive.jpg",
    tags: ["HTML", "Tailwind CSS", "JavaScript","React","Vite","Bootstrap","Netlify"],
    demoUrl: "https://floarchive.netlify.app/",
    githubUrl: "https://github.com/iluna007/floarchive",
    date: "2026",
    category: "Research / Archive",
    status: "Under Construction",
  }
];

export const ProjectsSection = () => {
  const [viewMode, setViewMode] = useState("cards");

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-foreground"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Toggle: Cards / List */}
        <div className="flex justify-center gap-1 mb-12">
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              viewMode === "cards"
                ? "bg-foreground text-background"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            aria-pressed={viewMode === "cards"}
          >
            <LayoutGrid size={18} />
            Cards
          </button>
          <button
            type="button"
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              viewMode === "table"
                ? "bg-foreground text-background"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
            aria-pressed={viewMode === "table"}
          >
            <List size={18} />
            List
          </button>
        </div>

        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
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
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-foreground transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-foreground transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-t border-border">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group border-b border-border py-5 px-2 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div className="flex flex-wrap items-baseline gap-3 min-w-0">
                    <span className="text-muted-foreground text-sm shrink-0">
                      {project.date}
                    </span>
                    <span className="font-medium text-foreground group-hover:text-foreground/90 transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground shrink-0">
                    <span>{project.category}</span>
                    <span
                      className={
                        project.status === "Under Construction"
                          ? "text-amber-600 dark:text-amber-400"
                          : ""
                      }
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/iluna007"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
