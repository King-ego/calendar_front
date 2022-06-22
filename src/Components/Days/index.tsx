import React from 'react';
import * as Interface from 'Common/Interfaces';
import type * as Type from 'Common/Types';
import { daytwodigit, DayWeek } from 'Common/data_fns_functions';
import * as StyledComponents from './style';
import { getUsersLogin, updateDayTask } from 'Common/Http/Service/Login';
import { useAplicationData } from 'Provider/AplicationData';
import { useAplicationDataView } from 'Provider/AplicationDataView';

interface DaysProps extends Interface.ReactChildren {
  previousStep: () => void;
}

const Days: React.FC<DaysProps> = ({ previousStep }): JSX.Element => {
  const [state, setState] = React.useState<string | null>(null);
  const [swith, setSwith] = React.useState<string | undefined>(undefined);
  const { calendar, setCalendar } = useAplicationData();
  const { calendarView } = useAplicationDataView();

  const updateTask = async (
    day_id: string,
    month_id: string = '',
    task: string | null,
    defaultTask: string | null
  ) => {
    if (defaultTask === task) {
      setSwith(undefined);
      return;
    }
    try {
      await updateDayTask(`/month/${month_id}/day/${day_id}`, String(task));
      const responseDay = await getUsersLogin(`/month/${month_id}/day`);

      const days: Interface.Days[] = responseDay?.data?.days;

      setCalendar({ ...(calendar as Interface.ResponseAxiosUser), days });
    } catch (error) {}

    setSwith(undefined);
  };
  function change(e: Type.InputOnChange) {
    setState(e.target.value);
  }
  function getId(id: string) {
    setSwith(id);
  }
  return (
    <div>
      Calendário de {calendarView?.year}
      <p onClick={previousStep}>voltar</p>
      <div>
        {calendar?.days?.map((day) => (
          <StyledComponents.Flex key={day?.id}>
            <StyledComponents.Date>
              <p>
                {DayWeek(
                  calendarView?.year,
                  calendarView?.month,
                  day?.name
                )?.slice(0, 3)}
              </p>
              <p>
                {daytwodigit(day?.name)} de {calendarView?.month?.slice(0, 3)}
              </p>
            </StyledComponents.Date>
            <StyledComponents.Task>
              {swith && swith === day.id ? (
                <>
                  <input
                    id={day?.id}
                    type="text"
                    onChange={change}
                    defaultValue={day?.task ? day.task : ''}
                  />
                  <button
                    onClick={() =>
                      updateTask(
                        day?.id,
                        calendarView?.month_id,
                        state,
                        day?.task
                      )
                    }
                  >
                    {state === day?.task ? 'Voltar' : 'Salvar'}
                  </button>
                </>
              ) : (
                <p
                  style={{ textTransform: 'capitalize' }}
                  onClick={() => {
                    getId(day.id);
                    setState(day?.task);
                  }}
                >
                  {day?.task ? day.task : 'Empty'}
                </p>
              )}
            </StyledComponents.Task>
          </StyledComponents.Flex>
        ))}
      </div>
    </div>
  );
};

export default Days;
