export class GameToolBar {
  containerElement;
  pencilBtnElement;
  eraserBtnElement;
  clearBtnElement;
  feedBackBtnElement;

  // containers
  paintingToolContainer;

  parent;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(parent, root) {
    this.parent = parent;
    this.root = root;
    // container 생성
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("tool-bar", "component-class");

    this.paintingToolContainer = document.createElement("div");
    this.paintingToolContainer.classList.add("painting-tool-container");

    // 하위 요소 생성
    this.pencilBtnElement = document.createElement("button");
    this.eraserBtnElement = document.createElement("button");
    this.clearBtnElement = document.createElement("button");
    this.feedBackBtnElement = document.createElement("button");

    this.pencilBtnElement.id = "brush-btn";
    this.pencilBtnElement.className = "tool-btn";

    this.eraserBtnElement.id = "eraser-btn";
    this.eraserBtnElement.className = "tool-btn";

    this.clearBtnElement.id = "clear-btn";
    this.clearBtnElement.className = "tool-btn";

    // 지우개, 펜, 지우기 버튼을 paintingToolContainer에 추가
    this.paintingToolContainer.append(
      this.pencilBtnElement,
      this.eraserBtnElement,
      this.clearBtnElement
    );

    this.feedBackBtnElement.id = "send-btn";
    this.feedBackBtnElement.className = "tool-btn";
    this.feedBackBtnElement.textContent = "채점";

    this.pencilBtnElement.addEventListener("click", () => {
      this.parent.convertToBrush();
    });
    this.eraserBtnElement.addEventListener("click", () => {
      this.parent.convertToEraser();
    });
    this.clearBtnElement.addEventListener("click", () => {
      this.parent.clearCanvas();
    });
    this.feedBackBtnElement.addEventListener("click", () => {
      this.parent.convertToImage();
    });

    this.containerElement.append(
      this.paintingToolContainer,
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
