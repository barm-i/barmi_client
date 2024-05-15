import { MenuBar } from "./menuBar.js";

export class LeftContainer {
  status = true;
  containerElement;
  logoElement;
  exceptLogoElement;
  menuElement;
  leaderBoardElement;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
  }

  setDomNode(root) {
    this.root = root;
    this.containerElement = document.createElement("div");
    this.containerElement.className = "left-side-wrapper";

    this.logoElement = document.createElement("p");
    this.exceptLogoElement = document.createElement("div");
    this.menuElement = document.createElement("div");
    this.menuElement.id = "menuWrapper";
    this.leaderBoardElement = document.createElement("p");

    this.logoElement.classList.add("title-class", "logo");
    this.exceptLogoElement.classList.add("except-logo");
    this.menuElement.classList.add(
      "title-class",
      "component-class",
      "menu-bar"
    );
    this.leaderBoardElement.classList.add(
      "title-class",
      "component-class",
      "leaderboard"
    );

    this.logoElement.innerText = "바르미";
    this.leaderBoardElement.innerText = "leaderboard";

    const menus = new MenuBar();
    menus.setDomNode(root);
    this.menuElement.appendChild(menus.containerElement);

    this.exceptLogoElement.appendChild(this.menuElement);
    this.exceptLogoElement.appendChild(this.leaderBoardElement);
    this.containerElement.appendChild(this.logoElement);
    this.containerElement.appendChild(this.exceptLogoElement);
  }
  render() {
    // this.setDomNode();
    // document.getElementById("left-page").appendChild(this.containerElement);
  }
}
