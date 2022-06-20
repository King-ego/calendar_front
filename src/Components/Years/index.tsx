import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import { getUsersLogin } from 'Common/Http/Service/Login';
import MonthModal from 'Components/Modal/MonthModal';
import { useAplicationData } from 'Provider/AplicationData';

interface YearsProps extends Interface.ReactChildren {
  years: Interface.Years[];
  nextStep: () => void;
  loadingPage: () => void;
  updateView: React.Dispatch<React.SetStateAction<Interface.MonthYear>>;
  dateView: Interface.MonthYear;
}

const Years: React.FC<YearsProps> = ({
  years,
  loadingPage,
  nextStep,
  dateView,
  updateView,
}): JSX.Element => {
  const [isModal, setIsModal] = React.useState(false);
  const [yearModal, setYearModal] = React.useState('');
  const { calendar, setCalendar } = useAplicationData();

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

      updateView({ ...dateView, year: `${year}` });
      if (calendar) {
        setCalendar({ ...calendar, months });
      }
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
      {years.map((year) => (
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
