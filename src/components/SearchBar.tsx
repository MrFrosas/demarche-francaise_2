import React, { useState, useRef, useEffect } from 'react';
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SearchSuggestion {
  title: string;
  link: string;
}

const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { title: "Naturalisation française", link: "/naturalisation" },
  { title: "Titre de séjour", link: "/titre-sejour" },
  { title: "Carte de résident", link: "/carte-resident" },
];

const ARTICLE_SUGGESTIONS = [
  {
    title: "Comment obtenir la nationalité française ?",
    excerpt: "Guide complet sur les conditions et démarches pour obtenir la nationalité française par naturalisation.",
    date: "Publié le 22/10/2024",
    link: "/guide-naturalisation"
  },
  {
    title: "Les étapes de la naturalisation",
    excerpt: "Découvrez les différentes étapes du processus de naturalisation et les documents nécessaires.",
    date: "Publié le 17/10/2024",
    link: "/etapes-naturalisation"
  }
];

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleFocus = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-full max-w-[480px]" ref={searchRef}>
      <div className="relative">
        <Input
          type="search"
          placeholder="Rechercher une démarche, un service..."
          className="fr-input w-full pl-3 md:pl-fr-4v pr-10 md:pr-fr-10v py-2 md:py-fr-2v h-[40px] text-sm md:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
        />
        <Button
          size="icon"
          className="fr-btn fr-btn--primary absolute right-0 top-0 h-[40px] w-[40px] rounded-l-none"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-md shadow-france p-3 md:p-fr-4v z-50 max-h-[80vh] overflow-y-auto">
          <div className="space-y-4 md:space-y-fr-6v">
            <div>
              <h3 className="text-sm md:text-fr-text-sm font-bold text-france-text mb-2 md:mb-fr-3v">
                Nos suggestions de recherche
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-fr-2v">
                {SEARCH_SUGGESTIONS.map((suggestion) => (
                  <a
                    key={suggestion.link}
                    href={suggestion.link}
                    className="fr-link text-xs md:text-fr-text-sm bg-france-gray px-2 md:px-fr-3v py-1 md:py-fr-1v rounded-full hover:bg-france-gray-medium transition-colors"
                  >
                    {suggestion.title}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm md:text-fr-text-sm font-bold text-france-text mb-2 md:mb-fr-3v">
                Nos suggestions d'articles
              </h3>
              <div className="space-y-3 md:space-y-fr-4v">
                {ARTICLE_SUGGESTIONS.map((article) => (
                  <a
                    key={article.link}
                    href={article.link}
                    className="block hover:bg-france-gray rounded-md p-2 md:p-fr-2v transition-colors"
                  >
                    <h4 className="fr-link text-sm md:text-fr-text-sm font-bold mb-1 md:mb-fr-1v">
                      {article.title}
                    </h4>
                    <p className="text-xs md:text-fr-text-sm text-france-text-light mb-1 md:mb-fr-1v">
                      {article.excerpt}
                    </p>
                    <p className="text-xs md:text-fr-text-xs text-france-text-light">
                      {article.date}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};