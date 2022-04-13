import instance from '../axios';

const tagsResolver = {
  Query: {
    getTags: async () => {
      try {
        const { data } = await instance.get(`/tags`);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

export default tagsResolver;
