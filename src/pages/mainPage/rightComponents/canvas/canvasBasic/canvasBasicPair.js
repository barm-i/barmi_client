import { CanvasBasicText } from "./canvasBasicText.js";
import { sendLetterImageToServer } from "../api/sendImage.js";
// const SERVER_URL = "https://barmi-server.onrender.com";
// const SOCKET_URL = "wss://barmi-server.onrender.com";
const SERVER_URL = "http://localhost:8080";
const SOCKET_URL = "ws://localhost:8080";

export class CanvasBasicPair {
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

    this.canvasTextElement = new CanvasBasicText();
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
    this.removeFeedback();
    this.ctxElement.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
  }
  async prevContent(lineNumber) {
    this.removeFeedback();
    await this.fetchData(lineNumber);
    this.containerElement.removeChild(this.canvasTextElement.canvasElement);
    this.containerElement.removeChild(this.canvasWrapper);
    this.canvasTextElement.setDomNode(this.text);
    this.initializeCanvas(this.text);
    this.containerElement.appendChild(this.canvasTextElement.canvasElement);
    this.containerElement.appendChild(this.canvasWrapper);
  }
  async nextContent(lineNumber) {
    this.removeFeedback();
    await this.fetchData(lineNumber);
    this.containerElement.removeChild(this.canvasTextElement.canvasElement);
    this.containerElement.removeChild(this.canvasWrapper);
    this.canvasTextElement.setDomNode(this.text);
    this.initializeCanvas(this.text);
    this.containerElement.appendChild(this.canvasTextElement.canvasElement);
    this.containerElement.appendChild(this.canvasWrapper);
  }
  async fetchData(lineNumber) {
    const content = await fetch("/contents/content.txt");
    const data = await content.text();
    var current_line = lineNumber || 0;
    const chunks = [];
    let currentChunk = "";
    let charCount = 0;
    for (let i = 0; i < data.length; i++) {
      if (charCount === 0 && (data[i] === " " || data[i] === "\n")) {
        continue;
      }
      if (data[i] === "\n" || data[i] === "\r") {
        currentChunk += " ";
      } else {
        currentChunk += data[i];
      }
      charCount++;
      if (charCount === 16) {
        chunks.push(currentChunk);
        currentChunk = "";
        charCount = 0;
      }
    }
    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }
    this.text = chunks[current_line]?.toString();
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

    this.removeFeedback();

    try {
      const response = await sendLetterImageToServer(
        canvasWithoutGrid, //text canvas
        this.canvasElement, // user canvas
        this.text,
        "canvasBasic",
        `${SERVER_URL}/api/upload_image` // api path
      );

      console.log(response);
      this.showFeedback(response.feedbacks);
      resolve(response);
    } catch (error) {
      reject(new Error(error.message));
    }
  }

  showFeedback(feedbackData) {
    if (feedbackData) {
      feedbackData.forEach((feedback) => {
        const x = feedback.coordinates.x;
        const y = feedback.coordinates.y;
        const text = feedback.feedback;
        const image = document.createElement("img");
        image.src = "/images/!.png";
        image.position = "absolute";
        image.width = 20;
        image.height = 20;
        image.style.left = `${x - 15}px`;
        image.style.top = `${y - 15}px`;
        image.style.position = "absolute";
        image.style.zIndex = 50;
        image.style.backgroundColor = "transparent";

        const tooltip = document.createElement("div");
        tooltip.classList.add("tool-tip");
        tooltip.style.position = "absolute";
        tooltip.style.left = `${x - 15}px`;
        tooltip.style.top = `${y - 45}px`;
        tooltip.style.padding = "5px";
        tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        tooltip.style.color = "#fff";
        tooltip.style.borderRadius = "3px";
        tooltip.style.fontSize = "12px";
        tooltip.style.display = "none";
        tooltip.textContent = text;

        image.addEventListener("click", () => {
          tooltip.style.display =
            tooltip.style.display === "none" ? "block" : "none";
        });

        this.canvasWrapper.appendChild(image);
        this.canvasWrapper.appendChild(tooltip);
        this.tooltipElements.push(image);
        this.tooltipElements.push(tooltip);
      });
    }
  }

  removeFeedback() {
    this.tooltipElements.forEach((element) => {
      this.canvasWrapper.removeChild(element);
    });
    this.tooltipElements = [];
  }
}
