import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "./ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulaire envoyé",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
  };

  const locations = [
    {
      city: "Boulogne-Billancourt",
      address: "14, rue de Silly",
      postal: "92100",
      phone: "+33 1 89 70 82 60",
    },
    {
      city: "Marseille",
      address: "63 rue de forbin",
      postal: "13008",
      phone: "+33 4 65 84 95 13",
    },
    {
      city: "Lille",
      address: "253 boulevard de Leeds",
      postal: "59000",
      phone: "+33 3 74 47 43 31",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-france-text-dark mb-4">
              Une équipe dédiée pour vous aider dans vos démarches administratives
            </h2>
            <p className="text-lg text-france-text">
              Notre équipe d'expert en démarches administratives en droit du sol se tient prête à vous assister.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              {locations.map((location, index) => (
                <div key={index} className="flex gap-4">
                  <MapPin className="w-6 h-6 text-france-blue flex-shrink-0" />
                  <div>
                    <p className="font-medium">{location.address}</p>
                    <p>{location.city} {location.postal}</p>
                    <p>France</p>
                    <p className="text-france-blue">{location.phone}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 mt-6">
                <Button className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Nous appeler
                </Button>
                <Button variant="outline" className="flex-1">
                  <Mail className="mr-2 h-4 w-4" />
                  Nous contacter
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom*</Label>
                  <Input
                    id="lastName"
                    required
                    placeholder="Votre nom de famille"
                    aria-label="Nom de famille"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom*</Label>
                  <Input
                    id="firstName"
                    required
                    placeholder="Votre prénom"
                    aria-label="Prénom"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail*</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="exemple@email.com"
                  aria-label="Adresse email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone*</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+33 X XX XX XX XX"
                  aria-label="Numéro de téléphone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Souhaité*</Label>
                <Select 
                  value={formData.service} 
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service" aria-label="Sélectionner un service">
                    <SelectValue placeholder="Choisissez le service souhaité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="naturalisation">Naturalisation</SelectItem>
                    <SelectItem value="titre-sejour">Titre de séjour</SelectItem>
                    <SelectItem value="renouvellement">Renouvellement titre de séjour</SelectItem>
                    <SelectItem value="logement">Logement Social</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-france-text-light mt-1">
                  Sélectionnez le service qui correspond le mieux à votre besoin
                </p>
              </div>

              <Button type="submit" className="w-full">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};