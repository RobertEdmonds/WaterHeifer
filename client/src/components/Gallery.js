import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CloudinaryUpload from '../features/users/CloudinaryUpload.js'
import "../styles/Gallery.css"

export default function Gallery({pictures, handleAddImage}){
    const users = useSelector((store) => store.users);
    const history = useHistory()

    const handleUpload = (result) => {
        const form = {
            picture_url: result.info.secure_url
        }
        fetch("/pictures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            }).then(resp => resp.json())
            .then(image => handleAddImage(image))
    }

    useEffect(() => {
        if(users.user){
          history.push("/gallery");
        }
      },[users.user, history])


    return(
        <>
        {users.user && users.user.employee && (
            <CloudinaryUpload
                style={{width: "20rem", height: "15rem"}}
                preset="liuppdte"
                handleUpload={handleUpload}
                buttonText="Add Gallery Picture"
            />
            )}
            <br/>
            {pictures.map(image => {
                return(
                <img key={image.id} className="galleryImg" src={image.picture_url} alt={image.id} />
                )
            })}
        </>
    )
}