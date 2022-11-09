import React from "react";
import { useSelector } from "react-redux";
import CreateBlog from "../forms/CreateBlog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../styles/Blog.css";

export default function Blog({ handleShowBlog, handleNewBlog, blogs }) {
  const users = useSelector((store) => store.users);

  const displayBlog = blogs.map((blog) => {
    return (
      <div
        key={blog.id}
        className="blogColumn"
        onClick={() => handleShowBlog(blog)}
      >
        <h3 className="blogRow" style={{ marginBottom: "1px" }}>
          {blog.title}
        </h3>
        {users.user.id === blog.user.id && (
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              className="blogRow"
              style={{ color: "darkred", fontWeight: "bold", width: "50%" }}
            >
              Edit
            </Button>
            <Button
              variant="text"
              className="blogRow"
              style={{ color: "darkred", fontWeight: "bold", width: "20%" }}
            >
              Delete
            </Button>
          </Stack>
        )}
      </div>
    );
  });

  return (
    <>
      {users.user.id > 0 && <CreateBlog handleNewBlog={handleNewBlog} />}
      <br />
      {displayBlog}
    </>
  );
}
