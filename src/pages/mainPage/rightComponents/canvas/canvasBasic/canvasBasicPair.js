import { CanvasBasicText } from "./canvasBasicText.js";

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
    this.canvasElement = document.createElement("canvas");
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

    this.canvasWrapper.append(this.canvasElement);
    //this.canvasWrapper.append(this.gridElement);
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
    this.containerElement.removeChild(this.canvasWrapper);
    this.canvasTextElement.setDomNode(this.text);
    this.initializeCanvas(this.text);
    this.containerElement.appendChild(this.canvasTextElement.canvasElement);
    this.containerElement.appendChild(this.canvasWrapper);
  }
  async fetchData() {
    const content = await fetch("../../../../../public/contents/content.txt");
    const data = await content.text();
    const current_line = parseInt(window.localStorage.getItem("basicPos")) || 0;

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
    window.localStorage.setItem("basicPos", current_line + 1);
  }
  convertToImage() {
    // const imageData = this.canvasElement.toDataURL("image/png");
    // const link = document.createElement("a");
    // link.href = imageData;
    // link.download = "canvas_image.png";
    // link.click();
    this.showFeedBack(10, 10, "피드백을 남겨주세요");
  }

  showFeedBack(x, y, msg) {
    // 느낌표 그리기
    this.ctxElement.fillStyle = "#FF0000"; // 빨간색
    this.ctxElement.beginPath();
    this.ctxElement.arc(x, y, 5, 0, 2 * Math.PI);
    this.ctxElement.fill();

    // 마우스 이벤트 감지
    this.canvasElement.addEventListener("mousemove", (e) => {
      const mouseX = e.offsetX;
      const mouseY = e.offsetY;

      // 만약 마우스가 느낌표 위에 있다면 툴팁을 표시
      if (Math.abs(mouseX - x) < 10 && Math.abs(mouseY - y) < 10) {
        this.showTooltip(x, y, msg);
      } else {
        this.hideTooltip();
      }
    });
  }

  showTooltip(x, y, msg) {
    // 툴팁 텍스트 스타일 및 위치 설정
    this.ctxElement.font = "12px Arial";
    this.ctxElement.fillStyle = "black";
    this.ctxElement.fillText(msg, x + 5, y - 5);
  }

  hideTooltip() {
    // 툴팁을 지우는 함수
    this.ctxElement.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    // 기존 그림 다시 그리기
    // this.redraw();
  }
}
