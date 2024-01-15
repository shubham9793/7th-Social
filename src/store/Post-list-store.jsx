import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPost = [...currentPostList];

  if (action.type === "DELETE_POST") {
    newPost = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPost = [{ ...action.payload }, ...currentPostList];
  } else if (action.type === "ADD_INITIALS_POSTS") {
    newPost = [...action.payload.posts];
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIALS_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
