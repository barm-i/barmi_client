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

    canvasElement1.setDomNode("값같곬곶깎넋늪닫닭닻됩뗑략볏밟볘");
    canvasElement2.setDomNode("뺐뽈솩쐐앉않얘얾엌옳읊죡쮜춰츄퀭");
    canvasElement3.setDomNode("틔핀핥훟궭봷둟똞쏧쮏옚퉲홣퉖놨쨨");
    this.containerElement.classList.add("canvas-font-wrapper");

    this.canvasElements = [canvasElement1, canvasElement2, canvasElement3];
    for (const element of this.canvasElements) {
      this.containerElement.append(element.containerElement);
    }
  }
  // async fetchData() {
  //   try {
  //     // 파일에서 텍스트를 읽어옴
  //     const response = await fetch("/contents/fontGenerate.txt");
  //     const data = await response.text();

  //     for (let i = 0; i < data.length; i += 16) {
  //       let chunk = data.slice(i, i + 16).replace(/[\n\r]/g, " ");
  //       this.strings.push(chunk);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching or processing data:", error);
  //   }
  // }

  render() {
    this.setDomNode();
    document
      .getElementById("right-container")
      .appendChild(this.containerElement);
  }
}
