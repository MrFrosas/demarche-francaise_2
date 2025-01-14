import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { useState } from "react";
import type { FilterProps } from "./types";

export const FilterSection = ({
  selectedTheme,
  setSelectedTheme,
  selectedSubTheme,
  setSelectedSubTheme,
}: FilterProps) => {
  const [isThematicOpen, setIsThematicOpen] = useState(true);

  const themes = [
    { id: "naturalisation", label: "Naturalisation" },
    { id: "titre-sejour", label: "Titre de séjour" },
    { id: "logement", label: "Logement" },
    { id: "administratif", label: "Administratif" },
    { id: "emploi", label: "Emploi" },
    { id: "famille", label: "Famille" },
  ];

  const subThemes = {
    naturalisation: [
      "Conditions d'éligibilité",
      "Documents requis",
      "Procédure",
      "Actualités"
    ],
    "titre-sejour": [
      "Première demande",
      "Renouvellement",
      "Changement de statut",
      "Carte de résident"
    ],
    logement: [
      "Logement social",
      "Aides au logement",
      "Démarches administratives",
      "Conseils pratiques"
    ],
    administratif: [
      "Documents officiels",
      "Démarches en ligne",
      "Services publics",
      "Actualités administratives"
    ],
    emploi: [
      "Recherche d'emploi",
      "Droit du travail",
      "Formation professionnelle",
      "Création d'entreprise"
    ],
    famille: [
      "Regroupement familial",
      "Éducation",
      "Santé",
      "Prestations sociales"
    ],
  };

  const handleReset = () => {
    setSelectedTheme(null);
    setSelectedSubTheme(null);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#1e1e1e]">
          Affiner la recherche
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="text-france-blue hover:text-france-blue-hover"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Réinitialiser
        </Button>
      </div>

      <div className="border rounded-lg">
        <button
          className="w-full px-4 py-3 flex items-center justify-between text-left border-b"
          onClick={() => setIsThematicOpen(!isThematicOpen)}
        >
          <span className="font-medium">Thématique</span>
          {isThematicOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {isThematicOpen && (
          <div className="p-4">
            {themes.map((theme) => (
              <div key={theme.id} className="mb-4">
                <button
                  className={`w-full text-left px-2 py-1 rounded ${
                    selectedTheme === theme.id
                      ? "bg-france-blue text-white"
                      : "hover:bg-france-gray"
                  }`}
                  onClick={() => {
                    setSelectedTheme(theme.id);
                    setSelectedSubTheme(null);
                  }}
                >
                  {theme.label}
                </button>

                {selectedTheme === theme.id && (
                  <div className="ml-4 mt-2 space-y-2">
                    {subThemes[theme.id as keyof typeof subThemes].map((subTheme) => (
                      <button
                        key={subTheme}
                        className={`w-full text-left px-2 py-1 rounded text-sm ${
                          selectedSubTheme === subTheme
                            ? "bg-france-blue text-white"
                            : "hover:bg-france-gray"
                        }`}
                        onClick={() => setSelectedSubTheme(subTheme)}
                      >
                        {subTheme}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};