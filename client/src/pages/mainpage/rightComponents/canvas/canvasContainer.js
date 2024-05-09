import { CanvasBasic } from "./canvasBasic/canvasBasic.js";
import { CanvasPractice } from "./canvasPractice/canvasPractice.js";
import { ToolBar } from "./toolBar.js";

export class CanvasContainer {
  canvasFlag; //0:practice-basic 1:practice-real 2:game-session
  isDrawing; //flag for pencil/eraser
  containerElement;

  canvasElement;
  toolBarElement;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(root) {
    this.canvasFlag = 0;
    this.root = root;
    this.containerElement = document.createElement("div");
    this.toolBarElement = document.createElement("div");

    this.containerElement.classList.add("canvas-page-wrapper");
    this.canvasElement = new CanvasBasic();
    this.toolBarElement = new ToolBar();
    this.canvasElement.setDomNode(root);
    this.toolBarElement.setDomNode(this, root);

    let children = [
      this.canvasElement.containerElement,
      this.toolBarElement.containerElement,
    ];
    this.containerElement.append(...children);
  }

  convertCanvas(root, status) {
    this.removeComponents();
    if (status == 0) {
      this.canvasFlag = 0;
      this.canvasElement = new CanvasBasic();
      this.toolBarElement = new ToolBar();
      this.canvasElement.setDomNode(root);
      this.toolBarElement.setDomNode(this, root);

      let children = [
        this.canvasElement.containerElement,
        this.toolBarElement.containerElement,
      ];
      this.containerElement.append(...children);
    } else if (status == 1) {
      this.canvasFlag = 1;
      this.canvasElement = new CanvasPractice();
      this.toolBarElement = new ToolBar();
      this.canvasElement.setDomNode(root);
      this.toolBarElement.setDomNode(this, root);

      let children = [
        this.canvasElement.containerElement,
        this.toolBarElement.containerElement,
      ];
      this.containerElement.append(...children);
    } else if (status == 2) {
    }
  }

  convertToCanvasPractice(root, status) {}

  convertToCanvasGameSession() {}

  convertToBrush() {
    for (const element of this.canvasElement.canvasElements) {
      element.convertToBrush();
    }
  }
  convertToEraser() {
    for (const element of this.canvasElement.canvasElements) {
      element.convertToEraser();
    }
  }
  clearCanvas() {
    for (const element of this.canvasElement.canvasElements) {
      element.clearCanvas();
    }
  }
  convertToImage() {
    for (const element of this.canvasElement.canvasElements) {
      element.convertToImage();
    }
  }

  removeComponents() {
    this.containerElement.removeChild(this.canvasElement.containerElement);
    this.containerElement.removeChild(this.toolBarElement.containerElement);
  }
  render() {
    this.setDomNode();
    document
      .getElementById("right-container")
      .appendChild(this.containerElement);
  }
}
