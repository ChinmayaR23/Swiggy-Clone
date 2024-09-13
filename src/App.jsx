import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import Index from "./pages/Index";
import Error from "./pages/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./pages/CartPage";
import Login from "./components/Login";
import Signup from "./components/Signup"; // Make sure this import path is correct

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />
  },
  {
    path: "/home",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Index />,
        errorElement: <Error />,
      },
      {
        path: "/home/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/home/cart",
        element: <CartPage />,
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
