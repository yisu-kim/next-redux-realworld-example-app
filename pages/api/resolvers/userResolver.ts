import instance from '../axios';

const userResolver = {
  Query: {
    getCurrentUser: async (_, __, { authorization }) => {
      try {
        const { data } = await instance.get('/user', {
          headers: { authorization },
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createLoginUser: async (_, { user }) => {
      try {
        const { data } = await instance.post('/users/login', { user });
        return data;
      } catch (error) {
        throw error;
      }
    },
    createNewUser: async (_, { user }) => {
      try {
        const { data } = await instance.post('/users', { user });
        return data;
      } catch (error) {
        throw error;
      }
    },
    updateCurrentUser: async (_, { user }, { authorization }) => {
      try {
        const { data } = await instance.put(
          '/user',
          { user },
          { headers: { authorization } }
        );
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

export default userResolver;
