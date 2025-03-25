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
  propertyCard: any[];
  cards: any[];
  imageAlt: string;
  imageUrl: string;
  images: any[];
  categories: any[];
  authorImage: any;
  authorTitle: string;
  leadership: any[];
  youTube: string;
  youTubeUrl: string;
  alert: {
    name: string;
    buttonText: string;
    buttonColor: string;
    dialogTitle: string;
    dialogDescription: string;
    closeText: string;
    closeLink: string;
    ctaText: string;
    ctalink: string;
  };
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
  alert: {
    name: string;
    buttonText: string;
    buttonColor: string;
    dialogTitle: string;
    dialogDescription: string;
    closeText: string;
    closeLink: string;
    ctaText: string;
    ctalink: string;
  };
}

export interface fullCategory {
  name: string;
  currentSlug: string;
  description: any;
}