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
    if (this.rightElement.status == "3") {
      Swal.fire({
        title: "퇴장하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "퇴장",
      }).then((result) => {
        if (result.isConfirmed) {
          //TODO: 서버에게 퇴장 메시지 전송
          this.rightElement.convertToMainPage(this);
        }
      });
    } else {
      this.rightElement.convertToMyPage(this);
    }
  }
  convertToCanvasBasic() {
    console.log("basicpageconverter");
    if (this.rightElement.status == "3") {
      Swal.fire({
        title: "퇴장하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "퇴장",
      }).then((result) => {
        if (result.isConfirmed) {
          //TODO: 서버에게 퇴장 메시지 전송
          this.rightElement.convertToCanvasBasic(this);
        }
      });
    } else {
      this.rightElement.convertToCanvasBasic(this);
    }
  }
  convertToCanvasPractice() {
    console.log("practicepageconverter");
    if (this.rightElement.status == "3") {
      Swal.fire({
        title: "퇴장하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "퇴장",
      }).then((result) => {
        if (result.isConfirmed) {
          //TODO: 서버에게 퇴장 메시지 전송
          this.rightElement.convertToCanvasPractice(this);
        }
      });
    } else {
      this.rightElement.convertToCanvasPractice(this);
    }
  }
  convertToGame() {
    console.log("gamepageconverter");
    this.rightElement.convertToCanvasGame(this);
  }
}
