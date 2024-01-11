import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);

  // 1st way // if you want to fatch the data when your component rendred
  // const [fatchData, setFatchedData] = useState(false);

  // if (!fatchData) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //     });
  // }

  // 2nd way using useEffect

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        22;
        addInitialPost(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      <div className="row">
        {postList &&
          postList.map((post, index) => (
            <div key={index} className="col-md-6">
              <Post post={post} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PostList;
