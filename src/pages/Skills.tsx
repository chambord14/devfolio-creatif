import { Code2, Database, Globe, Server, Layers, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    id: 1,
    icon: Globe,
    title: "Langages & Technologies",
    description: "Langages de programmation et technologies pour le développement web et embarqué",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Laravel", level: 95 },
      { name: "Arduino", level: 80 },
    ],
  },
  {
    id: 2,
    icon: Server,
    title: "Frameworks & Outils",
    description: "Environnements de développement, outils de conception et frameworks utilisés au quotidien",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Proteus / Eagle", level: 80 },
      { name: "Sprint Layout", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "VS Code / Arduino IDE", level: 90 },
      { name: "Adobe XD", level: 80 },
    ],
  },
  {
    id: 3,
    icon: Code2,
    title: "Développement Web",
    description: "Compétences en conception et réalisation d’applications web modernes et performantes",
    skills: [
      { name: "Full Stack Laravel", level: 95 },
      { name: "Front-end", level: 90 },
      { name: "Back-end", level: 90 },
      { name: "UI/UX", level: 85 },
      { name: "Hébergement", level: 80 },
    ],
  },
  {
   id: 4,
    icon: Wrench,
    title: "Systèmes embarqués & électronique",
    description: "Conception de systèmes électroniques et programmation embarquée avec Arduino",
    skills: [
      { name: "Arduino", level: 85 },
      { name: "Conception de circuits", level: 80 },
      { name: "Maquettes électroniques", level: 75 },
    ],
  },
  {
     id: 5,
    icon: Layers,
    title: "Maintenance industrielle",
    description: "Compétences en diagnostic, supervision IHM et automatisme industriel",
    skills: [
      { name: "Diagnostic matériel", level: 85 },
      { name: "Supervision IHM", level: 80 },
      { name: "Ladder / Automates", level: 78 },
    ],
  },
  {
   id: 6,
    icon: Database,
    title: "Systèmes & Bureautique",
    description: "Systèmes d’exploitation, outils bureautiques et notions en réseaux",
    skills: [
      { name: "Windows / Linux / MacOS", level: 90 },
      { name: "XAMPP", level: 85 },
      { name: "Notions en réseaux", level: 75 },
      { name: "Word / Excel / PowerPoint", level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-gradient">Mes Compétences</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Un ensemble de technologies et d'outils pour créer des solutions complètes et performantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.id} className="card-hover bg-gradient-card border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Certifications Section */}
            {/* <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">Certifications & Formations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Laravel Certification</CardTitle>
                    <CardDescription>Framework PHP Expert</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">2023</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Automatisme Industriel</CardTitle>
                    <CardDescription>Diplôme d'ingénieur</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">2020</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle>Web Development</CardTitle>
                    <CardDescription>Full Stack Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">2022</p>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
