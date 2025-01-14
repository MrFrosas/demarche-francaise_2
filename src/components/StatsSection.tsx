import { Users, FileCheck, Clock, Award } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="py-fr-8v md:py-fr-10v bg-france-white">
      <div className="container mx-auto px-fr-4v">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fr-4v">
          {[
            { icon: Users, label: "Personnes accompagnées", value: "5000+" },
            { icon: FileCheck, label: "Dossiers traités", value: "98%" },
            { icon: Clock, label: "Délai moyen", value: "6 mois" },
            { icon: Award, label: "Taux de réussite", value: "95%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-fr-6v bg-france-gray hover:bg-france-gray-medium transition-all rounded-lg shadow-france hover:shadow-france-hover"
              tabIndex={0}
              role="article"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <stat.icon 
                className="w-12 h-12 text-france-blue mb-fr-4v" 
                aria-hidden="true"
              />
              <p className="text-fr-h4 font-bold text-france-blue mb-fr-2v">{stat.value}</p>
              <p className="text-france-text text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};