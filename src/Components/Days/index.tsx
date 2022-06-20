import React from 'react';
import * as Interface from 'Common/Interfaces';
import type * as Type from 'Common/Types';
import { daytwodigit, DayWeek } from 'Common/data_fns_functions';
import * as StyledComponents from './style';
import { getUsersLogin, updateDayTask } from 'Common/Http/Service/Login';
import { useAplicationData } from 'Provider/AplicationData';

interface DaysProps extends Interface.ReactChildren {
  days: Interface.Days[];
  previousStep: () => void;
  selectDate: Interface.MonthYear;
  loadingPage: () => void;
}

const Days: React.FC<DaysProps> = ({
  days,
  selectDate,
  previousStep,
  loadingPage,
}): JSX.Element => {
  const [state, setState] = React.useState('');
  const [swith, setSwith] = React.useState(true);
  const { calendar, setCalendar } = useAplicationData();

  const updateTask = async (
    day_id: string,
    month_id: string = '',
    task: string | null
  ) => {
    loadingPage();
    try {
      await updateDayTask(`/month/${month_id}/day/${day_id}`, String(task));
      const responseDay = await getUsersLogin(`/month/${month_id}/day`);

      const days: Interface.Days[] = responseDay?.data?.days?.filter(
        (e: Interface.Days) => e.month_id === month_id
      );
      if (calendar) {
        setCalendar({ ...calendar, days });
      }
    } catch (error) {}
    loadingPage();
    setSwith((value) => !value);
  };
  function change(e: Type.InputOnChange) {
    setState(e.target.value);
  }
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
            <StyledComponents.Task>
              {swith ? (
                <p
                  style={{ textTransform: 'capitalize' }}
                  onClick={() => setSwith((value) => !value)}
                >
                  {day?.task ? day.task : 'Empty'}
                </p>
              ) : (
                <input
                  id={day?.id}
                  type="text"
                  onChange={change}
                  onBlur={() =>
                    updateTask(day?.id, selectDate?.month_id, state)
                  }
                  defaultValue={day?.task ? day.task : ''}
                />
              )}
            </StyledComponents.Task>
          </StyledComponents.Flex>
        ))}
      </div>
    </div>
  );
};

export default Days;
