import { SeoProps } from "../components/seo/Seo";

export interface ArticleProps {
  id: number;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  status: string;
  slug: string;
  category: any;
  image: any;
  author: any;
}

export interface CategoryProps {
  id: number;
  name: string;
  slug: string;
  position: number;
}

export interface HomepageProps {
  seo: SeoProps;
  hero: {
    title: string;
  };
  socials: {
    id: number;
    name: string;
    url: string;
  }[];
}
