export class ToolBar {
  containerElement;
  pencilBtnElement;
  eraserBtnElement;
  clearBtnElement;
  nextBtnElement;
  feedBackBtnElement;

  parent;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(parent, root) {
    this.parent = parent;
    this.root = root;
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("tool-bar", "component-class");

    this.pencilBtnElement = document.createElement("button");
    this.eraserBtnElement = document.createElement("button");
    this.clearBtnElement = document.createElement("button");
    this.nextBtnElement = document.createElement("button");
    this.feedBackBtnElement = document.createElement("button");

    this.pencilBtnElement.id = "brush-btn";
    this.pencilBtnElement.textContent = "연필";

    this.eraserBtnElement.id = "eraser-btn";
    this.eraserBtnElement.textContent = "지우개";

    this.clearBtnElement.id = "clear-btn";
    this.clearBtnElement.textContent = "지우기";

    this.nextBtnElement.textContent = "다음";

    this.feedBackBtnElement.id = "send-btn";
    this.feedBackBtnElement.textContent = "피드백";

    this.pencilBtnElement.addEventListener("click", () => {
      this.parent.convertToBrush();
    });
    this.eraserBtnElement.addEventListener("click", () => {
      this.parent.convertToEraser();
    });
    this.clearBtnElement.addEventListener("click", () => {
      this.parent.clearCanvas();
    });
    this.nextBtnElement.addEventListener("click", () => {
      this.parent.nextContent();
    });
    this.feedBackBtnElement.addEventListener("click", () => {
      this.parent.convertToImage();
    });

    this.containerElement.append(
      this.pencilBtnElement,
      this.eraserBtnElement,
      this.clearBtnElement,
      this.nextBtnElement,
      this.feedBackBtnElement
    );
  }

  render() {
    this.setDomNode();
    document
      .getElementById("canvas-wrapper")
      .appendChild(this.containerElement);
  }
}
