import styled from 'styled-components';

interface ImageDimensions {
  ml?: number;
  mt?: number;
  mb?: number;
  mr?: number;
}

export const Imagem = styled.img<ImageDimensions>`
  margin-top: ${(props) => props?.mt}px;
  margin-bottom: ${(props) => props?.mb}px;
  margin-left: ${(props) => props?.ml}px;
  margin-right: ${(props) => props?.mr}px;
`;
