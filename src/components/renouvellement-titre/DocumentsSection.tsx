import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const DocumentsSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-france-gray opacity-50 transform skew-x-12" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-8">
            Quels documents fournir pour le renouvellement d'un Titre de séjour ?
          </h2>
          <Card className="p-8 bg-white shadow-france hover:shadow-france-hover transition-shadow">
            <ul className="space-y-4 mb-8">
              {[
                "Un titre de séjour valide",
                "Une copie de votre passeport",
                "3 photographies d'identité",
                "En cas de mariage ou de pacs : un acte de mariage ou un certificat de pacs",
                "Un justificatif de ressources par exemple un contrat de travail, les derniers bulletins de salaire, un relevé bancaire",
                "Un document justifiant votre domicile comme une facture d'eau, une quittance de loyer"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-france-blue flex-shrink-0 mt-1" />
                  <span className="text-france-text">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-france-gray rounded-lg">
              <p className="text-sm text-france-text">
                En cas d'hébergement dans un hôtel, vous devrez fournir une facture ou une attestation de l'hôtelier. En cas d'hébergement par un particulier, vous devrez fournir une attestation d'hébergement avec date et signature, un document justifiant le lieu d'hébergement et une copie recto-verso de la carte d'identité de l'hébergeur.
              </p>
            </div>
          </Card>
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-france-blue hover:bg-france-blue-hover text-white">
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};