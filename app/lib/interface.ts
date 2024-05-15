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
  images: any[];
  categories: any[];
  authorImage: any;
  authorTitle: string;
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
  categories: any[];
  customButton: any;
  buttonColor: 'blue' | 'orange' | 'green';
  buttonLink: string;
  buttonText: string;
  color: 'blue' | 'orange' | 'green';
}

export interface fullCategory {
  name: string;
  currentSlug: string;
  description: any;
}