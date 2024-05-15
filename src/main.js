//import { socket } from "./socket.js";
import { EntirePage } from "./pages/entirePage.js";

window.localStorage.setItem("basicPos", 0);
window.localStorage.setItem("practicePos", 0);
window.localStorage.setItem("font", "30px Share");
const entirePage = new EntirePage();
entirePage.render();
