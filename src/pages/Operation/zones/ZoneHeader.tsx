// src/pages/Operation/zones/ZoneHeader.tsx
import React from 'react';
import { Layout } from 'antd';
import HeaderLogo from '../parts/HeaderLogo';
import HeaderCommand from '../parts/HeaderCommand';
import HeaderLocalBusiness from '../parts/HeaderLocalBusiness';
import HeaderMenuIcons from '../parts/HeaderMenuIcons';

const { Header } = Layout;

const ZoneHeader: React.FC = () => (
  <Header className="top">
    <Layout className="topStart">
      <HeaderLogo
        url="https://dummyimage.com/160x40/c0c0c0/0e0e0e.png&text=logo"
        label="Company Logo"
      />
    </Layout>
    <Layout className="topCenter">
      <HeaderLocalBusiness />
    </Layout>
    <Layout className="inputCommand">
      <HeaderCommand />
    </Layout>
    <Layout className="topEnd">
      <HeaderMenuIcons />
    </Layout>
  </Header>
);

export default ZoneHeader;
