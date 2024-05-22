import axios from "axios";
import { SERVER_URL } from "../../../main.js";
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
      //const response = await axios.get(`${SERVER_URL}/api/leaderboard/rows`);
      const users = response.data.rows;
      this.updateRankList(users);
    } catch (error) {
      console.error("Error fetching leaderboard rows:", error);
    }
  }

  async updateRankList(users) {
    for (let user of users) {
      const { username, rank } = user;

      const row = document.createElement("div");
      row.className = "rank-row";

      // Create a div for the rank and set its text content to the index + 1
      const rankDiv = document.createElement("div");
      rankDiv.className = "rank";
      rankDiv.textContent = rank;

      // Create a div for the username and set its text content to the username
      const usernameDiv = document.createElement("div");
      usernameDiv.className = "username";
      usernameDiv.textContent = username;

      // Append the divs to the row
      row.appendChild(rankDiv);
      row.appendChild(usernameDiv);

      // Append the row to rankListContainer
      this.rankTable.appendChild(row);
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
    console.log("render called");
    this.fetchAndUpdateLeaderboard();

    this.root.appendChild(this.containerElement);
  }
}
