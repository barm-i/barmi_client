import axios from "axios";

const SERVER_URL = "https://barmi-server.onrender.com";
const SOCKET_URL = "wss://barmi-server.onrender.com";
// const SERVER_URL = "http://localhost:8080";
// const SOCKET_URL = "ws://localhost:8080";

const ONE_MINUTE = 60000;

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

  async fetchAndUpdateLeaderboard() {
    try {
      const response = await axios.get(`${SERVER_URL}/api/leaderboard/rows`);
      const users = response.data.rows;
      await this.updateRankList(users);
    } catch (error) {
      console.error("Error fetching leaderboard rows:", error);
    }
  }

  async updateRankList(users) {
    let rank = 1;
    this.rankTable.innerHTML = "";
    for (let user of users) {
      const { username } = user;

      const row = document.createElement("div");
      row.className = "rank-row";

      // Create a div for the rank and set its text content to the index + 1
      const rankDiv = document.createElement("div");
      rankDiv.className = "rank";
      //rankDiv.textContent = rank;

      const rankImage = document.createElement("img");
      rankImage.className = "rank-image";
      const userPoint = user.point;
      if (userPoint >= 5000) {
        rankImage.src = "https://static.solved.ac/tier_small/15.svg";
      } else if (userPoint >= 4000) {
        rankImage.src = "https://static.solved.ac/tier_small/14.svg";
      } else if (userPoint >= 3000) {
        rankImage.src = "https://static.solved.ac/tier_small/13.svg";
      } else if (userPoint >= 1000) {
        rankImage.src = "https://static.solved.ac/tier_small/10.svg";
      } else if (userPoint >= 750) {
        rankImage.src = "https://static.solved.ac/tier_small/9.svg";
      } else if (userPoint >= 500) {
        rankImage.src = "https://static.solved.ac/tier_small/8.svg";
      } else if (userPoint >= 100) {
        rankImage.src = "https://static.solved.ac/tier_small/5.svg";
      } else if (userPoint >= 50) {
        rankImage.src = "https://static.solved.ac/tier_small/4.svg";
      } else if (userPoint >= 25) {
        rankImage.src = "https://static.solved.ac/tier_small/3.svg";
      } else {
        rankImage.src = "https://static.solved.ac/tier_small/0.svg";
      }
      rankDiv.appendChild(rankImage);

      // Create a div for the username and set its text content to the username
      const usernameDiv = document.createElement("div");
      usernameDiv.className = "username";
      usernameDiv.textContent = username;

      // Append the divs to the row
      row.appendChild(rankDiv);
      row.appendChild(usernameDiv);

      // Append the row to rankListContainer
      this.rankTable.appendChild(row);
      rank++;
    }
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
    // setInterval(() => {
    //   this.fetchAndUpdateLeaderboard();
    // }, ONE_MINUTE);
    //console.log("render called");
    this.fetchAndUpdateLeaderboard();

    this.root.appendChild(this.containerElement);
  }
}
