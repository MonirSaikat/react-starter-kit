import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Site } from "./pages/Site";
import { App } from "./pages/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
