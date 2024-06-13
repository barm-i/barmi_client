import Swal from "sweetalert2";
import axios from "axios";
import { CanvasBasic } from "./canvasBasic/canvasBasic.js";
import { CanvasPractice } from "./canvasPractice/canvasPractice.js";
import { CanvasGame } from "./canvasGame/canvasGame.js";
import { CanvasFontGenerate } from "./canvasFontGenerate/canvasFontGenerate.js";
import { ToolBar } from "./toolBar.js";
import { GameToolBar } from "./canvasGame/gameToolBar.js";
import { FontToolBar } from "./canvasFontGenerate/fontToolBar.js";

const SERVER_URL = "https://barmi-server.onrender.com";
const SOCKET_URL = "wss://barmi-server.onrender.com";
// const SERVER_URL = "http://localhost:8080";
// const SOCKET_URL = "ws://localhost:8080";

export class CanvasContainer {
  canvasFlag; //0:practice-basic 1:practice-real 2:game-session 3:font generate
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
    } else if (status == 3) {
      this.canvasFlag = 3;
      console.log("font generate converted");
      this.canvasElement = new CanvasFontGenerate();
      this.toolBarElement = new FontToolBar();
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
  convertToImage() {
    if (this.canvasFlag == 2) {
      for (const element of this.canvasElement.canvasElements) {
        element.convertToImage();
      }
    } else if (this.canvasFlag == 3) {
      Swal.fire({
        title: "폰트를 생성하시겠습니까?",
        icon: "question",
        showDenyButton: true,
        confirmButtonText: "네",
        denyButtonText: `아니오`,
        heightAuto: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log("font generate request");
          // 요청이 올때까지 로딩 시작
          Swal.fire({
            title: "폰트생성 요청을 보냈습니다!\n 잠시만 기다려주세요.😊",
            didOpen: async () => {
              Swal.showLoading();
              // let convertPromiseQueue = [];
              let referenceImages = [];

              for (const element of this.canvasElement.canvasElements) {
                referenceImages.push(
                  await fetch(element).then((res) => res.blob())
                );
              }

              try {
                const imageBlob1 = referenceImages[0];
                const imageBlob2 = referenceImages[1];
                const imageBlob3 = referenceImages[2];
                const formData = new FormData();
                formData.append("files", imageBlob1, "line1.png");
                formData.append("files", imageBlob2, "line2.png");
                formData.append("files", imageBlob3, "line3.png");

                const response = await axios.post(
                  `${SERVER_URL}/api/fontgen_gen`,
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                console.log(response);
              } catch (error) {
                console.error(
                  "error while sending font generator image :" + error
                );
              }

              Swal.hideLoading();
              Swal.update({
                title: "폰트가 생성되었습니다!😊",
                showCloseButton: true,
                heightAuto: false,
                icon: "success",
              });
            },
            allowOutsideClick: false,
            allowEnterKey: false,
            heightAuto: false,
          });
        } else if (result.isDenied) {
          Swal.fire({
            title: "폰트생성을 취소했습니다.",
            icon: "cancel",
            heightAuto: false,
          });
        }
      });
    } else {
      Swal.fire({
        title: "피드백을 요청하시겠습니까?",
        icon: "question",
        showDenyButton: true,
        confirmButtonText: "네",
        denyButtonText: `아니오`,
        heightAuto: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log("canvas basic upload request");
          // 요청이 올때까지 로딩 시작
          Swal.fire({
            title:
              "피드백 요청을 보냈습니다!\n AI가 열심히 분석중이니 잠시만 기다려주세요.😊",
            didOpen: () => {
              Swal.showLoading();
              let convertPromiseQueue = [];

              for (const element of this.canvasElement.canvasElements) {
                convertPromiseQueue.push(
                  new Promise((resolve, reject) => {
                    element.convertToImage(resolve, reject);
                  })
                );
              }

              Promise.all(convertPromiseQueue).then((response) => {
                Swal.hideLoading();
                Swal.update({
                  title: "AI가 분석을 완료했습니다!😊",
                  showCloseButton: true,
                  heightAuto: false,
                  icon: "success",
                });
              });
            },
            allowOutsideClick: false,
            allowEnterKey: false,
            heightAuto: false,
          });
        } else if (result.isDenied) {
          Swal.fire({
            title: "피드백 요청을 취소했습니다.",
            icon: "cancel",
            heightAuto: false,
          });
        }
      });
    }
  }
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
