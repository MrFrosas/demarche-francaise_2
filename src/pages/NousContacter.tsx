import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";

const NousContacter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <div className="py-12 bg-france-gray">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-france-text-dark text-center mb-6">
              Nous Contacter
            </h1>
            <p className="text-lg text-france-text text-center mb-12 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos démarches administratives.
            </p>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default NousContacter;