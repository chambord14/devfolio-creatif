import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Contrôle digitalisé des pièces de véhicule",
    description: "Projet de soutenance réalisé en binôme. Plateforme web pour le suivi des documents de véhicules (assurance, visite technique, TVM) avec simulation OCR via caméra LAPI.",
    technologies: ["Symfony", "MySQL","HTML","CSS", "PHP", "Javascript"],
    image: `${import.meta.env.BASE_URL}controle.jpeg`,
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "Plateforme RH interne – SICOGO BYGAMS",
    description: "Projet professionnel réalisé chez SICOGO BYGAMS. Participation au développement full stack d’une application de gestion du personnel avec Laravel et Bootstrap.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade","Bootstrap"],
    image: `${import.meta.env.BASE_URL}rh.jpg`,
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Système de sécurité domestique avec Arduino",
    description: "Projet tutoré : conception d’un système de sécurité avec capteur de mouvement et clavier PIN pour contrôle d’accès.",
    technologies:  ["Arduino", "C++", "Capteur PIR", "Clavier matriciel", "Electronique"],
    image: `${import.meta.env.BASE_URL}arduino.jpg`,
    github: "",
    demo: "",
  },
 
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-gradient">Mes Projets</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez une sélection de mes réalisations en développement web et informatique industrielle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="card-hover bg-gradient-card border-border">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Démo
                        </Button>
                      </a>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
