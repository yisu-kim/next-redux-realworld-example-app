export interface Article {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
  body: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface Articles {
  articles: Article[];
  articlesCount: number;
}
