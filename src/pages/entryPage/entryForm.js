import axios from "axios";

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
        //login();
        window.location.href = "/mainPage.html";
      } else {
        //register();
        //TODO font선택-------------------->
        this.createFontModal(["Gulim", "Share", "Arial"]);
        //<-------------------------------
      }
    });
    const login = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/login",
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
          //window.location.href = "mainPage.html";
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
          "http://localhost:8080/api/signup",
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

          //TODO font선택-------------------->
          var fontOptions = ["Gulim", "Share", "Arial"];

          //<-------------------------------

          //window.location.href = "mainPage.html";
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.data.message === "Username already exists") {
          alert("이미 존재하는 아이디입니다.");
        }
        // } else if (error.response.data.message === "failed") {
        //   alert("잘못된 비밀번호입니다.");
        // }
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

    // 캔버스에 폰트 설정하여 가나다 그리기
    var canvas = document.getElementById("fontPreviewCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = font;
    ctx.fillStyle = "#000";
    ctx.fillText("가나다", 10, 50);
  }

  createFontModal(fontOptions) {
    var select = document.createElement("select");
    select.setAttribute("id", "fontSelect");

    var modalCanvas = document.createElement("canvas");
    modalCanvas.width = 200;
    modalCanvas.height = 100;

    var fontSelectButton = document.createElement("button");
    fontSelectButton.innerText = "확정";

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

    var closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";

    var modalTitle = document.createElement("h2");
    modalTitle.innerText = "폰트 선택";

    select.addEventListener("change", function () {
      var selectedFont = select.value;
      var font = "30px " + selectedFont;
      var ctx = modalCanvas.getContext("2d");
      ctx.clearRect(0, 0, modalCanvas.width, modalCanvas.height);
      ctx.font = font;
      ctx.fillStyle = "#000";
      ctx.fillText("가나다", 10, 50);
    });

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(select);
    modalContent.appendChild(modalCanvas);
    modalContent.appendChild(fontSelectButton);

    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);

    closeButton.onclick = function () {
      modalContainer.remove();
    };

    window.onclick = function (event) {
      if (event.target == modalContainer) {
        modalContainer.remove();
      }
    };

    fontSelectButton.onclick = function () {
      var selectedFont = select.value;
      localStorage.setItem("font", selectedFont);
      modalContainer.remove();
      alert("선택된 폰트: " + selectedFont);
    };
  }
}
