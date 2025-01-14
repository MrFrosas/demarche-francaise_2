import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { serviceItems } from "./navigation/navigationData";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { path: "/", label: "Accueil" },
    {
      label: "Nos services",
      isSubmenu: true,
      items: serviceItems,
    },
    { path: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { path: "#", label: "Articles" },
    { path: "/nous-contacter", label: "Nous contacter" },
  ];

  return (
    <header className="bg-france-white border-b border-france-gray-medium relative w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[64px] px-2 md:px-4">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="h-[64px] flex items-center">
              <img
                src="/lovable-uploads/e162138c-d56f-499c-a733-e6c9484caaee.png"
                alt="Démarche Française"
                className="h-[24px] md:h-[32px] w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-[10px] md:text-fr-text-xs leading-[14px] font-bold text-france-blue block">
                RÉPUBLIQUE
                <br />
                FRANÇAISE
              </span>
            </div>
          </div>

          <div className="hidden md:block flex-1 max-w-[480px] mx-8">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="text-fr-text-sm font-normal text-france-text hover:bg-france-gray hover:text-france-blue hidden md:flex"
            >
              Se connecter
            </Button>
            <Button
              variant="ghost"
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-france-blue" />
              ) : (
                <Menu className="h-5 w-5 text-france-blue" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-white z-50 border-t border-france-gray-medium overflow-y-auto">
            <div className="p-4">
              <SearchBar />
            </div>
            <nav className="border-t border-france-gray-medium">
              {navigationLinks.map((link, index) => {
                if ('isSubmenu' in link) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-france-text hover:bg-france-gray hover:text-france-blue"
                      >
                        <span>{link.label}</span>
                        {isServicesOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      {isServicesOpen && (
                        <div className="bg-france-gray-light">
                          {link.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block px-8 py-3 text-fr-text ${
                                location.pathname === item.path
                                  ? "bg-france-gray text-france-blue font-medium"
                                  : "text-france-text hover:bg-france-gray hover:text-france-blue"
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`block px-4 py-3 text-fr-text ${
                      location.pathname === link.path
                        ? "bg-france-gray text-france-blue font-medium"
                        : "text-france-text hover:bg-france-gray hover:text-france-blue"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-france-gray-medium">
              <Button 
                variant="ghost" 
                className="w-full text-fr-text-sm font-normal text-france-text hover:bg-france-gray hover:text-france-blue"
              >
                Se connecter
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};