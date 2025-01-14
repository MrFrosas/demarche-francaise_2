import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LogementServicesSection = () => {
  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
            Nos services d'accompagnement
          </h2>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-france-text mb-4">
              Grâce à notre connaissance approfondie des critères d'attribution et des 
              spécificités régionales, nous optimisons vos chances d'obtenir rapidement 
              un logement social adapté à vos besoins.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-france-text-dark mb-4">
                Pourquoi faire appel à Démarche Française ?
              </h3>
              <p className="text-lg text-france-text">
                Nous nous chargeons de constituer votre dossier, vous aidons à rassembler 
                les documents nécessaires et assurons le suivi de l'avancement de votre demande.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-france-blue text-france-white hover:bg-france-blue-hover">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};