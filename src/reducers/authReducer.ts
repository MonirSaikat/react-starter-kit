import { states } from "@providers/AuthProvider/states";

export const  authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return states;
    default:
      return state;
  }
}; 