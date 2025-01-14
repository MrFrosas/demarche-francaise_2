export const KeyElementsSection = () => {
  const elements = [
    {
      number: "01",
      title: "Ouverture d'un casier judiciaire",
      description: "Une inscription peut restreindre l'accès à certains emplois ou droits civiques."
    },
    {
      number: "02",
      title: "Vous ne pouvez plus",
      description: "Voter, travailler dans la fonction publique, ou exercer des professions réglementées."
    },
    {
      number: "03",
      title: "État objectif",
      description: "Démarche Française fait un état objectif rapide et efficace de votre situation."
    },
    {
      number: "04",
      title: "Transmission du dossier",
      description: "Transmettre votre dossier à un avocat compétent qui introduira immédiatement une procédure de réhabilitation judiciaire dans votre intérêt"
    }
  ];

  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-12 text-center">
          Éléments clés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {elements.map((element, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-france hover:shadow-france-hover transition-shadow"
            >
              <div className="text-france-blue font-bold text-xl mb-4">
                {element.number}
              </div>
              <h3 className="font-bold text-lg mb-3 text-france-text-dark">
                {element.title}
              </h3>
              <p className="text-france-text">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};