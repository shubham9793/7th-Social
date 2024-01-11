import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: (postId) => {},
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

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
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
        postList: postList,
        addPost: addPost,
        addInitialPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Frinds,I am going to mumbai for my vacations",
//     reactions: 12,
//     userId: "user_12",
//     tags: ["vacation", "Mumbai", "Enjoing"],
//   },
//   {
//     id: "2",
//     title: "Going to Office",
//     body: "Hi Frinds,I am going to Office for my work",
//     reactions: 13,
//     userId: "User_10",
//     tags: ["Office", "Mumbai", "Work"],
//   },
// ];

export default PostListProvider;
