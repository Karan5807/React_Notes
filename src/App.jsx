import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Pages/Layout";
import ViewPost from "./Pages/ViewPost";
import {Notfound} from "./Service";

function App() {
  const Routerdata = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home />,  },
        { path: "ViewPost", element: <ViewPost /> },
        { path: "About", element: <About /> },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={Routerdata} />
    </React.Fragment>
  );
}

export default App;