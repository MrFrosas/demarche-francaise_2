import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Users, Baby, Briefcase, HeartHandshake } from "lucide-react";

export const FamilyPermitSection = () => {
  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 mr-4 text-france-blue" />
            <h2 className="text-fr-h2 font-bold text-france-text-dark">
              Le Titre de séjour vie privée familiale, c'est quoi ?
            </h2>
          </div>
          
          <Card className="p-8 border-t-4 border-france-blue bg-france-white">
            <div className="space-y-8">
              {/* Introduction */}
              <p className="text-fr-text text-france-text text-center max-w-2xl mx-auto">
                Le titre de séjour vie privée familiale permet à un étranger de séjourner en France sous certaines conditions.
              </p>

              {/* Conditions */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-france-gray rounded-lg p-6 text-center hover:shadow-france transition-shadow">
                  <HeartHandshake className="w-8 h-8 text-france-blue mx-auto mb-4" />
                  <p className="text-france-text">Être marié ou pacsé à un Français</p>
                </div>
                <div className="bg-france-gray rounded-lg p-6 text-center hover:shadow-france transition-shadow">
                  <Baby className="w-8 h-8 text-france-blue mx-auto mb-4" />
                  <p className="text-france-text">Avoir un enfant français</p>
                </div>
                <div className="bg-france-gray rounded-lg p-6 text-center hover:shadow-france transition-shadow">
                  <Users className="w-8 h-8 text-france-blue mx-auto mb-4" />
                  <p className="text-france-text">Avoir plus de 18 ans et avoir réalisé la procédure de regroupement familial</p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-france-blue/5 rounded-lg p-6 text-center">
                <Briefcase className="w-8 h-8 text-france-blue mx-auto mb-4" />
                <p className="text-fr-text text-france-text font-medium">
                  Il permet à toute personne le possédant de résider et de travailler sur le territoire Français.
                </p>
              </div>

              {/* Expert Support */}
              <div className="text-center space-y-4">
                <p className="text-fr-text text-france-text">
                  Nos experts sont à votre disposition pour vous guider dans toutes vos démarches.
                </p>
                <Link to="/contact">
                  <Button 
                    className="bg-france-blue text-france-white hover:bg-france-blue-hover px-8 py-3"
                    size="lg"
                  >
                    Nous contacter
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