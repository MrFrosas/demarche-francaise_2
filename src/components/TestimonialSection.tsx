export const TestimonialSection = () => {
  return (
    <section className="py-fr-8v md:py-fr-10v bg-france-white" aria-labelledby="testimonial-title">
      <div className="container mx-auto px-fr-4v">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="testimonial-title" className="text-fr-h2 font-bold text-france-text-dark mb-fr-6v">
            L'histoire de Yassif, naturalisé grâce à Démarche Française
          </h2>
          <p className="text-fr-text-lg mb-fr-4v text-france-text">
            Après 10 ans de vie en France, Yassif souhaitait obtenir la nationalité française pour concrétiser son intégration
          </p>
          <p className="text-fr-text-lg font-bold mb-fr-8v text-france-text-dark">
            Notre équipe l'a accompagné à chaque étape, jusqu'à l'obtention de sa naturalisation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-fr-4v">
            {[
              "Premier rendez-vous gratuit sous 48h",
              "Constitution complète du dossier",
              "Suivi personnalisé jusqu'à la naturalisation"
            ].map((step, index) => (
              <div 
                key={index}
                className="bg-france-gray p-fr-6v rounded-lg shadow-france hover:shadow-france-hover transition-all"
                role="article"
              >
                <p className="text-fr-text text-france-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};