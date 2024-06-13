import axios from "axios";
import Swal from "sweetalert2";
const SERVER_URL = "https://barmi-server.onrender.com";
const SOCKET_URL = "wss://barmi-server.onrender.com";
// const SERVER_URL = "http://localhost:8080";
// const SOCKET_URL = "ws://localhost:8080";

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

  async setDomNode() {
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

    this.recordElement = document.createElement("div");
    this.recordElement.classList.add("record-container");
    this.recordTable = document.createElement("div");
    this.recordTable.classList.add("record-table");
    this.recordElement.appendChild(this.recordTable);

    //TODO : fetch user rank
    await this.fetchAndUpdateRecord();

    const usernameText = document.createElement("p");
    usernameText.innerText = `${username}`;
    usernameText.classList.add("font-select-title");

    var pointText = document.createElement("p");
    pointText.innerText = `Point: ${window.localStorage.getItem("point")}`;
    pointText.classList.add("font-select-title");

    this.fontText = document.createElement("p");
    this.fontText.innerText = `Font: ${localStorage.getItem("font")}`;
    this.fontText.classList.add("font-select-title");

    const userPoint = window.localStorage.getItem("point");
    const image = document.createElement("img");

    if (userPoint >= 5000) {
      image.src = "https://static.solved.ac/tier_small/15.svg";
    } else if (userPoint >= 4000) {
      image.src = "https://static.solved.ac/tier_small/14.svg";
    } else if (userPoint >= 3000) {
      image.src = "https://static.solved.ac/tier_small/13.svg";
    } else if (userPoint >= 1000) {
      image.src = "https://static.solved.ac/tier_small/10.svg";
    } else if (userPoint >= 750) {
      image.src = "https://static.solved.ac/tier_small/9.svg";
    } else if (userPoint >= 500) {
      image.src = "https://static.solved.ac/tier_small/8.svg";
    } else if (userPoint >= 100) {
      image.src = "https://static.solved.ac/tier_small/5.svg";
    } else if (userPoint >= 50) {
      image.src = "https://static.solved.ac/tier_small/4.svg";
    } else if (userPoint >= 25) {
      image.src = "https://static.solved.ac/tier_small/3.svg";
    } else {
      image.src = "https://static.solved.ac/tier_small/0.svg";
    }
    image.width = 20;
    image.height = 20;
    image.style.backgroundColor = "transparent";

    userInfo.classList.add("user-info");
    userInfo.appendChild(usernameText);
    userInfo.appendChild(image);

    this.userinfoElement.appendChild(userInfo);
    this.userinfoElement.appendChild(pointText);
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

    var fontSelectContainer = document.createElement("div");
    fontSelectContainer.classList.add("font-select-row");
    fontSelectContainer.appendChild(title);
    fontSelectContainer.appendChild(select);
    fontSelectContainer.appendChild(fontSelectButton);

    // 폰트 테스트 요소
    var fontTest = document.createElement("div");
    fontTest.classList.add("font-test");
    fontTest.innerText = "나만의 폰트 테스트 해보기";

    // 폰트 테스트 이벤트 등록
    fontTest.addEventListener("click", () => {
      Swal.fire({
        title: "원하는 텍스트를 입력해보세요!",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "폰트 샘플 생성하기",
        showLoaderOnConfirm: true,
        heightAuto: false,
        preConfirm: (text) => {
          //TODO : 서버로 텍스트 전송
          console.log(text);
          return;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          // Display the server response in an image area
          const img = document.createElement("img");
          img.src = result.value.image_url; // Replace 'image_url' with the actual property name in the server response
          Swal.fire({
            title: "Test Result",
            html: img.outerHTML,
            showCloseButton: true,
          });
        }
      });
    });

    var fontinfoElement = document.createElement("div");
    fontinfoElement.classList.add("font-info-container");
    fontinfoElement.appendChild(fontSelectContainer);
    fontinfoElement.appendChild(fontTest);

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
