import React, { useState, useMemo, useCallback } from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  githubKey: string;
  liveKey: string;
}

const PROJECTS_DATA: readonly Project[] = [
  {
    title: "Madura Tailors",
    category: "Java - FX",
    description:
      "A comprehensive management system for a tailor shop including customer, order, and inventory management.",
    image: "/assets/maduraTailors.png",
    tech: ["Java", "JavaFX", "MySQL"],
    githubKey: "https://github.com/kvn2004/Madura-Tailors-Coat-Center.git",
    liveKey: "#",
  },
  {
    title: "Care_Her – Smart Period Tracking & AI Assistant",
    category: "MERN",
    description:
      "A smart period tracking application with AI-powered insights and personalized recommendations.",
    image: "/assets/careher.png",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    githubKey: "https://github.com/kvn2004/MERN_full_project.git",
    liveKey: "https://care-her.vercel.app/login",
  },
  {
    title: "ClassSphere – Tuition Class Management System",
    category: "Spring Boot",
    description:
      "A comprehensive management system for tuition classes, handling student enrollments, batch scheduling, fee tracking, and online payments.",
    image: "/assets/classphere.png",
    tech: ["Spring Boot", "MySQL", "HTML", "CSS", "JS"],
    githubKey: "https://github.com/kvn2004/CLASS-SPHERE.git",
    liveKey: "#",
  },
  {
    title: "Weather App",
    category: "Flutter",
    description:
      "A comprehensive management system for tuition classes, handling student enrollments, batch scheduling, fee tracking, and online payments.",
    image: "/assets/weatherapp.png",
    tech: ["Flutter", "Dart", "API"],
    githubKey: "https://github.com/kvn2004/WeatherApp.git",
    liveKey: "#",
  },
] as const;

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Memoize categories to prevent recalculation
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))],
    [],
  );

  // Memoize filtered projects
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  // Memoized filter handler
  const handleFilterChange = useCallback((category: string) => {
    setActiveFilter(category);
  }, []);

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Here are some of the projects I've worked on.
        </p>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Project category filters"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface text-muted hover:text-white hover:bg-surface/80"
              }`}
              aria-pressed={activeFilter === cat}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col group">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/600x400/1e293b/white?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-sm font-mono mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div
                    className="flex flex-wrap gap-2 mb-6"
                    aria-label="Technologies used"
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button onClick={() => window.open(project.githubKey,"_blank")}
                      variant="outline"
                      size="sm"
                      className="w-full"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <Github className="w-4 h-4 mr-2" aria-hidden="true" />{" "}
                      Code
                    </Button>
                    <Button onClick={() => window.open(project.liveKey, "_blank")}
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                      />{" "}
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Projects;
