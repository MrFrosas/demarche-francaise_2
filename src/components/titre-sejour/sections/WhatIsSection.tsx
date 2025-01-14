import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export const WhatIsSection = () => {
  return (
    <section className="bg-france-gray py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-12 h-12 mr-4 text-france-blue" />
            <h2 className="text-fr-h2 font-bold text-france-text-dark">
              Qu'est ce qu'un Titre de séjour ?
            </h2>
          </div>
          <Card className="p-8 border-l-4 border-france-blue bg-france-white">
            <p className="text-fr-text text-france-text mb-6">
              Un titre de séjour est une autorisation qui permet à un étranger de rester en France, 
              si son entrée sur le territoire français date de plus de 3 mois. Cette demande doit 
              être effectuée dans votre préfecture de rattachement. L'obtention du titre de séjour 
              permet à un étranger de régulariser sa situation et de pouvoir être autoriser à 
              séjourner sur le territoire français.
            </p>
            <p className="text-fr-text text-france-text mb-6">
              Démarche Française vous accompagne dans l'accomplissement de vos démarches.
            </p>
            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-france-blue text-france-white hover:bg-france-blue-hover">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};