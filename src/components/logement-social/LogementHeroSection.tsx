import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, LockKeyhole, UserCheck } from "lucide-react";

export const LogementHeroSection = () => {
  return (
    <section className="bg-france-gray py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-fr-h1 font-bold text-france-text-dark mb-4 md:mb-6 text-center">
            Obtenez un logement social en France avec facilité et sérénité
          </h1>
          <p className="text-base md:text-fr-text-lg text-france-text mb-8 md:mb-12 text-center px-2 md:px-0">
            Trouver un logement social peut être un processus long et stressant. 
            Heureusement, nos experts sont là pour vous simplifier la vie. De la vérification 
            de votre éligibilité à la préparation et la soumission de votre dossier, 
            nous vous accompagnons à chaque étape !
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="bg-france-white p-4 md:p-6 rounded-lg shadow-france text-center">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-france-blue mx-auto mb-2 md:mb-4" />
              <h3 className="text-sm md:text-base font-bold text-france-text-dark">Avocats spécialistes</h3>
            </div>
            <div className="bg-france-white p-4 md:p-6 rounded-lg shadow-france text-center">
              <Clock className="w-8 h-8 md:w-12 md:h-12 text-france-blue mx-auto mb-2 md:mb-4" />
              <h3 className="text-sm md:text-base font-bold text-france-text-dark">Service express</h3>
            </div>
            <div className="bg-france-white p-4 md:p-6 rounded-lg shadow-france text-center">
              <LockKeyhole className="w-8 h-8 md:w-12 md:h-12 text-france-blue mx-auto mb-2 md:mb-4" />
              <h3 className="text-sm md:text-base font-bold text-france-text-dark">Confidentialité garantie</h3>
            </div>
            <div className="bg-france-white p-4 md:p-6 rounded-lg shadow-france text-center">
              <UserCheck className="w-8 h-8 md:w-12 md:h-12 text-france-blue mx-auto mb-2 md:mb-4" />
              <h3 className="text-sm md:text-base font-bold text-france-text-dark">Interlocuteur dédié</h3>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button className="w-full md:w-auto bg-france-blue text-france-white hover:bg-france-blue-hover px-8 py-3">
                Découvrir
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};