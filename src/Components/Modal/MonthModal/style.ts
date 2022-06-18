import styled from 'styled-components';

interface DivProps {
  disabled: boolean;
}

export const Div = styled.div<DivProps>`
  color: red;
  display: flex;
  height: 25px;
  color: ${({ disabled }) => (disabled ? 'green' : 'blue')};
`;

export const ButtonIcrement = styled.button<DivProps>`
  height: 25px;
  width: 25px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  border: 1px solid gray;
  background: coral;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;
