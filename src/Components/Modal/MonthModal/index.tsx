import React from 'react';
// import * as StyledComponents from '.'
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Modal from '..';
import { getUsersLogin, postMonth } from 'Common/Http/Service/Login';

interface MonthModalProps extends Interface.ReactChildren {
  showModal: () => void;
  ismodal: boolean;
  yearId: string;
  years: Interface.Years[];
}

const MonthModal: React.FC<MonthModalProps> = ({
  showModal,
  ismodal,
  yearId,
  years,
}): JSX.Element => {
  const [monthsList, setMonthsList] = React.useState<Interface.Months[]>([]);
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  React.useEffect(() => {
    if (yearId) {
      getMonthsUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearId]);

  const getMonthsUser = async () => {
    const monthsr = await getUsersLogin(`year/${yearId}/month`);
    const months: Interface.Months[] = monthsr?.data?.months?.filter(
      (e: Interface.Months) => e.year_id === yearId
    );
    setMonthsList(months);
    console.log({ months });
  };

  const createMonth = async (name: string) => {
    const create = await postMonth(`year/${yearId}/month`, name);
    getMonthsUser();
    console.log({ create });
  };
  return (
    <Modal open={ismodal}>
      <p onClick={showModal} style={{ color: 'white' }}>
        {yearId}
      </p>
      {months.map((value: string, index: number) => (
        <StyledComponents.Div
          disabled={index >= monthsList?.length}
          key={value}
        >
          {value}

          <button
            disabled={index + 1 <= monthsList?.length}
            // disabled={index >= monthsList?.length}
            onClick={() => createMonth(value)}
          >
            cria mes
          </button>
        </StyledComponents.Div>
      ))}
    </Modal>
  );
};

export default MonthModal;
