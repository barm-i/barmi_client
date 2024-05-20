import { CanvasBasicPair } from "./canvasBasicPair.js";

export class CanvasBasic {
  containerElement;
  canvasElements;
  strings;
  root;
  constructor() {
    this.containerElement = document.createElement("div");
    this.strings = [];
  }

  async setDomNode(root) {
    this.root = root;
    this.strings = [];
    this.containerElement = document.createElement("div");
    const canvasElement1 = new CanvasBasicPair();
    const canvasElement2 = new CanvasBasicPair();
    const canvasElement3 = new CanvasBasicPair();
    const canvasElement4 = new CanvasBasicPair();

    await this.fetchData();

    canvasElement1.setDomNode(this.strings[0]?.toString());
    canvasElement2.setDomNode(this.strings[1]?.toString());
    canvasElement3.setDomNode(this.strings[2]?.toString());
    canvasElement4.setDomNode(this.strings[3]?.toString());
    this.containerElement.classList.add("canvas-basic-wrapper");

    this.canvasElements = [
      canvasElement1,
      canvasElement2,
      canvasElement3,
      canvasElement4,
    ];
    for (const element of this.canvasElements) {
      this.containerElement.append(element.containerElement);
    }
  }
  async fetchData() {
    const content = await fetch("/contents/content.txt");
    const data = await content.text();
    var current_line = parseInt(window.localStorage.getItem("basicPos"));

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

    for (let i = current_line; i < current_line + 4 && i < chunks.length; i++) {
      this.strings.push(chunks[i]);
    }
  }
  nextContent() {
    var current_line = parseInt(window.localStorage.getItem("basicPos")) + 4;
    console.log(current_line);
    for (const element of this.canvasElements) {
      element.nextContent(current_line);
      current_line += 1;
    }
    window.localStorage.setItem(
      "basicPos",
      parseInt(window.localStorage.getItem("basicPos")) + 4
    );
  }
  render() {
    this.setDomNode();
    document
      .getElementById("right-container")
      .appendChild(this.containerElement);
  }
}
