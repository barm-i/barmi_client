import { CanvasBasicPair } from "./canvasBasicPair";

export class CanvasBasic {
  containerElement;
  canvasElements;
  root;
  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(root) {
    this.root = root;
    this.containerElement = document.createElement("div");
    const canvasElement1 = new CanvasBasicPair();
    const canvasElement2 = new CanvasBasicPair();
    const canvasElement3 = new CanvasBasicPair();
    const canvasElement4 = new CanvasBasicPair();
    canvasElement1.setDomNode();
    canvasElement2.setDomNode();
    canvasElement3.setDomNode();
    canvasElement4.setDomNode();
    this.containerElement.classList.add("canvas-basic-wrapper");

    this.canvasElements = [
      canvasElement1,
      canvasElement2,
      canvasElement3,
      canvasElement4,
    ];
    for (const element of this.canvasElements) {
      this.containerElement.append(element.containerElement);
    }
  }

  render() {
    this.setDomNode();
    document
      .getElementById("right-container")
      .appendChild(this.containerElement);
  }
}
