export interface simpleNewsCard {
  title: string;
  author: string;
  currentSlug: string;
  currentCat: string[];
  date: string;
  image: any;
  excerpt: string;
}

export interface fullArticle {
  title: string;
  author: string;
  authorName: string;
  currentSlug: string;
  currentCat: string[];
  date: string;
  image: any;
  body: any;
}
