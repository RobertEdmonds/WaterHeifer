import ResponseBlog from "./ResponseBlog";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ShowBlog({ blogs }) {
  const { id } = useParams();
  const history = useHistory()

  useEffect(() =>{
    history.push(`/blogs/${id}`)
  },[id, history])

  return (
    <>
      {blogs
        .filter((blog) => blog.id === parseInt(id))
        .map((blog) => {
          return (
            <div key={blog.id}>
              <div
                style={{
                  color: "white",
                  backgroundColor: "black",
                  marginLeft: "18rem",
                  width: "32rem",
                  textAlign: "center",
                }}
              >
                <h1>{blog.title}</h1>
                <h3>{blog.post}</h3>
              </div>
              <ResponseBlog
                // key={blog.title}
                respPost={blog.response_blogs}
                responder={blog.responders}
                blogId={parseInt(id)}
              />
            </div>
          );
        })}
    </>
  );
}
