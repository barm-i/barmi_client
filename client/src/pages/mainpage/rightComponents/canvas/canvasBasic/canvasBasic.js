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
    canvasElement1.setDomNode("사용자 폰트 생성을 위한");
    canvasElement2.setDomNode("캔버스입니다");
    canvasElement3.setDomNode("가나다라마바사아자차카타파하");
    canvasElement4.setDomNode("궯뷃뤨뒗");
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
