import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      title: "Réformes post-remaniement et effets sur les démarches administratives",
      description: "Les derniers changements dans les procédures administratives suite au remaniement gouvernemental.",
      date: "1 January 2025",
      image: "/lovable-uploads/3f51327b-ec41-4afd-990c-b648c502a194.png"
    },
    {
      id: 2,
      title: "Expérience de Koffi, immigré ivoirien",
      description: "Témoignage sur le parcours d'intégration et les démarches administratives en France.",
      date: "31 December 2024",
      image: "/lovable-uploads/b6c5a985-8a45-4521-8fb4-53774b6ef1b9.png"
    },
    {
      id: 3,
      title: "Réformes administratives suite au remaniement",
      description: "Analyse des changements majeurs dans les procédures administratives.",
      date: "31 December 2024",
      image: "/lovable-uploads/3f51327b-ec41-4afd-990c-b648c502a194.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-4">
            Dernières actualités
          </h2>
          <p className="text-lg text-gray-600">
            Restez informé des dernières nouvelles et changements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-france transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt="" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-[#666666] mb-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm">{article.date}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-[#000091] transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <button className="text-[#000091] hover:text-[#000091]/80 font-medium inline-flex items-center group/button">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;