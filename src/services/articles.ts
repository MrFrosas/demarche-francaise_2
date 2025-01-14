import { Article } from '../types/admin';

export class ArticleService {
  private static instance: ArticleService;
  private articles: Article[] = [];

  private constructor() {
    // Charger les articles depuis le localStorage
    const savedArticles = localStorage.getItem('articles');
    if (savedArticles) {
      try {
        this.articles = JSON.parse(savedArticles);
      } catch (e) {
        console.error('Erreur lors du chargement des articles');
        this.articles = [];
      }
    }
  }

  private saveToStorage(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  public static getInstance(): ArticleService {
    if (!ArticleService.instance) {
      ArticleService.instance = new ArticleService();
    }
    return ArticleService.instance;
  }

  async getArticles(): Promise<Article[]> {
    return [...this.articles].sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  async getArticle(id: string): Promise<Article | null> {
    const article = this.articles.find(a => a.id === id);
    return article ? { ...article } : null;
  }

  async createArticle(articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>): Promise<Article> {
    const newArticle: Article = {
      ...articleData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.articles.push(newArticle);
    this.saveToStorage();
    return { ...newArticle };
  }

  async updateArticle(id: string, updates: Partial<Article>): Promise<Article | null> {
    const index = this.articles.findIndex(a => a.id === id);
    if (index === -1) return null;

    const updatedArticle = {
      ...this.articles[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.articles[index] = updatedArticle;
    this.saveToStorage();
    return { ...updatedArticle };
  }

  async deleteArticle(id: string): Promise<boolean> {
    const index = this.articles.findIndex(a => a.id === id);
    if (index === -1) return false;

    this.articles.splice(index, 1);
    this.saveToStorage();
    return true;
  }

  async publishArticle(id: string): Promise<Article | null> {
    return this.updateArticle(id, {
      status: 'PUBLISHED',
      publishedAt: new Date().toISOString()
    });
  }

  async unpublishArticle(id: string): Promise<Article | null> {
    return this.updateArticle(id, {
      status: 'DRAFT',
      publishedAt: undefined
    });
  }
}

export default ArticleService;
