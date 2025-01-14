import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8 py-8 border-b border-[#DFDFE8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Newsletter */}
          <div>
            <h2 className="text-[32px] leading-[40px] font-bold text-[#161616] mb-4">
              Inscription à la newsletter
            </h2>
            <p className="text-[16px] leading-[24px] text-[#3A3A3A] mb-6">
              Suivez l'actualité des démarches en vous inscrivant à notre newsletter
            </p>
            <Button className="bg-[#000091] hover:bg-[#000091]/90 text-[16px] leading-[24px] px-4 py-2 h-auto">
              S'abonner
            </Button>
          </div>

          {/* Adresses */}
          <div>
            <h2 className="text-[32px] leading-[40px] font-bold text-[#161616] mb-4">
              Nos adresses
            </h2>
            <div className="space-y-4">
              <p className="text-[16px] leading-[24px] text-[#3A3A3A]">
                Boulogne-Billancourt : 14, rue de Silly, 92100
              </p>
              <p className="text-[16px] leading-[24px] text-[#3A3A3A]">
                Marseille : 63 rue de forbin, 13008
              </p>
              <p className="text-[16px] leading-[24px] text-[#3A3A3A]">
                Lille : 253 boulevard de Leeds, 59000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section logo et informations */}
      <div className="container mx-auto px-8 py-8 border-b border-[#DFDFE8]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex items-start gap-4">
            <img
              src="/lovable-uploads/e162138c-d56f-499c-a733-e6c9484caaee.png"
              alt="Démarche Française"
              className="h-[48px] w-auto sm:h-[60px]" // Réduction de la taille du logo
            />
            <div className="text-[12px] leading-[14px] font-bold text-[#000091] mt-1">
              GOUVERNEMENT
              <div className="font-normal italic mt-1">
                Liberté
                <br />
                Égalité
                <br />
                Fraternité
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[16px] leading-[24px] text-[#3A3A3A] mb-4">
              Ce site est géré par le Service d'Information du Gouvernement (SIG).
            </p>
            <p className="text-[16px] leading-[24px] text-[#3A3A3A] mb-2">
              Liens annexes :
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#" className="text-[#000091] hover:underline text-[16px] leading-[24px]">
                Écrire au Premier ministre
              </a>
              <a href="#" className="text-[#000091] hover:underline text-[16px] leading-[24px]">
                Marque de l'État
              </a>
              <a href="#" className="text-[#000091] hover:underline text-[16px] leading-[24px]">
                Devenir partenaire de l'État
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4">
              <a href="#" className="text-[#000091] hover:underline text-[16px] leading-[24px] flex items-center gap-1">
                legifrance.gouv.fr
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-[#000091] hover:underline text-[16px] leading-[24px] flex items-center gap-1">
                service-public.fr
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-[#000091] hover:underline text-[16px] leading-[24px] flex items-center gap-1">
                data.gouv.fr
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="py-4 flex flex-wrap gap-x-2 text-[14px] leading-[24px] text-[#3A3A3A]">
          <a href="#" className="hover:underline">Accessibilité : partiellement conforme</a>
          <span>|</span>
          <a href="#" className="hover:underline">Mentions légales</a>
          <span>|</span>
          <a href="#" className="hover:underline">Données personnelles</a>
          <span>|</span>
          <a href="#" className="hover:underline">Gestion des cookies</a>
          <span>|</span>
          <a href="#" className="hover:underline">Notifications</a>
          <span>|</span>
          <a href="#" className="hover:underline">Publications officielles</a>
          <span>|</span>
          <button className="hover:underline">Paramètres d'affichage</button>
        </div>

        {/* Section licence */}
        <div className="py-4 text-[14px] leading-[24px] text-[#3A3A3A]">
          <p>
            Sauf mention contraire, tous les contenus de ce site sont sous{" "}
            <a href="#" className="text-[#000091] hover:underline inline-flex items-center gap-1">
              licence etalab-2.0
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
