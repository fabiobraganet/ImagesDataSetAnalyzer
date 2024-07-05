import React from 'react';
import { ProfilerProvider } from '../../contexts/ProfilerContext';
import HeaderContentFooter from '../../layouts/HeaderContentFooter';
import Header from './zones/ZoneHeader';
import Content from './zones/ZoneContent';
import Footer from './zones/ZoneFooter';

const Operation: React.FC = () => (
  <ProfilerProvider>
    <HeaderContentFooter
      HeaderComponent={Header}
      ContentComponent={Content}
      FooterComponent={Footer}
    />
  </ProfilerProvider>
);

export default Operation;
