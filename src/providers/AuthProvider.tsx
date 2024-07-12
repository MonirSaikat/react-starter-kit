import { createContext, useEffect, useReducer } from "react";
import Cookies from 'js-cookie';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      dispatch({ type: 'LOGIN', payload: { token, user: { username: 'username' } } });
    }
  }, []);

  const login = async (credentials: object) => {
    const token = Math.random().toString(36);

    Cookies.set('auth_token', token, { expires: 7 });

    dispatch({ type: 'LOGIN', payload: { token, user: { username: 'username' } } });
  };

  const logout = () => {
    Cookies.remove('auth_token');
    dispatch({ type: 'LOGOUT' });
  };

  const value = { ...state, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};