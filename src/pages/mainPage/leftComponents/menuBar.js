import Swal from "sweetalert2";

export class MenuBar {
  containerElement;
  myPageButtonElement;
  basicPracticeButtonElement;
  practiceButtonElement;
  fontGenerateButtonElement;
  root;
  parent;

  constructor() {
    this.containerElement = document.createElement("div");
    this.containerElement.id = "menuWrapper";
    this.containerElement.className = "title-class component-class menu-bar";
  }

  setDomNode(root, parent) {
    this.root = root;
    this.parent = parent;
    this.myPageButtonElement = document.createElement("button");
    this.basicPracticeButtonElement = document.createElement("button");
    this.practiceButtonElement = document.createElement("button");
    this.fontGenerateButtonElement = document.createElement("button");

    this.myPageButtonElement.className = "button";
    this.myPageButtonElement.innerText = "MyPage";
    this.basicPracticeButtonElement.className = "button";
    this.basicPracticeButtonElement.innerText = "격자 연습장";
    this.practiceButtonElement.className = "button";
    this.practiceButtonElement.innerText = "자유 연습장";
    this.fontGenerateButtonElement.className = "button";
    this.fontGenerateButtonElement.innerText = "폰트 생성";

    this.myPageButtonElement.addEventListener("click", () => {
      this.root.convertToMainPage();
    });
    this.basicPracticeButtonElement.addEventListener("click", () => {
      this.root.convertToCanvasBasic();
    });
    this.practiceButtonElement.addEventListener("click", () => {
      this.root.convertToCanvasPractice();
    });
    this.fontGenerateButtonElement.addEventListener("click", () => {
      this.root.convertToFontGenerate();
    });
    let children = [
      this.myPageButtonElement,
      this.basicPracticeButtonElement,
      this.practiceButtonElement,
      this.fontGenerateButtonElement,
    ];
    this.containerElement.append(...children);
  }
  render(root, parent) {
    this.setDomNode(root);
    parent.appendChild(this.containerElement);
  }
}
