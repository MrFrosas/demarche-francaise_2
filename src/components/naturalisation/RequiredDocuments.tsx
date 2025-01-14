import { Check } from "lucide-react";

const documents = [
  "Une demande d'acquisition de la nationalité française remplie en 2 exemplaires",
  "Un timbre fiscal dématérialisé d'un montant de 55 €",
  "Un justificatif de votre état civil",
  "Une photocopie de vos revenus et ressources",
  "Un justificatif de domicile",
  "Une photocopie recto-verso de votre titre de séjour valide",
  "Une attestation ou un diplôme précisant votre niveau de qualification en langue française",
  "Une photocopie de votre situation fiscale",
  "Un extrait de casier judiciaire français et étranger",
  "Deux photographies d'identité"
];

export const RequiredDocuments = () => {
  return (
    <div className="bg-france-white rounded-lg shadow-france p-8 my-12">
      <h2 className="text-2xl font-bold text-france-text-dark mb-6">
        Constituer un dossier de naturalisation : que fournir ?
      </h2>
      <p className="text-france-text-light mb-8">
        Afin de mettre en place une demande de naturalisation, certaines pièces sont à fournir pour la constitution de votre dossier.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-france-gray rounded-md">
            <Check className="w-5 h-5 text-france-blue flex-shrink-0 mt-1" />
            <span className="text-france-text">{doc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};