import { createContext, useEffect, useReducer } from "react";
import Cookies from 'js-cookie';
import { authReducer } from "reducers/authReducer";
import { states } from "./states";

export const AuthContext = createContext(states);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, states);

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