import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-12 text-center">
            Comment renouveler un Titre de séjour ?
          </h2>
          <div className="space-y-8">
            <Card className="p-8 bg-france-gray hover:shadow-france transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-france-blue flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg mb-4 text-france-text">
                    Le renouvellement de votre titre de séjour doit se faire 2 mois avant l'expiration de celui-ci. Attention toutefois, dans certaines préfectures cette demande est à effectuer 5 mois avant.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-france-gray hover:shadow-france transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-france-blue flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg mb-4 text-france-text">
                    Vous devrez fournir un timbre fiscal d'un montant de 50 € pour votre demande. Pensez à faire les démarches avant la date d'expiration de votre titre de séjour car dans le cas contraire il faudra payer 180 € pour obtenir un droit de visa de régularisation.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-france-gray hover:shadow-france transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-france-blue flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg mb-4 text-france-text">
                    Il faut également que les conditions avec lesquelles vous avez réussi à obtenir pour la première fois votre titre de séjour soit toujours effectives
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6 text-france-text">
              Ces démarches vous font peur ? Nos conseillers sont là pour vous fournir une aide personnalisée.
            </p>
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