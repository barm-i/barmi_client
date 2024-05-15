//import { socket } from "./socket.js";
import { EntirePage } from "/src/pages/entirePage.js";
// import { RightContainer } from "./pages/mainPage/rightComponents/rightContainer.js";

window.localStorage.setItem("basicPos", 0);

const entirePage = new EntirePage();
entirePage.render();
