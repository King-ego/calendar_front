import React from 'react';
import { Imagem } from './style';
import * as Interface from 'Common/Interfaces';

interface ImageProps extends Interface.ReactChildren {
  icon: { name: string; width: number; height: number };
  ml?: number;
  mt?: number;
  mb?: number;
  mr?: number;
}

const Image: React.FC<ImageProps> = ({ icon, mb, ml, mt, mr }): JSX.Element => {
  return (
    <Imagem
      src={`/img/emoji-${icon.name}.png`}
      srcSet={`/img/emoji-${icon.name}@2x.png 2x, /img/emoji-${icon.name}@3x.png 3x`}
      width={icon.width}
      height={icon.height}
      alt="Emoji"
      ml={ml}
      mt={mt}
      mb={mb}
      mr={mr}
      // onLoad={load && load(false)}
    />
  );
};

export default Image;
