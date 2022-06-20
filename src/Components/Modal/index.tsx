import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponets from './style';
import Icon from 'Components/Icon';

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
          <StyledComponets.Close onClick={showModal}>
            <StyledComponets.TitleClose>
              <Icon
                width="15"
                height="15"
                name="close-modal"
                stroke="#D9D9D9"
              />
            </StyledComponets.TitleClose>
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
