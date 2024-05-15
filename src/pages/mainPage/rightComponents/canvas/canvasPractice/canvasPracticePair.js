import { CanvasPracticeText } from "./canvasPracticeText.js";

export class CanvasPracticePair {
  text;
  containerElement;

  canvasTextElement;
  canvasElement;
  ctxElement;

  isDrawing;

  constructor() {
    this.canvasElement = document.createElement("canvas");
  }

  setDomNode(text) {
    this.isDrawing = false;
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("canvas-practice-pair-wrapper");

    this.canvasTextElement = new CanvasPracticeText();
    this.initializeCanvas(text);
    this.containerElement.append(this.canvasTextElement.canvasElement);
    this.containerElement.append(this.canvasElement);
  }

  initializeCanvas(text) {
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = 800;
    this.canvasElement.height = 50;
    this.canvasElement.className = "canvas-practice";

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
  }
  render() {
    this.setDomNode();
  }
  convertToBrush() {
    this.ctxElement.strokeStyle = "#000";
    this.ctxElement.lineWidth = 5;
    this.ctxElement.lineCap = "round";
    this.canvasElement.style.cursor = "auto";
  }
  convertToEraser() {
    this.ctxElement.fillStyle = "#fff";
    this.ctxElement.lineWidth = 10;
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
  async nextContent() {
    await this.fetchData();
    this.containerElement.removeChild(this.canvasTextElement.canvasElement);
    this.containerElement.removeChild(this.canvasElement);
    this.canvasTextElement.setDomNode(this.text);
    this.initializeCanvas(this.text);
    this.containerElement.appendChild(this.canvasTextElement.canvasElement);
    this.containerElement.appendChild(this.canvasElement);
  }
  async fetchData() {
    const content = await fetch("/contents/content.txt");
    const data = await content.text();
    const current_line =
      parseInt(window.localStorage.getItem("practicePos")) || 0;

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
    // 마지막 남은 부분 추가
    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }
    this.text = chunks[current_line]?.toString();
    console.log(this.text);
    window.localStorage.setItem("practicePos", current_line + 1);
  }
  convertToImage() {
    const imageData = this.canvasElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "canvas_image.png";
    link.click();
  }
}
