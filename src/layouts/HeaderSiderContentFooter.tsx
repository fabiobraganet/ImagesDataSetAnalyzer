import React from 'react';
import { Layout } from 'antd';

type HeaderSiderContentFooterProps = {
  HeaderComponent: React.FC;
  SiderLeftComponent: React.FC;
  ContentComponent: React.FC;
  FooterComponent: React.FC;
};

const HeaderSiderContentFooter: React.FC<HeaderSiderContentFooterProps> = ({
  HeaderComponent,
  SiderLeftComponent,
  ContentComponent,
  FooterComponent,
}) => (
  <Layout>
    <HeaderComponent />
    <SiderLeftComponent />
    <ContentComponent />
    <FooterComponent />
  </Layout>
);

export default HeaderSiderContentFooter;
