import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ArticleType } from "./types";

const articles: ArticleType[] = [
  {
    id: 1,
    title: "Les nouvelles conditions pour la naturalisation française en 2024",
    excerpt: "Découvrez les changements importants concernant les conditions d'obtention de la nationalité française.",
    image: "/lovable-uploads/3f51327b-ec41-4afd-990c-b648c502a194.png",
    category: "naturalisation",
    subCategory: "Conditions d'éligibilité",
    date: "22/03/2024",
    slug: "conditions-naturalisation-2024"
  },
  {
    id: 2,
    title: "Guide complet du renouvellement de titre de séjour",
    excerpt: "Toutes les étapes pour renouveler votre titre de séjour sans difficulté.",
    image: "/lovable-uploads/b6c5a985-8a45-4521-8fb4-53774b6ef1b9.png",
    category: "titre-sejour",
    subCategory: "Renouvellement",
    date: "20/03/2024",
    slug: "guide-renouvellement-titre-sejour"
  },
  {
    id: 3,
    title: "Comment obtenir un logement social : démarches et conseils",
    excerpt: "Guide pratique pour faire votre demande de logement social et augmenter vos chances d'obtention.",
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.png",
    category: "logement",
    subCategory: "Logement social",
    date: "18/03/2024",
    slug: "obtenir-logement-social"
  },
  {
    id: 4,
    title: "Les aides disponibles pour la formation professionnelle",
    excerpt: "Découvrez toutes les aides auxquelles vous avez droit pour votre formation professionnelle.",
    image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.png",
    category: "emploi",
    subCategory: "Formation professionnelle",
    date: "15/03/2024",
    slug: "aides-formation-professionnelle"
  }
];

interface ArticlesListProps {
  selectedTheme: string | null;
  selectedSubTheme: string | null;
}

export const ArticlesList = ({ selectedTheme, selectedSubTheme }: ArticlesListProps) => {
  const filteredArticles = articles.filter((article) => {
    if (!selectedTheme) return true;
    if (!selectedSubTheme) return article.category === selectedTheme;
    return article.category === selectedTheme && article.subCategory === selectedSubTheme;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-france-text-light">
          {filteredArticles.length} résultat{filteredArticles.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white border rounded-lg overflow-hidden hover:shadow-france transition-shadow duration-200"
          >
            <Link to={`/articles/${article.slug}`} className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-france-blue text-white text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex flex-col h-full">
                  <div>
                    <div className="text-sm text-france-text-light mb-2">
                      Actualité · {article.category}
                    </div>
                    <h2 className="text-xl font-bold text-[#1e1e1e] mb-3 group-hover:text-france-blue transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-france-text-light mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm text-france-text-light">
                      Publié le {article.date}
                    </span>
                    <span className="text-france-blue flex items-center gap-2 font-medium">
                      Lire la suite
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};