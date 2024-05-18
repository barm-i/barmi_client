//import { socket } from "./socket.js";
import { EntirePage } from "./pages/entirePage.js";

window.localStorage.setItem("basicPos", 0);
window.localStorage.setItem("practicePos", 0);
window.localStorage.setItem("font", "Share");

const fontName = window.localStorage.getItem("font");
const font = new FontFace(fontName, `url(Fonts/${fontName}.ttf)`);

font.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
  console.log("loaded");

  const entirePage = new EntirePage();
  entirePage.render();
});
