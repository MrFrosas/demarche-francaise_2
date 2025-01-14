import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LogementIntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
            Qu'est-ce qu'un logement social ?
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg text-france-text mb-8">
              Le logement social est un logement à loyer modéré, attribué en fonction de critères 
              de revenus et de besoins spécifiques. Accessible aux personnes aux revenus modestes, 
              il leur permet de bénéficier d'un logement décent à un prix abordable. La demande 
              se fait généralement auprès des organismes de logement social ou de votre mairie.
            </p>
            <p className="text-lg text-france-text mb-8">
              Démarche Française vous accompagne dans l'ensemble de vos démarches, du début à la fin, 
              pour maximiser vos chances de réussite.
            </p>
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