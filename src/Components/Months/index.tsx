import React from 'react';
import * as Interface from 'Common/Interfaces';
import type * as Types from 'Common/Types';
import * as StyledComponents from './style';
import { getUsersLogin } from 'Common/Http/Service/Login';
import DayModal from 'Components/Modal/DayModal';
import { useAplicationData } from 'Provider/AplicationData';
import { useAplicationDataView } from 'Provider/AplicationDataView';

interface MonthsProps extends Interface.ReactChildren {
  previousStep: () => void;
  nextStep: () => void;
  loadingPage: () => void;
}

const Months: React.FC<MonthsProps> = ({
  previousStep,
  loadingPage,
  nextStep,
}) => {
  const [isModal, setIsModal] = React.useState(false);
  const [monthModal, setMonthModal] = React.useState<{
    id?: string;
    name?: string;
  }>({});
  const { calendar, setCalendar } = useAplicationData();
  const { calendarView, setCalendarView } = useAplicationDataView();
  const getMonthDay = async (
    id: string | undefined,
    month: string | undefined
  ) => {
    loadingPage();
    try {
      const responseDay = await getUsersLogin(`/month/${id}/day`);

      const days: Interface.Days[] = responseDay?.data?.days;

      setCalendarView({
        ...(calendarView as Interface.MonthYear),
        month: month,
        month_id: id,
      });

      setCalendar({ ...(calendar as Interface.ResponseAxiosUser), days });
    } catch (error) {}
    loadingPage();
    nextStep();
  };

  const setInformationModal = (
    id: string | undefined = '',
    name: string | undefined = ''
  ) => {
    setMonthModal({ id, name });
    showModal();
  };

  function showModal() {
    setIsModal((show) => !show);
  }

  const redirectForDays = (
    e: Types.EventClick,
    id: string = '',
    year: string = ''
  ) => {
    if (e.target === e.currentTarget) getMonthDay(id, year);
  };

  return (
    <div>
      <div onClick={previousStep}>{calendarView?.year}</div>
      <StyledComponents.Months>
        {calendar?.months?.map((month) => (
          <StyledComponents.Content
            onClick={(e) => redirectForDays(e, month?.id, month?.name)}
            key={month?.id}
          >
            {month?.name}
            <button onClick={() => setInformationModal(month?.id, month?.name)}>
              open modal
            </button>
          </StyledComponents.Content>
        ))}
        <DayModal
          ismodal={isModal}
          showModal={showModal}
          month={monthModal}
          year={calendarView?.year}
        />
      </StyledComponents.Months>
    </div>
  );
};

export default Months;
