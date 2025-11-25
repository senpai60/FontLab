import { asideToggle } from "./src/components/asideToggle.js";
import { fontData } from "./data/fontData.js";

asideToggle();

let cardWrapper = document.querySelector('.wrapper');

fontData.forEach((elem) => {
  let fontCardDiv = document.createElement('div');
  fontCardDiv.classList.add('font-card');

  fontCardDiv.innerHTML = `<h1>Heading</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              ducimus voluptatibus omnis ipsum quaerat quibusdam nam vitae,
              dolorem possimus totam debitis magni mollitia quos atque deserunt
              assumenda facere, qui quas.
            </p>`;

  cardWrapper.appendChild(fontCardDiv);
});