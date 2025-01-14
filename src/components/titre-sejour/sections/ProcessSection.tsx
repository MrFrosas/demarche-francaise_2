import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Euro } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-fr-h2 font-bold text-france-text-dark mb-8">
            Première demande de titre de séjour : comment faire ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <FileText className="w-12 h-12 text-france-blue mb-4" />
              <p className="text-fr-text text-france-text">
                Pour votre première demande de titre de séjour, vous devrez vous rendre dans votre préfecture. Certaines acceptent que le dossier soit envoyé par courrier.
              </p>
            </Card>
            
            <Card className="p-6">
              <Calendar className="w-12 h-12 text-france-blue mb-4" />
              <p className="text-fr-text text-france-text">
                Il sera impératif de prendre rendez-vous pour le dépôt de votre demande. Le rendez-vous pourra être pris en ligne directement sur le site de la préfecture concernée. Pour une personne majeure, rendez vous auprès de l'administration territoriale.
              </p>
            </Card>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4">
              <Euro className="w-12 h-12 text-france-blue flex-shrink-0" />
              <div>
                <p className="text-fr-text text-france-text mb-4">
                  L'obtention de la titre de séjour coûte en moyenne 225 € à payer en timbres fiscaux. Le droit de timbre est de 25 € et la taxe de 200 €.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-france-gray">
            <p className="text-fr-text text-france-text mb-6 text-center">
              Ces démarches vous semblent compliquées ? Vous avez besoin d'aide ? Démarche Française est la solution idéale pour vous !
            </p>
            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-france-blue text-white hover:bg-france-blue-hover">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};