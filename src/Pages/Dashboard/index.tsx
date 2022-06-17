import React from 'react';
import { useParams } from 'react-router-dom';
import { getUsersLogin } from 'Common/Http/Service/Login';
import { ResponseAxiosUser, Years } from 'Common/Interfaces';
import ListYears from 'Components/ListYears';

const Home: React.FC = (): JSX.Element => {
  const params = useParams();
  const [data, setData] = React.useState<ResponseAxiosUser>();
  const [message, setMessage] = React.useState('');
  const user = async () => {
    try {
      const dataUser = await getUsersLogin(`calendarUser/${params.id}`);
      const responseYear = await getUsersLogin(
        `/calendarUser/${params?.id}/year`
      );

      console.log({ responseYear });

      const user: ResponseAxiosUser = dataUser?.data?.user;

      const CompletedYears: Years[] = responseYear?.data?.years;
      const years = CompletedYears.filter((e) => e?.user_id === params?.id);

      setData({ ...user, years });
      setMessage('Success');
    } catch {
      setMessage('Usuario não encontrado');
    }
  };

  React.useEffect(() => {
    user();
    console.log('dlc');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !message ? (
    <div>carregando...</div>
  ) : !data?.id ? (
    <div>{message}</div>
  ) : (
    <ListYears data={data} setData={setData} />
    // <div onClick={select}>{data?.name}</div>
  );
};

export default Home;
