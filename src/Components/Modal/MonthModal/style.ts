import styled from 'styled-components';

interface DivProps {
  disabled: boolean;
}

export const Div = styled.div<DivProps>`
  color: red;
  color: ${({ disabled }) => (disabled ? 'green' : 'blue')};
`;
