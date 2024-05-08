export class MenuBar {
  containerElement;
  myPageButtonElement;
  basicPracticeButtonElement;
  practiceButtonElement;
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
    this.basicPracticeButtonElement.innerText = "따라쓰기";
    this.practiceButtonElement.className = "button";
    this.practiceButtonElement.innerText = "Practice";

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
