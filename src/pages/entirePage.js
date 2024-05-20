import { RightContainer } from "./mainPage/rightComponents/rightContainer.js";
import { LeftContainer } from "./mainPage/leftComponents/leftContainer.js";

export class EntirePage {
  containerElement;
  rightElement;
  leftElement;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode() {
    this.flag = true;
    this.containerElement = document.createElement("div");
    this.containerElement.className = "main-page-wrapper";
    this.rightElement = new RightContainer();
    this.leftElement = new LeftContainer();
    this.rightElement.setDomNode(this);
    this.leftElement.setDomNode(this);
    let children = [
      this.leftElement.containerElement,
      this.rightElement.containerElement,
    ];
    this.containerElement.append(...children);
  }
  render() {
    this.setDomNode();
    document.getElementById("main-page").appendChild(this.containerElement);
  }

  convertToMainPage() {
    console.log("mainpageconverter");
    this.rightElement.convertToMyPage(this);
  }
  convertToCanvasBasic() {
    console.log("basicpageconverter");
    this.rightElement.convertToCanvasBasic(this);
  }
  convertToGame() {
    console.log("gamepageconverter");
    this.rightElement.convertToCanvasGame(this);
  }
  convertToCanvasPractice() {
    console.log("practicepageconverter");
    this.rightElement.convertToCanvasPractice(this);
  }
}
