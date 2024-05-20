import { MenuBar } from "./menuBar.js";
import { LeaderBoard } from "./leaderBoard.js";

export class LeftContainer {
  status = true;
  containerElement;
  logoElement;
  exceptLogoElement;
  menuElement;
  leaderBoardElement;
  leaderBoardComponent;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(root) {
    this.root = root;
    this.containerElement = document.createElement("div");
    this.containerElement.className = "left-side-wrapper";

    this.logoElement = document.createElement("div");
    this.exceptLogoElement = document.createElement("div");
    this.menuElement = document.createElement("div");
    this.menuElement.id = "menuWrapper";

    this.logoElement.classList.add("title-class", "logo");
    this.exceptLogoElement.classList.add("except-logo");
    this.menuElement.classList.add(
      "title-class",
      "component-class",
      "menu-bar"
    );

    this.logoElement.innerText = "barmi";

    this.exceptLogoElement.appendChild(this.logoElement);
    // menu bar 컴포넌트 생성
    const menus = new MenuBar();
    menus.render(root, this.exceptLogoElement);
    // leader board 컴포넌트 생성
    this.leaderBoardComponent = new LeaderBoard();
    this.leaderBoardComponent.render(this.exceptLogoElement);

    this.containerElement.appendChild(this.exceptLogoElement);
  }
  render() {
    // this.setDomNode();
    // document.getElementById("left-page").appendChild(this.containerElement);
  }
}
