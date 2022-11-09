import RespBlogForm from "../forms/RespBlogForm"

export default function ResponseBlog({responder, blogId}){
    return(
        <>
        <div>
            {responder.map(post => {
                return(
                    <>
                        <h1>{post}</h1>
                    </>
                )
            })}
            <RespBlogForm blogId={blogId}/>
        </div>
        </>
    )
}