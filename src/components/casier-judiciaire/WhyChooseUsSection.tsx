import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6 text-center">
            Pourquoi supprimer son casier judiciaire avec Démarche Française ?
          </h2>
          <p className="text-lg text-france-text mb-8 text-center">
            Chez Démarche Française, nous vous recevons rapidement, dans nos locaux ou par téléconsultations, faisons un point objectif sur votre dossier et nous vous mettons en relation avec un avocat partenaire compétent, qui s'occupera de déposer une demande de réhabilitation judiciaire en un temps record.
          </p>
          <div className="text-center">
            <Link to="#contact">
              <Button className="bg-france-blue hover:bg-france-blue-hover text-white px-8 py-3 rounded-md text-lg">
                J'obtiens mon document
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};