import { Button } from "./ui/button";
import { FileText, Home, RefreshCw, Building } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="bg-white py-6 md:py-fr-8v lg:py-fr-10v border-b border-france-gray-medium">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-fr-h1 font-bold text-france-text-dark mb-4 md:mb-fr-6v lg:mb-fr-8v text-center px-2" tabIndex={0}>
            Résider ou obtenir un emploi en France de manière légale
          </h1>
          
          <p className="text-base md:text-fr-text-lg text-center text-france-text mb-6 md:mb-fr-8v max-w-3xl mx-auto px-2">
            Simplifiez vos démarches administratives, pour l'obtention de la nationalité française ou d'un titre de séjour.
          </p>

          <div className="text-center mb-6 md:mb-fr-8v px-2">
            <Link to="/naturalisation">
              <Button className="w-full sm:w-auto fr-btn fr-btn--primary px-4 md:px-fr-8v py-2 md:py-fr-4v text-base md:text-fr-text-lg">
                Découvrir nos services
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-fr-6v mt-6 md:mt-fr-8v px-2">
            {[
              {
                title: "Naturalisation française",
                icon: FileText,
                image: "/lovable-uploads/photo-1518005020951-eccb494ad742.png",
                link: "/naturalisation"
              },
              {
                title: "Titre de séjour",
                icon: Home,
                image: "/lovable-uploads/photo-1513836279014-a89f7a76ae86.png",
                link: "/titre-sejour"
              },
              {
                title: "Renouvellement titre de séjour",
                icon: RefreshCw,
                image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.png",
                link: "/titre-sejour"
              },
              {
                title: "Logement Social",
                icon: Building,
                image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.png",
                link: "#"
              }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="flex flex-col items-center p-4 md:p-fr-6v bg-france-gray hover:bg-france-blue hover:text-france-white transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  />
                </div>
                <item.icon className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-fr-3v group-hover:scale-110 transition-transform" />
                <span className="text-center text-sm md:text-fr-text font-medium relative z-10">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};