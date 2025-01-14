import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProcessSteps } from "@/components/naturalisation/ProcessSteps";
import { RequiredDocuments } from "@/components/naturalisation/RequiredDocuments";
import { InfoBanner } from "@/components/naturalisation/InfoBanner";
import { ProcessDescription } from "@/components/naturalisation/ProcessDescription";
import { NaturalisationFAQ } from "@/components/naturalisation/NaturalisationFAQ";
import { ContactForm } from "@/components/ContactForm";

const Naturalisation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <section className="py-16 bg-gradient-to-b from-france-gray to-france-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-france-text-dark mb-6">
              Devenez citoyen français et démarrez une nouvelle vie !
            </h1>
            <p className="text-lg md:text-xl text-france-text mb-8">
              La Naturalisation française est un chemin qui peut sembler compliqué, mais vous n'êtes pas seul. Nos spécialistes en démarches vous accompagnent à travers ce processus de naturalisation, avec la mise en relation avec des avocats spécialisés !
            </p>
            <Button className="bg-france-blue hover:bg-france-blue-hover text-france-white">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-france-text-dark mb-6">
              Un accompagnement de A à Z pour l'obtention de la Nationalité française
            </h2>
            <div className="bg-france-white rounded-lg shadow-france p-8 space-y-4">
              <p className="text-france-text">
                Depuis le 6 février 2023, la demande de nationalité française est à transmettre directement en ligne. L'envoi de votre dossier par voie postale ne sera donc plus nécessaire. Votre demande de nationalité française en ligne ne nécessitera plus de déplacement.
              </p>
              <p className="text-france-text">
                Les conditions de déposition de dossiers restent inchangées concernant les procédures déclaratives par ascendant de Français ou par mariage. Vous pourrez consulter dans votre espace personnel l'état de votre dossier, être informé des pièces complémentaires éventuelles à apporter, et des décisions prises en rapport avec votre dossier.
              </p>
              <p className="text-france-text">
                En cas de besoins pour des conseils juridiques propre à votre situation, nous vous mettons en relation avec des avocats spécialisés.
              </p>
              <div className="pt-4">
                <Button className="bg-france-blue hover:bg-france-blue-hover text-france-white">
                  Nous contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <ProcessSteps />
          <InfoBanner />
          <RequiredDocuments />
          <ProcessDescription />
          <NaturalisationFAQ />
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Naturalisation;