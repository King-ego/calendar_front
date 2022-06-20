import React from 'react';
import * as Interface from 'Common/Interfaces';
import { AplicationData } from './AplicationData';
import { AplicationDataView } from './AplicationDataView';

const Provider: React.FC<Interface.ReactChildren> = ({
  children,
}): JSX.Element => {
  const [calendar, setCalendar] = React.useState<
    Interface.ResponseAxiosUser | undefined
  >();
  const [calendarView, setCalendarView] = React.useState<Interface.MonthYear>();
  return (
    <AplicationData.Provider value={{ calendar, setCalendar }}>
      <AplicationDataView.Provider value={{ calendarView, setCalendarView }}>
        {children}
      </AplicationDataView.Provider>
    </AplicationData.Provider>
  );
};

export default Provider;
