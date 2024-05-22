import { FormComponent } from "./src/pages/entryPage/entryForm.js";

//export const SERVER_URL = "https://barmi-server.onrender.com";
export const SERVER_URL = "localhost:8080";

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
fonts.forEach((font) => {
  font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
  });
});
const formComp = new FormComponent();
console.log("entryForm");
formComp.render();
