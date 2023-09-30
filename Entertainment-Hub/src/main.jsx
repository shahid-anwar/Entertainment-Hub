import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Movies from "./Pages/Movies/Movies.jsx";
import Series from "./Pages/Series/Series.jsx";
// import Trending from "./Pages/Trending/Trending.jsx";
import Searches from "./Pages/Search/Searches";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trending",
    element: <App />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/search",
    element: <Searches />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
