import { useEffect, useState } from "react"
import CloudinaryUpload from '../features/users/CloudinaryUpload.js'

export default function Gallery(){
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        fetch("/pictures")
        .then(resp => resp.json())
        .then(images => setPictures(images))
    },[])

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

    const handleAddImage = (newImage) =>{
        setPictures([...pictures, newImage])
    }
    return(
        <div>
            {pictures.map(image => {
                return(
                <img key={image.id} src={image.picture_url} alt={image.id} />
                )
            })}
            <CloudinaryUpload
                style={{width: "20rem", height: "15rem"}}
                preset="liuppdte"
                handleUpload={handleUpload}
                buttonText="Add Gallery Picture"
            />
        </div>
    )
}