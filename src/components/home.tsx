import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import ContactForm from "./ContactForm";

const Home = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "dark" : "light");
    // In a real implementation, you would apply the theme to the document
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen bg-background ${theme === "dark" ? "dark" : ""}`}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Portfolio</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="container py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Shivam Gupta</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Full Stack Developer
              </p>
              <p className="mt-4 text-muted-foreground max-w-md">
                I build accessible, responsive, and performant web applications
                with modern technologies.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <a href="#contact">Get in touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View projects</a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-md"></div>
                <div className="relative rounded-full overflow-hidden h-64 w-64 border-4 border-background">
                  <img
                    src="/dd.jpg" // Replace with your image URL
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
            <ProjectsGrid />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
          <SkillsSection />
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">
                        Backend developer intern
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ezymaid • Feb 2025 - Present
                      </div>
                      <p className="mt-2 text-sm">
                        Worked with the architecture team to design the architecture and implement important feature in the application.
                        
                      </p>
                      <p className="mt-2 text-sm">
                        The Tech stack we used there was including Nodejs,MongoDB,ExpressJS.
                        
                      </p>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    
                    <div>
                      <div className="font-medium">
                        Bachelor's in Software Engineering
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Chandigarh University • 2021 - 2025
                      </div>
                      <p className="mt-2 text-sm">
                        Gaining a solid foundation in software development,
                        algorithms, and data structures.
                      </p>
                    </div>
                    <div>
                      <div className="font-medium">
                        Class 12th in Science
                      </div>
                      <div className="text-sm text-muted-foreground">
                        DAV Public School • 2020 - 2021
                      </div>
                      <p className="mt-2 text-sm">
                        
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative work,
                feel free to contact me.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a
                    href="mailto:john.doe@example.com"
                    className="text-primary hover:underline"
                  >
                    shivamgupta0097@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span>Haryana</span>
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/sg0097"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/shivam-guptag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dribbble"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dribbble"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shivam Gupta. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex gap-4 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
