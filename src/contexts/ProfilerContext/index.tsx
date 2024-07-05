// src/contexts/ProfilerContext/index.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import profilerReducer from './reducer';
import { ProfilerState, initialState } from '../../types/ProfilerState';
import { ProfilerAction } from '../../types/ProfilerAction';
import getKeycloakInstance, {
  checkTokenValidity,
} from '../../configurations/keycloak';
import {
  SecurityProfile,
  SecurityTokenParsed,
} from '../../types/security-types';

type ProfilerContextProps = {
  state: ProfilerState;
  dispatch: React.Dispatch<ProfilerAction>;
};

const ProfilerContext = createContext<ProfilerContextProps | undefined>(
  undefined,
);

type ProfilerProviderProps = {
  children: ReactNode;
};

const loadStateFromLocalStorage = (): Partial<ProfilerState> => {
  try {
    const serializedState = localStorage.getItem('profilerState');
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (e) {
    console.error('Failed to load state from localStorage', e);
    return {};
  }
};

const loadLocalBusinessFromSessionStorage = (): string | null => {
  try {
    return sessionStorage.getItem('localBusiness');
  } catch (e) {
    console.error('Failed to load localBusiness from sessionStorage', e);
    return null;
  }
};

const saveStateToLocalStorage = (state: ProfilerState) => {
  try {
    const { localBusiness, ...persistedState } = state; 
    const serializedState = JSON.stringify(persistedState);
    localStorage.setItem('profilerState', serializedState);
  } catch (e) {
    console.error('Failed to save state to localStorage', e);
  }
};

const saveLocalBusinessToSessionStorage = (localBusiness: string | null) => {
  try {
    if (localBusiness) {
      sessionStorage.setItem('localBusiness', localBusiness);
    } else {
      sessionStorage.removeItem('localBusiness');
    }
  } catch (e) {
    console.error('Failed to save localBusiness to sessionStorage', e);
  }
};

export const ProfilerProvider: React.FC<ProfilerProviderProps> = ({
  children,
}) => {
  const loadedState = {
    ...initialState,
    ...loadStateFromLocalStorage(),
    localBusiness:
      loadLocalBusinessFromSessionStorage() || initialState.localBusiness,
  };
  const [state, dispatch] = useReducer(profilerReducer, loadedState);

  useEffect(() => {
    const keycloak = getKeycloakInstance();
    if (checkTokenValidity()) {
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
    }
  }, [dispatch]);

  useEffect(() => {
    saveStateToLocalStorage(state);
    saveLocalBusinessToSessionStorage(state.localBusiness);
  }, [state]);

  return (
    <ProfilerContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfilerContext.Provider>
  );
};

export const useProfiler = () => {
  const context = useContext(ProfilerContext);
  if (context === undefined) {
    throw new Error('useProfiler must be used within a ProfilerProvider');
  }
  return context.state;
};

export const useProfilerDispatch = () => {
  const context = useContext(ProfilerContext);
  if (context === undefined) {
    throw new Error(
      'useProfilerDispatch must be used within a ProfilerProvider',
    );
  }
  return context.dispatch;
};
