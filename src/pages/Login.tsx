import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { login, isAuthenticated } = useAuth();

  if(isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => login('login')}>Login</button>
    </div>
  );
}