import React from 'react';
import * as Interface from 'Common/Interfaces';
import { AplicationData } from './AplicationData';
import { AplicationDataView } from './AplicationDataView';
import { UserData } from './UserData';

const Provider: React.FC<Interface.ReactChildren> = ({
  children,
}): JSX.Element => {
  const [calendar, setCalendar] = React.useState<Interface.ResponseAxiosUser>();
  const [calendarView, setCalendarView] = React.useState<Interface.MonthYear>();
  const [user, setUser] = React.useState<Interface.ResponseAxiosUser[]>();
  return (
    <AplicationData.Provider value={{ calendar, setCalendar }}>
      <AplicationDataView.Provider value={{ calendarView, setCalendarView }}>
        <UserData.Provider value={{ user, setUser }}>
          {children}
        </UserData.Provider>
      </AplicationDataView.Provider>
    </AplicationData.Provider>
  );
};

export default Provider;
