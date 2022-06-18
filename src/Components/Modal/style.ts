import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Close = styled.div`
  color: black;
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 10px;
`;

export const TitleClose = styled.button`
  background: red;
  cursor: pointer;
  border-radius: 30px;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.6;
  }
`;
