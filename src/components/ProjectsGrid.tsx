import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  details: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({ projects = defaultProjects }: ProjectsGridProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
        <p className="text-muted-foreground text-center mb-8">
          Explore my recent work and projects
        </p>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <Button
                        onClick={() => handleProjectClick(project)}
                        className="w-full"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart, checkout, and payment integration.",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project",
    details:
      "This e-commerce platform features user authentication, product catalog with filtering and search, shopping cart functionality, secure checkout process with Stripe integration, order history, and admin dashboard for product management.",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks, projects, and team collaboration.",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://example.com/demo2",
    repoUrl: "https://github.com/example/project2",
    details:
      "This task management application allows users to create and organize tasks, set priorities and deadlines, collaborate with team members, track progress with visual charts, and receive notifications for upcoming deadlines.",
  },
  {
    id: "3",
    title: "Financial Dashboard",
    description:
      "Interactive dashboard for visualizing and analyzing financial data.",
    category: "data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["D3.js", "React", "Express", "PostgreSQL"],
    demoUrl: "https://example.com/demo3",
    repoUrl: "https://github.com/example/project3",
    details:
      "This financial dashboard provides real-time data visualization with interactive charts and graphs, customizable widgets for different financial metrics, historical data analysis, and export functionality for reports.",
  },
  {
    id: "4",
    title: "Social Media Platform",
    description: "A community-focused social platform with real-time features.",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    demoUrl: "https://example.com/demo4",
    repoUrl: "https://github.com/example/project4",
    details:
      "This social media platform includes user profiles, news feed with infinite scrolling, real-time messaging and notifications, content sharing capabilities, and community groups and forums.",
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts and health metrics.",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    technologies: ["Flutter", "Firebase", "HealthKit API"],
    demoUrl: "https://example.com/demo5",
    repoUrl: "https://github.com/example/project5",
    details:
      "This fitness tracking app allows users to log workouts and track progress, monitor health metrics like heart rate and steps, create custom workout plans, set goals and receive achievements, and view progress statistics and trends.",
  },
  {
    id: "6",
    title: "Weather Visualization",
    description: "Interactive weather data visualization with forecasting.",
    category: "data",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["JavaScript", "D3.js", "Weather API", "Canvas"],
    demoUrl: "https://example.com/demo6",
    repoUrl: "https://github.com/example/project6",
    details:
      "This weather visualization tool features interactive maps with real-time weather data, 7-day forecasting with detailed metrics, historical weather data comparison, location-based weather alerts, and responsive design for all devices.",
  },
];

export default ProjectsGrid;
