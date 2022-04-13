import instance from '../axios';

const articleResolver = {
  Query: {
    getArticlesFeed: async (
      _,
      { limit = 20, offset = 0 },
      { authorization }
    ) => {
      try {
        const { data } = await instance.get(`/articles/feed`, {
          params: { limit, offset },
          headers: { authorization },
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
    getArticles: async (
      _,
      { tag, author, favorited, limit = 20, offset = 0 }
    ) => {
      try {
        const { data } = await instance.get(`/articles`, {
          params: {
            tag,
            author,
            favorited,
            limit,
            offset,
          },
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
    getArticle: async (_, { slug }) => {
      try {
        const { data } = await instance.get(`/articles/${slug}`);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createArticle: async (_, { article }, { authorization }) => {
      try {
        const { data } = await instance.post(
          `/articles`,
          { article },
          { headers: { authorization } }
        );
        return data;
      } catch (error) {
        throw error;
      }
    },
    updateArticle: async (_, { slug, article }, { authorization }) => {
      try {
        const { data } = await instance.put(
          `/articles/${slug}`,
          { article },
          { headers: { authorization } }
        );
        return data;
      } catch (error) {
        throw error;
      }
    },
    deleteArticle: async (_, { slug }, { authorization }) => {
      try {
        await instance.delete(`/articles/${slug}`, {
          headers: { authorization },
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

export default articleResolver;
