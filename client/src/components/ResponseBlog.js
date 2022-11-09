import RespBlogForm from "../forms/RespBlogForm"

export default function ResponseBlog({responder, respPost, blogId}){
    return(
        <>
        <div>
            {respPost.map(post => {
                const person = responder.find(own => own.id === post.user_id)
                console.log(person)
                return(
                    <>
                        <h6>{person.name}</h6>
                        <p>{post.post}</p>
                    </>
                )
            })}
            <RespBlogForm blogId={blogId}/>
        </div>
        </>
    )
}