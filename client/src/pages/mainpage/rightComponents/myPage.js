export class MyPage {
  containerElement;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode() {
    this.containerElement = document.createElement("div");
    this.containerElement.classList.add("right-side-wrapper", "title-class");
    this.containerElement.innerText = "MyPage";
  }

  render() {
    this.setDomNode();
  }
}
