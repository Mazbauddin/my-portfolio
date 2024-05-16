import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPages";
import Home from "../Pages/Home/Home";
import AllFoods from "../Pages/AllFoods/AllFoods";
import SingleFood from "../Pages/SingleFood/SingleFood";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import Gallery from "../Pages/Gallery/Gallery";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import MyOrderedFood from "../Pages/MyOrderedFood/MyOrderedFood";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/singleFoodItem/:id",
        element: <SingleFood />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/singleFoodItem/${params.id}`),
      },
      {
        path: "/add-food",
        element: <AddFood />,
      },
      {
        path: "/my-added-food",
        element: <MyAddedFood />,
      },
      {
        path: "/my-ordered-food",
        element: <MyOrderedFood />,
      },
      {
        path: "/updated_Food/:id",
        element: <UpdateFood />,
      },
      {
        path: "/purchaseFood/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Route;
