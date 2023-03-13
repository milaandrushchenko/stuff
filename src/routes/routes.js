import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Home from "../components/Home/Home";
import SingleProduct from "../components/Products/SingleProduct";
import { ROUTES } from "../utils/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ROUTES.PRODUCT,
        element: <SingleProduct />,
      },
    ],
  },
]);

export default router;
