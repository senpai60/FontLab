import { asideToggle } from "./src/components/asideToggle.js";
import { fontData } from "./data/fontData.js";
import { fontCard } from "./src/components/fontCard.js";
import { cardEvents } from "./src/utils/cardEvents.js";

const burgerBtn = document.getElementById("burger");

burgerBtn.addEventListener("click", asideToggle);

fontCard(fontData);

cardEvents(fontData);


/* -------------------------- */

// addPlayListBtn => click karga to form kulega;
// add to localStrage on the click;

const saveFont = (fontData) => {
  const saveFontBtn = document.querySelectorAll('.save-font');

  let savedList = [];
  
  saveFontBtn.forEach((elem, idx) => {
    elem.addEventListener('click', () => {
      const currentFontData = {
        fontData: fontData[idx],
        isSaved: true
      };
      savedList.push(currentFontData);
      localStorage.setItem('saved', savedList);
      const fontSavedItems = localStorage.getItem('saved');
      console.log(fontSavedItems);
    });
  });
  

}


saveFont(fontData);