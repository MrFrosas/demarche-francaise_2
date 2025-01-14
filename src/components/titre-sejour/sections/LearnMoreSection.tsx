import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Info, ArrowRight } from "lucide-react";

export const LearnMoreSection = () => {
  return (
    <section className="py-16 bg-france-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Info className="w-12 h-12 mr-4 text-france-blue" />
            <h2 className="text-fr-h2 font-bold text-france-text-dark">
              Le Titre de séjour : en savoir plus
            </h2>
          </div>
          <Card className="relative overflow-hidden border-none shadow-france hover:shadow-france-hover transition-shadow duration-300">
            <div className="p-8 bg-gradient-to-br from-france-gray to-france-gray-light">
              <p className="text-fr-text text-france-text mb-6">
                Pour séjourner de manière temporaire sur le territoire français vous aurez besoin 
                d'obtenir un document officiel appelé Titre de séjour. En général, celle-ci est 
                accordée pour une durée d'un an et peut être renouvelable.
              </p>
              <div className="bg-france-white p-6 rounded-lg mb-6 shadow-fr-sm">
                <h3 className="text-fr-h4 font-bold text-france-text-dark mb-4">
                  Types de titres de séjour :
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-france-text">
                  <li>Titre de séjour pluri-annuel</li>
                  <li>Titre de séjour passeport talent</li>
                  <li>Titre de séjour salarié ou travailleur temporaire</li>
                  <li>Titre de séjour entrepreneur ou profession libérale</li>
                  <li>Visa long séjour valant titre de séjour</li>
                </ul>
              </div>
              <p className="text-fr-text text-france-text mb-8">
                Optez pour les services de nos experts c'est faire le choix de voir votre demande aboutir.
              </p>
              <div className="text-center">
                <Link to="/contact">
                  <Button 
                    className="bg-france-blue hover:bg-france-blue-hover text-france-white group transition-all duration-200"
                  >
                    Nous contacter
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};