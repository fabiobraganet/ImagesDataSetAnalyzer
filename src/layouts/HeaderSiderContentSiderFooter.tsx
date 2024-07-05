import React from 'react';
import { Layout } from 'antd';

type HeaderSiderContentSiderFooterProps = {
  HeaderComponent: React.FC;
  SiderLeftComponent: React.FC;
  ContentComponent: React.FC;
  SiderRightComponent: React.FC;
  FooterComponent: React.FC;
};

const HeaderSiderContentSiderFooter: React.FC<
  HeaderSiderContentSiderFooterProps
> = ({
  HeaderComponent,
  SiderLeftComponent,
  ContentComponent,
  SiderRightComponent,
  FooterComponent,
}) => (
  <Layout>
    <HeaderComponent />
    <SiderLeftComponent />
    <ContentComponent />
    <SiderRightComponent />
    <FooterComponent />
  </Layout>
);

export default HeaderSiderContentSiderFooter;
