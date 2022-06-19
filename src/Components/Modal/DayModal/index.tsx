import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Modal from '..';
import Icon from 'Components/Icon';
import { getUsersLogin, postDay } from 'Common/Http/Service/Login';
import { validatedDay } from 'Common/data_fns_functions';

interface DayProps extends Interface.ReactChildren {
  showModal: () => void;
  ismodal: boolean;
  month: { id?: string; name?: string };
  year?: string;
}

const DayModal: React.FC<DayProps> = ({
  ismodal,
  month,
  year,
  showModal,
}): JSX.Element => {
  const [loading, setLoading] = React.useState(true);
  const [dayList, setDayList] = React.useState<Interface.Days[]>([]);
  const day = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];
  const getDayUser = async () => {
    setLoading(true);
    try {
      const daysr = await getUsersLogin(`month/${month?.id}/day`);
      const days: Interface.Days[] = daysr?.data?.days?.filter(
        (e: Interface.Days) => e.month_id === month?.id
      );
      setDayList(days);
      console.log({ days });
    } catch (error) {}
    setLoading((state) => !state);
  };

  React.useEffect(() => {
    console.log({ erd: month?.name });
    if (month?.id) {
      getDayUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month?.id]);
  const createDay = async (name: string) => {
    const create = await postDay(`month/${month?.id}/day`, name);
    getDayUser();
    console.log({ create });
  };
  return (
    <Modal open={ismodal} haeder={true} showModal={showModal}>
      {day.map((value, index) => (
        <StyledComponents.Div
          key={value}
          style={{ display: 'flex' }}
          disabled={validatedDay(year, month.name, value)}
        >
          <StyledComponents.Color
            colorSelect={
              index < dayList?.length
                ? 'black'
                : index === dayList?.length
                ? 'green'
                : index > dayList?.length
                ? 'yellow'
                : ''
            }
          >
            {value}
          </StyledComponents.Color>
          <StyledComponents.ButtonIcrement
            disabled={
              loading
                ? loading
                : index < dayList?.length || index > dayList?.length
            }
            // disabled={index >= monthsList?.length}
            onClick={() => createDay(value)}
            // disabled={false}
            style={{ height: '19px', cursor: 'pointer' }}
          >
            <Icon width={15} height={15} name="increment" stroke="black" />
            {/* cria mes */}
          </StyledComponents.ButtonIcrement>
        </StyledComponents.Div>
      ))}
    </Modal>
  );
};

export default DayModal;
