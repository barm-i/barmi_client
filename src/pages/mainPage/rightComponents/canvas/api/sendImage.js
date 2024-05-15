import axios from "axios";

export const sendLetterImageToServer = async (canvasElement, apiPath) => {
  const imageData = canvasElement.toDataURL("image/png");
  // image string to blob 변환
  const imageBlob = await fetch(imageData).then((res) => res.blob());

  try {
    const formData = new FormData();
    formData.append("image", imageBlob, "canvas_image.png");

    const response = await axios.post(apiPath, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data); // response from server . 성공 시 200
  } catch (error) {
    console.error("error while sending canvas capture image :" + error);
  }
};
