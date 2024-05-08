import { CanvasPracticePair } from "./canvasPracticePair.js";

export class CanvasPractice {
  containerElement;
  canvasElements;
  root;
  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(root) {
    this.root = root;
    this.containerElement = document.createElement("div");
    const canvasElement1 = new CanvasPracticePair();
    const canvasElement2 = new CanvasPracticePair();
    const canvasElement3 = new CanvasPracticePair();
    canvasElement1.setDomNode();
    canvasElement2.setDomNode();
    canvasElement3.setDomNode();

    this.canvasElements = [canvasElement1, canvasElement2, canvasElement3];
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
