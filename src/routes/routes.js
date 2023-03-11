import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
