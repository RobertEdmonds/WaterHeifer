import React, { useEffect } from "react";

function CloudinaryUpload({
  preset,
  handleUpload,
  buttonText
}) {
  useEffect(() => {
    window.myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "drxlbdusb",
        uploadPreset: preset,
        prepareUploadParams: (cb, params) => {
          params = [].concat(params);  //params can be a single object or an array of objects
          Promise.all(params.map((body) => {
            return fetch("/api/uploads/prepare", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            })
              .then(res => res.json())
          }))
            .then((results) =>
              cb(results.length === 1 ? results[0] : results)
            );
        }
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          handleUpload && handleUpload(result);
          window.myWidget.close();
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        window.myWidget.open();
      },
      false
    );
  }, [preset, handleUpload]);

  return (
    <button id="upload_widget">
      {buttonText}
    </button>
  );
}

export default CloudinaryUpload;