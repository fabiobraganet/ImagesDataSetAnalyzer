// src/types/ProfilerAction.tsx
import enUS from 'antd/lib/locale/en_US';
import ptBR from 'antd/lib/locale/pt_BR';
import { SecurityProfile, SecurityTokenParsed } from './security-types';

export type ProfilerAction =
  | { type: 'SET_LOCAL_BUSINESS'; payload: string }
  | {
      type: 'SET_LANGUAGE';
      payload: { language: string; locale: typeof enUS | typeof ptBR };
    }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'ADD_NOTIFICATION'; payload: string }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | {
      type: 'SET_AUTHENTICATION';
      payload: {
        account: string;
        token: SecurityTokenParsed;
        expire: Date | null;
      };
    }
  | { type: 'CLEAR_AUTHENTICATION' }
  | {
      type: 'SET_USER';
      payload: SecurityProfile;
    };
