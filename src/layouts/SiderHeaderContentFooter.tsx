import React from 'react';
import { Layout } from 'antd';

type SiderHeaderContentFooterProps = {
  HeaderComponent: React.FC;
  SiderLeftComponent: React.FC;
  ContentComponent: React.FC;
  FooterComponent: React.FC;
};

const SiderHeaderContentFooter: React.FC<SiderHeaderContentFooterProps> = ({
  SiderLeftComponent,
  HeaderComponent,
  ContentComponent,
  FooterComponent,
}) => (
  <Layout>
    <SiderLeftComponent />
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
  </Layout>
);

export default SiderHeaderContentFooter;
