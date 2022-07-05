import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Modal from '..';
import { getUsersLogin, postMonth } from 'Common/Http/Service/Login';
import Icon from 'Components/Icon';

interface MonthModalProps extends Interface.ReactChildren {
  showModal: () => void;
  ismodal: boolean;
  yearId: string;
}

const MonthModal: React.FC<MonthModalProps> = ({
  showModal,
  ismodal,
  yearId,
}): JSX.Element => {
  const [monthsList, setMonthsList] = React.useState<Interface.Months[]>([]);
  const [loading, setLoading] = React.useState(true);
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
    setLoading(true);
    try {
      const monthsr = await getUsersLogin(`year/${yearId}/month`);
      const months: Interface.Months[] = monthsr?.data?.months;

      setMonthsList(months);
    } catch (error) {}
    setLoading((state) => !state);
  };

  const createMonth = async (name: string) => {
    await postMonth(`year/${yearId}/month`, name);
    getMonthsUser();
  };
  return (
    <Modal
      isCloseModal={true}
      open={ismodal}
      haeder={true}
      showModal={showModal}
    >
      {months.map((value: string, index: number) => (
        <StyledComponents.Div
          disabled={index >= monthsList?.length}
          key={value}
        >
          <div style={{ width: '64px', textTransform: 'capitalize' }}>
            {value}
          </div>
          <div style={{ marginLeft: '20px' }}>
            <StyledComponents.ButtonIcrement
              disabled={
                loading
                  ? loading
                  : index < monthsList?.length || index > monthsList?.length
              }
              onClick={() => createMonth(value)}
              style={{ height: '19px', cursor: 'pointer' }}
            >
              <Icon width={15} height={15} name="increment" stroke="black" />
            </StyledComponents.ButtonIcrement>
          </div>
        </StyledComponents.Div>
      ))}
    </Modal>
  );
};

export default MonthModal;
