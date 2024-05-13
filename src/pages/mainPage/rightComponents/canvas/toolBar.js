export class ToolBar {
  containerElement;
  pencilBtnElement;
  eraserBtnElement;
  clearBtnElement;
  nextBtnElement;
  sendBtnElement;

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
    this.sendBtnElement = document.createElement("button");

    this.pencilBtnElement.id = "brush-btn";
    this.pencilBtnElement.textContent = "연필";

    this.eraserBtnElement.id = "eraser-btn";
    this.eraserBtnElement.textContent = "지우개";

    this.clearBtnElement.id = "clear-btn";
    this.clearBtnElement.textContent = "지우기";

    this.nextBtnElement.textContent = "다음";

    this.sendBtnElement.id = "send-btn";
    this.sendBtnElement.textContent = "완료";

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
      this.parent.convertToImage();
    });

    this.sendBtnElement.addEventListener("click", () => {
      this.parent.convertToImage();
    });

    this.containerElement.append(
      this.pencilBtnElement,
      this.eraserBtnElement,
      this.clearBtnElement,
      this.nextBtnElement,
      this.sendBtnElement
    );
  }

  render() {
    this.setDomNode();
    document
      .getElementById("canvas-wrapper")
      .appendChild(this.containerElement);
  }
}
