import { CanvasBasicText } from "./canvasBasicText.js";

const SERVER_URL = "https://barmi-server.onrender.com";

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
    this.ctxElement.lineWidth = 1;
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

  async convertToImage() {
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
    const textImageData = canvasWithoutGrid.toDataURL("image/png");
    const textImageLink = document.createElement("a");
    textImageLink.href = textImageData;
    textImageLink.download = "withoutGrid.png";
    textImageLink.click();

    const canvasImageData = this.canvasElement.toDataURL("image/png");
    const canvasImageLink = document.createElement("a");
    canvasImageLink.href = canvasImageData;
    canvasImageLink.download = "UserCanvas.png";
    canvasImageLink.click();

    this.removeFeedback();
    const feedback = [
      [10, 10, "feedback"],
      [50, 10, "feedback2"],
    ];
    this.showFeedback(feedback);
  }

  showFeedback(feedbackData) {
    feedbackData.forEach((feedback) => {
      const x = feedback[0];
      const y = feedback[1];
      const text = feedback[2];
      const image = document.createElement("img");
      image.src = "/images/!.png";
      image.position = "absolute";
      image.width = 20;
      image.height = 20;
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.position = "absolute";
      image.style.zIndex = 5;
      image.style.backgroundColor = "transparent";

      const tooltip = document.createElement("div");
      tooltip.classList.add("tool-tip");
      tooltip.style.position = "absolute";
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y - 30}px`;
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
  removeFeedback() {
    this.tooltipElements.forEach((element) => {
      this.canvasWrapper.removeChild(element);
    });
    this.tooltipElements = [];
  }
}
