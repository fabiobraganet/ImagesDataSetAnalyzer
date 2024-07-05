import React from 'react';

type HeaderLogoProps = {
  url: string;
  label: string;
};

const HeaderLogo: React.FC<HeaderLogoProps> = ({ url, label }) => (
  <>
    <img src={url} alt={label} style={{ height: '36px' }} />
  </>
);

export default HeaderLogo;
