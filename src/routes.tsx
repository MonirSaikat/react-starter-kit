import { App } from "@pages/app/App";
import { AppPages } from "@pages/AppPages";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Site } from "@pages/Site";
import { createBrowserRouter } from "react-router-dom";
import Cookies from 'js-cookie';
import Root from "Root";

const isAuthenticated = () => {
  return !!Cookies.get('auth_token');
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "site",
        element: <Site />,
      },
      {
        path: "login",
        element: <Login />,
      },

      // private routes
      {
        path: "app",
        element: <AppPages isAuthenticated={isAuthenticated()} />,
        children: [
          {
            index: true,
            element: <App />
          }
        ]
      },
    ],
  },
]);
