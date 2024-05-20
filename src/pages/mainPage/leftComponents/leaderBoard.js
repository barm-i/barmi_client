export class LeaderBoard {
  containerElement;
  titleElement;
  rankListContainer;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
    this.containerElement.id = "leaderboard";
    this.titleElement = document.createElement("p");
  }

  setDomNode(root) {
    this.root = root;

    this.titleElement.classList.add(
      "title-class",
      "component-class",
      "leaderboardTitle"
    );
    this.titleElement.innerText = "leaderboard";

    this.rankListContainer = document.createElement("div");
    this.rankListContainer.classList.add("rankListContainer");

    // append children to container
    this.containerElement.appendChild(this.titleElement);
    this.containerElement.appendChild(this.rankListContainer);
  }
  render(root) {
    this.setDomNode(root);
    this.root.appendChild(this.containerElement);
  }
}
