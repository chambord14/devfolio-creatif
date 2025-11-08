import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "chambord200@gmail.com",
    href: "mailto:contact@example.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+229 01 96 64 27 99",
    href: "tel:+2290196642799",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Cotonou, Benin",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-gradient">Me Contacter</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une question, un projet ? N'hésitez pas à me contacter, je vous répondrai rapidement
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      const content = (
                        <Card className="card-hover border-border">
                          <CardContent className="flex items-center gap-4 p-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold">{info.title}</p>
                              <p className="text-muted-foreground">{info.value}</p>
                            </div>
                          </CardContent>
                        </Card>
                      );

                      return info.href ? (
                        <a key={info.title} href={info.href}>
                          {content}
                        </a>
                      ) : (
                        <div key={info.title}>{content}</div>
                      );
                    })}
                  </div>
                </div>

               {/* <div>
                  <h2 className="text-2xl font-bold mb-6">Réseaux sociaux</h2>
                  <p className="text-muted-foreground mb-4">
                    Retrouvez-moi également sur mes réseaux sociaux pour suivre mes projets et actualités.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        GitHub
                      </Button>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </div> */}
              </div>

              {/* Contact Form */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Envoyez-moi un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Votre message..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer le message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
