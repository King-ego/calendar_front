import { createContext, useContext } from 'react';
import * as Interface from 'Common/Interfaces';
export type GlobalContent = {
  calendar: Interface.ResponseAxiosUser | undefined;
  setCalendar: (c: Interface.ResponseAxiosUser) => void;
};
export const AplicationData = createContext<GlobalContent>({
  calendar: undefined, // set a default value
  setCalendar: () => {},
});
export const useAplicationData = () => useContext(AplicationData);
