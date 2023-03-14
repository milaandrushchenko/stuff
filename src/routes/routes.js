import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import SingleCategory from "../components/Categories/SingleCategory";
import Home from "../components/Home/Home";
import SingleProduct from "../components/Products/SingleProduct";
import Profile from "../components/Profile/Profile";
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
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTES.CATEGORY,
        element: <SingleCategory />,
      },
    ],
  },
]);

export default router;
