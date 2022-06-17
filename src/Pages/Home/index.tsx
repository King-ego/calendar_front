import React from 'react';
import { getUsersLogin } from 'Common/Http/Service/Login';
import * as StyledComponents from './style';
import { useNavigate } from 'react-router';
import { ResponseAxiosUser } from 'Common/Interfaces';

const Dashboard: React.FC = (): JSX.Element => {
  const [users, setUsers] = React.useState<ResponseAxiosUser[]>([]);
  const [loading, setLoading] = React.useState(false);

  const redirect = useNavigate();
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsersLogin('/calendarUser');

      const data: ResponseAxiosUser[] = response?.data?.users;

      setUsers(data);
    } catch (error) {}
    setLoading(false);
  };

  const RedirectUser = (id?: string) => {
    redirect(`user/${id}`);
  };

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <StyledComponents.Box>
      {loading ? (
        <div>carregando...</div>
      ) : (
        users.map((user) => (
          <StyledComponents.Flex
            onClick={() => RedirectUser(user.id)}
            key={user.id}
          >
            <p>{user.email}</p>
            <p>{user.name}</p>
            <p>{user.password}</p>
            <p>{user.type}</p>
          </StyledComponents.Flex>
        ))
      )}
    </StyledComponents.Box>
  );
};

export default Dashboard;
