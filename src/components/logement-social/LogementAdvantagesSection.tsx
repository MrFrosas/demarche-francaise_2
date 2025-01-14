import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LogementAdvantagesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
            Les avantages du logement social
          </h2>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-france-text mb-4">
              En plus du loyer modéré, le logement social offre des conditions de vie 
              améliorées avec des habitations modernes et respectueuses de l'environnement. 
              De plus, vous bénéficiez d'une sécurité locative et de services d'entretien inclus.
            </p>
            <div className="bg-france-gray p-6 rounded-lg mt-8">
              <p className="text-lg text-france-text italic">
                Le système de logement social en France est conçu pour garantir un accès 
                équitable à des habitations décentes pour tous. Cependant, la demande 
                dépasse souvent l'offre, ce qui rallonge les délais. Il est donc essentiel 
                de présenter un dossier complet et convaincant. Nos experts sont là pour 
                vous conseiller et prendre en charge votre dossier. Faites appel à 
                Démarche Française pour une assistance sur mesure.
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