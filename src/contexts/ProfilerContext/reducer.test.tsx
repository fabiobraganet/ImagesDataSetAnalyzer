// import { profilerReducer, initialState } from './reducer';
// import { ProfilerAction } from '../../types/ProfilerAction';

// describe('Profiler Reducer', () => {
//   it('should set local business', () => {
//     const action: ProfilerAction = {
//       type: 'SET_LOCAL_BUSINESS',
//       payload: 'business1',
//     };
//     const newState = profilerReducer(initialState, action);
//     expect(newState.localBusiness).toBe('business1');
//   });

//   it('should set language locale', () => {
//     const action: ProfilerAction = {
//       type: 'SET_LANGUAGE_LOCALE',
//       payload: 'pt',
//     };
//     const newState = profilerReducer(initialState, action);
//     expect(newState.languageLocale).toBe('pt');
//   });

//   it('should set theme', () => {
//     const action: ProfilerAction = { type: 'SET_THEME', payload: 'dark' };
//     const newState = profilerReducer(initialState, action);
//     expect(newState.theme).toBe('dark');
//   });

//   it('should add notification', () => {
//     const action: ProfilerAction = {
//       type: 'ADD_NOTIFICATION',
//       payload: 'New message',
//     };
//     const newState = profilerReducer(initialState, action);
//     expect(newState.notifications).toContain('New message');
//   });

//   it('should remove notification', () => {
//     const initialStateWithNotification = {
//       ...initialState,
//       notifications: ['New message'],
//     };
//     const action: ProfilerAction = {
//       type: 'REMOVE_NOTIFICATION',
//       payload: 'New message',
//     };
//     const newState = profilerReducer(initialStateWithNotification, action);
//     expect(newState.notifications).not.toContain('New message');
//   });

//   it('should set authentication', () => {
//     const authData = { account: 'user1', token: 'abc123', expire: new Date() };
//     const action: ProfilerAction = {
//       type: 'SET_AUTHENTICATION',
//       payload: authData,
//     };
//     const newState = profilerReducer(initialState, action);
//     expect(newState.isAuthenticated).toBe(true);
//     expect(newState.auth).toEqual(authData);
//   });

//   it('should clear authentication', () => {
//     const initialStateWithAuth = {
//       ...initialState,
//       isAuthenticated: true,
//       auth: { account: 'user1', token: 'abc123', expire: new Date() },
//     };
//     const action: ProfilerAction = { type: 'CLEAR_AUTHENTICATION' };
//     const newState = profilerReducer(initialStateWithAuth, action);
//     expect(newState.isAuthenticated).toBe(false);
//     expect(newState.auth).toEqual({ account: null, token: null, expire: null });
//   });

//   it('should set user', () => {
//     const userData = {
//       avatar: 'avatar.png',
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//     };
//     const action: ProfilerAction = { type: 'SET_USER', payload: userData };
//     const newState = profilerReducer(initialState, action);
//     expect(newState.user).toEqual(userData);
//   });
// });
