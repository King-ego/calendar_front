import { createContext, useContext } from 'react';
import * as Interface from 'Common/Interfaces';

interface AplicationDataViewContent {
  calendarView: Interface.MonthYear | undefined;
  setCalendarView: (c: Interface.MonthYear) => void;
}

export const AplicationDataView = createContext<AplicationDataViewContent>({
  calendarView: undefined, // set a default value
  setCalendarView: () => {},
});

export const useAplicationDataView = () => useContext(AplicationDataView);
