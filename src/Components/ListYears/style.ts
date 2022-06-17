import styled from 'styled-components';

export const Box = styled.div`
  border: 1px solid gray;
`;

export const Flex = styled.div`
  display: flex;
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

// export const ListMonth = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;

//   /* max-width: 900px; */
// `;

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
