export class MenuBar {
  containerElement;
  myPageButtonElement;
  basicPracticeButtonElement;
  practiceButtonElement;
  fontGenerateButtonElement;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(root) {
    this.root = root;
    this.containerElement = document.createElement("div");
    this.myPageButtonElement = document.createElement("button");
    this.basicPracticeButtonElement = document.createElement("button");
    this.practiceButtonElement = document.createElement("button");

    this.myPageButtonElement.className = "button";
    this.myPageButtonElement.innerText = "MyPage";
    this.basicPracticeButtonElement.className = "button";
    this.basicPracticeButtonElement.innerText = "격자 연습장";
    this.practiceButtonElement.className = "button";
    this.practiceButtonElement.innerText = "자유 연습장";
    // this.fontGenerateButtonElement.className = "button";
    // this.fontGenerateButtonElement.innerText = "폰트 생성기";

    this.myPageButtonElement.addEventListener("click", () => {
      this.root.convertToMainPage();
    });
    this.basicPracticeButtonElement.addEventListener("click", () => {
      this.root.convertToCanvasBasic();
    });
    this.practiceButtonElement.addEventListener("click", () => {
      this.root.convertToCanvasPractice();
    });

    let children = [
      this.myPageButtonElement,
      this.basicPracticeButtonElement,
      this.practiceButtonElement,
    ];
    this.containerElement.append(...children);
  }
  render() {
    this.setDomNode();
    document.getElementById("menuWrapper").appendChild(this.containerElement);
  }
}