import { useState } from "react";
import { FilterSection } from "./FilterSection";
import { ArticlesList } from "./ArticlesList";
import { ArticleType } from "./types";

export const ArticlesContent = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedSubTheme, setSelectedSubTheme] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-fr-h2 font-bold text-[#1e1e1e] mb-8">
        L'actualité de Démarche Française
      </h1>
      
      <div className="lg:grid lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3">
          <FilterSection
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            selectedSubTheme={selectedSubTheme}
            setSelectedSubTheme={setSelectedSubTheme}
          />
        </aside>
        
        <main className="lg:col-span-9 mt-8 lg:mt-0">
          <ArticlesList
            selectedTheme={selectedTheme}
            selectedSubTheme={selectedSubTheme}
          />
        </main>
      </div>
    </div>
  );
};