import { AxiosResponse } from 'axios';
import api from 'Utils/api';

export const getUsersLogin = async (
  patch: string = '/'
): Promise<AxiosResponse> => {
  return await api.get(patch);
};
