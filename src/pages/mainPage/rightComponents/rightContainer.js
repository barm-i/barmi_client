import { CanvasContainer } from "./canvas/canvasContainer.js";
import { MyPage } from "./myPage.js";

export class RightContainer {
  status; //0 = basic, 1 = practice, 2 = mypage
  containerElement;
  canvasContainerElement;
  mypageContainerElement;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
    this.canvasContainerElement = new CanvasContainer();
    this.mypageContainerElement = new MyPage();
  }

  setDomNode(root) {
    this.root = root;
    this.containerElement = document.createElement("div");
    this.containerElement.className = "right-side-wrapper";

    this.canvasContainerElement = new CanvasContainer();
    this.canvasContainerElement.id = "canvas-container";
    this.canvasContainerElement.setDomNode();
    this.containerElement.appendChild(
      this.canvasContainerElement.containerElement
    );
  }
  render() {
    this.setDomNode();
    document.getElementById("main-page").appendChild(this.containerElement);
  }

  convertToCanvasBasic() {
    if (this.status == 2) {
      this.removeMyPage();
      this.canvasContainerElement = new CanvasContainer();
      this.canvasContainerElement.id = "canvas-container";
      this.canvasContainerElement.setDomNode(this.root);
    } else {
      this.removeCanvas();
    }

    this.containerElement.appendChild(
      this.canvasContainerElement.containerElement
    );
    this.canvasContainerElement.convertCanvas(this.root, 0);
    this.status = 0;
  }

  convertToCanvasPractice() {
    if (this.status == 2) {
      this.removeMyPage();
      this.canvasContainerElement = new CanvasContainer();
      this.canvasContainerElement.id = "canvas-container";
      this.canvasContainerElement.setDomNode(this.root);
    } else {
      this.removeCanvas();
    }
    this.canvasContainerElement.convertCanvas(this.root, 1);
    this.containerElement.appendChild(
      this.canvasContainerElement.containerElement
    );
    this.status = 1;
  }

  convertToMyPage() {
    if (this.status == 2) {
      this.removeMyPage();
    } else {
      this.removeCanvas();
    }
    this.status = 2;
    this.mypageContainerElement = new MyPage();
    this.mypageContainerElement.setDomNode();
    this.containerElement.appendChild(
      this.mypageContainerElement.containerElement
    );
  }

  removeMyPage() {
    this.containerElement.removeChild(
      this.mypageContainerElement.containerElement
    );
  }
  removeCanvas() {
    this.containerElement.removeChild(
      this.canvasContainerElement.containerElement
    );
  }
}
