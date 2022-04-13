import instance from '../axios';

const commentsResolver = {
  Query: {
    getComments: async (_, { slug }) => {
      try {
        const { data } = await instance.get(`/articles/${slug}/comments`);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createComment: async (_, { slug, comment }, { authorization }) => {
      try {
        const { data } = await instance.post(
          `/articles/${slug}/comments`,
          { comment },
          { headers: { authorization } }
        );
        return data;
      } catch (error) {
        throw error;
      }
    },
    deleteComment: async (_, { slug, id }, { authorization }) => {
      try {
        await instance.delete(`/articles/${slug}/comments/${id}`, {
          headers: { authorization },
        });
      } catch (error) {
        throw error;
      }
    },
  },
};

export default commentsResolver;
