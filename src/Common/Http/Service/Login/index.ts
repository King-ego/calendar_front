import { AxiosResponse } from 'axios';
import api from 'Utils/api';

export const getUsersLogin = async (patch: string): Promise<AxiosResponse> => {
  return await api.get(patch);
};

export const postMonth = async (
  patch: string,
  name: string
): Promise<AxiosResponse> => {
  return await api.post(patch, {
    name: name,
  });
};
