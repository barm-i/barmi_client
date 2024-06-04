import axios from "axios";
import Swal from "sweetalert2";
// const SERVER_URL = "https://barmi-server.onrender.com";
// const SOCKET_URL = "wss://barmi-server.onrender.com";
const SERVER_URL = "http://localhost:8080";
const SOCKET_URL = "ws://localhost:8080";

export class MyPage {
  containerElement;
  fontSelectWrapper;
  fontContainer;
  previewCanvas;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode() {
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add(
      "component-class",
      "mypage",
      "mypage-wrapper"
    );

    this.fontSelectWrapper = document.createElement("div");
    this.fontSelectWrapper.classList.add("font-select-wrapper");

    this.fontContainer = document.createElement("div");
    this.fontContainer.classList.add("font-select-container");
    this.createFontSelector([
      "Share",
      "Share2",
      "Gulim",
      "GaramFlower",
      "Gomshinche",
      "Ttobagttobag",
      "Bareunjeongsin",
      "Okbiche",
    ]); // 예시 폰트 목록
    this.fontSelectWrapper.appendChild(this.fontContainer);
    this.containerElement.appendChild(this.fontSelectWrapper);
  }

  updateFontPreview(selectedFont) {
    var selected = "30px " + selectedFont;
    console.log(selected);
    var ctx = this.previewCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.previewCanvas.width, this.previewCanvas.height);
    ctx.font = selected;
    ctx.fillStyle = "#000";
    ctx.fillText("선택된 폰트입니다.", 10, 50);
  }

  createFontSelector(fontOptions) {
    var select = document.createElement("select");
    select.setAttribute("id", "fontSelect");
    select.classList.add("font-select");

    var currentFont = document.createElement("p");
    currentFont.innerText = "현재 폰트: " + localStorage.getItem("font");

    this.previewCanvas = document.createElement("canvas");
    this.previewCanvas.classList.add("font-preview-canvas");
    this.previewCanvas.width = 500;
    this.previewCanvas.height = 100;

    var fontSelectButton = document.createElement("button");
    fontSelectButton.classList.add("font-select-button");
    fontSelectButton.innerText = "선택";

    select.classList.add("font-select");

    fontOptions.forEach(function (font) {
      var option = document.createElement("option");
      option.value = font;
      option.text = font;
      select.appendChild(option);
    });

    var title = document.createElement("h2");
    title.innerText = "폰트 변경";

    select.addEventListener("change", () => {
      this.updateFontPreview(select.value);
    });

    this.fontContainer.appendChild(title);
    this.fontContainer.appendChild(currentFont);
    this.fontContainer.appendChild(select);
    this.fontContainer.appendChild(fontSelectButton);
    this.fontContainer.appendChild(this.previewCanvas);

    fontSelectButton.onclick = () => {
      var selectedFont = select.value;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `폰트 변경 : ${selectedFont}`,
        showConfirmButton: false,
        heightAuto: false,
        timer: 1500,
      });

      window.localStorage.setItem("font", selectedFont);
      currentFont.innerText = "현재 폰트: " + localStorage.getItem("font");
      axios
        .post(
          `${SERVER_URL}/api/store_fontstyle`,
          JSON.stringify({
            username: window.localStorage.getItem("username"),
            fontstyle: selectedFont,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  render() {
    this.setDomNode();
  }
}
