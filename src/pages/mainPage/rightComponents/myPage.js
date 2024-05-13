export class MyPage {
  containerElement;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode() {
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add(
      "component-class",
      "mypage",
      "mypage-wrapper"
    );

    this.containerElement.textContent = "My Page";
  }

  render() {
    this.setDomNode();
  }
}
