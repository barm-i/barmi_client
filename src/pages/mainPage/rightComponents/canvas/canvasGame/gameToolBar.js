export class GameToolBar {
  containerElement;
  pencilBtnElement;
  eraserBtnElement;
  clearBtnElement;
  feedBackBtnElement;
  timerElement;

  // containers
  paintingToolContainer;

  parent;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(parent, root) {
    this.parent = parent;
    this.root = root;
    // container 생성
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("tool-bar", "component-class");

    this.paintingToolContainer = document.createElement("div");
    this.paintingToolContainer.classList.add("painting-tool-container");

    // 하위 요소 생성
    this.pencilBtnElement = document.createElement("button");
    this.eraserBtnElement = document.createElement("button");
    this.clearBtnElement = document.createElement("button");
    this.feedBackBtnElement = document.createElement("button");

    this.pencilBtnElement.id = "brush-btn";
    this.pencilBtnElement.className = "tool-btn";

    this.eraserBtnElement.id = "eraser-btn";
    this.eraserBtnElement.className = "tool-btn";

    this.clearBtnElement.id = "clear-btn";
    this.clearBtnElement.className = "tool-btn";

    // 지우개, 펜, 지우기 버튼을 paintingToolContainer에 추가
    this.paintingToolContainer.append(
      this.pencilBtnElement,
      this.eraserBtnElement,
      this.clearBtnElement
    );

    this.feedBackBtnElement.id = "send-btn";
    this.feedBackBtnElement.className = "tool-btn";
    this.feedBackBtnElement.textContent = "";

    this.pencilBtnElement.addEventListener("click", () => {
      this.parent.convertToBrush();
    });
    this.eraserBtnElement.addEventListener("click", () => {
      this.parent.convertToEraser();
    });
    this.clearBtnElement.addEventListener("click", () => {
      this.parent.clearCanvas();
    });
    this.feedBackBtnElement.addEventListener("click", () => {
      this.parent.convertToImage();
    });

    // 타이머 요소 생성 및 초기화
    this.timerElement = document.createElement("div");
    this.timerElement.id = "timer";
    this.timerElement.className = "timer";
    this.timerElement.textContent = "01:00"; // 초기 타이머 시간

    this.containerElement.append(
      this.paintingToolContainer,
      this.feedBackBtnElement,
      this.timerElement
    );

    this.startTimer(60); // 1분 타이머 시작
  }

  startTimer(duration) {
    let timer = duration,
      minutes,
      seconds;
    const interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.timerElement.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(interval);
        this.onTimerEnd();
      }
    }, 1000);
  }

  onTimerEnd() {
    //alert("Time's up!");
    // 여기에서 타이머가 종료되었을 때의 추가 동작을 정의할 수 있습니다.
  }

  render() {
    this.setDomNode();
    document
      .getElementById("canvas-wrapper")
      .appendChild(this.containerElement);
  }
}
