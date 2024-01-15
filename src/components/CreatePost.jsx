import "bootstrap/dist/css/bootstrap.min.css";

import { Form, redirect, resolvePath, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const handleSubmit = (event) => {};

  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          User Id
        </label>
        <input
          type="text"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
            name="tags"
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
    </Form>
  );
};

export async function createPostActions(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => console.log(post));

  return redirect("/");
}

export default CreatePost;
