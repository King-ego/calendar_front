import React from 'react';
import * as Interface from 'Common/Interfaces';

interface IconProps extends Interface.ReactChildren {
  width?: number | string;
  height?: number | string;
  name: string;
  fill?: string;
  stroke?: string;
}
const Icon: React.FC<IconProps> = ({ name, fill, height, stroke, width }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`/img/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
