import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalSection = () => {
  return (
    <section className="py-16 bg-france-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
              Un mot sur le renouvellement d'un Titre de séjour
            </h2>
            <p className="text-lg text-france-text mb-8">
              Après un certain nombre d'années de résidence légale en France, un titulaire de titre de séjour peut demander la naturalisation française.
            </p>
            <Card className="p-8 bg-white shadow-france mb-8">
              <h3 className="text-xl font-bold text-france-blue mb-6">
                Qui peut demander une carte de séjour vie privée et familiale ?
              </h3>
              <p className="text-lg mb-6 text-france-text">
                Le titre de séjour vie privée et familiale permet à un étranger de séjourner en France sous certaines conditions.
              </p>
              <ul className="space-y-4 text-left">
                {[
                  "Être marié ou pacsé à un Français",
                  "Être parents d'un enfant Français",
                  "Être l'époux ou l'enfant d'un étranger en situation régulière",
                  "Être victime de violences conjugales et bénéficier d'un jugement de protection",
                  "Être étranger et vivre en France, et avoir un état de santé nécessitant des traitements ou des soins irréalisables dans votre pays d'origine",
                  "Être titulaire d'une rente d'accident de travail ou de maladie professionnelle",
                  "Oeuvrer pour des activités solidaires et un organisme d'accueil communautaire depuis 3 ans"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-france-blue flex-shrink-0 mt-1" />
                    <span className="text-france-text">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <div className="bg-white p-8 rounded-lg mb-8 text-left">
              <h3 className="text-xl font-bold text-france-blue mb-4">
                Renouveler son titre de séjour : comment ça marche ?
              </h3>
              <p className="mb-4 text-france-text">
                Certaines conditions sont nécessaires pour le renouvellement de votre titre de séjour famille. 2 mois avant la fin de validité de votre titre, pensez à faire votre demande dans votre préfecture de rattachement. Cette demande peut également se faire en ligne. Pour votre concubin ou concubine, vous devrez justifier le maintien de la communauté de vie.
              </p>
              <p className="mb-4 text-france-text">
                N'attendez plus et contactez-nous afin de faire le point sur votre situation et accomplir ensemble des démarches pour l'aboutissement d'un dossier favorable.
              </p>
              <p className="font-bold text-france-blue">
                Faites le bon choix, faites appel à Démarche Française !
              </p>
            </div>
            
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