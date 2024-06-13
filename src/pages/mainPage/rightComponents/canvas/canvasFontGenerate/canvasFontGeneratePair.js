import { CanvasFontGenerateText } from "./canvasFontGenerateText.js";
import { sendLetterImageToServer } from "../api/sendImage.js";
const SERVER_URL = "https://barmi-server.onrender.com";
const SOCKET_URL = "wss://barmi-server.onrender.com";
// const SERVER_URL = "http://localhost:8080";
// const SOCKET_URL = "ws://localhost:8080";

export class CanvasFontGeneratePair {
  text;
  containerElement;

  canvasTextElement;
  canvasElement;
  ctxElement;
  gridElement;
  gridCtxElement;

  tooltipElements;

  isDrawing;

  constructor() {
    this.containerElement = document.createElement("div");
    this.tooltipElements = [];
  }

  setDomNode(text) {
    this.isDrawing = false;
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("canvas-basic-pair-wrapper");

    this.canvasTextElement = new CanvasFontGenerateText();
    this.initializeCanvas(text);
    this.containerElement.append(this.canvasTextElement.canvasElement);
    this.containerElement.append(this.canvasWrapper);
  }
  initializeCanvas(text) {
    this.text = text;
    this.canvasWrapper = document.createElement("div");
    this.canvasWrapper.className = "canvas-basic-grid-wrapper";

    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = 800;
    this.canvasElement.height = 50;
    this.canvasElement.className = "canvas-basic";

    this.gridElement = document.createElement("canvas");
    this.gridElement.className = "grid-basic";
    this.gridElement.width = 800;
    this.gridElement.height = 50;
    this.gridCtxElement = this.gridElement.getContext("2d");
    this.gridCtxElement.clearRect(
      0,
      0,
      this.gridElement.width,
      this.gridElement.height
    );

    this.ctxElement = this.canvasElement.getContext("2d");
    this.ctxElement.fillStyle = "#fff";
    this.ctxElement.fillRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    this.canvasElement.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
    this.canvasElement.addEventListener("pointerdown", (e) => {
      e.preventDefault();

      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    });
    this.canvasElement.addEventListener("pointermove", (e) => {
      e.preventDefault();
      if (!this.isDrawing) return;
      this.ctxElement.beginPath();
      this.ctxElement.moveTo(this.lastX, this.lastY);
      this.ctxElement.lineTo(e.offsetX, e.offsetY);
      this.ctxElement.stroke();
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    });
    this.canvasElement.addEventListener(
      "pointerup",
      () => (this.isDrawing = false)
    );
    this.canvasElement.addEventListener(
      "pointerout",
      () => (this.isDrawing = false)
    );

    this.canvasTextElement.setDomNode(text);
    this.drawGrid();
    this.convertToBrush();

    this.canvasWrapper.append(this.canvasElement);
    this.canvasWrapper.append(this.gridElement);
  }
  render() {
    this.setDomNode();
  }
  drawGrid() {
    const gridSize = 50; // 격자 크기
    const gridColor = "black"; // 격자 색상
    this.gridCtxElement.beginPath();
    for (let x = 0; x <= this.canvasElement.width; x += gridSize) {
      this.gridCtxElement.moveTo(x, 0);
      this.gridCtxElement.lineTo(x, this.canvasElement.height);
    }
    this.gridCtxElement.strokeStyle = gridColor;
    this.gridCtxElement.stroke();
  }
  convertToBrush() {
    this.ctxElement.strokeStyle = "#000";
    this.ctxElement.lineWidth = 1.2;
    this.ctxElement.lineCap = "round";
    this.canvasElement.style.cursor = "auto";
  }
  convertToEraser() {
    this.ctxElement.fillStyle = "#fff";
    this.ctxElement.lineWidth = 5;
    this.ctxElement.lineCap = "round";
    this.ctxElement.strokeStyle = "#fff";
  }
  clearCanvas() {
    this.ctxElement.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
  }

  async convertToImage(resolve, reject) {
    const canvasWithoutGrid = document.createElement("canvas");
    canvasWithoutGrid.width = 800;
    canvasWithoutGrid.height = 50;
    canvasWithoutGrid.className = "canvas-basic-text";

    const ctxWithoutGrid = canvasWithoutGrid.getContext("2d");
    const fontName = window.localStorage.getItem("font");

    ctxWithoutGrid.font = `30px ${fontName}`;
    ctxWithoutGrid.fillStyle = "#fff";
    ctxWithoutGrid.fillRect(
      0,
      0,
      canvasWithoutGrid.width,
      canvasWithoutGrid.height
    );

    ctxWithoutGrid.fillStyle = "black";
    const str = this.text?.toString();
    for (let i = 0; i < str.length; i++) {
      ctxWithoutGrid.fillText(str[i], i * 50 + 13, 35);
    }

    try {
    } catch (error) {}
  }
}
