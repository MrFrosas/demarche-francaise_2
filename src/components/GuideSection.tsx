import { Card } from "./ui/card";
import { BookOpen, Users, MapPin } from "lucide-react";

const guides = [
  {
    icon: BookOpen,
    title: "Guide complet",
    description: "Toutes les étapes détaillées de votre parcours de naturalisation",
  },
  {
    icon: Users,
    title: "Conseils d'experts",
    description: "Des recommandations personnalisées pour votre situation",
  },
  {
    icon: MapPin,
    title: "Suivi local",
    description: "Un accompagnement proche de chez vous",
  },
];

export const GuideSection = () => {
  return (
    <section className="py-16 bg-france-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,145,0.05)_50%,transparent_75%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text mb-4">
            Ressources et accompagnement
          </h2>
          <p className="text-lg text-france-gray-dark">
            Découvrez nos guides et ressources pour comprendre chaque aspect de votre démarche
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <Card
              key={index}
              className="p-8 bg-white hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-6">
                <guide.icon className="w-12 h-12 text-france-blue group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-france-text mb-3">{guide.title}</h3>
              <p className="text-france-gray-dark">{guide.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};