import { Award, FileText, UserCheck, ScrollText } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Dépôt en ligne",
    description: "Soumission directe de votre dossier via la plateforme numérique"
  },
  {
    icon: ScrollText,
    title: "Étude du dossier",
    description: "Analyse approfondie par nos experts juridiques"
  },
  {
    icon: UserCheck,
    title: "Entretien",
    description: "Rencontre avec un agent de la préfecture"
  },
  {
    icon: Award,
    title: "Cérémonie",
    description: "Célébration officielle de votre naturalisation"
  }
];

export const ProcessSteps = () => {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-fr-4v my-fr-8v"
      role="list"
      aria-label="Étapes du processus"
    >
      {steps.map((step, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center p-fr-6v bg-france-white rounded-lg shadow-france hover:shadow-france-hover transition-all"
          role="listitem"
        >
          <step.icon className="w-12 h-12 text-france-blue mb-fr-4v" aria-hidden="true" />
          <h3 className="text-fr-h5 font-bold text-france-text-dark mb-fr-2v">{step.title}</h3>
          <p className="text-france-text text-center">{step.description}</p>
        </div>
      ))}
    </div>
  );
};