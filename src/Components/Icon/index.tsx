import React from 'react';
import * as Interface from 'Common/Interfaces';

interface IconProps extends Interface.ReactChildren {
  width?: number | string;
  height?: number | string;
  name: string;
  fill?: string;
  stroke?: string;
}
const Icon: React.FC<IconProps> = (props) => {
  const { width, height, name, fill, stroke } = props;

  return (
    <svg width={width} height={height} fill={fill} stroke={stroke} {...props}>
      <use href={`/img/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
