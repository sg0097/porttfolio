import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import { Image } from "lucide-react";

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
    title: "AI based Fraud detection system",
    description:
      "A real-time AI-based fraud detection system that processes incoming data streams to identify fraudulent activities. It utilizes machine learning algorithms to analyze patterns and anomalies in the data, providing instant alerts and reports. The system is designed for scalability and can handle large volumes of transactions efficiently.",
    category: "web",
    image:
      "/ai.png",
    technologies: ["Python", "flask","Kafka", "Docker"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/sg0097/Fraud_detection_System",
    details:
      "A real-time AI-based fraud detection system that processes incoming data streams to identify fraudulent activities. It utilizes machine learning algorithms to analyze patterns and anomalies in the data, providing instant alerts and reports. The system is designed for scalability and can handle large volumes of transactions efficiently.",
  },
  {
    id: "2",
    title: "Learning Management System",
    description:
      "This Learning Management System (LMS) allows students to access a variety of courses, track their progress, and interact with instructors. Teachers can create and manage courses, upload materials, and engage with students through discussions and quizzes. The platform features user authentication, course recommendations, and a responsive design for both desktop and mobile users.",
    category: "web",
    image:
      "/lms.png",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    demoUrl: "https://example.com/demo2",
    repoUrl: "https://github.com/example/project2",
    details:
      "This Learning Management System (LMS) allows students to access a variety of courses, track their progress, and interact with instructors. Teachers can create and manage courses, upload materials, and engage with students through discussions and quizzes. The platform features user authentication, course recommendations, and a responsive design for both desktop and mobile users.",
  },
  {
    id: "3",
    title: "Real Time Chess App",
    description:
      "A real time chess application with multiplayer support and AI opponents.",
    category: "web",
    image:
      "/ch.png",
    technologies: ["Nodejs", "React", "Express", "PostgreSQL"],
    demoUrl: "https://example.com/demo3",
    repoUrl: "https://github.com/sg0097/my-chess-app",
    details:
      "This real-time chess application features multiplayer support with real-time updates, AI opponents with adjustable difficulty levels, user accounts with game history, and a responsive design for mobile and desktop play.",
  },
  {
    id: "4",
    title: "Job Portal Web App",
    description: "A web application for job seekers and employers to connect.",
    category: "web",
    image:
      "/job.png",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    demoUrl: "https://example.com/demo4",
    repoUrl: "https://github.com/example/project4",
    details:
      "This job portal web app allows job seekers to create profiles, search and apply for jobs, and receive notifications for new job postings. Employers can post job listings, review applications, and manage their listings. The app features real-time chat between employers and candidates, a user-friendly interface, and responsive design for mobile access.",
  },
  {
    id: "5",
    title: "Ecommerce Mobile App",
    description: "Mobile application for online shopping with user accounts.",
    category: "mobile",
    image:
      "/ecom.png",
    technologies: ["React Native", "Fakestore API"],
    demoUrl: "https://example.com/demo5",
    repoUrl: "https://github.com/sg0097/ecomapp",
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
