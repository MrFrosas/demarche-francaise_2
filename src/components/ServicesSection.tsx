import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Home, RefreshCw, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Naturalisation",
    description: "Accompagnement complet pour votre demande de naturalisation française",
    icon: FileText,
    image: "/lovable-uploads/photo-1518005020951-eccb494ad742.png",
    link: "/naturalisation"
  },
  {
    title: "Titre de séjour",
    description: "Assistance pour l'obtention de votre titre de séjour",
    icon: Home,
    image: "/lovable-uploads/photo-1513836279014-a89f7a76ae86.png",
    link: "/naturalisation"
  },
  {
    title: "Renouvellement titre de séjour",
    description: "Support pour le renouvellement de votre titre de séjour",
    icon: RefreshCw,
    image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.png",
    link: "/naturalisation"
  },
  {
    title: "Logement Social",
    description: "Aide pour vos démarches de logement social",
    icon: Building,
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.png",
    link: "/naturalisation"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 
            id="services-title"
            className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4"
            tabIndex={0}
          >
            Nos services d'accompagnement
          </h2>
          <p className="text-lg text-gray-600">
            Des solutions adaptées à chacune de vos démarches administratives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-france transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt="" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6 bg-white relative">
                <div className="text-[#000091] mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#000091]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button 
                    variant="outline"
                    className="w-full border-[#000091] text-[#000091] hover:bg-[#000091] hover:text-white group/button"
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};