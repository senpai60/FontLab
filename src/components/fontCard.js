import { imageData } from "../../data/imageData.js";

let cardWrapper = document.querySelector(".wrapper");
const headStyle = document.getElementById("head-style");

export const fontCard = (fontData) => {
  let innerText = [];

  fontData.forEach((elem, idx) => {
    innerText.push(elem.import_code);
    let fontCardDiv = document.createElement("div");
    fontCardDiv.classList.add("font-card");
    const alpha = .7
    fontCardDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,${alpha}),rgba(0,0,0,${alpha}),rgba(0,0,0,${alpha})),url(${imageData[idx]})`
    fontCardDiv.innerHTML = `
  <div class="card-top">
    <span class="category">${elem.category}</span>
    <span class="pair-name">${elem.pair_name}</span>
  </div>

  <div class="preview">
    <h1 style="${elem.css_usage.header}">
      ${elem.header_font}
    </h1>
    <p style="${elem.css_usage.body}">
      ${elem.body_font} — Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quaerat, molestias? Dolores ipsa saepe repellat?
    </p>
  </div>

  <div class="card-bottom">
    <button class="copy-btn" data-idx="${idx}">
      Copy CSS
    </button>
    <button class="import-btn" data-idx="${idx}">
      Copy Import
    </button>
    <button class="details-btn" data-idx="${idx}">
      Details
    </button>
  </div>
`;

    cardWrapper.appendChild(fontCardDiv);
  });
  const importCodes = innerText.join("\n");
  headStyle.innerText = importCodes;

};



