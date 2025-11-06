import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Système de Gestion Industrielle",
    description: "Plateforme complète de gestion et monitoring pour l'industrie 4.0 avec dashboard en temps réel.",
    technologies: ["Laravel", "MySQL", "Vue.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "E-commerce Laravel",
    description: "Site e-commerce moderne avec panier, paiement sécurisé et interface d'administration complète.",
    technologies: ["Laravel", "PHP", "MySQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Application de Monitoring IoT",
    description: "Dashboard de visualisation de données IoT en temps réel avec alertes et rapports automatiques.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "MQTT"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Portfolio Interactif",
    description: "Site portfolio moderne avec animations, formulaire de contact et intégration CMS.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "API REST Industrielle",
    description: "API RESTful pour la gestion de données industrielles avec authentification JWT.",
    technologies: ["Laravel", "MySQL", "JWT", "API REST"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Système de Réservation",
    description: "Plateforme de réservation en ligne avec calendrier, notifications et gestion des utilisateurs.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Démo
                      </Button>
                    </a>
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
