import React from 'react';
import { getUsersLogin } from 'Common/Http/Service/Login';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Days from 'Components/Days';

interface ListProps extends Interface.ReactChildren {
  data: Interface.ResponseAxiosUser;
  setData: React.Dispatch<
    React.SetStateAction<Interface.ResponseAxiosUser | undefined>
  >;
}

const ListYears: React.FC<ListProps> = ({ data, setData }): JSX.Element => {
  const [step, setStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [dateView, setDateView] = React.useState<Interface.MonthYear>({});

  const getCompleteddata = async (
    type: string,
    id: string | undefined,
    date: string | number | undefined
  ) => {
    setLoading(true);
    try {
      if (type === 'year') {
        const responseMonth = await getUsersLogin(`/year/${id}/month`);

        const months: Interface.Months[] = responseMonth?.data?.months?.filter(
          (e: Interface.Months) => e.year_id === id
        );

        setDateView({ ...dateView, year: `${date}` });
        setData({ ...data, months });
      } else {
        const responseDay = await getUsersLogin(`/month/${id}/day`);

        const days: Interface.Days[] = responseDay?.data?.days?.filter(
          (e: Interface.Days) => e.month_id === id
        );
        setDateView({ ...dateView, month: String(date) });
        setData({ ...data, days });
      }
    } catch (error) {}
    nextStep();
    setLoading(false);
  };

  function previousStep() {
    setStep((state) => state - 1);
  }

  function nextStep() {
    setStep((state) => state + 1);
  }

  return (
    <>
      {step === 0 && (
        <StyledComponents.Box>
          {loading ? (
            <div>carregando...</div>
          ) : data?.years?.length ? (
            data?.years.map((year) => (
              <StyledComponents.Flex
                key={year?.id}
                onClick={() => getCompleteddata('year', year?.id, year?.name)}
              >
                {year?.name}
              </StyledComponents.Flex>
            ))
          ) : (
            <div>Nenhum Ano Econtrado</div>
          )}
        </StyledComponents.Box>
      )}
      {step === 1 &&
        (loading ? (
          <div>carregando...</div>
        ) : data?.months?.length ? (
          <div>
            {/* <StyledComponents.ListMonth> */}
            <div onClick={previousStep}>{dateView?.year}</div>
            <StyledComponents.Months>
              {data?.months.map((month) => (
                <StyledComponents.Content
                  key={month?.id}
                  onClick={() =>
                    getCompleteddata('month', month?.id, month?.name)
                  }
                >
                  {month?.name}
                </StyledComponents.Content>
              ))}
            </StyledComponents.Months>
            {/* </StyledComponents.ListMonth> */}
          </div>
        ) : (
          <div>Nenhum Mês Encontrado</div>
        ))}
      {step === 2 &&
        (loading ? (
          <div>carregando...</div>
        ) : data?.days?.length ? (
          <Days
            days={data?.days}
            selectDate={dateView}
            previousStep={previousStep}
          />
        ) : (
          <div>Nenhum Dia Encontrado</div>
        ))}
    </>
  );
};

export default ListYears;
