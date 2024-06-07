import { CanvasFontGeneratePair } from "./canvasFontGeneratePair.js";

export class CanvasFontGenerate {
  containerElement;
  canvasElements;
  strings;
  root;
  constructor() {
    this.containerElement = document.createElement("div");
    this.strings = [];
  }

  async setDomNode(root) {
    this.root = root;
    this.strings = [];
    this.containerElement = document.createElement("div");
    const canvasElement1 = new CanvasFontGeneratePair();
    const canvasElement2 = new CanvasFontGeneratePair();
    const canvasElement3 = new CanvasFontGeneratePair();
    const canvasElement4 = new CanvasFontGeneratePair();
    const canvasElement5 = new CanvasFontGeneratePair();
    const canvasElement6 = new CanvasFontGeneratePair();
    const canvasElement7 = new CanvasFontGeneratePair();
    const canvasElement8 = new CanvasFontGeneratePair();

    await this.fetchData();

    canvasElement1.setDomNode(this.strings[0]?.toString());
    canvasElement2.setDomNode(this.strings[1]?.toString());
    canvasElement3.setDomNode(this.strings[2]?.toString());
    canvasElement4.setDomNode(this.strings[3]?.toString());
    canvasElement5.setDomNode(this.strings[4]?.toString());
    canvasElement6.setDomNode(this.strings[5]?.toString());
    canvasElement7.setDomNode(this.strings[6]?.toString());
    canvasElement8.setDomNode(this.strings[7]?.toString());
    this.containerElement.classList.add("canvas-font-wrapper");

    this.canvasElements = [
      canvasElement1,
      canvasElement2,
      canvasElement3,
      canvasElement4,
      canvasElement5,
      canvasElement6,
      canvasElement7,
      canvasElement8,
    ];
    for (const element of this.canvasElements) {
      this.containerElement.append(element.containerElement);
    }
  }
  async fetchData() {
    try {
      // 파일에서 텍스트를 읽어옴
      const response = await fetch("/contents/fontGenerate.txt");
      const data = await response.text();

      for (let i = 0; i < data.length; i += 16) {
        let chunk = data.slice(i, i + 16).replace(/[\n\r]/g, " ");
        this.strings.push(chunk);
      }
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  }

  render() {
    this.setDomNode();
    document
      .getElementById("right-container")
      .appendChild(this.containerElement);
  }
}
