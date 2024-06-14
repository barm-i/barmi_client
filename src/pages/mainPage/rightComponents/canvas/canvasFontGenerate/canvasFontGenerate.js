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
    const user = window.localStorage.getItem("username");
    window.localStorage.setItem("username", user);
    this.root = root;
    this.strings = [];
    this.containerElement = document.createElement("div");
    const canvasElement1 = new CanvasFontGeneratePair();
    const canvasElement2 = new CanvasFontGeneratePair();
    const canvasElement3 = new CanvasFontGeneratePair();

    canvasElement1.setDomNode("값같곬곶깎넋늪닫닭닻됩뗑략볏밟볘");
    canvasElement2.setDomNode("뺐뽈솩쐐앉않얘얾엌옳읊죡쮜춰츄퀭");
    canvasElement3.setDomNode("틔핀핱훟궥봽둘뚶쏳쮔옛퉬홤퉢놨쨨");
    this.containerElement.classList.add("canvas-font-wrapper");

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
