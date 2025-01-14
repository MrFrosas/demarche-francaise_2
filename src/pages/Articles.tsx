import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArticlesContent } from "@/components/articles/ArticlesContent";

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-1 bg-white">
        <ArticlesContent />
      </main>
      <Footer />
    </div>
  );
};

export default Articles;