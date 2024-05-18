//import { socket } from "./socket.js";
import { EntirePage } from "./pages/entirePage.js";

window.localStorage.setItem("basicPos", 0);
window.localStorage.setItem("practicePos", 0);
window.localStorage.setItem("font", "share");

const fontName = window.localStorage.getItem("font");
document.fonts.load("30px " + fontName, "asdf");

const font = new FontFace(fontName, `url(Fonts/${fontName}.ttf)`);

font.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
  console.log("loaded");
  const entirePage = new EntirePage();
  entirePage.render();
});
