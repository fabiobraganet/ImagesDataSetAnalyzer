import React from 'react';
import { Layout } from 'antd';

type HeaderContentSiderFooterProps = {
  HeaderComponent: React.FC;
  ContentComponent: React.FC;
  SiderRightComponent: React.FC;
  FooterComponent: React.FC;
};

const HeaderContentSiderFooter: React.FC<HeaderContentSiderFooterProps> = ({
  HeaderComponent,
  ContentComponent,
  SiderRightComponent,
  FooterComponent,
}) => (
  <Layout>
    <HeaderComponent />
    <ContentComponent />
    <SiderRightComponent />
    <FooterComponent />
  </Layout>
);

export default HeaderContentSiderFooter;
