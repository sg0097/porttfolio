import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl: string;
    technologies: string[];
    liveUrl?: string;
    repoUrl?: string;
    gallery?: string[];
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS",
    longDescription:
      "This portfolio website showcases my projects and skills. It features a responsive design, dark/light mode, and smooth animations. Built with React, Tailwind CSS, and Framer Motion for animations.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/portfolio",
    gallery: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    ],
  },
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-4">
          {/* Main project image */}
          <div className="rounded-md overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Long description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About this project</h3>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-md overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          {project.repoUrl && (
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button className="w-full sm:w-auto" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
