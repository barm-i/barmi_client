import { CanvasBasicText } from "./canvasBasicText";

export class CanvasBasicPair {
  text;
  containerElement;

  canvasTextElement;
  canvasElement;
  ctxElement;
  gridElement;
  gridCtxElement;

  prevX;
  prevY;
  currX;
  currY;
  flag;
  dot_flag;

  constructor() {
    this.canvasElement = document.createElement("canvas");
  }

  setDomNode() {
    (this.prevX = 0),
      (this.prevY = 0),
      (this.currX = 0),
      (this.currY = 0),
      (this.flag = false),
      (this.dot_flag = false);

    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("canvas-basic-pair-wrapper");

    this.canvasTextElement = new CanvasBasicText();

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
    this.canvasElement.addEventListener("mousedown", (e) => {
      this.findxy("down", e);
    });

    this.canvasElement.addEventListener("mousemove", (e) => {
      this.findxy("move", e);
    });

    this.canvasElement.addEventListener("mouseup", (e) => {
      this.findxy("up", e);
    });

    this.canvasElement.addEventListener("mouseout", (e) => {
      this.findxy("out", e);
    });

    this.canvasTextElement.setDomNode("동해물과 백두산이 마르고");
    this.drawGrid();

    this.canvasWrapper.append(this.canvasElement);
    this.canvasWrapper.append(this.gridElement);
    this.containerElement.append(this.canvasTextElement.canvasElement);
    this.containerElement.append(this.canvasWrapper);
  }
  render() {
    this.setDomNode();
  }
  draw() {
    this.ctxElement.beginPath();
    this.ctxElement.moveTo(this.prevX, this.prevY);
    this.ctxElement.lineTo(this.currX, this.currY);
    this.ctxElement.strokeStyle = "black";
    this.ctxElement.lineWidth = 2;
    this.ctxElement.stroke();
    this.ctxElement.closePath();
  }
  findxy(res, e) {
    if (res == "down") {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = e.clientX - this.canvasElement.offsetLeft;
      this.currY = e.clientY - this.canvasElement.offsetTop;

      this.flag = true;
      this.dot_flag = true;
      if (this.dot_flag) {
        this.ctxElement.beginPath();
        this.ctxElement.fillStyle = "black";
        this.ctxElement.fillRect(this.currX, this.currY, 2, 2);
        this.ctxElement.closePath();
        this.dot_flag = false;
      }
    }
    if (res == "up" || res == "out") {
      this.flag = false;
    }
    if (res == "move") {
      if (this.flag) {
        this.prevX = this.currX;
        this.prevY = this.currY;
        this.currX = e.clientX - this.canvasElement.offsetLeft;
        this.currY = e.clientY - this.canvasElement.offsetTop;
        this.draw();
      }
    }
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
