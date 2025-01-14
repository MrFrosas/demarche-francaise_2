import { Button } from "@/components/ui/button";
import { Shield, Clock, LockKeyhole, UserRound } from "lucide-react";

export const AboutHeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-france-text-dark mb-6">
            Démarche Française, le partenaire de votre avenir en France !
          </h1>
          <p className="text-lg text-france-text mb-8">
            Chez Démarche Française, nous nous consacrons à simplifier le parcours vers la résidence et l'emploi légal en France. Pour vous aider dans vos démarches, pour vous présenter l'état actuel du droit et les conditions à remplir pour être eligible à une demande de titre de séjour ou de naturalisation, et vous met en relation avec des avocats compétents, qui vous accompagneront en mieux dans vos démarches juridiques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-4">
            <Shield className="w-12 h-12 text-france-blue mb-4" />
            <p className="font-medium">Avocats spécialistes</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Clock className="w-12 h-12 text-france-blue mb-4" />
            <p className="font-medium">Service express</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <LockKeyhole className="w-12 h-12 text-france-blue mb-4" />
            <p className="font-medium">Confidentialité garantie</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <UserRound className="w-12 h-12 text-france-blue mb-4" />
            <p className="font-medium">Interlocuteur dédié</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-france-blue hover:bg-france-blue-hover">
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};