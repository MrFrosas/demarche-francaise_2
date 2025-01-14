import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import AuthService from '../../services/auth';
import ArticleService from '../../services/articles';
import { Article } from '../../types/admin';
import { PlusIcon, PencilIcon, TrashIcon } from 'lucide-react';

export const AdminDashboard = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const auth = AuthService.getInstance();
  const articleService = ArticleService.getInstance();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      navigate('/admin');
      return;
    }
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const fetchedArticles = await articleService.getArticles();
      setArticles(fetchedArticles);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    auth.logout();
  };

  const handleDeleteArticle = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      try {
        await articleService.deleteArticle(id);
        await loadArticles();
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
      }
    }
  };

  const handlePublishToggle = async (article: Article) => {
    try {
      if (article.status === 'DRAFT') {
        await articleService.publishArticle(article.id);
      } else {
        await articleService.unpublishArticle(article.id);
      }
      await loadArticles();
    } catch (error) {
      console.error('Erreur lors du changement de statut:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Tableau de bord
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="text-lg font-medium">Articles</h3>
              <p className="mt-2 text-3xl font-bold">{articles.length}</p>
              <div className="mt-4">
                <Button onClick={() => navigate('/admin/articles/new')}>
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Nouvel article
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Articles récents</h2>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              {isLoading ? (
                <div className="px-6 py-4 text-center text-gray-500">
                  Chargement...
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {articles.length === 0 ? (
                    <li className="px-6 py-4 text-center text-gray-500">
                      Aucun article pour le moment
                    </li>
                  ) : (
                    articles.map((article) => (
                      <li key={article.id} className="px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {article.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {new Date(article.updatedAt).toLocaleDateString('fr-FR')} - 
                              {article.status === 'PUBLISHED' ? 
                                <span className="text-green-600 ml-2">Publié</span> : 
                                <span className="text-gray-600 ml-2">Brouillon</span>
                              }
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handlePublishToggle(article)}
                            >
                              {article.status === 'PUBLISHED' ? 'Dépublier' : 'Publier'}
                            </Button>
                            <Button 
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/admin/articles/${article.id}`)}
                            >
                              <PencilIcon className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteArticle(article.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
