import React from 'react';
import * as Interface from 'Common/Interfaces';

interface AplicationDataViewContent {
  calendarView: Interface.MonthYear | undefined;
  setCalendarView: (c: Interface.MonthYear) => void;
}

export const AplicationDataView =
  React.createContext<AplicationDataViewContent>({
    calendarView: undefined, // set a default value
    setCalendarView: () => {},
  });

export const useAplicationDataView = () => React.useContext(AplicationDataView);

export const ProviderAplicationDataView: React.FC<Interface.ReactChildren> = ({
  children,
}) => {
  const [calendarView, setCalendarView] = React.useState<Interface.MonthYear>();
  return (
    <AplicationDataView.Provider value={{ calendarView, setCalendarView }}>
      {children}
    </AplicationDataView.Provider>
  );
};
