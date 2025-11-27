const parentDiv = document.querySelector(".saved-wrapper");
export const renderSavedFontsCard = () => {
  const savedList = JSON.parse(localStorage.getItem("saved")) || [];

  savedList.forEach((elem) => {
    const elemData = elem.fontData;
    const cardElem = document.createElement("div");
    cardElem.classList.add("saved-font-card");

    const cardContent = `<div class="top">${elemData.category}</div>

            <div class="pair">${elemData.pair_name}</div>

            <div class="preview">
              <h1 style=${elemData.css_usage.header}>
                ${elemData.header_font}
              </h1>
              <p style=${elemData.css_usage.body}>
                ${elemData.body_font} — Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>

            <div class="actions">
              <button>Copy CSS</button>
              <button>Copy Import</button>
              <button>Remove</button>
            </div>`;
    cardElem.innerHTML = cardContent;
    parentDiv.appendChild(cardElem);
  });
};
