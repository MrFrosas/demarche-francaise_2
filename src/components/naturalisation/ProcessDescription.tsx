import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProcessDescription = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-france p-8">
        <h2 className="text-2xl font-bold text-france-text-dark mb-6">
          L'obtention de la naturalisation, un aboutissement concret
        </h2>
        <div className="space-y-4 text-france-text">
          <p>
            Lorsque vous aurez dûment complété votre dossier, un agent agréé par le Préfet de police l'enregistrera. Il est possible que vous soyez convoqué à un entretien réglementaire. Vous devrez signer la charte des droits et devoirs du citoyen français.
          </p>
          <p>
            En cas de réponse favorable, le ministère chargé des naturalisations recevra une notification délivrée par la préfecture de police. Votre nom sera publié alors dans le Journal Officiel. En cas de réponse défavorable vous recevrez un courrier recommandé.
          </p>
          <p>
            Contactez-nous afin de faire un point sur votre situation, nos conseillers sont à votre disposition pour vous mettre en relation avec un avocat.
          </p>
          <p className="font-bold text-france-blue">
            Démarche Française reste la solution idéale pour mettre toutes les chances de votre côté pour l'aboutissement de votre demande.
          </p>
        </div>
        <div className="mt-6">
          <Button className="bg-france-blue hover:bg-france-blue/90">
            Nous contacter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};