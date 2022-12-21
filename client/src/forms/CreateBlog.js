import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CreateBlog({
  handleNewBlog,
  title,
  setTitle,
  post,
  setPost,
  edit,
  setEdit,
  blogId,
  handleEditBlog,
}) {
  const [error, setError] = useState([]);

  const handleAddBlog = (e) => {
    e.preventDefault();
    setError([]);
    const form = {
      title,
      post,
    };
    fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((blog) => handleNewBlog(blog));
        setTitle("");
        setPost("");
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };

  const editBlog = (e) => {
    e.preventDefault();
    setError([]);
    const form = {
      title,
      post,
    };
    fetch(`/api/blogs/${blogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((blog) => handleEditBlog(blog));
        setTitle("");
        setPost("");
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
      <div className="createStyle">
        <Box
          sx={{
            width: 320,
            height: 275,
            backgroundColor: "primary.dark",
          }}
        >
          <h2
            style={{
              color: "white",
              fontFamily: "CopperPlate",
              paddingTop: "1rem",
            }}
          >
            Create Blog
          </h2>
          <form onSubmit={edit ? editBlog : handleAddBlog}>
            <label className="createLabel">
              Title <br />
              <input
                className=""
                style={{ width: "15rem" }}
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label className="createLabel">
              Start The Conversation
              <br />
              <textarea
                className="descriptionStyle"
                type="text"
                name="post"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </label>
            <Button
              variant="text"
              type="submit"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Start Conversation
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
}
