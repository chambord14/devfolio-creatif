import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/photo.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <main className="flex-1">
        <section className="section-padding pt-32 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem0yIDJ2LTJoLTJ2Mmgyem0wIDR2LTJoLTJ2Mmgyem0yLTJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0tMi00djJoMnYtMmgtMnptMCAwdi0yaC0ydjJoMnptMi0ydjJoMnYtMmgtMnptMCAwdi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <p className="text-secondary text-lg font-semibold">Bienvenue sur mon portfolio</p>
                  <h1 className="text-primary-foreground">
                    Développeur Web<br />
                    <span className="text-secondary">& Informaticien Industriel</span>
                  </h1>
                  <p className="text-xl text-primary-foreground/90 max-w-xl">
                    Passionné par l'innovation technologique et le développement web, je crée des solutions numériques performantes et élégantes.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="/contact">
                    <Button size="lg" variant="hero">
                      Me contacter
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href={`${import.meta.env.BASE_URL}cv.pdf`} download>
                    <Button size="lg" variant="secondary">
                      <Download className="mr-2 h-5 w-5" />
                      Télécharger CV
                    </Button>
                  </a>
                </div>

                {/* <div className="flex gap-12 pt-8">
                  <div>
                    <p className="text-4xl font-bold text-secondary">5+</p>
                    <p className="text-primary-foreground/80">Années d'expérience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-secondary">20+</p>
                    <p className="text-primary-foreground/80">Projets réalisés</p>
                  </div>
                </div> */}
              </div>

              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl"></div>
                <img
                  src={heroImage}
                  alt="Informaticien industriel et développeur web au travail"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-gradient">À propos de moi</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Titulaire d’une licence en informatique industrielle et maintenance, je suis actuellement développeur web full stack. 
                Ma double compétence me permet d’intervenir aussi bien sur des systèmes techniques industriels que sur la conception 
                d’applications web modernes. Curieux, adaptable et passionné par les technologies, je cherche à évoluer dans des environnements
                où l’innovation, la polyvalence et l’apprentissage continu sont valorisés.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
               Cette complémentarité me permet de créer des ponts entre le monde industriel et les solutions web innovantes, 
                offrant ainsi des projets uniques et sur mesure.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
