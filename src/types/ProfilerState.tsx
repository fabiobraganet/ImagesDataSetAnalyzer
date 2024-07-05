// src/types/ProfilerState.tsx
import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';
import { SecurityProfile, SecurityTokenParsed } from './security-types';

export interface ProfilerState {
  localBusiness: string | null;
  language: string;
  theme: 'light' | 'dark';
  notifications: string[];
  isAuthenticated: boolean;
  auth: {
    account: string | null;
    token: SecurityTokenParsed | null;
    expire: Date | null;
  };
  user: SecurityProfile | null;
  locale: typeof enUS | typeof ptBR;
}

export const initialState: ProfilerState = {
  localBusiness: null,
  language: 'enUS',
  theme: 'light',
  notifications: [],
  isAuthenticated: false,
  auth: { account: null, token: null, expire: null },
  user: null,
  locale: enUS,
};
