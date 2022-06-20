import React from 'react';
// import { getUsersLogin } from 'Common/Http/Service/Login';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Days from 'Components/Days';
import Months from 'Components/Months';
import Years from 'Components/Years';
import { useAplicationData } from 'Provider/AplicationData';

interface ListProps extends Interface.ReactChildren {}

const ListYears: React.FC<ListProps> = (): JSX.Element => {
  const [step, setStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [dateView, setDateView] = React.useState<Interface.MonthYear>({});
  const { calendar } = useAplicationData();

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
            {calendar?.years?.length ? (
              <Years
                years={calendar?.years}
                loadingPage={loadingPage}
                nextStep={nextStep}
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
          {calendar?.months?.length ? (
            <div>
              <Months
                updateView={setDateView}
                dateView={dateView}
                months={calendar?.months}
                previousStep={previousStep}
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
          {calendar?.days?.length ? (
            <Days
              days={calendar?.days}
              selectDate={dateView}
              previousStep={previousStep}
              loadingPage={loadingPage}
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
