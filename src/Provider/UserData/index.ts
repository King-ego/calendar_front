import { createContext, useContext } from 'react';
import * as Interface from 'Common/Interfaces';

interface UserDataContent {
  user: Interface.ResponseAxiosUser[] | undefined;
  setUser: (c: Interface.ResponseAxiosUser[]) => void;
}

export const UserData = createContext<UserDataContent>({
  user: undefined, // set a default value
  setUser: () => {},
});

export const useUserData = () => useContext(UserData);
