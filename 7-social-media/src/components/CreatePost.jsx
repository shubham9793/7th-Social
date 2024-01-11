import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value
      .split(/(\s+)/)
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          placeholder="Enter your userId here."
          className="form-control"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          placeholder="How are you feeling today..."
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          rows={4}
          placeholder="tel us more about it."
          className="form-control"
          id="postBody"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          placeholder="How many pepole reacted on this post."
          className="form-control"
          id="reactions"
        />

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your tags
          </label>
          <input
            ref={tagsElement}
            type="text"
            placeholder="How are you feeling today..."
            className="form-control"
            id="tags"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
