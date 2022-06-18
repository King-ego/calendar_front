import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponets from './style';

interface ModalProps extends Interface.ReactChildren {
  open: boolean;
  showModal?: () => void;
  haeder?: boolean;
}
const Modal: React.FC<ModalProps> = ({
  children,
  open,
  haeder,
  showModal,
}): JSX.Element => {
  return open ? (
    <StyledComponets.Container>
      <StyledComponets.Content>
        {haeder && (
          <StyledComponets.Close style={{ color: 'black' }} onClick={showModal}>
            <StyledComponets.TitleClose>X</StyledComponets.TitleClose>
          </StyledComponets.Close>
        )}
        {children}
      </StyledComponets.Content>
    </StyledComponets.Container>
  ) : (
    <></>
  );
};

export default Modal;
