import axios from "axios";
import { SERVER_URL } from "../../../entry.js";
export class FormComponent {
  status;
  containerElement;
  titleElement;
  usernameElement;
  passwordElement;
  usernameInputElement;
  passwordInputElement;
  buttonElement;
  textAreaElement;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode() {
    this.status = true;
    this.containerElement = document.createElement("div");
    this.titleElement = document.createElement("p");
    this.usernameElement = document.createElement("label");
    this.passwordElement = document.createElement("label");
    this.usernameInputElement = document.createElement("input");
    this.passwordInputElement = document.createElement("input");
    this.underElement = document.createElement("div");
    this.buttonElement = document.createElement("button");
    this.textAreaElement = document.createElement("p");

    // Setting unique IDs
    this.usernameInputElement.id = "usernameInput";
    this.passwordInputElement.id = "passwordInput";
    this.buttonElement.id = "submitButton";

    this.containerElement.className = "card-container";
    this.titleElement.className = "title-class";
    this.usernameElement.className = "label-class";
    this.passwordElement.className = "label-class";
    this.usernameInputElement.className = "input-class";
    this.passwordInputElement.className = "input-class";
    this.textAreaElement.className = "link-class";

    this.titleElement.innerText = "로그인";
    this.usernameElement.innerText = "username";
    this.passwordElement.innerText = "password";
    this.buttonElement.innerText = "login";
    this.textAreaElement.innerHTML = `아직 회원이 아니신가요? <a class="text-area" href="#">회원가입</a>하기`;

    this.textAreaElement.addEventListener("click", () => {
      if (this.status) {
        this.status = false;
        this.convertSignUp();
      } else {
        this.status = true;
        this.convertLogIn();
      }
    });

    this.buttonElement.addEventListener("click", (event) => {
      event.preventDefault();

      if (this.status) {
        login();
      } else {
        register();
      }
    });

    const login = async () => {
      try {
        const response = await axios.post(
          `${SERVER_URL}/api/login`,
          JSON.stringify({
            username: this.usernameInputElement.value,
            password: this.passwordInputElement.value,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.data.message === "success") {
          alert("로그인 성공");
          window.location.href = "mainPage.html";
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.data.message === "not-found") {
          alert("존재하지 않는 아이디입니다.");
        } else if (error.response.data.message === "failed") {
          alert("잘못된 비밀번호입니다.");
        }
      }
    };

    const register = async () => {
      try {
        const response = await axios.post(
          `${SERVER_URL}/api/signup`,
          JSON.stringify({
            username: this.usernameInputElement.value,
            password: this.passwordInputElement.value,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        if (response.data.message === "Signed up successfully") {
          alert("회원가입 성공.");

          this.createFontModal([
            "Share",
            "Share2",
            "Gulim",
            "GaramFlower",
            "Gomshinche",
            "Ttobagttobag",
            "Bareunjeongsin",
            "Okbiche",
          ]);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.data.message === "Username already exists") {
          alert("이미 존재하는 아이디입니다.");
        }
      }
    };

    let children = [
      this.titleElement,
      this.usernameElement,
      this.usernameInputElement,
      this.passwordElement,
      this.passwordInputElement,
      this.buttonElement,
      this.textAreaElement,
    ];
    this.containerElement.append(...children);
  }

  convertSignUp() {
    this.titleElement.innerText = "회원가입";
    this.buttonElement.innerText = "register";
    this.textAreaElement.innerHTML = `회원이신가요? <a class="text-area" href="#">로그인</a>하기`;
  }

  convertLogIn() {
    this.titleElement.innerText = "로그인";
    this.buttonElement.innerText = "login";
    this.textAreaElement.innerHTML = `아직 회원이 아니신가요? <a class="text-area" href="#">회원가입</a>하기`;
  }

  render() {
    this.setDomNode();
    document.getElementById("wrapper").appendChild(this.containerElement);
  }

  updateFontPreview() {
    var selectedFont = document.getElementById("fontSelect").value;
    var font = "30px " + selectedFont;

    var canvas = document.getElementById("fontPreviewCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = font;
    ctx.fillStyle = "#000";
    ctx.fillText("선택된 폰트입니다.", 10, 50);
  }

  createFontModal(fontOptions) {
    var select = document.createElement("select");
    select.setAttribute("id", "fontSelect");

    var modalCanvas = document.createElement("canvas");
    modalCanvas.width = 500;
    modalCanvas.height = 100;
    modalCanvas.id = "fontPreviewCanvas";

    var fontSelectButton = document.createElement("button");
    fontSelectButton.innerText = "폰트 선택";

    select.classList.add("font-select");
    modalCanvas.classList.add("font-preview-canvas");
    fontSelectButton.classList.add("font-select-button");

    fontOptions.forEach(function (font) {
      var option = document.createElement("option");
      option.value = font;
      option.text = font;
      select.appendChild(option);
    });

    var modalContainer = document.createElement("div");
    modalContainer.classList.add("modal");

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var modalTitle = document.createElement("h2");
    modalTitle.innerText = "폰트 선택";

    select.addEventListener("change", () => {
      var selectedFont = select.value;
      var font = "30px " + selectedFont;
      var ctx = modalCanvas.getContext("2d");
      ctx.clearRect(0, 0, modalCanvas.width, modalCanvas.height);
      ctx.font = font;
      ctx.fillStyle = "#000";
      ctx.fillText("선택된 폰트입니다.", 10, 50);
    });

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(select);
    modalContent.appendChild(modalCanvas);
    modalContent.appendChild(fontSelectButton);

    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);

    window.onclick = function (event) {
      if (event.target == modalContainer) {
        modalContainer.remove();
      }
    };

    fontSelectButton.onclick = function () {
      var selectedFont = select.value;
      // localStorage.setItem("font", selectedFont);
      modalContainer.remove();

      window.alert("선택된 폰트: " + selectedFont);

      axios
        .post(
          `${SERVER_URL}/api/store_fontstyle`,
          JSON.stringify({
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
}
