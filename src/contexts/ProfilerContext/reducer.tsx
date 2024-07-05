// src/contexts/ProfilerContext/reducer.tsx
import { ProfilerState } from '../../types/ProfilerState';
import { ProfilerAction } from '../../types/ProfilerAction';

const profilerReducer = (
  state: ProfilerState,
  action: ProfilerAction,
): ProfilerState => {
  switch (action.type) {
    case 'SET_LOCAL_BUSINESS':
      return { ...state, localBusiness: action.payload };
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload.language,
        locale: action.payload.locale,
      };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification !== action.payload,
        ),
      };
    case 'SET_AUTHENTICATION':
      return {
        ...state,
        isAuthenticated: true,
        auth: {
          account: action.payload.account,
          token: action.payload.token,
          expire: action.payload.expire,
        },
      };
    case 'CLEAR_AUTHENTICATION':
      return {
        ...state,
        isAuthenticated: false,
        auth: { account: null, token: null, expire: null },
      };
    case 'SET_USER':
      return { ...state, user: action.payload };
    // case 'SET_LOGOUT': //FUTURO
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //     auth: {
    //       account: '',
    //       token: null,
    //       expire: null,
    //     },
    //     user: {
    //       id: '',
    //       username: '',
    //       email: '',
    //       firstName: '',
    //       lastName: '',
    //     },
    //   };
    default:
      return state;
  }
};

export default profilerReducer;
