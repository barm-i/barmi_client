import axios from "axios";
import { CanvasContainer } from "./canvas/canvasContainer.js";
import { MyPage } from "./myPage.js";
import Swal from "sweetalert2";

// const SERVER_URL = "https://barmi-server.onrender.com";
// const SOCKET_URL = "wss://barmi-server.onrender.com";
const SERVER_URL = "http://localhost:8080";
const SOCKET_URL = "ws://localhost:8080";

export class RightContainer {
  status; //0 = basic, 1 = practice, 2 = mypage, 3 = game, 4 = fontGenerate
  containerElement;
  canvasContainerElement;
  mypageContainerElement;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
    this.canvasContainerElement = new CanvasContainer();
  }

  setDomNode(root) {
    this.root = root;
    this.status = 0;
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
  convertToCanvasGame() {
    if (this.status == 2) {
      this.removeMyPage();
      this.canvasContainerElement = new CanvasContainer();
      this.canvasContainerElement.id = "canvas-container";
      this.canvasContainerElement.setDomNode(this.root);
    } else {
      this.removeCanvas();
    }
    this.canvasContainerElement.convertCanvas(this.root, 2);
    this.containerElement.appendChild(
      this.canvasContainerElement.containerElement
    );
    this.status = 3;
  }

  async convertToFontGenerate() {
    //TODO rank check
    const username = window.localStorage.getItem("username");
    const response = await axios.post(
      `${SERVER_URL}/api/leaderboard/get_point`,
      JSON.stringify({ username }),
      { headers: { "Content-Type": "application/json" } }
    );
    const point = response.data.point;
    console.log("point: ", point);
    if (point < 3000) {
      Swal.fire({
        icon: "error",
        title: "폰트생성 권한이 없습니다!",
        text: "Gold 이상 폰트를 생성할 수 있습니다!",
        allowOutsideClick: false,
        heightAuto: false,
      });
      return;
    }

    if (this.status == 2) {
      this.removeMyPage();
      this.canvasContainerElement = new CanvasContainer();
      this.canvasContainerElement.id = "canvas-container";
      this.canvasContainerElement.setDomNode(this.root);
    } else {
      this.removeCanvas();
    }
    this.canvasContainerElement.convertCanvas(this.root, 3);
    this.containerElement.appendChild(
      this.canvasContainerElement.containerElement
    );
    this.status = 4;
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
