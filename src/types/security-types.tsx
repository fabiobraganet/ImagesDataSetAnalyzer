/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/security-types.ts
export type SecurityOnLoad = 'login-required' | 'check-sso';
export type SecurityResponseMode = 'query' | 'fragment';
export type SecurityResponseType =
  | 'code'
  | 'id_token token'
  | 'code id_token token';
export type SecurityFlow = 'standard' | 'implicit' | 'hybrid';
export type SecurityPkceMethod = 'S256' | false;

export interface SecurityConfig {
  url?: string;
  realm: string;
  clientId: string;
}

export interface SecurityAcr {
  values: string[];
  essential: boolean;
}

export interface SecurityInitOptions {
  useNonce?: boolean;
  adapter?: 'default' | 'cordova' | 'cordova-native' | SecurityAdapter;
  onLoad?: SecurityOnLoad;
  token?: string;
  refreshToken?: string;
  idToken?: string;
  timeSkew?: number;
  checkLoginIframe?: boolean;
  checkLoginIframeInterval?: number;
  responseMode?: SecurityResponseMode;
  redirectUri?: string;
  silentCheckSsoRedirectUri?: string;
  silentCheckSsoFallback?: boolean;
  flow?: SecurityFlow;
  pkceMethod?: SecurityPkceMethod;
  acrValues?: string;
  enableLogging?: boolean;
  scope?: string;
  messageReceiveTimeout?: number;
  locale?: string;
  logoutMethod?: 'GET' | 'POST';
}

export interface SecurityLoginOptions {
  scope?: string;
  redirectUri?: string;
  prompt?: 'none' | 'login' | 'consent';
  action?: string;
  maxAge?: number;
  loginHint?: string;
  acr?: SecurityAcr;
  acrValues?: string;
  idpHint?: string;
  locale?: string;
  cordovaOptions?: { [optionName: string]: string };
}

export interface SecurityLogoutOptions {
  redirectUri?: string;
  logoutMethod?: 'GET' | 'POST';
}

export interface SecurityRegisterOptions
  extends Omit<SecurityLoginOptions, 'action'> {}

export interface SecurityAccountOptions {
  redirectUri?: string;
}

export interface SecurityError {
  error: string;
  error_description: string;
}

export interface SecurityAdapter {
  login(options?: SecurityLoginOptions): Promise<void>;
  logout(options?: SecurityLogoutOptions): Promise<void>;
  register(options?: SecurityRegisterOptions): Promise<void>;
  accountManagement(): Promise<void>;
  redirectUri(options: { redirectUri: string }, encodeHash: boolean): string;
}

export interface SecurityProfile {
  id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  enabled?: boolean;
  emailVerified?: boolean;
  totp?: boolean;
  createdTimestamp?: number;
  attributes?: Record<string, unknown>;
}

export interface SecurityTokenParsed {
  iss?: string;
  sub?: string;
  aud?: string;
  exp?: number;
  iat?: number;
  auth_time?: number;
  nonce?: string;
  acr?: string;
  amr?: string;
  azp?: string;
  session_state?: string;
  realm_access?: SecurityRoles;
  resource_access?: SecurityResourceAccess;
  [key: string]: any;
}

export interface SecurityResourceAccess {
  [key: string]: SecurityRoles;
}

export interface SecurityRoles {
  roles: string[];
}
