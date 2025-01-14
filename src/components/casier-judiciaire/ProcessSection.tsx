import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6 text-center">
            En combien de temps est supprimé le casier judiciaire ?
          </h2>
          <div className="space-y-6 text-lg text-france-text mb-8">
            <p>
              La première étape est de faire un point objectif sur votre situation, réunir les documents nécessaires à la demande de réhabilitation judiciaire, et confier votre dossier à un avocat compétent chargé de procéder à la rédaction d'une requête à déposer auprès du Procureur de la République compétent.
            </p>
            <p>
              Démarche Française procédera au suivi de votre dossier à chaque étape de la procédure.
            </p>
            <p>
              Le Procureur de la République étudie la demande, et peut convoquer l'intéressé à une audience contradictoire. Nos avocats partenaires vous y représenterons.
            </p>
            <p>
              Votre demande peut être ensuite acceptée ou refusée.
            </p>
          </div>
          <div className="text-center">
            <Link to="#contact">
              <Button className="bg-france-blue hover:bg-france-blue-hover text-white px-8 py-3 rounded-md text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};