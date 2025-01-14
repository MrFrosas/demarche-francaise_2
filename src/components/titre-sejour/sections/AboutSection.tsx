import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-france-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 relative overflow-hidden border-none shadow-france hover:shadow-france-hover transition-shadow duration-300">
            <div className="absolute right-0 top-0 opacity-10">
              <Shield className="w-32 h-32 text-france-blue transform rotate-12" />
            </div>
            <h2 className="text-fr-h3 font-bold text-france-text-dark mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-france-blue" />
              Un mot sur le Titre de séjour
            </h2>
            <p className="text-fr-text text-france-text relative z-10">
              Les autorités françaises ont créé un système de couleur pour les titres de séjour. 
              Chaque catégorie de titre de séjour est associée à une couleur spécifique sur la 
              carte, ce qui facilite l'identification du statut d'une personne en un coup d'œil. 
              C'est une approche pratique pour simplifier les contrôles et améliorer la lisibilité 
              des titres de séjour.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};