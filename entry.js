import { FormComponent } from "./src/pages/entryPage/entryForm.js";

const fonts = [
  new FontFace("Share", `url(Fonts/Share.ttf)`),
  new FontFace("Share2", `url(Fonts/Share2.ttf)`),
];
fonts.forEach((font) => {
  font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
  });
});

const formComp = new FormComponent();
formComp.render();
