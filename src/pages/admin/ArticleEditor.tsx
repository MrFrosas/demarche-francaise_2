import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { RichTextEditor } from "../../components/admin/RichTextEditor";
import ArticleService from '../../services/articles';
import { Article } from '../../types/admin';
import { ArrowLeft, Save, Image, Upload, Eye } from 'lucide-react';

export const ArticleEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const articleService = ArticleService.getInstance();

  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [article, setArticle] = useState<Partial<Article>>({
    title: '',
    content: '',
    excerpt: '',
    status: 'DRAFT'
  });
  const [coverImage, setCoverImage] = useState<File | null>(null);

  useEffect(() => {
    if (id) {
      loadArticle(id);
    }
  }, [id]);

  const loadArticle = async (articleId: string) => {
    try {
      const loadedArticle = await articleService.getArticle(articleId);
      if (loadedArticle) {
        setArticle(loadedArticle);
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'article:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger l'article",
        variant: "destructive",
      });
    }
  };

  const handleImageUpload = async (file: File): Promise<string> => {
    // TODO: Implémenter le téléchargement réel des images
    return URL.createObjectURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id) {
        await articleService.updateArticle(id, article);
      } else {
        await articleService.createArticle(article);
      }

      toast({
        title: "Succès",
        description: "Article sauvegardé avec succès",
      });
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder l'article",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/admin/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">
              {id ? 'Modifier l\'article' : 'Nouvel article'}
            </h1>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
            >
              <Eye className="h-4 w-4 mr-2" />
              {showPreview ? 'Éditer' : 'Prévisualiser'}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/admin/dashboard')}
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
            >
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {showPreview ? (
            <Card className="p-6">
              <article className="prose max-w-none">
                <h1>{article.title}</h1>
                {article.coverImage && (
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                {article.excerpt && (
                  <p className="text-lg text-gray-600 italic mb-6">
                    {article.excerpt}
                  </p>
                )}
                <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
              </article>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Titre de l'article
                    </label>
                    <Input
                      value={article.title}
                      onChange={(e) => setArticle({ ...article, title: e.target.value })}
                      placeholder="Entrez le titre de l'article"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Extrait
                    </label>
                    <Textarea
                      value={article.excerpt}
                      onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
                      placeholder="Bref résumé de l'article"
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Image de couverture
                    </label>
                    <div className="mt-1 flex items-center space-x-4">
                      {article.coverImage && (
                        <img
                          src={article.coverImage}
                          alt="Cover"
                          className="h-32 w-32 object-cover rounded-md"
                        />
                      )}
                      <label className="cursor-pointer">
                        <Button variant="outline" type="button">
                          <Image className="h-4 w-4 mr-2" />
                          {article.coverImage ? 'Changer l\'image' : 'Ajouter une image'}
                        </Button>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file).then(url => {
                                setArticle({ ...article, coverImage: url });
                              });
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contenu de l'article
                    </label>
                    <RichTextEditor
                      value={article.content || ''}
                      onChange={(content) => setArticle({ ...article, content })}
                      onImageUpload={handleImageUpload}
                    />
                  </div>
                </div>
              </Card>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};
