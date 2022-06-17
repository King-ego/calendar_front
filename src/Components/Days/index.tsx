import React from 'react';
import * as Interface from 'Common/Interfaces';
import { daytwodigit, DayWeek } from 'Common/data_fns_functions';
import * as StyledComponents from './style';

interface DaysProps {
  days: Interface.Days[];
  selectDate: {
    year?: string;
    month?: string;
  };
}

const Days: React.FC<DaysProps> = ({ days, selectDate }): JSX.Element => {
  return (
    <div>
      <div>
        {days.map((day) => (
          <StyledComponents.Flex key={day?.id}>
            <StyledComponents.Date>
              <p>
                {DayWeek(selectDate?.year, selectDate?.month, day?.name).slice(
                  0,
                  3
                )}
              </p>
              <p>
                {daytwodigit(day?.name)} de {selectDate?.month?.slice(0, 3)}
              </p>
            </StyledComponents.Date>
            <StyledComponents.Task>{day?.task}</StyledComponents.Task>
          </StyledComponents.Flex>
        ))}
      </div>
    </div>
  );
};

export default Days;
