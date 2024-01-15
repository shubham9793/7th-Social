import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { createPostActions } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/postList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostActions,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
