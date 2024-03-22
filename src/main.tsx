import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Posts from "./components/Posts";
import { PostDetails } from "./components/PostDetails";
import ErrorPage from "./components/ErrorPage";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: async () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:postID",
        loader: async ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element: <PostDetails />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
