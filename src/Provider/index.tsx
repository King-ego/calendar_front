import React from 'react';
import * as Interface from 'Common/Interfaces';
import { AplicationData } from './AplicationData';

const Provider: React.FC<Interface.ReactChildren> = ({
  children,
}): JSX.Element => {
  const [calendar, setCalendar] = React.useState<
    Interface.ResponseAxiosUser | undefined
  >();
  return (
    <AplicationData.Provider value={{ calendar, setCalendar }}>
      {children}
    </AplicationData.Provider>
  );
};

export default Provider;
