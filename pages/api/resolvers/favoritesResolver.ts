import instance from '../axios';

const favoritesResolver = {
  Mutation: {
    createFavorite: async (_, { slug }, { authorization }) => {
      try {
        const { data } = await instance.post(
          `/articles/${slug}/favorite`,
          {},
          { headers: { authorization } }
        );
        return data;
      } catch (error) {
        throw error;
      }
    },
    deleteFavorite: async (_, { slug }, { authorization }) => {
      try {
        const { data } = await instance.delete(`/articles/${slug}/favorite`, {
          headers: { authorization },
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

export default favoritesResolver;
