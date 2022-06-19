import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import { getUsersLogin } from 'Common/Http/Service/Login';
import DayModal from 'Components/Modal/DayModal';

interface MonthsProps extends Interface.ReactChildren {
  months: Interface.Months[];
  updateView: React.Dispatch<React.SetStateAction<Interface.MonthYear>>;
  dateView: Interface.MonthYear;
  previousStep: () => void;
  updateGeneralDate: React.Dispatch<
    React.SetStateAction<Interface.ResponseAxiosUser | undefined>
  >;
  generalDate: Interface.ResponseAxiosUser;
  nextStep: () => void;
  loadingPage: () => void;
}

const Months: React.FC<MonthsProps> = ({
  months,
  updateView,
  dateView,
  previousStep,
  generalDate,
  updateGeneralDate,
  loadingPage,
  nextStep,
}) => {
  const [isModal, setIsModal] = React.useState(false);
  const [monthModal, setMonthModal] = React.useState<{
    id?: string;
    name?: string;
  }>({});
  const getCompleteddata = async (
    id: string | undefined,
    month: string | undefined
  ) => {
    loadingPage();
    try {
      const responseDay = await getUsersLogin(`/month/${id}/day`);

      const days: Interface.Days[] = responseDay?.data?.days?.filter(
        (e: Interface.Days) => e.month_id === id
      );
      updateView({ ...dateView, month: month });
      updateGeneralDate({ ...generalDate, days });
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
  return (
    <div>
      <div onClick={previousStep}>{dateView?.year}</div>
      <StyledComponents.Months>
        {months.map((month) => (
          <StyledComponents.Content key={month?.id}>
            {month?.name}
            <button onClick={() => getCompleteddata(month?.id, month?.name)}>
              list day
            </button>
            <button onClick={() => setInformationModal(month?.id, month?.name)}>
              open modal
            </button>
          </StyledComponents.Content>
        ))}
        <DayModal
          ismodal={isModal}
          showModal={showModal}
          month={monthModal}
          year={dateView?.year}
        />
      </StyledComponents.Months>
    </div>
  );
};

export default Months;
