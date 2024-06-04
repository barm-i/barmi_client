import { EntirePage } from "./pages/entirePage.js";
import { ClientSocket } from "./socket.js";
import { io } from "socket.io-client";

// const SERVER_URL = "https://barmi-server.onrender.com";
// const SOCKET_URL = "wss://barmi-server.onrender.com";
const SERVER_URL = "http://localhost:8080";
const SOCKET_URL = "ws://localhost:8080";

window.localStorage.setItem("basicPos", 0);
window.localStorage.setItem("practicePos", 0);
window.localStorage.setItem("gamePos", 0);
window.localStorage.setItem("fontPos", 0);

const fonts = [
  new FontFace("Share", `url(Fonts/Share.ttf)`),
  new FontFace("Share2", `url(Fonts/Share2.ttf)`),
  new FontFace("Gulim", `url(Fonts/Gulim.ttf)`),
  new FontFace("GaramFlower", `url(Fonts/GaramFlower.ttf)`),
  new FontFace("Gomshinche", `url(Fonts/Gomshinche.ttf)`),
  new FontFace("Ttobagttobag", `url(Fonts/Ttobagttobag.ttf)`),
  new FontFace("Okbiche", `url(Fonts/Okbiche.ttf)`),
  new FontFace("Bareunjeongsin", `url(Fonts/Bareunjeongsin.ttf)`),
];
const fontPromises = fonts.map((font) =>
  font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
  })
);

Promise.all(fontPromises).then(() => {
  const socket = io(`${SOCKET_URL}`);
  const entirePage = new EntirePage(socket);
  let clientSocket = new ClientSocket(entirePage, socket);
  entirePage.render();
});
