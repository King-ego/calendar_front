import React from 'react';
import * as Interface from 'Common/Interfaces';
import Modal from '..';
import * as Submit from 'formik';
import { getUsersLogin, postYear } from 'Common/Http/Service/Login';
import { useParams } from 'react-router-dom';
import { useAplicationData } from 'Provider/AplicationData';

interface YearModalProps extends Interface.ReactChildren {
  showModal: () => void;
  ismodal: boolean;
}

interface MyFormValues {
  year?: string;
}

const YearModal: React.FC<YearModalProps> = ({
  ismodal,
  showModal,
}): JSX.Element => {
  const params = useParams();
  const { calendar, setCalendar } = useAplicationData();
  const onSubmit = async (e: MyFormValues) => {
    if (!Number(e.year) || Number(e.year) < 1900) {
      alert('não é um numero ou é menor que 1900');
      return;
    }

    await postYear(`/calendarUser/${params?.id}/year`, Number(e.year));

    const responseYear = await getUsersLogin(
      `/calendarUser/${params?.id}/year`
    );

    const CompletedYears: Interface.Years[] = responseYear?.data?.years;
    const years = CompletedYears;

    setCalendar({ ...(calendar as Interface.ResponseAxiosUser), years });

    showModal();
  };
  const initialValues: MyFormValues = { year: '' };
  return (
    <Modal haeder={true} open={ismodal} showModal={showModal}>
      <Submit.Formik
        onSubmit={(values) => onSubmit(values)}
        initialValues={initialValues}
      >
        <Submit.Form>
          <Submit.Field type="text" placeholder="adicione um ano" name="year" />
          <button type="submit">enviar</button>
        </Submit.Form>
      </Submit.Formik>
    </Modal>
  );
};

export default YearModal;
