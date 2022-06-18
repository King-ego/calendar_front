import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponets from './style';

interface ModalProps extends Interface.ReactChildren {
  open: boolean;
}
const Modal: React.FC<ModalProps> = ({ children, open }): JSX.Element => {
  return open ? (
    <StyledComponets.Container>{children}</StyledComponets.Container>
  ) : (
    <></>
  );
};

export default Modal;
