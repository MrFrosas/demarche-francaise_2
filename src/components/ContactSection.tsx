import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const ContactSection = () => {
  return (
    <section className="py-8 md:py-16 bg-france-gray" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 text-center">
        <h2 
          id="contact-title"
          className="text-2xl md:text-[32px] leading-tight md:leading-[40px] font-bold text-gray-900 mb-4 md:mb-6"
          tabIndex={0}
        >
          Rencontrez les experts Démarche Française
        </h2>
        <p 
          className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10"
          tabIndex={0}
        >
          1er rdv gratuit et sans engagement. Des professionnels dédiés pour guider vos projets, du début à la réalisation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Button 
            className="bg-france-blue hover:bg-france-blue/90 text-base h-auto py-3 px-6 md:px-8 w-full sm:w-auto"
            aria-label="Nous appeler pour prendre rendez-vous"
          >
            <Phone className="mr-3 h-5 w-5" aria-hidden="true" />
            Nous appeler
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-france-blue text-france-blue hover:bg-france-blue hover:text-white text-base h-auto py-3 px-6 md:px-8 w-full sm:w-auto"
            aria-label="Nous contacter par email"
          >
            <Mail className="mr-3 h-5 w-5" aria-hidden="true" />
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};