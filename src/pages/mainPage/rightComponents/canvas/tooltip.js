class Tooltip {
  x;
  y;
  msg;

  constructor(x, y, msg) {
    this.tooltip = document.createElement("div");
    this.x = x;
    this.y = y;
    this.msg = msg;
    this.tooltip.className = "tooltip";
  }

  // Tooltip 내용 업데이트
  updateContent(content) {
    this.tooltip.textContent = content;
  }

  // Tooltip 위치 설정
  setPosition(x, y) {
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";
  }

  // Tooltip 표시/숨기기
  show() {
    this.tooltip.style.display = "block";
  }

  hide() {
    this.tooltip.style.display = "none";
  }
}
