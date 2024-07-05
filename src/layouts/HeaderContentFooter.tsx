import React from 'react';
import { Layout } from 'antd';

type HeaderContentFooterProps = {
  HeaderComponent: React.FC;
  ContentComponent: React.FC;
  FooterComponent: React.FC;
};

const HeaderContentFooter: React.FC<HeaderContentFooterProps> = ({
  HeaderComponent,
  ContentComponent,
  FooterComponent,
}) => (
  <Layout>
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
  </Layout>
);

export default HeaderContentFooter;
