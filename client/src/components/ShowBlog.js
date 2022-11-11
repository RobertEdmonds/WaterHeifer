import ResponseBlog from "./ResponseBlog";

export default function ShowBlog({blogInfo}){

    return(
        <>
        <div style={{color: "white", backgroundColor: "black", marginLeft: "18rem", width: "32rem", textAlign: "center"}}>
            <h1>{blogInfo.title}</h1>
            <h3>{blogInfo.post}</h3>
        </div>
        <ResponseBlog respPost={blogInfo.response_blogs} responder={blogInfo.responders} blogId={blogInfo.id}/>
        </>
    )
} 