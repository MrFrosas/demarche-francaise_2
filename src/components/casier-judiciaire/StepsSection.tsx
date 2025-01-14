import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const StepsSection = () => {
  const steps = [
    {
      title: "Étude de votre éligibilité",
      description: "Commencez par vous renseigner auprès des autorités compétentes pour savoir si vous pouvez supprimer votre casier judiciaire."
    },
    {
      title: "Collecte des documents",
      description: "Rassemblez tous les documents nécessaires pour appuyer votre demande."
    },
    {
      title: "Rédaction de la demande",
      description: "Rédaction de la demande de suppression des mentions figurant au casier judiciaire par nos avocats partenaires"
    },
    {
      title: "Dépôt de votre demande",
      description: "L'avocat en charge de votre dossier dépose et soutien la requête en réhabilitation judiciaire auprès du procureur de la république et des institutions judiciaires française."
    }
  ];

  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6 text-center">
            Quelles sont les étapes à suivre pour supprimer son casier judiciaire avec Démarche Française ?
          </h2>
          <p className="text-lg text-france-text mb-12 text-center">
            La suppression du casier judiciaire est un processus qui requiert une attention méticuleuse à chaque étape. Démarche Française vous aide à obtenir rapidement votre document en vue de soumettre votre demande de suppression de casier.
          </p>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-france hover:shadow-france-hover transition-shadow"
              >
                <h3 className="font-bold text-lg mb-3 text-france-text-dark">
                  {step.title}
                </h3>
                <p className="text-france-text">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="#contact">
              <Button className="bg-france-blue hover:bg-france-blue-hover text-white px-8 py-3 rounded-md text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};