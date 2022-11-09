import ResponseBlog from "./ResponseBlog";

export default function ShowBlog({blogInfo}){
    console.log(blogInfo.id)
    return(
        <>
        <div>
            <h1>{blogInfo.title}</h1>
            <h3>{blogInfo.post}</h3>
        </div>
        <ResponseBlog responder={blogInfo.responders} blogId={blogInfo.id}/>
        </>
    )
} 