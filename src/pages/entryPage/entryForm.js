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
        createFontModal(["Gulim", "Share", "Arial"]);
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
}

function createFontModal(fontOptions) {
  // 폰트 목록을 스크롤로 선택할 수 있는 드롭다운으로 변환
  var select = document.createElement("select");
  select.setAttribute("id", "fontSelect"); // 고유한 ID 추가

  // 각 폰트를 옵션으로 추가
  fontOptions.forEach(function (font) {
    var option = document.createElement("option");
    option.value = font;
    option.text = font;
    select.appendChild(option);
  });

  // 모달 생성
  var modalContainer = document.createElement("div");
  modalContainer.className = "modal";

  var modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  var closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";

  var modalTitle = document.createElement("h2");
  modalTitle.innerText = "폰트 선택";

  var modalText = document.createElement("p");
  modalText.innerText = "가나다";

  var modalCanvas = document.createElement("canvas");
  modalCanvas.id = "fontPreviewCanvas";

  var fontSelectButton = document.createElement("button");
  fontSelectButton.id = "fontSelectButton";
  fontSelectButton.innerText = "선택";

  // 각 요소를 모달에 추가
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(select);
  modalContent.appendChild(modalText);
  modalContent.appendChild(modalCanvas);
  modalContent.appendChild(fontSelectButton);

  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  // 모달 닫기 버튼 이벤트 처리
  closeButton.onclick = function () {
    modalContainer.remove();
  };

  // 모달 외부 클릭 시 모달 닫기
  window.onclick = function (event) {
    if (event.target == modalContainer) {
      modalContainer.remove();
    }
  };

  // 사용자가 폰트를 선택하고 확인을 클릭했을 때의 처리
  fontSelectButton.onclick = function () {
    var selectedFont = document.getElementById("fontSelect").value;
    var font = "30px " + selectedFont;

    // 캔버스에 폰트 설정하여 가나다 그리기
    var canvas = document.getElementById("fontPreviewCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = font;
    ctx.fillText("가나다", 10, 50);

    // 모달 닫기
    modalContainer.remove();
  };
}
