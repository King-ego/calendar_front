import React from 'react';
import { getUsersLogin } from 'Common/Http/Service/Login';
import * as StyledComponents from './style';
import { useNavigate } from 'react-router';
import { ResponseAxiosUser } from 'Common/Interfaces';
import UserModal from 'Components/Modal/UserModal';
import { useUserData } from 'Provider/UserData';

const Dashboard: React.FC = (): JSX.Element => {
  // const [users, setUsers] = React.useState<ResponseAxiosUser[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [isModal, setIsModal] = React.useState(false);
  const { user, setUser } = useUserData();

  const redirect = useNavigate();
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsersLogin('/calendarUser');

      const data: ResponseAxiosUser[] = response?.data?.users;

      setUser(data);
    } catch (error) {}
    setLoading(false);
  };

  const RedirectUser = (id?: string) => {
    redirect(`user/${id}`);
  };

  const showModal = () => {
    setIsModal((state) => !state);
  };

  React.useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledComponents.Box>
      {loading ? (
        <div>carregando...</div>
      ) : (
        user?.map((user) => (
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
      <button onClick={showModal}>Adicionar Usuario</button>
      <UserModal showModal={showModal} ismodal={isModal} />
    </StyledComponents.Box>
  );
};

export default Dashboard;
