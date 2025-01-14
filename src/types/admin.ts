export interface User {
  id: string;
  email: string;
  role: 'ADMIN' | 'EDITOR';
  name: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  status: 'DRAFT' | 'PUBLISHED';
  authorId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
}
