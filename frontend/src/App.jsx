import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Initial from "./layout/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    index: true,
    element: <Initial />,
  },
  { path: "/login", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
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
