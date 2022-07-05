import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  &:nth-child(odd) {
    background-color: #f8f8f8;
  }
  &:nth-child(even) {
    background-color: #e0e0e0;
  }
  &:hover {
    background: #c7c7c7;
  }
`;
