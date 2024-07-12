import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Site } from "./pages/Site";
import { App } from "./pages/App";
import { Home } from "./pages/Home";

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
        path: "app",
        element: <App />,
      },
    ],
  },
]);
