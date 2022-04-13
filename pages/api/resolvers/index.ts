import articleResolver from './articlesResolver';
import commentsResolver from './commentsResolver';
import favoritesResolver from './favoritesResolver';
import profileResolver from './profileResolver';
import tagsResolver from './tagsResolver';
import userResolvers from './userResolver';

export const resolvers = [
  userResolvers,
  profileResolver,
  articleResolver,
  commentsResolver,
  favoritesResolver,
  tagsResolver,
];
