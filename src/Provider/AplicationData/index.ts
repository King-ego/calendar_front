import { createContext, useContext } from 'react';
import * as Interface from 'Common/Interfaces';

interface AplicationDataContent {
  calendar: Interface.ResponseAxiosUser | undefined;
  setCalendar: (c: Interface.ResponseAxiosUser) => void;
}

export const AplicationData = createContext<AplicationDataContent>({
  calendar: undefined, // set a default value
  setCalendar: () => {},
});

export const useAplicationData = () => useContext(AplicationData);
