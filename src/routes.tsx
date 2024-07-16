import { App } from "@pages/App";
import { Components } from "@pages/Components";
import { Elements } from "@pages/Elements";
import { Home } from "@pages/Home";
import { Site } from "@pages/Site";
import { createBrowserRouter } from "react-router-dom";
import Root from "Root";

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
        path: "components",
        element: <Components />,
      },
      {
        path: "elements",
        element: <Elements />,
      },
      {
        path: "app",
        element: <App />,
      },
    ],
  },
]);
