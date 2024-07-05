// src/configurations/keycloak.tsx
import Keycloak from 'keycloak-js';

let keycloakInstance: Keycloak | null = null;

const getKeycloakInstance = (): Keycloak => {
  if (!keycloakInstance) {
    keycloakInstance = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    });
  }
  return keycloakInstance;
};

export const checkTokenValidity = () => {
  if (keycloakInstance && keycloakInstance.authenticated) {
    const { token, tokenParsed } = keycloakInstance;
    if (token && tokenParsed && tokenParsed.exp) {
      const expiry = tokenParsed.exp * 1000;
      if (Date.now() < expiry) {
        return true;
      }
    }
  }
  return false;
};

export default getKeycloakInstance;
