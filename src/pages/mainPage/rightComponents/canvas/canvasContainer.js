import Swal from "sweetalert2";

import { CanvasBasic } from "./canvasBasic/canvasBasic.js";
import { CanvasPractice } from "./canvasPractice/canvasPractice.js";
import { CanvasGame } from "./canvasGame/canvasGame.js";
import { ToolBar } from "./toolBar.js";
import { GameToolBar } from "./canvasGame/gameToolBar.js";

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

    this.containerElement.appendChild(this.canvasElement.containerElement);
    this.containerElement.appendChild(this.toolBarElement.containerElement);
  }

  convertCanvas(root, status) {
    this.removeComponents();
    if (status == 0) {
      this.canvasFlag = 0;
      this.canvasElement = new CanvasBasic();
      this.toolBarElement = new ToolBar();
      this.canvasElement.setDomNode(root);
      this.toolBarElement.setDomNode(this, root);
      this.containerElement.appendChild(this.canvasElement.containerElement);
      this.containerElement.appendChild(this.toolBarElement.containerElement);
    } else if (status == 1) {
      this.canvasFlag = 1;
      this.canvasElement = new CanvasPractice();
      this.toolBarElement = new ToolBar();
      this.canvasElement.setDomNode(root);
      this.toolBarElement.setDomNode(this, root);
      this.containerElement.appendChild(this.canvasElement.containerElement);
      this.containerElement.appendChild(this.toolBarElement.containerElement);
    } else if (status == 2) {
      this.canvasFlag = 2;
      this.canvasElement = new CanvasGame();
      this.toolBarElement = new GameToolBar();
      this.canvasElement.setDomNode(root);
      this.toolBarElement.setDomNode(this, root);
      this.containerElement.appendChild(this.canvasElement.containerElement);
      this.containerElement.appendChild(this.toolBarElement.containerElement);
    }
  }

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
  prevContent() {
    this.canvasElement.prevContent();
  }
  nextContent() {
    this.canvasElement.nextContent();
  }
  convertToImage() {}
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

// Swal.fire({
//   title: "피드백을 요청하시겠습니까?",
//   icon: "question",
//   showDenyButton: true,
//   confirmButtonText: "네",
//   denyButtonText: `아니오`,
//   heightAuto: false,
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) {
//     // TODO: 요청 수락 시 로직 진행
//     for (const element of this.canvasElement.canvasElements) {
//       element.convertToImage();
//     }
//     // 요청이 올때까지 로딩 시작
//     Swal.fire({
//       title:
//         "피드백 요청을 보냈습니다!\n AI가 열심히 분석중이니 잠시만 기다려주세요.😊",
//       didOpen: () => {
//         Swal.showLoading();
//         let convertPromiseQueue = [];
//         this.canvasElement.canvasElements.foreach((element) => {
//           convertQueue.push(new Promise(element.convertToImage));
//         });
//         Promise.all(convertPromiseQueue).then(() => {
//           Swal.hideLoading();
//           Swal.update({
//             title: "AI가 분석을 완료했습니다!😊",
//             showCloseButton: true,
//             heightAuto: false,
//             icon: "success",
//           });
//         });
//       },
//       allowOutsideClick: false,
//       allowEnterKey: false,
//       heightAuto: false,
//     });
//   } else if (result.isDenied) {
//     Swal.fire({
//       title: "피드백 요청을 취소했습니다.",
//       icon: "cancel",
//       heightAuto: false,
//     });
//   }
// });
