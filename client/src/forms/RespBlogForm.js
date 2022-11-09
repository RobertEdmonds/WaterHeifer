import { useState } from "react";
import Button from "@mui/material/Button";

export default function RespBlogForm({blogId}){
    const [post, setPost] = useState("")
    const [error, setError] = useState([])

    const handleResponse = (e) => {
        e.preventDefault()
        setError([])
        const form = {
            post,
            blog_id: blogId
        }
        fetch("/response_blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then(resp => {
            if(resp.ok){
                resp.json().then(blog => console.log(blog))
            }else{
                resp.json().then(err => setError(err.errors))
            }
        })
    }
    return(
        <>
             <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <div className="responseStyle">
          <form onSubmit={handleResponse}>
            <label className="createLabel">
              <input
                className=""
                style={{ width: "15rem" }}
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
              Post
            </Button>
          </form>
        </div>
        </>
    )
}