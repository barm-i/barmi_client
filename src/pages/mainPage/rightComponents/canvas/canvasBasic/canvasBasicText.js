export class CanvasBasicText {
  text;
  containerElement;

  canvasTextElement;
  ctxElement;

  constructor() {
    this.canvasElement = document.createElement("canvas");
  }

  setDomNode(text) {
    this.containerElement = document.createElement("div");
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = 800;
    this.canvasElement.height = 50;
    this.canvasElement.className = "canvas-basic-text";

    this.ctxElement = this.canvasElement.getContext("2d");
    this.ctxElement.font = "30px Share";
    this.ctxElement.fillStyle = "#fff";
    this.ctxElement.fillRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    this.drawGrid();
    this.ctxElement.fillStyle = "black";
    const str = text?.toString();
    for (let i = 0; i < str.length; i++) {
      this.ctxElement.fillText(str[i], i * 50 + 13, 35);
    }
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
}
