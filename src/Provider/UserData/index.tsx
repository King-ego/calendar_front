import React from 'react';
import * as Interface from 'Common/Interfaces';

interface UserDataContent {
  user: Interface.ResponseAxiosUser[] | undefined;
  setUser: (c: Interface.ResponseAxiosUser[]) => void;
}

const UserData = React.createContext<UserDataContent>({
  user: undefined, // set a default value
  setUser: () => {},
});

export const useUserData = () => React.useContext(UserData);

export const ProviderUserData: React.FC<Interface.ReactChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<Interface.ResponseAxiosUser[]>([]);
  return (
    <UserData.Provider value={{ user, setUser }}>{children}</UserData.Provider>
  );
};
