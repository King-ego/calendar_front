import React from 'react';
// import { getUsersLogin } from 'Common/Http/Service/Login';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Days from 'Components/Days';
import Months from 'Components/Months';
import Years from 'Components/Years';

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

  const loadingPage = () => {
    setLoading((loading) => !loading);
  };

  function previousStep() {
    setStep((state) => state - 1);
  }

  function nextStep() {
    setStep((state) => state + 1);
  }

  return loading ? (
    <div>Carregando ...</div>
  ) : (
    <>
      {step === 0 && (
        <StyledComponents.Box>
          <div>
            {data?.years?.length ? (
              <Years
                years={data?.years}
                loadingPage={loadingPage}
                nextStep={nextStep}
                updateGeneralDate={setData}
                generalDate={data}
                updateView={setDateView}
                dateView={dateView}
              />
            ) : (
              <div>Nenhum Ano Econtrado</div>
            )}
          </div>
        </StyledComponents.Box>
      )}
      {step === 1 && (
        <div>
          {data?.months?.length ? (
            <div>
              <Months
                updateView={setDateView}
                dateView={dateView}
                months={data?.months}
                previousStep={previousStep}
                updateGeneralDate={setData}
                generalDate={data}
                nextStep={nextStep}
                loadingPage={loadingPage}
              />
            </div>
          ) : (
            <div>Nenhum Mês Encontrado</div>
          )}
        </div>
      )}
      {step === 2 && (
        <div>
          {data?.days?.length ? (
            <Days
              days={data?.days}
              selectDate={dateView}
              previousStep={previousStep}
            />
          ) : (
            <div>Nenhum Dia Encontrado</div>
          )}
        </div>
      )}
    </>
  );
};

export default ListYears;
