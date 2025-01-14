import { Button } from "@/components/ui/button";

export const AboutMissionSection = () => {
  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6 text-center">
            Notre Mission
          </h2>
          <p className="text-lg text-france-text mb-8 text-center">
            Notre mission est claire : simplifier les procédures d'immigration, offrir un soutien expert, et permettre à nos clients de vivre sereinement en France. Nous croyons en l'importance de l'accessibilité, de la transparence, et de la personnalisation grâce à la mise en relation avec des avocats sur des problématiques juridiques. Chez Démarche Française, chaque cas est unique, et nous adaptons nos services pour répondre aux besoins spécifiques de nos clients.
          </p>
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-france-blue text-france-blue hover:bg-france-blue hover:text-white">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};