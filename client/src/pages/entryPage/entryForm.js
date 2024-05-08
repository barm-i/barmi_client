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

      window.location.href = "mainPage.html";
      // if (this.status) {
      //   login();
      // } else {
      //   register();
      // }
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
          window.location.href = "mainPage.html";
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
}
