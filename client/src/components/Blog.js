import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreateBlog from "../forms/CreateBlog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import "../styles/Blog.css";

export default function Blog({
  handleShowBlog,
  handleNewBlog,
  blogs,
  handleEditBlog,
  showBlogDelete,
}) {
  const users = useSelector((store) => store.users);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [edit, setEdit] = useState(false);
  const [blogId, setBlogId] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (users.user) {
      history.push("/blogs");
    }
  }, [users.user, history]);

  const handleBlogEdit = (e, blog) => {
    e.stopPropagation();
    setEdit(true);
    setTitle(blog.title);
    setPost(blog.post);
    setBlogId(blog.id);
  };

  const handleBlogDelete = (e, id) => {
    e.stopPropagation();
    fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    }).then(() => showBlogDelete(id));
  };

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
        {users.user && users.user.id === blog.user.id && (
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              className="blogRow"
              onClick={(e) => handleBlogEdit(e, blog)}
              style={{ color: "darkred", fontWeight: "bold", width: "50%" }}
            >
              Edit
            </Button>
            <Button
              variant="text"
              className="blogRow"
              onClick={(e) => handleBlogDelete(e, blog.id)}
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
      {users.user && (
        <CreateBlog
          handleNewBlog={handleNewBlog}
          title={title}
          setTitle={setTitle}
          post={post}
          setPost={setPost}
          edit={edit}
          setEdit={setEdit}
          blogId={blogId}
          handleEditBlog={handleEditBlog}
        />
      )}
      <div>
        <h3 style={{ textAlign: "center" }}>Click On Title To Open</h3>
      </div>
      <br />
      {displayBlog}
    </>
  );
}
