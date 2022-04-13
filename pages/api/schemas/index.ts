import articlesTypeDef from './articlesSchema';
import commentsTypeDef from './commentsSchema';
import favoritesTypeDef from './favoritesSchema';
import profileTypeDef from './profileSchema';
import tagsTypeDef from './tagsSchema';
import userTypeDef from './userSchema';

export const typeDefs = [
  userTypeDef,
  profileTypeDef,
  articlesTypeDef,
  commentsTypeDef,
  favoritesTypeDef,
  tagsTypeDef,
];
