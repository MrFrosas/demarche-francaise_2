import { Button } from "@/components/ui/button";

export const AboutValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
            Les valeurs de Démarche Française
          </h2>
          <p className="text-lg text-france-text mb-8">
            Fondée avec une vision de fournir une assistance juridique de haute qualité, Démarche Française est le fruit de l'engagement envers l'intégration et la régularisation des résidents étrangers en France. Notre histoire est marquée par une passion pour l'immigration et un dévouement à aider les individus à surmonter les défis liés à la bureaucratie et à la législation française.
          </p>
          
          <div className="bg-france-gray p-8 rounded-lg mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-france-text-dark mb-4">
              Votre chemin vers une vie légale et épanouissante en France.
            </h3>
            <p className="text-lg text-france-text mb-6">
              Nous sommes là pour vous.
            </p>
            <p className="text-lg text-france-text mb-8">
              Si vous avez des questions sur les titres de séjour, la naturalisation, ou toute autre question liée à l'immigration en France, n'hésitez pas à nous contacter. Nous serions heureux de vous aider à trouver la meilleure solution pour votre situation.
            </p>
            <Button size="lg" className="bg-france-blue hover:bg-france-blue-hover">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};