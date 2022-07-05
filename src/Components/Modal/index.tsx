import React from 'react';
import * as Interface from 'Common/Interfaces';
import * as StyledComponets from './style';
import Icon from 'Components/Icon';

interface ModalProps extends Interface.ReactChildren {
  open: boolean;
  showModal?: () => void;
  haeder?: boolean;
  isCloseModal: boolean;
}
const Modal: React.FC<ModalProps> = ({
  children,
  open,
  haeder,
  showModal,
  isCloseModal,
}): JSX.Element => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;
    if (showModal && isCloseModal) showModal();
  };
  return open ? (
    <StyledComponets.Container id="modal-close" onClick={closeModal}>
      <StyledComponets.Content>
        {haeder && (
          <StyledComponets.Close>
            <StyledComponets.TitleClose onClick={showModal}>
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
