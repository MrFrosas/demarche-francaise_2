import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LogementConditionsSection = () => {
  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
            Les conditions d'accès au logement social
          </h2>
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-france-text mb-4">
              L'accès au logement social est basé sur plusieurs critères : les revenus, 
              la composition du foyer et la localisation géographique.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-france-text">
              <li>
                Vous devez également compléter une demande et la soumettre à l'organisme 
                de logement social de votre région.
              </li>
              <li>
                Les délais d'attribution peuvent varier en fonction de la demande dans votre secteur.
              </li>
            </ul>
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