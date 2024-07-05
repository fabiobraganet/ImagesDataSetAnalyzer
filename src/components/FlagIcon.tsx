import React from 'react';
import WorldFlag from 'react-world-flags';

interface FlagIconProps {
  code: string;
  size?: number;
}

const FlagIcon: React.FC<FlagIconProps> = ({ code, size = 32 }) => (
  <WorldFlag code={code} height={size} />
);

export default FlagIcon;
