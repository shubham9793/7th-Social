import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import "../../src/App.css";
import { PostList } from "../store/Post-list-store";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="postContainer">
      <div className="card postCard mb-4 originalCard">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="badge bg-danger cursor-pointer"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">{truncateText(post.body, 50)}</p>
          <div className="d-flex flex-wrap mb-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="alert alert-success reactions" role="alert">
            Liked by {post.reactions} people
          </div>
        </div>
      </div>
      <div className="expandedCard">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="badge bg-danger cursor-pointer"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">{post.body}</p>
          <div className="d-flex flex-wrap mb-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="badge bg-primary me-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="alert alert-success reactions" role="alert">
            Liked by {post.reactions} people
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
