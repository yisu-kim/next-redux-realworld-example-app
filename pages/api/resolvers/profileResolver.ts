import instance from '../axios';

const profileResolver = {
  Query: {
    getProfile: async (_, { username }) => {
      try {
        const { data } = await instance.get(`/profiles/${username}`);
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createFollowing: async (_, { username }, { authorization }) => {
      try {
        const { data } = await instance.post(
          `/profiles/${username}/follow`,
          {},
          { headers: { authorization } }
        );
        return data;
      } catch (error) {
        throw error;
      }
    },
    deleteFollowing: async (_, { username }, { authorization }) => {
      try {
        const { data } = await instance.delete(`/profiles/${username}/follow`, {
          headers: { authorization },
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

export default profileResolver;
