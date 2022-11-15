import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RespBlogForm from "../forms/RespBlogForm";
import "../styles/ResponseBlog.css";

export default function ResponseBlog({ respPost, responder, blogId }) {
  const [posts, setPosts] = useState(respPost);
  const [writer, setWriter] = useState(responder);
  const [edit, setEdit] = useState(false);
  const [blogPost, setBlogPost] = useState("");
  const [postId, setPostId] = useState(0);
  const users = useSelector((store) => store.users);
  const handleAddResponse = (newBlog) => {
    setWriter([...writer, newBlog.user]);
    setPosts([
      ...posts,
      { id: newBlog.id, post: newBlog.post, user_id: newBlog.user_id },
    ]);
  };

  const handlePostEdit = (e, oldPost) => {
    e.preventDefault();
    setEdit(true);
    setBlogPost(oldPost.post);
    setPostId(oldPost.id);
  };

  const handleUpdatePost = (updatePost) => {
    const updatedItem = posts.map((post) => {
      if (post.id === updatePost.id) {
        return updatePost;
      } else {
        return post;
      }
    });
    setPosts(updatedItem);
  };

  const handlePostDelete = (id) => {
    fetch(`/response_blogs/${id}`, {
      method: "DELETE",
    }).then(() => showPostDelete(id));
  };

  const showPostDelete = (id) => {
    const updatedItem = posts.filter((post) => post.id !== id);
    setPosts(updatedItem);
  };

  return (
    <>
      <div className="responseBlog">
        {posts.length === 0 && (
          <div className="blogPost" style={{ textAlign: "center" }}>
            <h3>BE THE FIRST TO RESPOND</h3>
          </div>
        )}
        {posts.map((post) => {
          const foundWriter = writer.find((own) => own.id === post.user_id);
          return (
            <div className="blogPost" key={post.id}>
              <h6 style={{ marginBottom: "1px", marginTop: "1rem" }}>
                {foundWriter.name}
              </h6>
              <p style={{ marginTop: "5px", fontSize: "small" }}>{post.post}</p>
              {users.user && users.user.id === post.user_id && (
              <Stack spacing={0.3} direction="row">
                <Button variant="text" onClick={(e) => handlePostEdit(e, post)}>
                  Edit
                </Button>
                <Button
                  variant="text"
                  onClick={() => handlePostDelete(post.id)}
                >
                  delete
                </Button>
              </Stack>
              )}
            </div>
          );
        })}
      </div>
      <RespBlogForm
        blogId={blogId}
        handleAddResponse={handleAddResponse}
        blogPost={blogPost}
        setBlogPost={setBlogPost}
        edit={edit}
        setEdit={setEdit}
        postId={postId}
        setPostId={setPostId}
        handleUpdatePost={handleUpdatePost}
      />
    </>
  );
}
