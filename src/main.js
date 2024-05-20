// import { socket } from "./socket.js";
import { EntirePage } from "./pages/entirePage.js";

window.localStorage.setItem("basicPos", 0);
window.localStorage.setItem("practicePos", 0);
window.localStorage.setItem("font", "Share2");

const fontName = window.localStorage.getItem("font");

const fonts = [
  new FontFace("Share", `url(Fonts/Share.ttf)`),
  new FontFace("Share2", `url(Fonts/Share2.ttf)`),
];

const fontPromises = fonts.map((font) =>
  font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
  })
);

Promise.all(fontPromises).then(() => {
  const entirePage = new EntirePage();
  entirePage.render();
});
