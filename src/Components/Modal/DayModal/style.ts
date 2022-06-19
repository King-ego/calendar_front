import styled from 'styled-components';

interface DivProps {
  disabled: boolean;
}

export const Div = styled.div<DivProps>`
  pointer-events: ${({ disabled }) => disabled && 'none'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const Color = styled.div<{ colorSelect: string }>`
  color: ${({ colorSelect }) => colorSelect};
  font-weight: 500;
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
