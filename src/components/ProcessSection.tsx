import { Card } from "./ui/card";

const steps = [
  {
    number: "01",
    title: "Premier contact",
    description: "Évaluation gratuite de votre situation et de vos objectifs",
  },
  {
    number: "02",
    title: "Constitution du dossier",
    description: "Accompagnement personnalisé pour rassembler les documents nécessaires",
  },
  {
    number: "03",
    title: "Suivi administratif",
    description: "Gestion des démarches et relations avec les administrations",
  },
  {
    number: "04",
    title: "Obtention de la nationalité",
    description: "Accompagnement jusqu'à la cérémonie d'accueil dans la nationalité française",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-france-gray" aria-labelledby="process-title">
      <div className="container mx-auto px-4">
        <h2 
          id="process-title"
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-france-text"
          tabIndex={0}
        >
          Notre processus d'accompagnement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-6 hover:shadow-lg transition-shadow bg-white"
              tabIndex={0}
            >
              <span className="absolute -top-4 left-6 bg-france-blue text-white text-xl font-bold py-2 px-4 rounded">
                {step.number}
              </span>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3 text-france-text">{step.title}</h3>
                <p className="text-france-gray-dark">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};