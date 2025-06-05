import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsSection = ({
  skills = [
    { name: "React", proficiency: 90, category: "Frontend" },
    { name: "TypeScript", proficiency: 85, category: "Languages" },
    { name: "Node.js", proficiency: 80, category: "Backend" },
    { name: "CSS/SCSS", proficiency: 85, category: "Frontend" },
    { name: "GraphQL", proficiency: 75, category: "Backend" },
    { name: "Python", proficiency: 70, category: "Languages" },
    { name: "Docker", proficiency: 65, category: "DevOps" },
    { name: "AWS", proficiency: 60, category: "DevOps" },
    { name: "MongoDB", proficiency: 75, category: "Backend" },
    { name: "Redux", proficiency: 80, category: "Frontend" },
  ],
  title = "My Skills",
  description = "Here are my technical skills and proficiency levels across different categories.",
}: SkillsSectionProps) => {
  // Get unique categories from skills
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-lg">{skill.name}</h3>
                          <Badge variant="outline">{skill.proficiency}%</Badge>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
