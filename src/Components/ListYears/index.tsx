import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponents from './style';
import Days from 'Components/Days';
import Months from 'Components/Months';
import Years from 'Components/Years';
import { useAplicationData } from 'Provider/AplicationData';
import { useNavigate } from 'react-router-dom';
import YearModal from 'Components/Modal/YearModal';

interface ListProps extends Interface.ReactChildren {}

const ListYears: React.FC<ListProps> = (): JSX.Element => {
  const [step, setStep] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [modalYear, setIsModalYear] = React.useState(false);
  const { calendar } = useAplicationData();

  const redirect = useNavigate();

  const loadingPage = () => {
    setLoading((loading) => !loading);
  };

  function showModalYear() {
    setIsModalYear((show) => !show);
  }

  function previousStep() {
    setStep((state) => state - 1);
  }

  function nextStep() {
    setStep((state) => state + 1);
  }

  const RedirectUser = () => {
    redirect(`/`);
  };

  return loading ? (
    <div>Carregando ...</div>
  ) : (
    <>
      {step === 0 && (
        <StyledComponents.Box>
          <div>
            {calendar?.years?.length ? (
              <Years loadingPage={loadingPage} nextStep={nextStep} />
            ) : (
              <>
                <div>Nenhum Ano Econtrado</div>
                <div onClick={RedirectUser}>{'<-'}voltar</div>
              </>
            )}
            <button onClick={() => setIsModalYear(true)}>Adicionar Ano</button>
          </div>
        </StyledComponents.Box>
      )}
      {step === 1 && (
        <div>
          {calendar?.months?.length ? (
            <div>
              <Months
                previousStep={previousStep}
                nextStep={nextStep}
                loadingPage={loadingPage}
              />
            </div>
          ) : (
            <>
              <div>Nenhum Mês Encontrado</div>
              <div onClick={previousStep}>{'<-'}voltar</div>
            </>
          )}
        </div>
      )}
      {step === 2 && (
        <div>
          {calendar?.days?.length ? (
            <Days previousStep={previousStep} />
          ) : (
            <>
              <div>Nenhum Dia Encontrado</div>
              <div onClick={previousStep}>{'<-'}voltar</div>
            </>
          )}
        </div>
      )}
      <YearModal showModal={showModalYear} ismodal={modalYear} />
    </>
  );
};

export default ListYears;
