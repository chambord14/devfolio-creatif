import { Code2, Database, Globe, Server, Layers, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    id: 1,
    icon: Globe,
    title: "Frontend",
    description: "Technologies pour créer des interfaces utilisateur modernes et réactives",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "React / Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: 2,
    icon: Server,
    title: "Backend",
    description: "Développement côté serveur et gestion de la logique métier",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "API REST", level: 90 },
    ],
  },
  {
    id: 3,
    icon: Database,
    title: "Base de données",
    description: "Conception et gestion de bases de données relationnelles et NoSQL",
    skills: [
      { name: "MySQL", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    id: 4,
    icon: Wrench,
    title: "Informatique Industrielle",
    description: "Technologies et protocoles pour l'automatisation industrielle",
    skills: [
      { name: "Automates programmables", level: 90 },
      { name: "SCADA / HMI", level: 85 },
      { name: "Protocoles industriels", level: 88 },
      { name: "IoT / M2M", level: 82 },
    ],
  },
  {
    id: 5,
    icon: Code2,
    title: "Outils & Méthodologie",
    description: "Outils de développement et méthodes de travail",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "Agile / Scrum", level: 85 },
    ],
  },
  {
    id: 6,
    icon: Layers,
    title: "Autres Technologies",
    description: "Technologies complémentaires et environnements de développement",
    skills: [
      { name: "Linux", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "WebSocket", level: 75 },
      { name: "GraphQL", level: 70 },
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
            <div className="mt-20">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
