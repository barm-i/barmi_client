export class LeaderBoard {
  containerElement;
  titleElement;
  rankListContainer;
  rankTable;
  root;

  constructor() {
    this.containerElement = document.createElement("div");
    this.containerElement.id = "leaderboard";
    this.titleElement = document.createElement("div");
  }

  updateRankList(users) {
    users.forEach((username, index) => {
      console.log("asdfasd");
      // Create a div for the row
      const row = document.createElement("div");
      row.className = "rank-row";

      // Create a div for the rank and set its text content to the index + 1
      const rankDiv = document.createElement("div");
      rankDiv.className = "rank";
      rankDiv.textContent = index + 1;

      // Create a div for the username and set its text content to the username
      const usernameDiv = document.createElement("div");
      usernameDiv.className = "username";
      usernameDiv.textContent = username;

      // Append the divs to the row
      row.appendChild(rankDiv);
      row.appendChild(usernameDiv);

      // Append the row to rankListContainer
      this.rankTable.appendChild(row);
    });
  }

  setDomNode(root) {
    this.root = root;

    this.titleElement.classList.add(
      "title-class",
      "component-class",
      "leaderboard-title"
    );
    this.titleElement.innerText = "leaderboard";

    this.rankListContainer = document.createElement("div");
    this.rankListContainer.classList.add("rank-list-container");

    this.rankTable = document.createElement("div");
    this.rankTable.classList.add("rank-table");

    this.rankListContainer.appendChild(this.rankTable);

    // append children to container
    this.containerElement.appendChild(this.titleElement);
    this.containerElement.appendChild(this.rankListContainer);
  }
  render(root) {
    this.setDomNode(root);
    const mockUSers = [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
      "user10",
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "`user7",
      "user8",
      "user9",
      "user10",
    ];
    this.updateRankList(mockUSers);
    this.root.appendChild(this.containerElement);
  }
}
