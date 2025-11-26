import { openAside } from "../components/asideToggle.js";

export const cardEvents = (fontData) => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("copy-btn")) {
      let idx = e.target.dataset.idx;
      navigator.clipboard.writeText(
        fontData[idx].css_usage.header + "\n" + fontData[idx].css_usage.body
      );
      alert("CSS Copied!");
    }

    if (e.target.classList.contains("import-btn")) {
      let idx = e.target.dataset.idx;
      navigator.clipboard.writeText(fontData[idx].import_code);
      alert("Import Copied!");
    }
    if (e.target.classList.contains("details-btn")) {
      let idx = e.target.dataset.idx;
      openAside()
    }
  });
};
