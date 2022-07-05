import React from 'react';
import * as Interface from 'Common/Interfaces';
import Modal from '..';
import * as Submit from 'formik';
import { getUsersLogin, postUser } from 'Common/Http/Service/Login';
import { useUserData } from 'Provider/UserData';

interface UserModalProps extends Interface.ReactChildren {
  showModal: () => void;
  ismodal: boolean;
}

interface MyFormValues {
  name: string;
  type: string;
  password: string;
  email: string;
}

const UserModal: React.FC<UserModalProps> = ({
  showModal,
  ismodal,
}): JSX.Element => {
  const { setUser } = useUserData();

  const initialValues: MyFormValues = {
    email: '',
    name: '',
    password: '',
    type: '',
  };

  const onSubmit = async ({ email, name, password, type }: MyFormValues) => {
    await postUser('calendarUser', email, name, password, type);

    const response = await getUsersLogin('/calendarUser');

    const data: Interface.ResponseAxiosUser[] = response?.data?.users;

    setUser(data);
    showModal();
  };
  return (
    <Modal
      isCloseModal={true}
      haeder={true}
      showModal={showModal}
      open={ismodal}
    >
      <Submit.Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Submit.Form>
          <div>
            <Submit.Field
              type="text"
              placeholder="adicione um email"
              name="email"
            />
          </div>
          <div>
            <Submit.Field
              type="text"
              placeholder="adicione um name"
              name="name"
            />
          </div>
          <div>
            <Submit.Field
              type="text"
              placeholder="adicione um password"
              name="password"
            />
          </div>
          <div>
            <Submit.Field
              type="text"
              placeholder="adicione um type"
              name="type"
            />
          </div>
          <button type="submit">enviar</button>
        </Submit.Form>
      </Submit.Formik>
    </Modal>
  );
};

export default UserModal;
