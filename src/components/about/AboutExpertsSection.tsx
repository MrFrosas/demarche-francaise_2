import { Button } from "@/components/ui/button";

export const AboutExpertsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
            Des experts à votre service !
          </h2>
          <p className="text-lg text-france-text mb-8">
            Notre équipe est composée d'experts spécialisés en démarches administratives, de conseillers dévoués. Nous combinons une connaissance approfondie des lois françaises avec une compréhension empathique des défis auxquels sont confrontés les résidents étrangers.
          </p>
          <Button size="lg" className="bg-france-blue hover:bg-france-blue-hover">
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};