import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./root";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NewsPage from "./components/NewsPage";
import NewsContent from "./components/NewsContent";
import ContactPage from "./components/ContactPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
        loader: async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
          );

          const data = await response.json();

          return { data };
        },
      },
      {
        path: "/news/:id",
        element: <NewsContent />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          const data = await response.json();

          return { id: params.id, title: data.title, body: data.body };
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const fullname = formData.get("fullname");

          return { fullname, id: 999 };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
