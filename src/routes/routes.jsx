import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePages/Home/Home";
import MenuPages from "../pages/MenuPage/MenuPages";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Main />,
        errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element:<MenuPages/>
      }
        
    ],
  },
]);
export default router;
