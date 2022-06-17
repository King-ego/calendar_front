import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  /* height: 50px; */
  border-bottom: 1px solid #bebebe;
`;

export const Date = styled.div`
  background: #f8f8f8;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  p {
    font-family: 'Roboto Bold';
    font-weight: 700;
  }
`;

export const Task = styled.div`
  background: #e0e0e0;
  /* height: 100%; */
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background: rgb(224, 224, 224, 0.7);
  }
`;
