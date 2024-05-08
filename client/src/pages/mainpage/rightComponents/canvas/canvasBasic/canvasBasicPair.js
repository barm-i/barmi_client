import { CanvasBasicText } from "./canvasBasicText";

export class CanvasBasicPair {
  text;
  containerElement;

  canvasTextElement;
  canvasElement;
  ctxElement;

  constructor() {
    this.canvasElement = document.createElement("canvas");
  }

  setDomNode() {
    this.containerElement = document.createElement("div");
    this.canvasTextElement = new CanvasBasicText();
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = 800;
    this.canvasElement.height = 50;
    this.canvasElement.className = "canvas-basic";

    this.ctxElement = this.canvasElement.getContext("2d");
    this.ctxElement.fillStyle = "#fff";
    this.ctxElement.fillRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    this.canvasElement.addEventListener("mousedown", (e) => {
      this.isDrawing = true;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    });
    this.canvasElement.addEventListener("mousemove", (e) => {
      if (!this.isDrawing) return;
      this.ctxElement.beginPath();
      this.ctxElement.moveTo(this.lastX, this.lastY);
      this.ctxElement.lineTo(e.offsetX, e.offsetY);
      this.ctxElement.stroke();
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    });
    this.canvasElement.addEventListener(
      "mouseup",
      () => (this.isDrawing = false)
    );
    this.canvasElement.addEventListener(
      "mouseout",
      () => (this.isDrawing = false)
    );

    this.canvasTextElement.setDomNode("동해물과 백두산이 마르고");
    this.containerElement.append(this.canvasTextElement.containerElement);
    this.containerElement.append(this.canvasElement);
  }
  drawGrid() {
    const gridSize = 50; // 격자 크기
    const gridColor = "black"; // 격자 색상
    this.ctxElement.beginPath();
    for (let x = 0; x <= this.canvasElement.width; x += gridSize) {
      this.ctxElement.moveTo(x, 0);
      this.ctxElement.lineTo(x, this.canvasElement.height);
    }
    for (let y = 0; y <= this.canvasElement.height; y += gridSize) {
      this.ctxElement.moveTo(0, y);
      this.ctxElement.lineTo(this.canvasElement.width, y);
    }
    this.ctxElement.strokeStyle = gridColor;
    this.ctxElement.stroke();
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
  converToImage() {
    const imageData = this.canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "canvas_image.png";
    link.click();
  }
}
