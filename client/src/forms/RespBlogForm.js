import { useState } from "react";
import Button from "@mui/material/Button";

export default function RespBlogForm({
  blogId,
  handleAddResponse,
  blogPost,
  setBlogPost,
  edit,
  setEdit,
  postId,
  setPostId,
  handleUpdatePost,
}) {
  const [error, setError] = useState([]);

  const handleResponse = (e) => {
    e.preventDefault();
    setError([]);
    const form = {
      post: blogPost,
      blog_id: blogId,
    };
    fetch("/api/response_blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((blog) => handleAddResponse(blog));
        setBlogPost("");
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    const form = {
      post: blogPost,
      blog_id: blogId,
    };
    fetch(`/api/response_blogs/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((post) => handleUpdatePost(post));
        setBlogPost("");
        setPostId(0);
        setEdit(false);
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };
  return (
    <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <div
        className="respFormStyle"
        style={{
          backgroundColor: "black",
          width: "20rem",
          textAlign: "center",
        }}
      >
        <form onSubmit={edit ? handleEditPost : handleResponse}>
          <label className="createLabel">
            <input
              className=""
              style={{ width: "10rem" }}
              type="text"
              name="post"
              value={blogPost}
              onChange={(e) => setBlogPost(e.target.value)}
            />
          </label>
          <Button
            variant="text"
            type="submit"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Post
          </Button>
        </form>
      </div>
    </>
  );
}
