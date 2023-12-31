import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePages/Home/Home";
import MenuPages from "../pages/MenuPage/MenuPages";
import OrderPage from "../pages/OrderPage/OrderPage";
import LoginForm from "../pages/LoginPage/LoginForm";
import RegistrationForm from "../pages/LoginPage/RegistrationForm";
import Dashboard from "../layouts/DashBoard";
import MyCart from "../pages/DashBoard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuPages />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegistrationForm />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "all-users",
        element:<AllUsers/>
      }
    ],
  },
]);
export default router;
