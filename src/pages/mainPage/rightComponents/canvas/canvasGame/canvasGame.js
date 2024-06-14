import { CanvasGamePair } from "./canvasGamePair.js";

export class CanvasGame {
  containerElement;
  canvasElements;
  strings;
  root;
  constructor() {
    this.containerElement = document.createElement("div");
    this.strings = [];
  }

  async setDomNode(root) {
    const user = window.localStorage.getItem("username");
    window.localStorage.setItem("username", user);
    this.root = root;
    this.strings = [];
    this.containerElement = document.createElement("div");
    const canvasElement1 = new CanvasGamePair();
    const canvasElement2 = new CanvasGamePair();
    const canvasElement3 = new CanvasGamePair();
    const canvasElement4 = new CanvasGamePair();

    await this.fetchData();

    canvasElement1.setDomNode(this.strings[0]?.toString());
    canvasElement2.setDomNode(this.strings[1]?.toString());
    canvasElement3.setDomNode(this.strings[2]?.toString());
    canvasElement4.setDomNode(this.strings[3]?.toString());
    this.containerElement.classList.add("canvas-game-wrapper");

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
    var current_line = parseInt(window.localStorage.getItem("gamePos"));

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

    window.localStorage.setItem(
      "gamePos",
      parseInt(window.localStorage.getItem("gamePos")) + 4
    );
  }
}
