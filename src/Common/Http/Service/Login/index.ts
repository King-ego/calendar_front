import api from 'Utils/api';

export const getUsersLogin = async (patch: string = '/') => {
  return await api.get(patch);
};
