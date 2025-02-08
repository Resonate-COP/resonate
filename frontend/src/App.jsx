import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Initial from "./layout/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Main from "./layout/Main";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Search from "./pages/Search";
import CreateReview from "./pages/CreateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial />,
  },
  { path: "/login", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "reviews", element: <Reviews /> },
      { path: "search", element: <Search /> },
      { path: ":songid/createReview", element: <CreateReview /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
