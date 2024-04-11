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
  authorLink: string;
  authorName: string;
  currentSlug: string;
  currentCat: string[];
  date: string;
  image: any;
  body: any;
  imageGallery: any;
}

export interface bioPage {
  name: string;
  credentials: string;
  currentSlug: string;
  currentCat: string[];
  date: string;
  headshot: any;
  body: any;
  email: string;
  website: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
  authoLink: string;
  phone: string;
  location: string;
}
