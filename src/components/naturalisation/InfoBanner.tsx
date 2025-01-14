import { Info } from "lucide-react";

export const InfoBanner = () => {
  return (
    <div className="bg-france-gray-medium rounded-lg p-6 my-12 relative overflow-hidden">
      <div className="absolute right-0 top-0 opacity-10">
        <Info className="w-32 h-32 text-france-blue transform rotate-12" />
      </div>
      <h3 className="text-xl font-bold text-france-text-dark mb-4">
        Un mot sur la Naturalisation Française
      </h3>
      <p className="text-france-text-light relative z-10">
        Chaque préfecture a sa propre manière de célébrer ce moment important. Certaines villes organisent des cérémonies officielles avec des discours et des remises de certificats, tandis que d'autres peuvent opter pour des célébrations plus informelles. Cela ajoute une touche unique et personnelle au processus de naturalisation, reflétant la diversité culturelle de la France.
      </p>
    </div>
  );
};