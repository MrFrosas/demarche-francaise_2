export interface ArticleType {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  subCategory?: string;
  date: string;
  slug: string;
}

export interface FilterProps {
  selectedTheme: string | null;
  setSelectedTheme: (theme: string | null) => void;
  selectedSubTheme: string | null;
  setSelectedSubTheme: (subTheme: string | null) => void;
}