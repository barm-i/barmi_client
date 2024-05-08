export class CanvasPracticePair {
  text;
  containerElement;

  canvasElement;
  ctxElement;

  constructor() {
    this.canvasElement = document.createElement("canvas");
  }

  setDomNode() {
    this.containerElement = document.createElement("div");
    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = 800;
    this.canvasElement.height = 100;
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

    this.containerElement.append(this.canvasElement);
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
    this.ctxElement.fillRect(
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
