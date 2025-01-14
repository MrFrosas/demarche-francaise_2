import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

export const ValuePropositionSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-france-text leading-tight">
              Votre parcours vers la nationalité française simplifié
            </h2>
            <p className="text-lg text-france-gray-dark">
              Notre expertise vous accompagne à chaque étape, avec un suivi personnalisé et des solutions adaptées à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Card className="p-6 bg-france-gray hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-france-blue mb-3">98% de réussite</h3>
                <p className="text-france-gray-dark">Pour les dossiers accompagnés</p>
              </Card>
              <Card className="p-6 bg-france-gray hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-france-blue mb-3">15 ans</h3>
                <p className="text-france-gray-dark">D'expertise en droit</p>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-france-gray absolute -top-12 -right-12 w-64 h-64 animate-pulse opacity-50"></div>
            <div className="w-full h-[400px] relative">
              <img
                src="/lovable-uploads/1a5b84d7-4020-41bb-9974-ef5c2d5b7684.png"
                alt="Accompagnement personnalisé pour votre naturalisation"
                className="relative z-10 rounded-lg w-full h-full object-contain shadow-france"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};