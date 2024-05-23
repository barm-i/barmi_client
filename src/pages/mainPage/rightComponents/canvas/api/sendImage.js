import axios from "axios";

export const sendLetterImageToServer = async (
  canvasTextElement,
  canvasUserElement,
  text,
  mode,
  apiPath
) => {
  // const imageData = canvasElement.toDataURL("image/png");
  const textCanvasImageData = canvasTextElement.toDataURL("image/png");
  const userCanvasImageData = canvasUserElement.toDataURL("image/png");
  const textContent = text;
  const flag = mode; //"game" or else

  // image string to blob 변환
  const textCanvasImageBlob = await fetch(textCanvasImageData).then((res) =>
    res.blob()
  );
  const userCanvasImageBlob = await fetch(userCanvasImageData).then((res) =>
    res.blob()
  );

  try {
    const formData = new FormData();
    formData.append("image", textCanvasImageBlob, "textCanvasImage.png");
    formData.append("image", userCanvasImageBlob, "userCanvasImage.png");
    formData.append("text", textContent);
    formData.append("flag", flag);

    const response = await axios.post(apiPath, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("error while sending canvas capture image :" + error);
  }
};
