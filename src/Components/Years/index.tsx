import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import { getUsersLogin } from 'Common/Http/Service/Login';
import MonthModal from 'Components/Modal/MonthModal';
import { useAplicationData } from 'Provider/AplicationData';
import { useAplicationDataView } from 'Provider/AplicationDataView';

interface YearsProps extends Interface.ReactChildren {
  nextStep: () => void;
  loadingPage: () => void;
}

const Years: React.FC<YearsProps> = ({
  loadingPage,
  nextStep,
}): JSX.Element => {
  const [isModal, setIsModal] = React.useState(false);
  const [yearModal, setYearModal] = React.useState('');
  const { calendar, setCalendar } = useAplicationData();
  const { calendarView, setCalendarView } = useAplicationDataView();

  const getCompleteddata = async (
    id: string | undefined,
    year: string | number | undefined
  ) => {
    loadingPage();
    try {
      const responseMonth = await getUsersLogin(`/year/${id}/month`);

      const months: Interface.Months[] = responseMonth?.data?.months?.filter(
        (e: Interface.Months) => e.year_id === id
      );

      setCalendarView({
        ...(calendarView as Interface.MonthYear),
        year: `${year}`,
      });

      setCalendar({ ...(calendar as Interface.ResponseAxiosUser), months });
    } catch (error) {}
    nextStep();
    loadingPage();
  };

  function showModal() {
    setIsModal((show) => !show);
  }

  const setInformationModal = (id: string | undefined = '') => {
    setYearModal(id);
    showModal();
  };
  return (
    <div>
      {calendar?.years.map((year) => (
        <StyledComponents.Flex key={year?.id}>
          {year?.name}
          <button onClick={() => getCompleteddata(year?.id, year?.name)}>
            {'>'}
          </button>
          <button onClick={() => setInformationModal(year?.id)}>+</button>
        </StyledComponents.Flex>
      ))}
      <MonthModal showModal={showModal} ismodal={isModal} yearId={yearModal} />
    </div>
  );
};

export default Years;
