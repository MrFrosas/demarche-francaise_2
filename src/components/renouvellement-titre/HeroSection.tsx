import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Clock, LockKeyhole, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative bg-france-gray py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/photo-1581091226825-a6a2a5aee158.png')] opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-france-text-dark mb-6 animate-fade-in">
            Sécurisez votre avenir en France avec un renouvellement de votre titre de séjour
          </h1>
          <p className="text-lg md:text-xl text-france-text mb-12">
            La vie familiale est précieuse, et le processus pour obtenir un titre de séjour pour vous et votre famille peut être délicat. Que vous souhaitiez rejoindre un membre de votre famille ou sécuriser votre statut en France, Démarche Française vous accompagne sur toutes les étapes de votre projet !
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center bg-white hover:scale-105 transition-transform">
              <Shield className="w-12 h-12 text-france-blue mx-auto mb-4" />
              <h3 className="font-bold text-france-text">Avocats spécialistes</h3>
            </Card>
            <Card className="p-6 text-center bg-white hover:scale-105 transition-transform">
              <Clock className="w-12 h-12 text-france-blue mx-auto mb-4" />
              <h3 className="font-bold text-france-text">Service express</h3>
            </Card>
            <Card className="p-6 text-center bg-white hover:scale-105 transition-transform">
              <LockKeyhole className="w-12 h-12 text-france-blue mx-auto mb-4" />
              <h3 className="font-bold text-france-text">Confidentialité garantie</h3>
            </Card>
            <Card className="p-6 text-center bg-white hover:scale-105 transition-transform">
              <UserCheck className="w-12 h-12 text-france-blue mx-auto mb-4" />
              <h3 className="font-bold text-france-text">Interlocuteur dédié</h3>
            </Card>
          </div>
          
          <Link to="/contact">
            <Button size="lg" className="bg-france-blue text-white hover:bg-france-blue-hover">
              Découvrir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};