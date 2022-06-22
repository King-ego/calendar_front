import React from 'react';
import * as Interface from 'Common/Interfaces';

interface AplicationDataContent {
  calendar: Interface.ResponseAxiosUser | undefined;
  setCalendar: (c: Interface.ResponseAxiosUser) => void;
}

const AplicationData = React.createContext<AplicationDataContent>({
  calendar: undefined, // set a default value
  setCalendar: () => {},
});

export const useAplicationData = () => React.useContext(AplicationData);

export const ProviderAplicationData: React.FC<Interface.ReactChildren> = ({
  children,
}) => {
  const [calendar, setCalendar] = React.useState<Interface.ResponseAxiosUser>();
  return (
    <AplicationData.Provider value={{ calendar, setCalendar }}>
      {children}
    </AplicationData.Provider>
  );
};
