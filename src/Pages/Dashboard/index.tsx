import React from 'react';
import { useParams } from 'react-router-dom';
import { getUsersLogin } from 'Common/Http/Service/Login';
import { ResponseAxiosUser, Years } from 'Common/Interfaces';
import ListYears from 'Components/ListYears';
import { useAplicationData } from 'Provider/AplicationData';

const Home: React.FC = (): JSX.Element => {
  const params = useParams();
  const { calendar, setCalendar } = useAplicationData();
  const [message, setMessage] = React.useState('');
  const user = async () => {
    try {
      const dataUser = await getUsersLogin(`calendarUser/${params.id}`);
      const responseYear = await getUsersLogin(
        `/calendarUser/${params?.id}/year`
      );

      const user: ResponseAxiosUser = dataUser?.data?.user;

      const CompletedYears: Years[] = responseYear?.data?.years;
      const years = CompletedYears.filter((e) => e?.user_id === params?.id);

      setCalendar({ ...user, years });
      setMessage('Success');
    } catch {
      setMessage('Usuario não encontrado');
    }
  };

  React.useEffect(() => {
    user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !message ? (
    <div>carregando...</div>
  ) : !calendar?.id ? (
    <div>{message}</div>
  ) : (
    <ListYears />
  );
};

export default Home;
