import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CasierHeroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-france-text-dark mb-6">
            Supprimer son casier judiciaire, c'est simple avec Démarche Française !
          </h1>
          <p className="text-lg md:text-xl text-france-text mb-8">
            Nous faisons un point objectif et rapide sur votre situation, et vous mettons en relation avec un avocat spécialisé, qui formulera dans votre intérêt, une demande de réhabilitation judiciaire, auprès du Procureur de la République compétent.
          </p>
          <Link to="#contact">
            <Button className="bg-france-blue hover:bg-france-blue-hover text-white px-8 py-3 rounded-md text-lg">
              Découvrir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};