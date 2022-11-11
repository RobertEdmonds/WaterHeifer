import { useState } from "react" 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RespBlogForm from "../forms/RespBlogForm"
import "../styles/ResponseBlog.css"

export default function ResponseBlog({respPost, responder, blogId}){
    const [posts, setPosts] = useState(respPost)
    const [writer, setWriter] = useState(responder)
    const handleAddResponse = (newBlog) => {
        setWriter([...writer, newBlog.user])
        setPosts([...posts, {id: newBlog.id, post: newBlog.post, user_id: newBlog.user_id}])
    }
    return(
        <>
        <div className="responseBlog">
            {posts.length === 0 && (
                <div className="blogPost" style={{textAlign: "center"}}>
                    <h3>BE THE FIRST TO RESPOND</h3>
                </div>
            )}
            {posts.map(post => {
                const foundWriter = writer.find(own => own.id === post.user_id)
                return(
                    <div className="blogPost" key={post.id}>
                        <h6 style={{marginBottom: "1px", marginTop: "1rem"}}>{foundWriter.name}</h6>
                        <p style={{marginTop: "5px", fontSize: "small"}}>{post.post}</p>
                        <Stack spacing={.3} direction="row">
                        <Button variant="text" >Edit</Button>
                        <Button variant="text">delete</Button>
                        </Stack>
                    </div>
                )
            })}
        </div>
        <RespBlogForm blogId={blogId} handleAddResponse={handleAddResponse}/>
        </>
    )
}