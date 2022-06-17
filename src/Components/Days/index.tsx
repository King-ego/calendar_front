import React from 'react';
import * as Interface from 'Common/Interfaces';
import { daytwodigit, DayWeek } from 'Common/data_fns_functions';
import * as StyledComponents from './style';

interface DaysProps extends Interface.ReactChildren {
  days: Interface.Days[];
  previousStep: () => void;
  selectDate: Interface.MonthYear;
}

const Days: React.FC<DaysProps> = ({
  days,
  selectDate,
  previousStep,
}): JSX.Element => {
  return (
    <div>
      Calendário de {selectDate?.year}
      <p onClick={previousStep}>voltar</p>
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
