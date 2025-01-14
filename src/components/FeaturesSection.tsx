import { Clock, Users, Shield, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Une équipe d'experts spécialistes",
    description: "Disponibles pour vous accompagner dans vos démarches de naturalisation",
  },
  {
    icon: Shield,
    title: "Prise en charge complète de votre dossier",
    description: "Accompagnement personnalisé et mise en relation avec des avocats spécialisés",
  },
  {
    icon: Clock,
    title: "Délais optimisés",
    description: "Gain de temps et d'efficacité dans le traitement de votre dossier",
  },
  {
    icon: CheckCircle,
    title: "Un accompagnement sur-mesure",
    description: "Solutions adaptées à votre situation personnelle",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-france-gray py-8 md:py-16" aria-labelledby="features-title">
      <div className="container mx-auto px-4">
        <h2 
          id="features-title" 
          className="text-xl md:text-2xl font-bold text-center mb-8 text-[#1e1e1e]"
          tabIndex={0}
        >
          Pourquoi choisir Démarche Française ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              tabIndex={0}
            >
              <feature.icon 
                className="h-12 w-12 md:h-16 md:w-16 text-france-blue mx-auto mb-4" 
                aria-hidden="true"
              />
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};