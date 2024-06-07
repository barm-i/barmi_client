import axios from "axios";
import Swal from "sweetalert2";
// const SERVER_URL = "https://barmi-server.onrender.com";
// const SOCKET_URL = "wss://barmi-server.onrender.com";
const SERVER_URL = "http://localhost:8080";
const SOCKET_URL = "ws://localhost:8080";

export class MyPage {
  containerElement;
  infoElement;
  userinfoElement;
  fontContainer;
  fontSelectWrapper;
  previewCanvas;
  fontText;
  recordElement;
  recordTable;

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
    this.infoElement = document.createElement("div");
    this.infoElement.classList.add("info-container");

    this.userinfoElement = document.createElement("div");
    this.userinfoElement.classList.add("userinfo-container");

    const username = window.localStorage.getItem("username");
    var userInfo = document.createElement("div");

    const usernameText = document.createElement("p");
    usernameText.innerText = `Username: ${username}`;
    usernameText.classList.add("font-select-title");

    this.fontText = document.createElement("p");
    this.fontText.innerText = `Font: ${localStorage.getItem("font")}`;
    this.fontText.classList.add("font-select-title");

    const userRank = 1;
    const image = document.createElement("img");
    if (userRank == 1) {
      image.src = "/icons/bronze.png";
    } else if (userRank == 2) {
      image.src = "/icons/silver.png";
    } else if (userRank == 3) {
      image.src = "/icons/gold.png";
    }
    image.width = 20;
    image.height = 20;
    image.style.backgroundColor = "transparent";

    userInfo.classList.add("user-info");
    userInfo.appendChild(usernameText);
    userInfo.appendChild(image);

    this.userinfoElement.appendChild(userInfo);
    this.userinfoElement.appendChild(this.fontText);

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
    const children = [this.userinfoElement, this.fontContainer];
    this.infoElement.append(...children);

    this.recordElement = document.createElement("div");
    this.recordElement.classList.add("record-container");
    this.recordTable = document.createElement("div");
    this.recordTable.classList.add("record-table");
    this.recordElement.appendChild(this.recordTable);
    this.fetchAndUpdateRecord();

    this.containerElement.appendChild(this.infoElement);
    this.containerElement.appendChild(this.recordElement);
  }

  updateFontPreview(selectedFont) {
    var selected = "30px " + selectedFont;
    console.log(selected);
    var ctx = this.previewCanvas.getContext("2d");
    ctx.clearRect(0, 0, this.previewCanvas.width, this.previewCanvas.height);
    ctx.font = selected;
    ctx.fillStyle = "#000";
    ctx.fillText("선택된 폰트입니다.", 10, 30);
  }

  createFontSelector(fontOptions) {
    var select = document.createElement("select");
    select.setAttribute("id", "fontSelect");
    select.classList.add("font-select");

    this.previewCanvas = document.createElement("canvas");
    this.previewCanvas.classList.add("font-preview-canvas");
    this.previewCanvas.width = 300;
    this.previewCanvas.height = 50;

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

    var title = document.createElement("p");
    title.classList.add("font-select-title");
    title.innerText = "폰트 변경";

    select.addEventListener("change", () => {
      this.updateFontPreview(select.value);
    });
    var fontinfoElement = document.createElement("div");
    fontinfoElement.classList.add("font-info-container");
    fontinfoElement.appendChild(title);
    fontinfoElement.appendChild(select);
    fontinfoElement.appendChild(fontSelectButton);

    this.fontContainer.appendChild(fontinfoElement);
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
      this.fontText.innerText = `Font: ${localStorage.getItem("font")}`;
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

  async fetchAndUpdateRecord() {
    try {
      const user = window.localStorage.getItem("username");
      const response = await axios.post(
        `${SERVER_URL}/api/mypage/metadata`,
        JSON.stringify({
          username: user,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.localStorage.setItem("point", response.data.point);
      console.log(response.data);
      const records = [];
      for (const [date, data] of Object.entries(response.data.filesGroup)) {
        records.push({ date: date, photos: data });
      }
      console.log(records);
      await this.updateRecordList(records);
    } catch (error) {
      console.error("Error fetching record rows:", error);
    }
  }
  async updateRecordList(records) {
    this.recordTable.innerHTML = "";

    for (let record of records) {
      var date = record.date.toString();

      const row = document.createElement("button");
      row.className = "record-row";
      row.textContent = date;

      row.addEventListener("click", () => {
        this.showPhotosModal(record.photos);
      });

      this.recordTable.appendChild(row);
    }
  }

  showPhotosModal(photos) {
    let htmlContent = photos
      .map((photo) => `<img src="${photo}" alt="Photo" class="modal-photo">`)
      .join("");

    Swal.fire({
      html: `<div class="modal-content">${htmlContent}</div>`,
      width: "850",
      heightAuto: false,
      showCloseButton: true,
    });
  }

  render() {
    this.setDomNode();
  }
}
