/* eslint-disable @typescript-eslint/no-explicit-any */
// src/App.tsx
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import getKeycloakInstance from './configurations/keycloak';
import Routers from './routers';
import { useProfilerDispatch } from './contexts/ProfilerContext';
import { SecurityProfile, SecurityTokenParsed } from './types/security-types';
import './App.css';

const App: React.FC = () => {
  const dispatch = useProfilerDispatch();
  const keycloak = getKeycloakInstance();

  const handleEvent = (
    event:
      | 'onReady'
      | 'onInitError'
      | 'onAuthError'
      | 'onAuthSuccess'
      | 'onAuthRefreshSuccess'
      | 'onAuthRefreshError'
      | 'onAuthLogout'
      | 'onTokenExpired',
    error?: any,
  ) => {
    switch (event) {
      case 'onAuthSuccess': {
        console.log('Authenticated');
        const tokenParsed = keycloak.tokenParsed as SecurityTokenParsed;
        const expirationDate = tokenParsed.exp
          ? new Date(tokenParsed.exp * 1000)
          : new Date(Date.now() + 3600 * 1000);

        const profile: SecurityProfile = {
          id: tokenParsed.sub,
          username: tokenParsed.preferred_username,
          email: tokenParsed.email,
          firstName: tokenParsed.given_name,
          lastName: tokenParsed.family_name,
        };

        dispatch({
          type: 'SET_AUTHENTICATION',
          payload: {
            account: tokenParsed.preferred_username,
            token: tokenParsed,
            expire: expirationDate,
          },
        });

        dispatch({
          type: 'SET_USER',
          payload: profile,
        });
        break;
      }
      case 'onAuthError':
      case 'onAuthLogout':
      case 'onTokenExpired':
        dispatch({ type: 'CLEAR_AUTHENTICATION' });
        break;
      default:
        break;
    }
    if (error) {
      console.error('Keycloak event error:', error);
    }
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: 'login-required',
        checkLoginIframe: false,
      }}
      onEvent={handleEvent}
    >
      <Routers />
    </ReactKeycloakProvider>
  );
};

export default App;
