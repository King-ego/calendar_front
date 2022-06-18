import styled from 'styled-components';

export const Months = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border: 1px solid black;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: #c7c7c7;
  }
`;
